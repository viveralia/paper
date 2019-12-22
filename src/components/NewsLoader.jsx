import React from 'react';
import ContentLoader from "react-content-loader";

const NewsLoader = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-4">
                <ContentLoader 
                    height={400}
                    width={400}
                    speed={2}
                    primaryColor="#f3f3f3"
                    secondaryColor="#ecebeb">
                        <rect x="0" y="0" rx="5" ry="5" width="400" height="250" />
                        <rect x="0" y="260" rx="5" ry="5" width="400" height="50" />
                    </ContentLoader>
                </div>
                <div className="col-12 col-md-4">
                <ContentLoader 
                    height={400}
                    width={400}
                    speed={2}
                    primaryColor="#f3f3f3"
                    secondaryColor="#ecebeb">
                        <rect x="0" y="0" rx="5" ry="5" width="400" height="250" />
                        <rect x="0" y="260" rx="5" ry="5" width="400" height="50" />
                    </ContentLoader>
                </div>
                <div className="col-12 col-md-4">
                <ContentLoader 
                    height={400}
                    width={400}
                    speed={2}
                    primaryColor="#f3f3f3"
                    secondaryColor="#ecebeb">
                        <rect x="0" y="0" rx="5" ry="5" width="400" height="250" />
                        <rect x="0" y="260" rx="5" ry="5" width="400" height="50" />
                    </ContentLoader>
                </div>
            </div>
        </div>
    );
};

export default NewsLoader;