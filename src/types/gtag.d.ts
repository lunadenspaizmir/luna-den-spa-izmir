// Global type definitions for the Google tag (gtag.js) and its data layer.
// The gtag script is loaded site-wide by <GoogleAdsConversions /> in the root
// layout, so `window.gtag` / `window.dataLayer` may be referenced anywhere on
// the client. Kept as a single source of truth to avoid `any`.
interface Window {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
}
