import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title:
    "Full Stack Developer React | Tworzenie stron internetowych i aplikacji – MKOZDev",
  description:
    "Full Stack Developer React tworzący nowoczesne strony internetowe i aplikacje webowe. Specjalizacja: Next.js, Tailwind CSS, SEO i szybkie strony dla firm.",
  keywords: [
    "full stack developer",
    "react developer",
    "tworzenie stron internetowych",
    "strony internetowe",
    "aplikacje webowe",
    "next.js developer",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-poppins">{children}</body>
    </html>
  );
}
