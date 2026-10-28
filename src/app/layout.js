import "./globals.css";
import Footer from "./components/Home/Footer";
import NavBar from "./components/Home/NavBar";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar/>
        {children}
         <Footer/>
      </body>
    </html>
  );
}
