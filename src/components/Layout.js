//used to create a layout for all pages
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Navbar className="NavBar" />
      {children}
    </div>
  );
};

export default Layout;
