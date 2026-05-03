'use server';

import { getResendClient, getFromEmail, getAudienceId, isResendConfigured } from '@/lib/resend';
import { isAdminAuthed } from '@/lib/auth';

interface SendNewsletterArgs {
  subject: string;
  body: string;
}

interface SendResult {
  ok: boolean;
  message?: string;
  broadcastId?: string;
}

/**
 * Send a newsletter to all subscribers of "The Branch" audience.
 *
 * Uses Resend Broadcasts API. The HTML is generated server-side from the plain-text body
 * with Likoudis Ventures' visual styling.
 *
 * Auth: requires admin cookie. Returns 401 message if not authed.
 */
export async function sendNewsletter({ subject, body }: SendNewsletterArgs): Promise<SendResult> {
  // Require admin auth
  if (!(await isAdminAuthed())) {
    return { ok: false, message: 'Unauthorized.' };
  }

  if (!subject?.trim() || !body?.trim()) {
    return { ok: false, message: 'Subject and body are both required.' };
  }

  if (subject.length > 200) {
    return { ok: false, message: 'Subject is too long. Keep it under 200 characters.' };
  }

  const audienceId = getAudienceId();
  if (!isResendConfigured() || !audienceId) {
    return {
      ok: false,
      message: 'Resend is not fully configured. Set RESEND_API_KEY and RESEND_AUDIENCE_ID in your environment.',
    };
  }

  try {
    const resend = getResendClient();

    // Build HTML from the plain-text body
    const html = renderBranchHtml({ subject, body });

    // Resend's broadcast API: create then send
    const broadcast = await resend.broadcasts.create({
      audienceId,
      from: `The Branch <${getFromEmail()}>`,
      subject,
      html,
    });

    if (!broadcast.data?.id) {
      return { ok: false, message: 'Could not create broadcast. Please try again.' };
    }

    // Send immediately
    await resend.broadcasts.send(broadcast.data.id);

    return {
      ok: true,
      message: `Sent — broadcast ID ${broadcast.data.id}`,
      broadcastId: broadcast.data.id,
    };
  } catch (error) {
    console.error('[Newsletter Send] Resend error:', error);
    return {
      ok: false,
      message: error instanceof Error ? error.message : 'Could not send newsletter.',
    };
  }
}

/**
 * Render a plain-text newsletter body as branded HTML.
 *
 * Uses inline styles (table-based for Gmail compatibility) and the v4 design language:
 * cream background, navy text, ochre accents, serif typography.
 */
function renderBranchHtml({ subject, body }: { subject: string; body: string }): string {
  // Convert plain text to paragraphs
  const paragraphs = body
    .trim()
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  const paragraphHtml = paragraphs
    .map(
      (p) =>
        `<p style="margin: 0 0 1.4em 0; font-family: Georgia, 'Cormorant Garamond', serif; font-size: 18px; line-height: 1.6; color: #1A2638;">${escapeHtml(
          p
        )}</p>`
    )
    .join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${escapeHtml(subject)}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #F2EAD6; font-family: Georgia, serif;">
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #F2EAD6;">
    <tr>
      <td align="center" style="padding: 40px 20px;">

        <!-- Outer container -->
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width: 600px; background-color: #FAF6EC;">

          <!-- Top rule -->
          <tr>
            <td style="background-color: #081320; padding: 14px; text-align: center; color: #C9D7B8; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; font-family: Arial, sans-serif;">
              The Branch · Likoudis Ventures
            </td>
          </tr>

          <!-- Subject heading -->
          <tr>
            <td style="padding: 50px 50px 20px 50px;">
              <div style="font-family: Arial, sans-serif; font-size: 11px; letter-spacing: 3px; text-transform: uppercase; color: #A6822E; margin-bottom: 18px;">
                A Note From the House
              </div>
              <h1 style="margin: 0 0 30px 0; font-family: Georgia, 'Cormorant Garamond', serif; font-size: 36px; line-height: 1.15; font-weight: normal; color: #0E1B2C; letter-spacing: -0.01em;">
                ${escapeHtml(subject)}
              </h1>
              <div style="height: 1px; background-color: rgba(166, 130, 46, 0.3); margin-bottom: 30px;"></div>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding: 0 50px 40px 50px;">
              ${paragraphHtml}
            </td>
          </tr>

          <!-- Sign-off -->
          <tr>
            <td style="padding: 0 50px 40px 50px;">
              <div style="height: 1px; background-color: rgba(166, 130, 46, 0.3); margin-bottom: 24px;"></div>
              <p style="margin: 0; font-family: Georgia, serif; font-style: italic; font-size: 16px; color: #A6822E;">
                — The brothers, Baltimore
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #081320; padding: 30px 50px; color: rgba(250, 246, 236, 0.7); font-family: Georgia, serif; font-size: 12px; line-height: 1.5;">
              <div style="font-style: italic; margin-bottom: 8px;">
                © ${new Date().getFullYear()} Likoudis Legacy LLC, doing business as Likoudis Ventures.
              </div>
              <div style="font-style: italic; color: #C8A24A; margin-bottom: 16px;">
                ἐκ Κεφαλονιάς
              </div>
              <div style="font-family: Arial, sans-serif; font-size: 10px; letter-spacing: 1px; text-transform: uppercase;">
                <a href="{{{RESEND_UNSUBSCRIBE_URL}}}" style="color: #8FB8CE; text-decoration: none;">Unsubscribe from The Branch</a>
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
