import { Parallax } from "react-scroll-parallax";

function HeroImage() {
  return (
    // <section className="hero-bg-image min-h-140 flex items-center justify-center bg-[url(/images/pexels-pixabay.jpeg)]">
    // <Parallax speed={20}>

    //   <div className="flex-col text-center items-center text-white mt-40">
    //     <h1 className="mb-5 text-5xl font-bold">Ideas</h1>
    //     <p className="mb-5">Where all our great things begin</p>
    //   </div>
    // </Parallax>
    // </section>
    <div className="relative h-140 overflow-hidden" style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 0 100%)" }}>
      
      {/* container tetap, overflow-hidden */}
      <Parallax speed={-40} className="absolute inset-0 -z-10 ">
        <div className="h-[120%] bg-[url(/images/pexels-pixabay.jpeg)] bg-cover bg-center  " />
      </Parallax>
      <div className="relative flex items-center justify-center h-full text-white text-center top-20">
        <div>
          <Parallax speed={10}>
            <h1 className="mb-5 text-5xl font-bold">Ideas</h1>
            <p className="mb-5 text-lg text-orange-300">Where all our great things begin</p>
          </Parallax>
        </div>
      </div>

      
    </div>
  );
}

export default HeroImage;
