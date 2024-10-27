'use client';
import Sidebar from "./sidebar";

export default function dashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body
        className="flex flex-row">
            <Sidebar/>
          {children}
        </body>
      </html>
    );
  }