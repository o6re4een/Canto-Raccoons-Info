import {React, useState} from 'react'
import styles from '../style'
import { heroRaccon } from '../assets'

const Hero = () => {
  return (
    <section id = "Abot us" className={`flex md:flex-row flex-col ${styles.paddingY}}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        {/* <div className='flex flex-row items-center py-[6px] px-4'></div> */}
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-textMain ss:leading-[100.8px] leading-[75px]">About us{" "}</h1>
        
        </div>

      <p className='text-textMain text-[18px] font-poppins font-normal'>
      The Kanto raccoons lived in the forest and often quarreled over trifles. A wise old raccoon named Master Raccoon suggested that they create a Dao-a way of life that would bring peace and harmony. They searched for the elements of a good way of life and under the light of the full moon, they created their Dao. Dao brought the raccoons closer together, and they became known as the most harmonious in the forest.
      </p>

      </div>
        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-20 relative`}>
          <img src={heroRaccon} alt="billing" className='w-[100%] h-[100%] relative z-[5]' />
          <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'></div>
          <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient'></div>
          <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient'></div>

        </div>
        
     
    </section>
  )
}

export default Hero