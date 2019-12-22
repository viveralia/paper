import React from 'react';
import './styles/Hero.scss';

const Hero = () => {
    return (
        <div className="my-5 Hero">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 headline my-auto">
                        <h1 className="serif mb-3">All the news in one place.</h1>
                        <p className="text-muted">Keep up to date with the most recent updates from your favorite sources. Anytime, anywhere. It's free.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;