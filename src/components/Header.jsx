import React from 'react';
import { Link } from 'react-router-dom';

const Header = ( { appName } ) => {
    return (
        <header className="container">
            <div className="row">
                <div className="col-12 px-0">
                    <nav className="navbar">
                        <h1 className="navbar-brand">
                            <Link to="/" className="text-reset text-decoration-none">{appName}</Link>
                        </h1>
                        <p className="navbar-brand">
                            <Link to="/bookmarks" className="text-reset text-decoration-none"><i className="fas fa-bookmark"></i></Link>
                        </p>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;