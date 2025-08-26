import React from "react";
import "./globals.css";
import ClientBody from "./ClientBody";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
