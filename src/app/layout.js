import "./globals.css";

export const metadata = {
  title: "Nextjs Weather App",
  description: "City current weather report in Celsius",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}