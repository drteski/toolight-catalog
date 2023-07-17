"use client";
import "./globals.scss";
import Navbar from "@/app/components/layout/navbar/Navbar";
import Footer from "@/app/components/layout/footer/Footer";
import useWindowScroll from "@/hooks/useWindowScroll";
import { usePathname } from "next/navigation";

const RootLayout = ({ children }) => {
  const scroll = useWindowScroll();
  const pathname = usePathname();

  const dynamicPadding = {
    paddingTop: scroll > 1 ? "60px" : "100px",
    transition: "0.3s",
  };

  return (
    <html lang="pl">
      {!pathname.includes("signin") && !pathname.includes("admin") ? (
        <body style={dynamicPadding}>
          <Navbar />
          {children}
          <Footer />
        </body>
      ) : (
        <>{children}</>
      )}
    </html>
  );
};

export default RootLayout;
