import React from 'react';

import Logo from './Logo';
import Button from './Button';
import Input from './Input';

import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <Logo />
                <Button className={styles["add-btn"]}>+ ADD MOVIE</Button>
            </div>
            <h2 className={styles.headline}>FIND YOUR MOVIE</h2>
            <div className="search-block">
                <Input id="search" className={styles.search} placeholder="What do you want to watch?" />
                <Button className={styles["search-btn"]}>Search</Button>
            </div>
        </header>
    );
}

export default Header;
