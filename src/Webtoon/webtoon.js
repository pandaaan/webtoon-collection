import React from 'react';
import Data from '../data/webtoonData.json';
import WebtoonDetail from './webtoonList';

class Webtoon extends React.Component {
    render() {
        return (
            <>
                {Data.map((item, index) => {
                    return (
                        <WebtoonDetail post={item} key={`post-list-key ${index}`} />
                    )
                })}
            </>
        );
    }
}


export default Webtoon;


