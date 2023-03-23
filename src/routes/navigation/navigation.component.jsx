import './navigation.styles.scss'

import {Link, Outlet} from 'react-router-dom'

import {ReactComponent as NavLogo} from '../../assets/crown.svg'

export const Navigation = () => {
    return (
        <>
            <div className="navigation">
                <Link to="/" className="logo-container">
                    <NavLogo className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link to='/' className="nav-link">Home</Link>
                </div>
            </div>
            <Outlet />
        </>
    )
}