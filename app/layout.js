import { Analytics } from "@vercel/analytics/react";
import "../styles/globals.css";

export const metadata = {
  title: "Chat with Ed-Fi Tech Doc",
  openGraph: {
    title: "Chat with Ed-Fi Tech Doc",
    description: "Demystifying technical documentation with AI",
  },
};

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Chat with the Ed-Fi Tech Doc</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📟</text></svg>"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
