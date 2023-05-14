const LoadingPage = () => {
  return (
    <div className="bg-[#FFFAF0] flex flex-col items-center justify-center h-screen">
      <div>
        <lottie-player
          src="https://assets10.lottiefiles.com/packages/lf20_lS88YC8r3Y.json"
          speed="0.75"
          loop
          autoplay
        ></lottie-player>
      </div>
    </div>
  );
};

export default LoadingPage;
