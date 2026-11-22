import type { Metadata, Viewport } from "next";
import "./globals.css";

const title = "Gainwright AI: AI built into the business you already run";
const summary =
  "We build AI into the systems you already run, set Claude up safely, and train your team. Start with the First Sketch, a free 30 minute call.";

export const metadata: Metadata = {
  metadataBase: new URL("https://gainwright.ai"),
  title,
  openGraph: { type: "website", url: "/", siteName: "Gainwright", locale: "en_GB", title, description: summary },
  twitter: { card: "summary_large_image", title, description: summary },
  description:
    "Gainwright builds AI into the systems a business already runs, so routine work does itself and people spend their time with customers. The First Sketch, a free 30 minute call. The Blueprint, a fixed-price audit of where the hours go. Then custom software and Claude set up safely across the business.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

// Applies a saved sheet/blueprint choice before first paint, so the page does not flash the other theme.
const themeScript = `try{var t=localStorage.getItem("gw-theme");if(t)document.documentElement.setAttribute("data-theme",t)}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@300..800&family=IBM+Plex+Mono:wght@400;500&display=swap"
        />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
