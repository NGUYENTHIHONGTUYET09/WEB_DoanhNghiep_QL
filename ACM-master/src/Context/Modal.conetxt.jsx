import React, { createContext } from "react";

const ModalContext = createContext()

export const ModalProvider = (p) => {
    const { children } = p

    const [modal, setModal] = React.useState({
        isOpen: false,
        content: null
      });
    
      
      const openModal = content => {
        setModal({
          isOpen: true,
          content
        });
      };
    
      const closeModal = () => {
        setModal({
          isOpen: false,
          content: null
        });
      };

      const valueContext = {
        modal, openModal, closeModal
      }

    return (
        <ModalContext.Provider value={valueContext}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalContext