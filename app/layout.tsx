import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "완산고 투표 시스템",
  description: "Generated by Core",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
