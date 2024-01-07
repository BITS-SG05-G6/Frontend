import NavBar from "../common/NavBar";
import Footer from "../common/Footer";

function PublicPageLayout({children, className}) {
    return (
        <div className={`flex flex-col gap-32 ${className}`}>
            <NavBar />
            {children}
            <Footer />
        </div>
    );
}
export default PublicPageLayout;