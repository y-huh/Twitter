import React from 'react'
import {dashboardRouteList} from "../../hooks/useRoute"
import { Route, Routes } from 'react-router-dom'
import DashboardLayout from '../../features'
const DashboardRoutes = () => {
  return (
    <DashboardLayout>
          <Routes> {dashboardRouteList.map(item => <Route key={item.id} path={item.path} element={item.element}/>)}</Routes>
    </DashboardLayout>
  )
}

export default DashboardRoutes