import "./globals.css";

import QueryProvider from "@/providers/QueryProvider";
import { AuthProvider } from "@/context/AuthContext";
import ToastProvider from "@/providers/ToastProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <AuthProvider>
            <ToastProvider />

            {children}
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
