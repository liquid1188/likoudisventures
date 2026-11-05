# Travel deals (Ithaca House)

The Deals section on `/divisions/ithaca-house` reads `src/content/deals.json`.

## Daily refresh

A Claude scheduled task runs each morning. It searches Expedia and Booking.com
for hotels on Kefalonia, Ithaka, and in Baltimore, compares the same hotel across
sites, and posts the best rates with the cheapest place to book. It also checks
round-trip fares from Baltimore/Washington to Athens and looks on the web for
current sales (airlines, ferries, Greek hotels). It rewrites `deals.json`,
builds the site, and commits. Vercel redeploys on the push.

Each hotel has an `offers` list, one per site. The card shows the cheapest offer
and how much it saves against the most expensive site or the strikeout price.

Rules the task follows:
- Guest rating 8.8 or higher. Prefer hotels that are cheaper on one site than another, or marked down; one or two top-rated value picks are fine.
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
