import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles/NewsSingle.scss';

class NewsSingle extends Component {
    state = {
        savedForLater: false
    }
    render() {
        return (
            <li className="col-12 col-md-4 mb-5 NewsSingle">
                <article>
                    <div className="cover-img" style={{
                        backgroundImage: `url(${this.props.newsSingle.urlToImage})`
                    }}>
                        <div className="bookmark" onClick={() => {this.setState({ savedForLater: !this.state.savedForLater })}}>
                            <i className={`fas fa-bookmark ${this.state.savedForLater ? 'saved' : null}`}></i>
                        </div>
                        <div className="PublishedDate">
                        <small className="text-muted">Just Published</small>
                        </div>
                    </div>
                    <h2 className="serif" style={{ WebkitBoxOrient: 'vertical' }}><Link to="/article" className="text-reset text-decoration-none">{this.props.newsSingle.title}</Link></h2>
                </article>
            </li>
        );
    }
}

export default NewsSingle;