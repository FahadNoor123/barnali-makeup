import "./globals.css";

export const metadata = {
  title: "Glamour by Aria | Professional Makeup Artist",
  description:
    "Professional makeup artist specializing in bridal, party, editorial, and HD makeup. Book your appointment today for a flawless look.",
  keywords:
    "makeup artist, bridal makeup, party makeup, HD makeup, airbrush makeup, wedding makeup",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
