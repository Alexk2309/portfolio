import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const HeaderSection = ({ children, duration = 1.5 }: any) => {

    const headerVariants = {
        visible: { opacity: 1, transition: { duration: duration }, y: '0' },
        hidden: { opacity: 0, y: '10vh' }
    };

    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
        control.start("visible");
        }
    }, [control, inView]);
    
  return (
    <motion.div
        ref={ref}
        variants={headerVariants}
        initial="hidden"
        animate={control}
    >
        {children}
    </motion.div>
  );
};



export default HeaderSection;