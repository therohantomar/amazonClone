const All = () => {
  return (
    <main className="container  h-full">
      <div className="bg-[url('https://m.media-amazon.com/images/G/31/AmazonVideo/2019/MLP.jpg')] bg-no-repeat bg-clip-border  sm:bg-contain md:bg-contain lg:bg-contain  xl:bg-cover 2xl:bg-cover   h-[80vh] w-full">
        <div className="w-[50vw] bg-gradient-to-r from-black via-black to-transparent flex flex-col h-full py-10 items-start gap-10  mx-8 bg-transparent">
          <h1 className="text-white bg-transparent  text-5xl">Welcome to Prime Videos</h1>
          <p className="text-white text-2xl bg-transparent">Watch the latest movies, TV shows, and award-winning Amazon Originals</p>
          <button className="px-20 py-3 hover:bg-cyan-500 text-white bg-cyan-600 font-semibold rounded-sm ">Sign in to join</button>
        </div>
      </div>
      <div className="bg-[url('https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/MLP/TVOD/TVOD_MLP_Right.jpg')] bg-no-repeat bg-clip-border sm:bg-contain md:bg-contain lg:contain  xl:bg-cover 2xl:bg-cover h-[80vh] w-full"></div>
    </main>
  );
};

export default All;
