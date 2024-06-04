import Aos from 'aos';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Collection = ({title, subtitle, data}) => {
  useEffect(() => {
    Aos.init({
      duration: 1200, // Animation duration in milliseconds
    });
  }, []);
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <section className='w-[100%] flex flex-col items-center py-[30px] gap-[10px] md:gap-[20px]'>
      <h1 data-aos="fade-up" className='text-[28px] md:text-[40px] font-[700]'>{title}</h1>
      <p data-aos="fade-up" className='text-[16px] md:text-[18px] capitalize text-gray-400 mb-[40px]'>{subtitle}</p>
      <div data-aos="fade-up" className='w-[100%] grid gap-[10px] sm:gap-[20px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 py-[20px] px-[10px] sm:px-[40px]'>
        {
            data?.map((item,index)=> {
                return <Link onClick={handleScrollToTop} to={`/single_page/${item?.id}`} key={index} className='flex flex-col gap-[10px] sm:gap-[20px] group'>
                    <img loading='lazy' src={item?.img} alt={item?.title} className='rounded-[20px] object-cover'/>
                    <h5 className='text-[18px] group-hover:text-orange-300 group-hover:font-[700] ease-in-out duration-300'>{item?.title}</h5>
                </Link>
            })
        }
      </div>
    </section>
  )
}

export default Collection
