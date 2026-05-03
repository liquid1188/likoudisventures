import { isAdminAuthed } from '@/lib/auth';
import { isResendConfigured, getAudienceId } from '@/lib/resend';
import { AdminUnlockForm } from './AdminUnlockForm';
import { AdminComposer } from './AdminComposer';

export const metadata = {
  title: 'The Branch — Admin',
  robots: { index: false, follow: false },
};

export default async function AdminBranchPage() {
  const authed = await isAdminAuthed();

  if (!authed) {
    return <AdminUnlockForm />;
  }

  const resendConfigured = isResendConfigured() && !!getAudienceId();

  return <AdminComposer resendConfigured={resendConfigured} />;
}
