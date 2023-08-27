export default function BlogContent() {
  const blogs = {
    id: 1,
    title: "Electron for desktop app development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque beatae accusantium eius praesentium ex in sit. Nemo incidunt eum, iste accusantium eius necessitatibus, labore alias nobis impedit esse cumque sint? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque mollitia cumque unde. Fugiat id aliquid consequatur quae explicabo, debitis hic numquam voluptatibus quisquam maxime. Consequuntur dolores adipisci ut suscipit ullam?",
    coverImg:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--6UEM9XZf--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/s3uitx6rdv7sod1g2acz.png",
    authorName: "John Doe",
    authorAvatar:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    authorDescription: "Web Developer",
  };

  return (
    <div className="w-full pb-10 bg-[#f9f9f9]">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid md:grid-cols-3 ss:grid-cols-1 md:gap-8 sm:gap-y-8 ss:gap-y-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black">
          <div className="col-span-2 gap-x-8 gap-y-8">
            <img
              className="h-56 w-full object-cover"
              src={blogs.coverImg}
              alt={blogs.title}
            ></img>
            <h1 className="font-bold text-2xl my-1 pt-5">{blogs.title}</h1>
            <div className="pt-5">
              <p>{blogs.description}</p>
            </div>
          </div>

          <div className="w-full bg-white rounded-xl overflow-hidden drop-shadow-md py-5 max-h-[250px]">
            <div>
              <img
                className="p-2 w-32 h-32 rounded-full mx-auto object-cover"
                src={blogs.authorAvatar}
                alt="author avatar"
              />
              <h1 className="font-bold text-2xl text-center text-gray-900 pt-3">
                {blogs.authorName}
              </h1>
              <p className="text-center text-gray-900 font-medium">
                {blogs.authorDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
