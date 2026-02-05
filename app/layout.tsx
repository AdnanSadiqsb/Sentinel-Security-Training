import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Sentinel Security Training | UK Security Training",
  description:
    "Professional UK security training with clear outcomes, practical delivery, and calm, structured learning."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Sora:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.snipcart.com/themes/v3.4.0/default/snipcart.css"
        />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link rel="preconnect" href="https://app.snipcart.com" />
      </head>
      <body>
        <div className="fixed inset-0 -z-10 bg-grid bg-[length:120px_120px] opacity-20" />
        <div className="fixed inset-0 -z-10 bg-radar opacity-40" />
        <SiteHeader />
        <main className="mx-auto w-full max-w-6xl px-6 pb-16 pt-12">
          {children}
        </main>
        <SiteFooter />
        <div
          hidden
          id="snipcart"
          data-api-key={process.env.NEXT_PUBLIC_SNIPCART_API_KEY || ""}
        ></div>
        <script
          async
          src="https://cdn.snipcart.com/themes/v3.4.0/default/snipcart.js"
        ></script>
      </body>
    </html>
  );
}
