import { useEffect, useState } from "react";
import { motion } from "framer-motion";
// Components
import {Banner, Loader, Navbar} from '../../components'
import './hero.css'

const Hero = () => {

    const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);

  return (
    <div className="h-[100vh] overflow-hidden">
      {loading ? (
          <motion.div key='loader'>
            <Loader setLoading={setLoading} />
          </motion.div>
      ) : (
        <>
          <Navbar />
          <Banner />
          {!loading && (
            <div className='transition-image final !w-[90%]'>
              <motion.img
                src={`/bg/farany.jpg`}
                layoutId="main-farany"
                transition={{
                  ease: "easeInOut", 
                  duration: 1.4
                }}
                className="rounded-t-3xl"
              />
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default Hero