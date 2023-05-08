import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import styles from "../../assets/styles";
import { staggerContainer } from '../../utils/motion';
import { ExploreCard, TitleText, TypingText, TabComponent } from "../../components";

import {  Anemo, Electro, Geo, Cryo, Pyro } from '../../constants'

import tabs from '../../constants/tabs'
import { useStateContext } from "../../contexts/ContextProvider";

const Explore = () => {

  const [active, setActive] = useState(2);

  const { indexTab } = useStateContext();

  const [team, setTeam] = useState(Electro);

  useEffect(() => {
    setTeam(Electro);
  }, [indexTab]);

  const tabContentStyle = 'mt-[50px] flex flex-col md:flex-row min-h-[70vh] gap-2'

  return (
    <section className={`${styles.paddings}`} id="projet">
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title='ONIRIX' textStyles='text-center'/>
        <TitleText title={<>Explorez  <br className="md:block hidden" /> les possibilités de prédiction </>} textStyles='text-center' />

        {/* Tab menu */}
        {/* <TabComponent /> */}

        {/* Tab content */}
        { 
          tabs.map((tab, index) => (
            <div key={tab.id} className={indexTab === tab.id ? tabContentStyle : 'hidden'}>
              {
                team.map((world, index) => (
                  <ExploreCard
                    key={world.id}
                    {...world}
                    index={index}
                    active={active}
                    handleClick={setActive}
                  />
                ))
              }
            </div>
          )) 
        }
            
      </motion.div>
    </section>
  )
};

export default Explore;
