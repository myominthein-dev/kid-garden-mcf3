import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import kid from '../../../assets/events/event_kid.png'
import garaffe from '../../../assets/events/event_garaffee.png'
import breadCrumb3 from "../../../assets/breadcrumb/breadcrumb-3.png";
import Container from '../components/Container';
import mapVec from "../../../assets/homePage/map_vec.png"
import clockVec from "../../../assets/homePage/clock_vec.png"
import hollowenKid from "../../../assets/homePage/kid_with_hollowen.png"
import playingInCompound from "../../../assets/homePage/playing_in_compound.png"
import sun from "../../../assets/events/sun.png"
import sunFlower from "../../../assets/events/sun_flower.png"
import footerBg from '../../../assets/homePage/bg_footer.jpg'
import Footer from '../components/Footer';

const EventDetailPage = () => {
  return (
    <>
        <BreadCrumb 
        bgImg={breadCrumb3}
        leftImg={kid}
        rightImg={garaffe}
        rImgWidth={69}
        lImgPos={"-top-16 left-48"}
        rImgPos={"-top-4 right-5"}
        lImgWidth={60}
        title={"Event Details"}
        currentPageTitle={"Event Details"}
      />

      <Container className={'my-10 py-5'}>
          <div className='max-w-[600px] mx-auto flex flex-col gap-4 items-center'>
              <span className='bg-lime-500 text-white px-3 text-lg py-2 rounded-full'>Development</span>
               <h2 className='text-4xl font-poppin font-semibold leading-10'>Chrismas Party</h2>
               <p className='leading-8 text-center text-neutral-700'>Celebrate the festive season with fun activities, cheerful music, and holiday treats at our school's Christmas party. Let’s create magical moments together!</p>

                <div className='flex items-center gap-6'>
                   <p className='flex gap-2 text-xs font-semibold'>
                                       <div className='text-orange-600 flex items-center gap-2'><img className='size-4' src={mapVec} alt="" /> Location :</div>
                                       <p className='text-neutral-700'>Sunshine Campus</p>
                   </p>
               
                    <p className='flex gap-2 text-xs font-semibold'>
                                       <div className='text-orange-600 flex items-center gap-2'><img className='size-4' src={clockVec} alt="" /> Time :</div>
                                       <p className='text-neutral-700'>9:00 AM - 11 AM</p>
                    </p>      
                    <p className='text-orange-600 '>
                      $ Free
                    </p>          
                </div>
          </div>

          <div className='flex justify-between my-10 py-5 relative'>
            <img className='absolute left-5 -bottom-20' src={sun} alt="" />
            <img className='absolute right-0 -top-20' src={sunFlower} alt="" />
            <img className='w-[628px]' src={hollowenKid} alt="" /><img className='w-[628px] relative top-20' src={playingInCompound} alt="" />
          </div>

          <div className='grid grid-cols-2 gap-3 my-20 py-10'>
            <p>
            The Christmas Party at our school is a joyful annual tradition that brings together students, parents, and teachers for a festive celebration. This special event creates an opportunity for everyone to connect and strengthen the sense of community within the school. 
            </p>
            <p>
            The day is filled with fun activities, including games, music, and creative holiday crafts that bring out the festive spirit in children. A highlight of the celebration is the visit from Santa Claus, who spreads joy and hands out small surprises to the students. Beautiful  atmosphere throughout the campus.
            </p>
          </div>
      </Container>
    <Footer bgImg={footerBg} color={"orange"} />

    </>
  )
}

export default EventDetailPage