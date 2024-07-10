import { createContext } from "react";
import { useMedia } from "../Hooks/useMedia";

const DeviceContext = createContext()

export const DeviceProvider = (p) => {
    const { children } = p

    const breakpoints = ['(max-width: 768px)', '(min-width: 769px)'];
    const values = ['mobile', 'desktop'];
    const defaultValue = 'mobile';
  
    const device = useMedia(breakpoints, values, defaultValue);
  
    const contextValue = {
        device: device
    }

    return (
        <DeviceContext.Provider value={contextValue}>
            {children}
        </DeviceContext.Provider>
    )
}

export default DeviceContext