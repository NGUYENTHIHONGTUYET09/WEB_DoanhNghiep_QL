import React, { createContext } from "react";

const OverlayContext = createContext()

export const OverlayProvider = (p) => {
    const { children } = p

    const [isOverlay, setOverlay] = React.useState(false)

    const openOverlay = () => {
        setOverlay(true)
    }

    const closeOverlay = () => {
        setOverlay(false)
    }

    const contextValue = {
        isOverlay, openOverlay, closeOverlay
    }

    return (
        <OverlayContext.Provider value={contextValue}>
            {children}
        </OverlayContext.Provider>
    )
}

export default OverlayContext