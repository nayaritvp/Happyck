import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faBirthdayCake } from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {
    const linkStyles = {
        color: 'white',
        textDecoration: 'none'
    };

    const iconStyles = {
        color: 'white'
    };

    const happyCakeStyles = {
        color: 'white',
        fontSize: '1.2rem', // Tamaño del texto
        fontWeight: 'bold' // Negrita
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#EF4040' }}>
            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink 
                        style={linkStyles}
                        className="nav-item nav-link d-flex align-items-center"
                        activeClassName="active"
                        exact
                        to="/">
                        <FontAwesomeIcon icon={faHome} style={iconStyles} className="me-1" /> Home
                    </NavLink>
                    <NavLink 
                        style={linkStyles}
                        className="nav-item nav-link d-flex align-items-center"
                        activeClassName="active"
                        exact
                        to="/contacto">
                        <FontAwesomeIcon icon={faEnvelope} style={iconStyles} className="me-1" /> Contacto
                    </NavLink>
                    <div className="nav-item d-flex align-items-center">
                        <FontAwesomeIcon icon={faBirthdayCake} style={iconStyles} />
                        <span style={happyCakeStyles}>Happy Cake</span>
                    </div>
                </div>
            </div>
        </nav>
    );
};



