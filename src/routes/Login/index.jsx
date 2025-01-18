import { Route, Routes } from "react-router-dom"
import {loginRoutes} from "../../hooks/useRoute"

const LoginRoutes = () => {
  return (
    <Routes>{loginRoutes.map(item => <Route key={item.id} path={item.path} element={item.element}/>)}</Routes>
  )
}

export default LoginRoutes