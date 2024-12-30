import React from 'react'
import Container from '../../components/Container'
import potato from "../../../../assets/coursePage/potato_1.png"
import outerPotato from "../../../../assets/coursePage/outer_potato.png"
import standingKid from "../../../../assets/coursePage/kid_stand_on_knee.png"
import circleWithHands from "../../../../assets/coursePage/making_circle_hands.png"
import groupPlaying from "../../../../assets/coursePage/kids_group_playing.png"
import arrowSvg from "../../../../assets/coursePage/arrow.png"

const SocialDevelopment = () => {
  return (
    <Container className={'my-16 py-5'}>
      <div className='max-w-[1183px]  relative  mx-auto'>
       <h1 className='font-poppin w-[618px] mx-auto font-semibold leading-10 text-4xl text-center'>"Unleashing Imagination Through Art and Creativity”</h1>
      </div>
       <div className='mt-5  '>
          <div className='relative   flex items-center justify-center gap-10 '>
           
            <div className='relative   flex justify-between items-center w-4/5 h-[900px] mx-auto '>
            <div className='bg-white absolute w-[180px]  shadow-neutral-400 shadow-lg top-48  left-0 right-0 mx-auto rounded-full px-5 py-2 z-30 '>
                <h3 className='text-[#FF9E0E] text-4xl '>24</h3>
                <p className='leading-9  text-[#333931]'>National Students</p>
              </div>
             <div className='absolute  top-20 right-0'>
               <img className='size-14 top-3  absolute  z-20' src={potato} alt="" />
               <img className='size-16   ' src={outerPotato} alt="" />
            
             </div>
              <img className='absolute top-0 -left-32' src={arrowSvg} alt="" />
              <img className='relative bottom-28 w-[411px] z-20 h-[390px] ' src={circleWithHands} alt="" />
              <img className='absolute bottom-0 left-48 w-[408px] z-20 h-[591px]' src={standingKid} />
              <img className=' w-[410px] z-20 h-[399px]' src={groupPlaying} />

             </div>
          </div>
       </div>
      
    </Container>
  )
}

export default SocialDevelopment;