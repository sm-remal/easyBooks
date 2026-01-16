import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Shared/NavBar";
import Footer from "@/components/Shared/Footer";
import { AuthProvider } from "@/components/Provider/AuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "easyBooks | Build a Bright Future for Your Child",
    template: "%s | easyBooks",
  },
  description: "Explore a world of knowledge with easyBooks. Discover, buy, and manage a curated collection of best-selling books across all genres.",
  keywords: ["online bookstore", "children books", "educational books", "buy books online", "easyBooks"],
  authors: [{ name: "easyBooks Team" }],
  creator: "easyBooks",
  publisher: "easyBooks",
  icons: {
    icon: "/assets/logo-1.png", 
  },
  openGraph: {
    title: "easyBooks | Build a Bright Future for Your Child",
    description: "Your gateway to a world of knowledge and imagination.",
    url: "https://your-domain.com",
    siteName: "easyBooks",
    images: [
      {
        url: "/assets/logo-1.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <AuthProvider>
          <header>
            <NavBar></NavBar>
          </header>
          <main className="flex-1 mt-16">
            {children}
          </main>
          <footer>
            <Footer></Footer>
          </footer>
        </AuthProvider>
      </body>
    </html>
  );
}
