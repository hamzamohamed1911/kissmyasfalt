import "./globals.css";


export const metadata = {
  title: "kiss my asfalt",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-forte">
        {children}
      </body>
    </html>
  );
}
