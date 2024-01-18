import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/nav";
import WIP from "@/components/Wip";

export const metadata: Metadata = {
  title: "Rhys Josmin | Portfolio",
  description: "Showcase of Rhys' Best Work",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="noise" />
        <NavBar />
        {children}
        <WIP inProgress={false} />
      </body>
    </html>
  );
}
