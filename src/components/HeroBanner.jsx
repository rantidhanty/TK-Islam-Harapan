import BannerImageWebP from "../assets/TK Islam Harapan/Banner.webp";

function HeroBanner() {
  return (
    <div className="relative flex justify-center">
      <picture>
        <source srcSet={BannerImageWebP} type="image/webp" />
        <img
          src={BannerImageWebP}
          alt="Banner"
          className="w-full mt-20 py-5 rounded-t-md mr-5 px-5"
        />
      </picture>
      <div className="inset-0 bg-gradient-to-t from-black opacity-30"></div>
    </div>
  );
}

export default HeroBanner;
