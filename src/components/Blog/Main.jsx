const Main = () => {
  return (
    <div className="max-w-screen-xl mx-auto pt-[6rem] p-10 relative">
      <div className="mb-5 max-w-2xl mx-auto">
        <h1 href="#" className="text-gray-900 font-bold text-3xl mb-2">
          Revenge of the Never Trumpers
        </h1>
        <p className="text-gray-700">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s
        </p>
        <div className="text-gray-700 text-xs flex my-6 justify-between">
          <div className="flex items-center">
            <a href="#">
              <img
                className="w-12 h-12 rounded-full mr-2"
                src="https://tailwindcss.com/img/jonathan.jpg"
                alt="Avatar of Jonathan Reinink"
              />
            </a>
            <div className="text-sm">
              <a
                href="#"
                className="text-gray-900 font-medium leading-none hover:text-indigo-600 transition duration-500 ease-in-out"
              >
                Jonathan Reinink
              </a>
              <p className="text-gray-600 text-xs">Aug 18</p>
            </div>
          </div>
          <div className="flex-row flex"></div>
        </div>
      </div>

      <div
        className="bg-cover h-64 text-center overflow-hidden"
        style={{
          height: `500px`,
          backgroundImage: `url('https://api.time.com/wp-content/uploads/2020/07/never-trumpers-2020-election-01.jpg?quality=85&w=1201&h=676&crop=1')`,
        }}
        title="Woman holding a mug"
      ></div>
      <div className="max-w-2xl mx-auto">
        <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
          <div className="">
            <p className="text-base leading-8 my-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <h3 className="text-2xl font-bold my-5">
              #1. What is Lorem Ipsum?
            </h3>
            <p className="text-base leading-8 my-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <blockquote className="text-md italic leading-8 my-5 p-5 text-indigo-600 font-semibold">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s
            </blockquote>
            <p className="text-base leading-8 my-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <a
              href="#"
              className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
            >
              #Election
            </a>
            ,{" "}
            <a
              href="#"
              className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
            >
              #people
            </a>
            ,{" "}
            <a
              href="#"
              className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
            >
              #Election2020
            </a>
            ,{" "}
            <a
              href="#"
              className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
            >
              #trump
            </a>
            ,
            <a
              href="#"
              className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
            >
              #Joe
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
