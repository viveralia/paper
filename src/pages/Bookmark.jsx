import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import EmptyBookmark from '../components/EmptyBookmark';

class Bookmark extends Component {
    render() {
        return (
        <Fragment>
            {/* SEO */}
            <Helmet>
                <title>Your saved articles</title>
            </Helmet>
            {/* Content */}
            <EmptyBookmark/>
        </Fragment>
        );
    }
}

export default Bookmark;