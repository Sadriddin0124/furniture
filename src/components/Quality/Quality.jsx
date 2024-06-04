import Aos from 'aos'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
const Quality = ({image, bg}) => {
    const {t} = useTranslation()
    const quality = t("quality.percent")
    const title = t("quality.title")
    const subtitle = t("quality.subtitle")
    const btn = t("quality.btn")
    useEffect(() => {
      Aos.init({
        duration: 1200, // Animation duration in milliseconds
      });
    }, []);
  return (
    <section className='w-[100%] py-[200px] px-[10px] md:px-[40px]'>
      <div className={`${bg} w-[100%] h-[100%] sm:h-[600px] relative lg:h-[300px] ease-in-out duration-300 hover:shadow-2xl hover:shadow-orange-300 rounded-[30px] lg:pt-[50px] p-[20px] xl:p-[50px] flex flex-col lg:flex-row items-center lg:justify-around gap-[10px] lg:gap-[30px]`}>
        <img data-aos="fade-down" loading='lazy' src={image} alt="winter" className='mt-[-40vw] w-[80%] lg:hidden block sm:w-[60%] md:w-[40%] '/>
        <div className='text-white flex flex-col lg:h-[100%] justify-end lg:justify-start items-center lg:items-start'>
            <h2 className='text-[50px] md:text-[100px] font-[800]'>100%</h2>
            <p>{quality}</p>
        </div>
        <img data-aos="fade-down" loading='lazy' src={image} alt="winter" className='lg:block hidden w-[80%] sm:w-[60%] md:w-[40%] '/>
        <div  data-aos="fade-up" className='flex flex-col items-center gap-[20px] md:gap-[0] lg:items-start justify-start xl:justify-between lg:h-[100%]'>
            <h3 className='text-center text-[24px] sm:text-[30px] font-[700] text-white'>{title}</h3>
            <p className='text-center lg:text-left text-[14px] xl:text-[18px] text-white max-w-[300px]'>{subtitle}</p>
            <Link to="/collection" className='global__btn bg-white font-[700] ease-linear duration-300 hover:text-white hover:bg-black'>{btn}</Link>
        </div>
      </div>
    </section>
  )
}

export default Quality
