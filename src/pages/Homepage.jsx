import PropTypes from "prop-types";
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Homepage({ blogs }) {
  return (
    <div>
      <Navbar />
      <Blogs blogs={blogs ? blogs : ""} />
      <Footer />
    </div>
  );
}

Homepage.propTypes = {
  blogs: PropTypes.object.isRequired,
};
