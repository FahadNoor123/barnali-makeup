import "./globals.css";

export const metadata = {
  title: "Emaan Beautics | Professional Beauty Studio",
  description:
    "Emaan Beautics offers bridal, party, skin, hair, and beauty services with clear pricing and personalized care.",
  keywords: [
    "beauty studio",
    "bridal makeup",
    "party makeup",
    "skin treatments",
    "hair styling",
    "mehndi",
  ],
    icons: {
    icon: "/favicons.ico", // or /favicon.png
  },

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
