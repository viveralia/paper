import React from 'react';
import NewsSingle from './NewsSingle';

const News = ( { news } ) => {
    return (
        <main className="container">
            <ul className="list-unstyled row">
                {news.map((newsSingle, i)=> (
                    <NewsSingle key={i} newsSingle={newsSingle} />
                ))}
            </ul>
        </main>
    );
};

export default News;