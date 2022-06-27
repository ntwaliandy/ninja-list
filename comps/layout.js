import Footer from "./footer"
import NavBar from "./Navbar"

const Layout = ({ children }) => {
    return (
        <div className="content">
            <NavBar />
            {children}
            <Footer />
        </div>
    )
}
export default Layout