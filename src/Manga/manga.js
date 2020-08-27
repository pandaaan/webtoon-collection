import React from 'react';
import Data from '../data/mangaData.json';
import MangaDetail from './MangaList';

class Manga extends React.Component {
    render() {
        return (
            <>
                {Data.map((item, index) => {
                    return (
                        <MangaDetail post={item} key={`post-list-key ${index}`} />
                    )
                })}
            </>
        );
    }
}


export default Manga;
