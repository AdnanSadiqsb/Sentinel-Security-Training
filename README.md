# Sentinel Security Training (Next.js static export)

## Environment variables
Create a `.env.local` file:

```
NEXT_PUBLIC_SNIPCART_API_KEY=YOUR_PUBLIC_KEY
SNIPCART_SECRET_API_KEY=YOUR_SECRET_KEY
```

`SNIPCART_SECRET_API_KEY` is not used client-side but is kept for reference.

## Install

```
npm install
```

## Build + static export

```
npm run build
npm run export
```

The static site will be generated in the `/out` directory.

## Hostinger upload (static hosting)
1. Run `npm run build` and `npm run export`.
2. Upload the contents of `/out` to your Hostinger public_html folder.
3. Ensure `.env.local` values are set before build so Snipcart keys are embedded.
4. In Snipcart dashboard, add the exported site URL for order validation.

## Notes
- No SSR, ISR, or API routes are used.
- Snipcart handles VAT and promo codes via its dashboard configuration.
