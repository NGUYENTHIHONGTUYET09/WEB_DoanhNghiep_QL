import { motion } from "framer-motion";
import { useContext } from "react";
import styled from "styled-components";
import OverlayContext from "../../Context/overlay.context";

const overlayVariant = {
    hidden: { opacity: 0, visibility: "hidden" },
    visible: { opacity: 1, visibility: "visible" },
  };

const Overlay = (p) => {
    const { onClick } = p

    const { isOverlay, closeOverlay } = useContext(OverlayContext)

    const hdleClick = () => {
      closeOverlay()
      onClick()
    }

    return <Container
                initial="hidden"
                animate={ isOverlay ? "visible" : "hidden"}
                variants={overlayVariant}
                transition={{ duration: .2 }}
                data-name="global-overlay"
                onClick={hdleClick}></Container>
}

export default Overlay;

const Container = styled(motion.div) `
    cursor: pointer;
    position: fixed;
    background-color: #44ffff;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,.2);
    z-index: 1000;
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
    opacity: 1;
`