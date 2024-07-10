import GlobalStyles from './GlobalStyle'
import { Routes, Route } from "react-router-dom";
import { routes } from './Routes/route';
import { DeviceProvider } from "./Context/Device.context"
import { AuthProvider } from './Context/Auth.context';

const App = () => {

  return (
    <AuthProvider>
      <DeviceProvider>
        <GlobalStyles />
        <Routes>
          {routes.map((route, idx) => {
            return (<Route
              key={idx}
              exact={route.exact}
              path={route.path}
              element={route.page}
            ></Route>
            )
          })}
        </Routes>
      </DeviceProvider>
    </AuthProvider>
  )
}

export default App
