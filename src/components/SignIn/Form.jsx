const Form = () => {
  return (
    <div className="min-h-screen container mx-auto flex justify-center items-center lg:px-20 md:px-14 sm:px-8 bg-gray-200 py-12 h-full">
      <div className="grid lg:grid-cols-3 grid-col-1">
        <div className="bg-white col-span-2 py-14 lg:px-10 px-8">
          <h2 className="text-3xl font-medium">Sign In</h2>
          <div className="flex flex-col py-4">
            <label htmlFor="Email" className="text-base font-medium">
              Email
            </label>
            <input
              type="email"
              className="outline-none border-b-2 border-solid focus:border-red-400 transition-all"
            />
          </div>
          <div className="flex flex-col py-4 pb-4">
            <label htmlFor="Message" className="text-base font-medium">
              Password
            </label>
            <input
              type="password"
              className="outline-none border-b-2 border-solid focus:border-red-400 transition-all"
            />
          </div>
          <button
            href=""
            className="bg-red-400 px-8 py-3 rounded-md text-white hover:bg-white hover:text-red-400 border-2 border-solid border-red-400 transition-all"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
