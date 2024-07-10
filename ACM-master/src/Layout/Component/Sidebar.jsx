import { Icon } from "../../assets/icon";

import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import DeviceContext from "../../Context/Device.context";
import paths from "../../Routes/path";

const Sidebar = (p) => {
    const { isopen, toggle } = p

    const menuItems = [
        { label: 'Trang chủ', icon: Icon.home, link: paths.home },
        { label: 'Phòng họp', icon: Icon.meeting, link: paths.meeting },
        { label: 'Biểu mẫu', icon: Icon.form, link: paths.Form },
        { label: 'Quản lý nhân viên', icon: Icon.user, link: paths.users },
    ];

    const { device } = useContext(DeviceContext)

    const SideStyle = {
        open: () => ({
            width: device === "desktop" ? "300px" : "250px",
            transition: {
                type: 'spring',
            }
        }),
        closed: {
            width: device === "desktop" ? 'var(--sidebar-wt)' : "0px",
            transition: {
                delay: 0.2,
                type: 'spring',
                stiffness: 400,
                damping: 40
            }
        }
    };

    const [select, setSelect] = useState()

    const handleSelect = (link) => {
        setSelect(link)
    }

    useEffect(() => {
        setSelect(window.location.pathname)
    }, []);

    return (
        <SideCon
            initial={"closed"}
            animate={isopen ? 'open' : 'closed'}
            variants={SideStyle}
            onMouseEnter={toggle(true)} onMouseLeave={toggle(false)}>
            <div className="logo"></div>
            <SidebarMenu>
                {menuItems.map((menuItem, idx) => (
                    <SidebarMenuItem key={idx}
                        onClick={() => handleSelect(menuItem.link)}
                        className={select === menuItem.link && 'active'}
                        whileHover={{
                            x: "5px",
                            transition: {
                                duration: 1,
                                type: "spring"
                            }
                        }} >
                        <SidebarLink to={menuItem.link}>
                            {<div className="icon-wrapper">
                                <menuItem.icon className="icon" />
                            </div>}
                            {/*  this may cause broken UI in item in sidebar when font-size change */}
                            <motion.span initial={{ opacity: 0, width: 0, height: 0 }}
                                animate={isopen ? { opacity: 1, marginLeft: "23px", width: "100%", height: "25px" } : { opacity: 0, width: 0, height: 0 }}
                                transition={{ duration: .2 }}
                            >{menuItem.label}</motion.span>
                        </SidebarLink>
                    </SidebarMenuItem>))}
            </SidebarMenu>
        </SideCon>
    )
}

export default Sidebar


const SideCon = styled(motion.div)`
    z-index: 1001;
    overflow: hidden;
    position: absolute;
    top: 0;
    height: 100vh;
    max-width: 375px;
    background-color: #FFFFFF;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;

    .logo{
        width: 100%;
        height: 50px;
        background-color: aliceblue;
    }
`

const SidebarMenu = styled.ul`
  list-style: none;
  padding: 0 10px;
  margin: 0;
  overflow: hidden;
`;

const SidebarMenuItem = styled(motion.li)`
    
  &.active{
    border-radius: 10px!important;
    z-index: 99;
    box-shadow: 0 0 10px 1px rgba(30,30,30,.7);
    a {
      color: #ffffff!important;
      background: var(--main-gradient);
    }
  }

`;

const SidebarLink = styled(Link)`
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 5px;
    font-size: 12.4px;
    font-weight: 600;
    position: relative;
    justify-content: flex-start;

    .icon-wrapper {
        height: 17px;
        width: 29px;
        position: relative;
        .icon {
            position: absolute;
            left: 0;
            width: 100%;
            font-size: 18px;
        }
    }
`;