
import { Navbar, Hero, Info, Title, Roadmap} from './components'

import styles from './style'
// import reactLogo from './assets/react.svg'
// import './App.css'


function App() {
  

  return (
    <>
    <div className={`bg-fixed w-screen h-[100%] bg-hero-pattern bg-cover bg-top z-0`}> 
      <div className={`${styles.paddingX} ${styles.flexCenter} bg-transparent z-20 `}>
            <div className={styles.boxWidth}>
             <Navbar />
             </div>

      </div>
     
        <div className='w-full overflow-visible pt-[900px] z-0'>
          <div className={`bg-transparent ${styles.flexCenter} `}>
              {/* <Title/>  */}
          </div>
        </div>

        </div>
        <div className={`bg-fixed w-screen h-[100px] bg-main-texture bg-cover bg-top z-50 `}>

        </div>
        {/* <div className={`bg-local w-full  bg-main-texture bg-cover bg-center h-[1080px]`}>

        </div> */}

        
         <div className={`${styles.paddingX} ${styles.flexStart}`}>
           <div className={styles.boxWidth}>
              <Hero/>  
           </div>

         </div>

        <div className={`bg-fixed w-full h-[100px] bg-main-texture bg-cover bg-top z-50 `}>
        </div>

         <div className={`${styles.paddingX} ${styles.flexStart}`}>
           <div className={styles.boxWidth}>
              <Roadmap/>
           </div>
         </div>
         <div className={`bg-fixed w-full h-[100px] bg-main-texture bg-cover bg-top z-50 `}>
        </div>
        {/* <div className={`${styles.paddingX} ${styles.flexStart}`}>
           <div className={styles.boxWidth}>
              <Info/>
           </div>
         </div> */}

    </>
  )
}

export default App
