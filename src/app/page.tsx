import Bakcground from "@/components/Common/Bakcground";
import Footer from "@/components/Common/Footer";
import { SmoothScrollProvider } from "@/components/Locomotive/SmoothScroll";
import Contact from "@/components/portfolio/Contact/Contact";
import Header from "@/components/portfolio/Header/Header";
import Navbar from "@/components/portfolio/Navbar/Navbar";
import Services from "@/components/portfolio/Services/Services";
import Work from "@/components/portfolio/Work/Work";

export default function Home() {
    return (
        <main>
            <SmoothScrollProvider options={{ smooth: true }}>
                <Bakcground />
                <Navbar />
                <Header />
                <Work />
                <Services />
                <Contact />
            </SmoothScrollProvider>
            {/* <Footer /> */}
        </main>
    );
}
