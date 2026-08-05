import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import SmoothScroll from "@/components/SmoothScroll";

const OutfitFont = Outfit({

  subsets: ["latin"],
});

export const metadata = {
  title: "Md. Naimul Islam | Portfolio",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${OutfitFont.className}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col transition-colors duration-300">
        
        <ThemeProvider 
          attribute="class" 
          defaultTheme="dark" 
          enableSystem={false} 
          storageKey="jituman-final-v3" 
        >
          <SmoothScroll>
            <Navbar />
            <main className="flex-grow ">
              {children}
            </main>
          </SmoothScroll>
        </ThemeProvider>
      
      </body>
    </html>
  );
}