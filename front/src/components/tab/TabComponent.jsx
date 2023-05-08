import React from 'react';
import { motion } from 'framer-motion';
import tabs from '../../constants/tabs'
import { useStateContext } from '../../contexts/ContextProvider'
import { tabComponentVariants, tabVariant, tabTextVariant } from '../../utils/motion';

const TabComponent = () => {

    const { indexTab, setIndexTab } = useStateContext();

    const OpenTab = (index) => {
        setIndexTab(index)
    }

  return (
    <motion.div 
        variants={tabComponentVariants}
        initial='hidden'
        whileInView='show'
        className='tabs-component'
    >
        <ul className="tab-links">
            {tabs.map((tab, index) => (
                <motion.li
                    key={tab.id}
                    className={indexTab === tab.id ? 'tab active' : 'tab'}
                    variants={tabVariant}
                    animate={indexTab === tab.id ? "active" : "inactive"}
                >
                    <a href={`#${indexTab}`} onClick={() => OpenTab(tab.id)}>
                        { tab.icon }
                        <motion.span variants={tabTextVariant}>{tab.title}</motion.span>
                    </a>
                </motion.li>  
            ))}
        </ul>
    </motion.div>
  )
}

export default TabComponent