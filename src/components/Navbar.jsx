import {useState} from 'react'

import {closeMenu, menu, logo} from "../assets"
import { navLinks } from "../constants"



const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  // const connectors = ethereumClient.getConnectors()
  
  

  return (

    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={logo} alt="logo" className="md:w-[200px] h-[40px] xs:w-[90px] w-[90px]"/>
      <p className='flex font-popins font-bold text-textNav md:text-[20px] sm:mr-3 xs:text-[14px]'>Canto Raccoons</p>
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        
        {navLinks.map((nav, index)=> (
          <li
          key={nav.id}
          className={`font-popins font-bold cursor-pointer text-[20px] ${index=== navLinks.length-1 ? "mr-0" : "mr-10"} text-textNav border-2 border-solid border-textMain rounded-full p-2`}
          >
            <a href={`#${nav.id}`} >
              {nav.title}
            </a>
          </li>

        ))}
      </ul>
      
      
         
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        
          <img src={toggle ? closeMenu : menu} alt="menu" className='w-[128px] h-[20px] object-contain'
          onClick={()=>setToggle((prev)=>!prev)}
          />
          <div className={`${toggle ? "flex" : "hidden"} p-6 flex-col bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`} >
          
            <ul className='list-none flex justify-end items-center flex-1 flex-col'>
              {navLinks.map((nav, index)=> (
                <li
                key={nav.id}
                className={`font-popins font-normal cursor-pointer text-[16px] ${index=== navLinks.length-1 ? "mr-0" : "mb-4"} text-textNav `}
                >
                  <a href={`#${nav.id}`}>
                    {nav.title}
                  </a>
                </li>

              ))}
            </ul>
           
            
          
          </div>
      </div>
    </nav>
  )
}

export default Navbar