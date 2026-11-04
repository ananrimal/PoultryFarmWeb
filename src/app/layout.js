import "./globals.css";
import Footer from "./components/Home/Footer";
import NavBar from "./components/Home/NavBar";
import AOSProvider from "./components/Home/AOSProvider";
export const viewport = {
  width: 'device-width',
  initialScale: 1,
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AOSProvider>
        <NavBar/>
        {children}
         <Footer/>
         </AOSProvider>
      </body>
    </html>
  );
}
