import Navbar from "./Navbar";
import Footer from "./Footer";
import PropTypes from 'prop-types';

const UserLayout = ({ children }) => {
  return (
    <div className="font-poppins flex flex-col min-h-screen">
      <Navbar />
      <div className="container mx-auto">
        {" "}
        <main className="flex-grow">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

UserLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserLayout;
