import React, { useState } from 'react';

import Select from './UI/Select';
import MovieList from './MovieList';

import styles from './Main.module.css';

import film1Img from '../assets/images/film1.png';
import film2Img from '../assets/images/film2.png';
import film3Img from '../assets/images/film3.png';
import film4Img from '../assets/images/film4.png';
import film5Img from '../assets/images/film5.png';
import film6Img from '../assets/images/film6.png';

const data = {
    "categories": ["all", "Action", "Comedy", "Drama", "Fantasy", "Horror", "Mystery", "Romance", "Thriller", "Western"],
    "filterBy": ["release date"],
    "movies": [
        {
            "poster": film1Img,
            "id": "1",
            "title": "Pulp Fiction",
            "shortInfo": "Action & Adventure",
            "year": "2004"
        },
        {
            "poster": film2Img,
            "id": "2",
            "title": "Bohemian Rhapsody",
            "shortInfo": "Drama, Biography, Music",
            "year": "2003"
        },
        {
            "poster": film3Img,
            "id": "3",
            "title": "Kill Bill: Vol 2",
            "shortInfo": "Oscar winning Movie",
            "year": "1994"
        },
        {
            "poster": film4Img,
            "id": "4",
            "title": "Avengers: War of Infinity",
            "shortInfo": "Action & Adventure",
            "year": "2004"
        },
        {
            "poster": film5Img,
            "id": "5",
            "title": "Inception",
            "shortInfo": "Action & Adventure",
            "year": "2003"
        },
        {
            "poster": film6Img,
            "id": "6",
            "title": "Reservoir dogs",
            "shortInfo": "Oscar winning Movie",
            "year": "1994"
        }
    ]
};


function Main() {
    const [filters, setFilters] = useState(data.categories);
    return (
        <div className={styles.main}>
            <div className={styles["filter-wrapper"]}>
                <ul>
                    {filters.map((item, idx) => {
                        return (
                            <li key={idx}>{item}</li>
                        );
                    })}
                </ul>
                <div className={styles.sorter}>
                    <p>Sort by</p>
                    <Select className={styles.select} options={data.filterBy} />
                </div>
            </div>
            <p className={styles["filter-results"]}><b>39</b> movies found</p>
            <MovieList movies={data.movies} />
        </div>
    );
}

export default Main;
