import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../../utils/motion";
import './customTexts.css'

export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textVariant2}
    initial='hidden'
    whileInView='show'
    className={`sous-tritre md-before-hidden md-after-hidden before:bg-dark after:bg-dark dark:before:bg-light dark:after:bg-light ${textStyles} text-dark dark:text-light`}
  >
    {title}
  </motion.p>
);

export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial='hidden'
    whileInView='show'
    className={`titre ${textStyles} text-dark dark:text-light`}
  >
    {title}
  </motion.h2>
);
