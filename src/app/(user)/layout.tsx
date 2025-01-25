/* eslint-disable @next/next/no-sync-scripts */
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <>
          <div>
            <h1>Inside user Page</h1>
            {children}
          </div>
        </>
        {/* <script src="/next-app/src/app/page.tsx"></script> */}
      </body>
    </html>
  );
}
