import NavBar from "@/components/NavBar";
import "./globals.css";
import Footer from "@/components/Footer";

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
