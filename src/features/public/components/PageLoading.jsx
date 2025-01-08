import React from "react";
import Lottie from "lottie-react";
import LoadingLottie from "../lotties/PageLoadingLotties.json";
const PageLoading = () => {
  return (
    <div className="  bg-[white] my-[5%]     !opacity-100  flex justify-center items-center flex-col  ">
      <div className=" w-[300px] h-[300px] md:w-[400px] md:h-[400px] xl:w-[600px] xl:h-[600px] flex flex-col justify-center items-center gap-3 ">
        <Lottie className="  " animationData={LoadingLottie} loop />
        <p className=" text-orange-500  animate-bounce text-primary-500 text-3xl font-bold">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default PageLoading;
