import "./globals.css";

export const metadata = {
  title: "Kiss My Asphalt",
  description: "Kiss My Asfalt is a rideshare platform built on transparency, fairness, and empowerment. We give control back to drivers and riders, ensuring no hidden fees and honest pricing. Join the movement to redefine transportation—where people come first.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className="font-roboto">
        {children}
      </body>
    </html>
  );
}
