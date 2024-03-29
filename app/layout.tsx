import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./ui/globals.css";
import Header from "./ui/header/header";
import Footer from "./ui/footer/footer";
import AuthProvider from "@/providers/AuthProvider";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"]});

export const metadata: Metadata = {
  title: "Ontrack Blog",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any"/>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>

      <body className={roboto.className}>
        <AuthProvider>
          <div className="min-h-[100vh]">
            <div className="max-w-[1536px] ml-auto mr-auto pl-20 pr-20">
              <Header />
                {children}
              <Footer />
            </div>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
