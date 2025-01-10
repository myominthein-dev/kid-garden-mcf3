import React from "react";
import Container from "../../components/Container";
import potato from "../../../../assets/coursePage/potato_1.png";
import outerPotato from "../../../../assets/coursePage/outer_potato.png";
import handRaisingKid from "../../../../assets/coursePage/hadng_raising_kid.png";
import drawingKid from "../../../../assets/coursePage/kid_drawing.png";
import sunFlower from "../../../../assets/coursePage/sun_flower.png";
import sun from "../../../../assets/coursePage/sun.png";
const LangLitetracy = () => {
  return (
    <Container className={"my-16 py-5"}>
      <div className="max-w-[1183px] max-sm:w-full  relative  mx-auto">
        <img
          className=" md:block hidden size-14 absolute left-0 bottom-0 z-20"
          src={potato}
          alt=""
        />
        <img
          className="  md:block hidden size-16 absolute left-0 bottom-2"
          src={outerPotato}
          alt=""
        />
        <h1 className="font-poppin md:w-[618px] mx-auto font-semibold leading-10 text-4xl text-center">
          "Building Strong Foundations in Language and Literacy”
        </h1>
      </div>
      <div className="mt-20  ">
        <div className="relative h-[600px]  flex items-center justify-center ">
          <img
            className="absolute max-sm:left-0 max-sm:top-0 right-20 top-5"
            src={sun}
            alt=""
          />
          <img className="absolute bottom-0" src={sunFlower} alt="" />
          <div className="bg-white max-sm:absolute max-sm:top-[50%] max-sm:left-[10%] rounded-full px-12 py-3 z-30 ">
            <h3 className="text-[#FF9E0E] text-4xl ">1.7K</h3>
            <p className="leading-9 text-lg text-[#333931]">Enrolled Student</p>
          </div>
          <img
            className="w-[570px] max-sm:rotate-[9deg]   h-[349px] absolute top-16 left-36 max-sm:w-[85%] max-sm:top-0 max-sm:left-0 max-sm:relative  max-sm:h-[400px]"
            src={drawingKid}
            alt=""
          />
          <img
            className="w-[543px] max-sm:w-[40%] max-sm:-rotate-3  max-sm:object-fill max-sm:h-[386px] h-[332px] max-sm:right-[10%] max-sm:top-[25%] absolute bottom-16 right-36"
            src={handRaisingKid}
          />
        </div>
      </div>
    </Container>
  );
};

export default LangLitetracy;
