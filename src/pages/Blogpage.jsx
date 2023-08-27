import PropTypes from "prop-types";
import BlogContent from "../components/BlogContent";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Blogpage({ blogs }) {
  return (
    <div>
      <Navbar />
      <BlogContent blogs={blogs} />
      <Footer />
    </div>
  );
}

Blogpage.propTypes = {
  blogs: PropTypes.object.isRequired,
};
