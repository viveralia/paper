import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';

class Article extends Component {
    render() {
        return (
            <Fragment>
                {/* SEO */}
                <Helmet>
                    <title>Article</title>
                </Helmet>
                {/* Content */}
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>Title</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius magni perferendis quaerat ipsum aperiam quia doloribus ad tempora molestiae, id aspernatur, veritatis vitae accusantium, alias quasi ea. Error, numquam quos?</p>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Article;