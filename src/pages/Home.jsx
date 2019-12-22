import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../components/Hero';
import News from '../components/News';
import NewsLoader from '../components/NewsLoader';

class Home extends Component {
    state = {
        loading: false,
        error: null,
        data: {
            articles: []
        },
        savedArticles: []
    }
    componentDidMount() {
        this.fetchArticles();
    }
    fetchArticles = async () => {
        this.setState({ loading: true });
        try {
            const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=ec4b64ed6501408088d62763ede73d6c';
            const response = await fetch(url);
            const data = await response.json();
            this.setState({ loading: false, data });
            console.log(this.state.news);
        } catch (error) {
            this.setState({ loading: false, error });
        }
    }
    render() {
        return (
            <Fragment>
                {/* SEO */}
                <Helmet>
                    <title>Paper: All the news in one place</title>
                </Helmet>
                {/* Content */}
                <Hero/>
                {this.state.loading ? <NewsLoader/> : null}
                <News news={this.state.data.articles} />
            </Fragment>
        );
    }
}

export default Home;