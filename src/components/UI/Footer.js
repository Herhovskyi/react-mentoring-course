import React from 'react';

import Logo from './Logo';

import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <Logo/>
        </footer>
    );
}

export default Footer;
