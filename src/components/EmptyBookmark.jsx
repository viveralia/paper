import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Hero.scss';

const EmptyBookmark = () => {
    return (
        <div className="my-5 Hero">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 headline">
                        <h1 className="serif mb-3">There are <span className="selected">no saved articles</span> yet.</h1>
                        <p className="text-muted mb-5">Start saving articles by clicking the bookmark icon, so you can read them later.</p>
                        <Link to="/" className="btn btn-dark">Save your first article <i className="fas fa-bookmark pl-2"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmptyBookmark;