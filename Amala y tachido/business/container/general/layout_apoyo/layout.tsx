import Head from "next/head";
import {motion} from 'framer-motion';

export default function Layout({children}: any) {
    const pageSlide = {
        initial: {
            opacity: 0,
            x: "-100vw"
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.3,
            }
        },
        exit: {
            opacity: 0,
            x: "100vw",
            transition: {
                duration: 0.3,

            }
        }
    };
    return (
        <>
            <Head>
                <title>Amala y Tachido</title>
            </Head>
            <motion.div
                variants={pageSlide}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{duration: 0.3}}
            >
                {children}
            </motion.div>
        </>
    )
}
