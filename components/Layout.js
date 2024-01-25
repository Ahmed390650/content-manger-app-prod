import ActiveResource from "./ActiveResouce";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <ActiveResource />
      {children}
    </div>
  );
};

export default Layout;
