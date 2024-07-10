import { motion } from "framer-motion";
import styled from "styled-components";
import { Icon } from "/src/Assets/icon.js";
import React from "react";
import DeviceContext from "../Context/Device.context";
import ModalContext from "../Context/Modal.conetxt";
import OverlayContext from "../Context/overlay.context";


const Modal = (p) => {
    const { children, data } = p

    const { device } = React.useContext(DeviceContext)
    const { closeOverlay } = React.useContext(OverlayContext)
    const { modal, closeModal }  = React.useContext(ModalContext)

    const modalStyle = {
        open: () => ({
            width: device === "desktop" ? "400px" : "100vw",
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 50
            }
        }),
        closed: {
            width: 0,
            opacity: 0,
            transition: {
                delay: 0,
                type: 'spring',
                stiffness: 900,
                damping: 40
            }
        }
    };

    const hdleToggle = () => {
        closeModal()
        closeOverlay()
    }

    return (   
    <Container  
        initial={"closed"}
        animate={modal.isOpen ? 'open' : 'closed'}
        variants={modalStyle}
        >
        <Title>
            <h1>{modal.content} mới</h1>
            <Icon.x onClick={hdleToggle}/>
        </Title> 
       {children}
    </Container> );
}
 
export default Modal;

const Container = styled(motion.div)` 
    right: 0;
    height: 100vh;
    z-index: 1002;
    background-color: #ffffff;
    position: fixed;
    top: 0;
`

const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    height: var(--modal-header);

    h1 {
        font-size: 2.3rem;
        color: #2c2c2c;
    }

    svg {
        font-size: 2.4rem;
        cursor: pointer;
    }
`

