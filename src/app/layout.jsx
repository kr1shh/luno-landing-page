import NavBar from "@/components/NavBar";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Luno - The Everyday Planner",
  icons : "/images/luno-favicon.png",
  description: "Luno helps you manage daily tasks, track personal goals, and organize priorities with a simple interface for individuals and small teams.",
  keywords: "task planner, daily planner, team organization, productivity app, Luno",
  openGraph: {
    title: "Luno - The Everyday Planner",
    description: "Manage tasks, track goals, and organize priorities with our simple, calming interface.",
    type: "website",
    images: ["/public/images/black-logo.png"],
  },
  alternates: {
    canonical: "https://luno.ai",
  }
}

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className="bg-background">
        <NavBar />
          {children}
        <Footer />
      </body>
    </html>
  );
}
