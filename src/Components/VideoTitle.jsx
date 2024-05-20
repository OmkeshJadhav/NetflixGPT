const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-28 sm:pt-[17rem] md:pt-64 px-6 md:px-12 py-2 absolute w-screen aspect-video md:bg-gradient-to-r from-black">
      <h1 className="text-lg sm:3xl md:text-3xl text-white font-bold opacity-65 md:opacity-100">
        {title}
      </h1>
      <p className="hidden md:inline-block py-6 text-lg text-white text-opacity-50 w-1/3">
        {overview}
      </p>
      <div>
        <button className="text-sm mt-1 text-black md:text-xl bg-white py-1 md:py-2 px-4 md:px-8 mx-3 rounded-md hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="hidden md:inline-block text-white text-xl bg-gray-500 bg-opacity-50 py-2 px-8 mx-3 rounded-md hover:bg-opacity-75">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
