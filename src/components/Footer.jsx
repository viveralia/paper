import React from 'react';

const Footer = ( { appName } ) => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="container">
            <div className="row">
                <div className="col-12 py-4">
                    <div className="border-top py-4">
                        <div className="d-flex justify-content-between">
                            <small className="font-weight-bold">Paper</small>
                            <small className="text-muted">© {currentYear} {appName} Labs, Inc.</small>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;