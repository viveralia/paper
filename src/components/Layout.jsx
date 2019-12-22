import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({children}) => {
    const appName = 'Paper';
    return (
        <Fragment>
            <Header appName={appName} />
            {children}
            <Footer appName={appName} />
        </Fragment>
    );
};

export default Layout;