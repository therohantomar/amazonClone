const All = () => {
  return (
    <main className="container  min-h-screen">
      <div className="bg-[url(https://m.media-amazon.com/images/G/31/AmazonVideo/2019/MLP.jpg)] bg-no-repeat bg-clip-border xs:bg-contain  sm:bg-contain md:bg-contain lg:bg-contain    xl:bg-cover 2xl:bg-cover 3xl:bg-cover w-full">
        <div className="w-[50vw] bg-gradient-to-r from-black  via-black  to-transparent flex flex-col  py-10 items-start gap-10 min-h-screen  mx-8 bg-transparent">
          <h1 className="text-white bg-transparent xs:text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-5xl 2xl:text-5xl ">Welcome to Prime Videos</h1>
          <p className="text-white xs:text-md sm:text-lg md:text:text-lg lg:text-xl  xl:text-2xl 2xl:text-2xl bg-transparent">Watch the latest movies, TV shows, and award-winning Amazon Originals</p>
          <button className="xs:px-4 sm:px-10 md:px-10 lg:px-20 xl:px-20 2xl:px-20  py-3 hover:bg-cyan-500 text-white bg-cyan-600 font-semibold rounded-sm ">Sign in to join</button>
        </div>
      </div>
      <div className="bg-[url('https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/MLP/TVOD/TVOD_MLP_Right.jpg')]  bg-no-repeat bg-clip-border xs:bg-contain  sm:bg-contain md:bg-contain lg:bg-contain  xl:bg-cover 2xl:bg-cover 3xl:bg-cover w-full">
      <div className="w-[50vw] bg-gradient-to-r from-black  via-black  to-transparent flex flex-col  py-10 items-start gap-10  mx-8 bg-transparent">
          <h1 className="text-white bg-transparent xs:text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-5xl 2xl:text-5xl ">Movie rentals on prime videos </h1>
          <p className="text-white xs:text-md sm:text-lg md:text:text-lg lg:text-xl  xl:text-2xl 2xl:text-2xl bg-transparent">Early Access to new movies, before digital Subscription</p>
          <button className="xs:px-4 sm:px-10 md:px-10 lg:px-20 xl:px-20 2xl:px-20  py-3 hover:bg-cyan-500 text-white bg-cyan-600 font-semibold rounded-sm ">Rent Now</button>
        </div>
      </div>
    </main>
  );
};

export default All;
