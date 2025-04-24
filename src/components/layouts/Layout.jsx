import { Outlet } from "react-router-dom";
import Footer from "./footerComponent/Footer";
import Header from "./headerComponent/Header";
import './Layout.css';
import Sponsors from "./sponsorComponent/Sponsors";

const Layout = () => {
    return (
        <div className="min-h-screen flex flex-col bg-white text-gray-900">
            <header className="shadow-md">
                <Header />
            </header>

            <main className="flex-grow container mx-auto px-4 py-6">
                <h1 className="text-3xl font-bold text-center mb-8">
                La velada del Año V
                </h1>
                <Outlet />
            </main>
            <Sponsors />
            <Footer />
        </div>

    );
};

export default Layout;
