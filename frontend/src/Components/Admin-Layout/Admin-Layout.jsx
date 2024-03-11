import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const AdminLayout = () => {
    return (
        <>
            <header className='container'>
                <div><img src='' alt='logo'></img></div>
                <nav>
                    <ul>
                        <li>
                            <NavLink to='/admin/users'>users</NavLink>
                        </li>
                        <li>
                            <NavLink to='/admin/services'>services</NavLink>
                        </li>
                        <li>
                            <NavLink to='/admin/contacts'>contacts</NavLink>
                        </li>
                        <li>
                            <NavLink to='/'>home</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <Outlet />
        </>
    )
}

export default AdminLayout
