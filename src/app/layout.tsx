import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/dashboard/Sidebar";
import Image from "next/image";
import { TabSwitcher } from "./(dashboard)/(event-list)/components/TabSwitcher";

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Event Management UI",
  description: "Meta description comes here...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} flex h-screen bg-lightGray text-darkGray antialiased`}
      >
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="flex items-center pb-6">
            <div className="img-wrapper relative">
              <Image
                src="/assets/images/test-user.png"
                className="rounded-full border-2 border-gray-D5D5D5"
                alt="Logo"
                width={32}
                height={32}
              />
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green rounded-full border border-white" />
            </div>
            <div className="flex flex-col px-2">
              <h1 className="text-body-1 text-black-161616">Test</h1>
              <a
                href="mailto:example@example.com"
                className="text-blue text-body-3"
              >
                example@example.com
              </a>
            </div>
          </div>
          <TabSwitcher />
          {children}
        </main>
      </body>
    </html>
  );
}
