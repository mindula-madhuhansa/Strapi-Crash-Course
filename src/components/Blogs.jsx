export default function Blogs() {
  const blogs = [
    {
      id: 1,
      title: "Blog 1",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem odit asperiores, qui ad iusto non alias, ullam nemo, similique deserunt a perferendis impedit neque accusantium illo nostrum ipsum doloribus iste!",
      coverImg:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--6UEM9XZf--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/s3uitx6rdv7sod1g2acz.png",
    },
    {
      id: 2,
      title: "Blog 2",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem odit asperiores, qui ad iusto non alias, ullam nemo, similique deserunt a perferendis impedit neque accusantium illo nostrum ipsum doloribus iste!",
      coverImg:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--6UEM9XZf--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/s3uitx6rdv7sod1g2acz.png",
    },
    {
      id: 3,
      title: "Blog 3",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem odit asperiores, qui ad iusto non alias, ullam nemo, similique deserunt a perferendis impedit neque accusantium illo nostrum ipsum doloribus iste!",
      coverImg:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--6UEM9XZf--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/s3uitx6rdv7sod1g2acz.png",
    },
  ];

  return (
    <div className="w-full bg-[#f9f9f9] py-[50px]">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-8 px-4 text-black">
          {blogs.map((blog) => (
            <div
              className="bg-white rounded-xl overflow-hidden drop-shadow-md cursor-pointer"
              key={blog.id}
            >
              <img
                className="h-56 w-full object-cover"
                src={blog.coverImg}
                alt={`${blog.title} cover image`}
              />
              <div className="p-8 ">
                <h3 className="font-bold text-2xl my-1 ">{blog.title}</h3>
                <p className="text-gray-600 text-xl">{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
