import React from "react";
import Container from "../../components/Container";
import potato from "../../../../assets/coursePage/potato_1.png";
import outerPotato from "../../../../assets/coursePage/outer_potato.png";
import handRaisingKid from "../../../../assets/coursePage/hadng_raising_kid.png";
import drawingKid from "../../../../assets/coursePage/kid_drawing.png";
import drawing from "../../../../assets/coursePage/drawing.png";
import yellowGirlDrawing from "../../../../assets/coursePage/yellow_girl_drawing.png";
import pattern from "../../../../assets/coursePage/pattern.png";
import sun from "../../../../assets/coursePage/sun.png";
const ArtCreativity = () => {
  return (
    <Container className={"my-16 py-5"}>
      <div className="max-w-[1183px]  relative  mx-auto">
        <img
          className="absolute -bottom-full left-[50%] md:top-0 md:left-0"
          src={sun}
          alt=""
        />
        <h1 className="font-poppin md:w-[618px] w-full mx-auto font-semibold leading-10 text-4xl text-center">
          "Unleashing Imagination Through Art and Creativity”
        </h1>
      </div>
      <div className="mt-20  ">
        <div className="relative h-[600px] md:items-start  flex xl:items-center justify-center gap-10 ">
          <div className="absolute  top-0 right-28">
            <img
              className="size-14 top-3  absolute  z-20"
              src={potato}
              alt=""
            />
            <img className="size-16   " src={outerPotato} alt="" />
          </div>

          <img
            className="absolute bottom-0 right-0 md:right-[5%] md:w-[40%]"
            src={pattern}
            alt=""
          />
          <img
            className=" xl:w-[519px] w-[45%] z-20 md:h-[607px] h-[40%] md:relative absolute bottom-0 left-0  "
            src={drawing}
            alt=""
          />
          <img
            className=" xl:w-[569px] md:w-[45%] w-full z-20 h-[351px]"
            src={yellowGirlDrawing}
          />
        </div>
      </div>
    </Container>
  );
};

export default ArtCreativity;
