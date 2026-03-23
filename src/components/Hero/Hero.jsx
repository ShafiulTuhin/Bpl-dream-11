import HeroImg from "../../assets/banner-main.png";

const Hero = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#131313] to-[#797979] rounded-lg py-10 space-y-5 flex flex-col items-center mt-6 justify-center">
        <img src={HeroImg} alt="" />
        <h1 className="md:text-4xl text-3xl font-bold text-white text-center">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <p className="font-medium text-2xl text-[#ffffff70]">
          Beyond Boundaries Beyond Limits
        </p>
        <div className="border border-[#E7FE29] p-1 rounded-lg">
          <button className="p-3 rounded-lg font-bold bg-[#E7FE29] cursor-pointer hover:bg-transparent hover:text-[#E7FE29] transition duration-500">
            Claim free credit
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
