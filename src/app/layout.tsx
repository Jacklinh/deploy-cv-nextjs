import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Chọn các trọng lượng bạn cần
});
export const metadata: Metadata = {
  title: "Resume Le Van Linh",
  description: "Resume",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
