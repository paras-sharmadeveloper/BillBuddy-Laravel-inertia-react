import { Link } from "@inertiajs/react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <main className="content">{children}</main>
            <Footer />
        </>
    );
}
