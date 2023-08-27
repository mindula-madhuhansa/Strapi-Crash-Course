import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

export default function BlogContent({ blogs }) {
  const { id } = useParams();

  let blog = {};
  if (blog) {
    let arr = blogs.data.filter((blog) => blog.id == id);
    blog = arr[0];
  } else {
    blog = {};
  }

  // const blogsList = [
  //   {
  //     id: 1,
  //     title: "Blog 1",
  //     description: "Electron for Desktop app Development",
  //     content:
  //       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem odit asperiores, qui ad iusto non alias, ullam nemo, similique deserunt a perferendis impedit neque accusantium illo nostrum ipsum doloribus iste!",
  //     coverImg:
  //       "https://res.cloudinary.com/practicaldev/image/fetch/s--6UEM9XZf--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/s3uitx6rdv7sod1g2acz.png",
  //     authorName: "John Doe",
  //     authorAvatar:
  //       "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     authorDescription: "Web Developer",
  //   },
  //   {
  //     id: 2,
  //     title: "Blog 2",
  //     description: "Electron for Desktop app Development",
  //     content:
  //       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem odit asperiores, qui ad iusto non alias, ullam nemo, similique deserunt a perferendis impedit neque accusantium illo nostrum ipsum doloribus iste!",
  //     coverImg:
  //       "https://res.cloudinary.com/practicaldev/image/fetch/s--6UEM9XZf--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/s3uitx6rdv7sod1g2acz.png",
  //     authorName: "John Doe",
  //     authorAvatar:
  //       "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     authorDescription: "Web Developer",
  //   },
  //   {
  //     id: 3,
  //     title: "Blog 3",
  //     description: "Electron for Desktop app Development",
  //     content:
  //       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem odit asperiores, qui ad iusto non alias, ullam nemo, similique deserunt a perferendis impedit neque accusantium illo nostrum ipsum doloribus iste!",
  //     coverImg:
  //       "https://res.cloudinary.com/practicaldev/image/fetch/s--6UEM9XZf--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/s3uitx6rdv7sod1g2acz.png",
  //     authorName: "John Doe",
  //     authorAvatar:
  //       "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     authorDescription: "Web Developer",
  //   },
  // ];

  return (
    <div className="w-full pb-10 bg-[#f9f9f9]">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid md:grid-cols-3 ss:grid-cols-1 md:gap-8 sm:gap-y-8 ss:gap-y-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black">
          <div className="col-span-2 gap-x-8 gap-y-8">
            <img
              className="h-56 w-full object-cover"
              src={`http://localhost:1337${blog.attributes.coverImg.data.attributes.url}`}
              alt={`http://localhost:1337${blog.attributes.blogTitle} cover image`}
            ></img>
            <h1 className="font-bold text-2xl my-1 pt-5">
              {blog.attributes.blogTitle}
            </h1>
            <div className="pt-5">
              <p>{blog.attributes.blogContent}</p>
            </div>
          </div>

          <div className="w-full bg-white rounded-xl overflow-hidden drop-shadow-md py-5 max-h-[250px]">
            <div>
              <img
                className="p-2 w-32 h-32 rounded-full mx-auto object-cover"
                src={blog.authorAvatar}
                alt="author avatar"
              />
              <h1 className="font-bold text-2xl text-center text-gray-900 pt-3">
                {blog.authorName}
              </h1>
              <p className="text-center text-gray-900 font-medium">
                {blog.authorDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

BlogContent.propTypes = {
  blogs: PropTypes.object.isRequired,
};
