import React from 'react'
import {dashboardRouteList} from "../../hooks/useRoute"
import { Route, Routes } from 'react-router-dom'
const DashboardRoutes = () => {
  return (
    <Routes> {dashboardRouteList.map(item => <Route key={item.id} path={item.path} element={item.element}/>)}</Routes>    
  )
}

export default DashboardRoutes