import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider"

const fontSans = Plus_Jakarta_Sans ({ 
  weight: ["300", "400", "500", "600", "700"], 
  subsets: ["latin"] ,
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "PatientAtEase",
  description: "PatientAtEase is a cutting-edge patient management app designed to reduce waiting times and improve efficiency in hospitals and clinics. Our user-friendly platform streamlines the patient check-in process, manages appointments, and enhances communication between healthcare providers and patients. With PatientAtEase, experience seamless healthcare operations, ensuring patients receive timely care with minimal hassle. Ideal for clinics, hospitals, and healthcare centers aiming to optimize their patient flow and deliver superior patient experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-dark-300 font-sans antialiased", fontSans.variable)}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
          >
            {children}
          </ThemeProvider>
       
        </body>
    </html>
  );
}
