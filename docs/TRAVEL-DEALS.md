# Travel deals (Ithaca House)

The Deals section on `/divisions/ithaca-house` reads `src/content/deals.json`.

## Daily refresh

A Claude scheduled task runs each morning. It searches Expedia for marked-down
hotels on Kefalonia, Ithaka, and in Baltimore, plus round-trip fares from
Baltimore/Washington to Athens, rewrites `deals.json`, builds the site, and
commits to `main`. Vercel redeploys on the push.

Rules the task follows:
- Only hotels with a real strikeout price (marked down) and a guest rating of 8.0 or higher.
- Three to six hotels total, at least one per region when available.
- One or two flights, at most one stop.
- Strip tracking parameters from partner URLs (keep dates and room params only).
  Our own affiliate IDs are added at render time by `affiliateUrl()`.
- If a search fails, keep yesterday's entries for that region rather than emptying it.

## Earning commission

Outbound links go through `affiliateUrl()` in `src/content/affiliates.ts`.
Links work with no IDs set; they start earning once each partner ID is filled in.

| Partner | What | Sign up |
| --- | --- | --- |
| Booking.com | Hotels | Booking.com Affiliate Partner Programme, or Travelpayouts |
| Expedia | Hotels, flights, cars | Expedia Group Affiliate Program |
| GetYourGuide | Tours | GetYourGuide partner program, or Travelpayouts |
| Ferryhopper | Ferries | Ferryhopper affiliates (Awin) |
| DiscoverCars | Car rental | DiscoverCars affiliate program, or Travelpayouts |

Airbnb has no open affiliate program. Our own six listings stay at the top of the page.

All partner links carry `rel="sponsored"` and the page shows an affiliate disclosure.
