import Footer from "../_components/Footer";
import Navbar from "../_components/NavBar";
import ScrollToTopButton from "../_components/ScrollToTopButton";


export default function Layout({ children }) {
  return (
    < >
        <Navbar />
        {children}
        <ScrollToTopButton />
        <Footer />
    </>
  );
}
