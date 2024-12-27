import React from 'react'
import Container from '../../components/Container'
import potato from "../../../../assets/coursePage/potato_1.png"
import outerPotato from "../../../../assets/coursePage/outer_potato.png"
import handRaisingKid from "../../../../assets/coursePage/hadng_raising_kid.png"
import drawingKid from "../../../../assets/coursePage/kid_drawing.png"
import drawing from "../../../../assets/coursePage/drawing.png"
import yellowGirlDrawing from "../../../../assets/coursePage/yellow_girl_drawing.png"
import pattern from "../../../../assets/coursePage/pattern.png"
import sun from "../../../../assets/coursePage/sun.png"
const ArtCreativity = () => {
  return (
    <Container className={'my-16 py-5'}>
      <div className='max-w-[1183px]  relative  mx-auto'>
        <img src={sun} alt="" />
       <h1 className='font-poppin w-[618px] mx-auto font-semibold leading-10 text-4xl text-center'>"Unleashing Imagination Through Art and Creativity”</h1>
      </div>
       <div className='mt-20  '>
          <div className='relative h-[600px]  flex items-center justify-center gap-10 '>
            
            
           <div className='absolute  top-0 right-28'>
           <img className='size-14 top-3  absolute  z-20' src={potato} alt="" />
            <img className='size-16   ' src={outerPotato} alt="" />
            
           </div>
           
              <img className='absolute bottom-0' src={pattern} alt="" />
              <img className=' w-[519px] z-20 h-[607px] ' src={drawing} alt="" />
              <img className=' w-[569px] z-20 h-[351px]' src={yellowGirlDrawing} />
          </div>
       </div>
      
    </Container>
  )
}

export default ArtCreativity