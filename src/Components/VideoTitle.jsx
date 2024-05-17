const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-64 px-12 absolute text-white w-screen aspect-video bg-gradient-to-r from-black">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="py-6 font-lg w-1/4">{overview}</p>
      <div>
        <button className="text-black text-xl bg-white py-2 px-8 mx-3 rounded-md hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="text-white text-xl bg-gray-500 bg-opacity-50 py-2 px-8 mx-3 rounded-md hover:bg-opacity-75">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
