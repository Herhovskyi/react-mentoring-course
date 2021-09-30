import React, { useState } from 'react';

import Select from './Select';
import Movies from './Movies';

import * as data from "../../assets/data.json"

import styles from './Main.module.css';

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
            <Movies movies={data.movies}/>
        </div>
    );
}

export default Main;
