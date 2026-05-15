import type { Metadata } from "next";
import "./styles/reset.css";

export const metadata: Metadata = {
  title: "The Bread Box",
  description: "Welcome to The Bread Box!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
