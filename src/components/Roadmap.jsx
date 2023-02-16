import React from 'react'
import { roadmap } from '../assets'
import styles from '../style'

const Roadmap = () => {
  return (
    <section id="roadmap" className={`flex md:flex-row flex-col ${styles.paddingY}} `}>
        
<ol className="relative border-l border-gray-200 dark:border-gray-700 text-textMain">                  
    <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-textMain dark:text-textMain">Q1 2023</time>
        <h3 className="text-lg font-semibold text-textMain dark:text-white">DAO</h3>
        <p className="mb-4 text-base font-normal text-textMain dark:text-textMain">Our goal is to create a reliable and close-knit community where you can find not only friends and have a good time, but you can also get secret alpha, calls and more.</p>
        
    </li>
    <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-textMain dark:text-textMain">Q1 2023</time>
        <h3 className="text-lg font-semibold text-textMain dark:text-white">Staking</h3>
        <p className="text-base font-normal text-textMain dark:text-textMain">Our goal is to create a staking tool for our holders to get tokens $RACCON and then use those tokens to upgrade their raccoon and level up. They will also be able to participate in various raffles.</p>
    </li>
    <li className="ml-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-textMain dark:text-textMain">Q2 2023</time>
        <h3 className="text-lg font-semibold text-textMain dark:text-white">Analytics Tools</h3>
        <p className="text-base font-normal text-textMain dark:text-textMain">Our goal is to provide users with advanced analytics tools that enable them to make informed decisions, track their investment performance and platform development.</p>
    </li>
</ol>


    </section>
  )
}

export default Roadmap