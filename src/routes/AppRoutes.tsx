import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import DashboardLayout from '../layout/DashboardLayout'
import Analytics from '../pages/Analytics'
import Dashboard from '../pages/Dashboard'
import Orders from '../pages/Orders'
import Settings from '../pages/Settings'

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <DashboardLayout>
                <Routes>
                    <Route path='/' element={<Navigate to="/dashboard" replace />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/analytics' element={<Analytics />} />
                    <Route path='/orders' element={<Orders />} />
                    <Route path='/settings' element={<Settings />} />
                </Routes>
            </DashboardLayout>
        </BrowserRouter>
    )
}

export default AppRoutes