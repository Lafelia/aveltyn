import { Alike as Font } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const font = Font({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Aveltyn",
  description: "Developed by Aftiyan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
