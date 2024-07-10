
import styled from "styled-components";
import Sidebar from "./Component/Sidebar";
import Overlay from "./Component/Overlay";
import { useContext, useState } from "react";
import DeviceContext from "../Context/Device.context";
import Header from "./Component/Header";
import OverlayContext, { OverlayProvider } from "../Context/overlay.context";
import { ModalProvider } from "../Context/Modal.conetxt";
import defaultBackGround from '../assets/photo/defaultBackGround.jpg';

const DefaultLayout = (p) => {
    const { children } = p

    return (
        <ModalProvider>
            <OverlayProvider>
                <DefaultLayoutComponent>{children}</DefaultLayoutComponent>
            </OverlayProvider>
        </ModalProvider>
    )
}

const DefaultLayoutComponent = (p) => {
    const { children } = p

    const { device } = useContext(DeviceContext)

    const [isOpenMenu, setIsOpenMenu] = useState(false)

    const { openOverlay, closeOverlay } = useContext(OverlayContext)


    const hdleClickOverLay = () => {
        if (isOpenMenu) return toggleSideBar(false)
    }

    const toggleSideBar = (boolen) => {
        return () => {
            setIsOpenMenu(boolen)
            boolen
                ? openOverlay()
                : closeOverlay()
        }
    }

    return (
        <DftLaySty device={device} >
            {device === "mobile" && <Header toggleSideBar={toggleSideBar} />}
            <div className="body">
                <Sidebar isopen={isOpenMenu} toggle={toggleSideBar} />
                <Overlay onClick={hdleClickOverLay} />
                <div className="page-content">
                    {children}
                </div>
            </div>
        </DftLaySty>
    )
}

export default DefaultLayout;

const DftLaySty = styled.div`
   
    background-image: url(${defaultBackGround});
    height: 100vh;
    width: 100vw;
    position: relative;

    .body {
        display: flex;
        flex-direction: row;

        .page-content {
            margin-left: ${({ device }) => device === "desktop" ? "var(--sidebar-wt)" : "0px"};
            width: 100%;

            @media (max-width: 768px) {
                height: calc(100vh - var(--header-ht));
            }

            @media (min-width: 769px) {
                height: 100vh;
            }
            width: 100%;
            /* padding-left: 2%;
            padding-right: 2%; */
        }
    }

`

