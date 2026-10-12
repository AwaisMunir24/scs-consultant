import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "SCS Consultant | Study Visa & Study in the UK",
  description: "Study visa guidance, university admissions and support for students heading to the UK.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-display min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
