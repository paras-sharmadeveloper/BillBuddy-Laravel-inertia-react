import { Link } from "@inertiajs/react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <div className="container-scroller content">
                <div className="container-fluid page-body-wrapper">
                    {/* partial:partials/_sidebar.html */}
                    <Sidebar />
                    {children}
                </div>
            </div>
            <Footer />
        </>
    );
}
