import React from 'react';
import {Link} from 'react-router-dom';
import PlayMusic from '../../components/PlayMusic/PlayMusic';
import ChillGif from '../../components/ChillGif/ChillGif';
import styles from './ChillPage.module.css';

function ChillPage() {
    return (
        <div>
            <h1>Chill</h1>
            <div className={styles.container}>
                <ChillGif />
                <div className={styles.card}>
                    <PlayMusic />
                <div className={styles.refDiv}>
                    <img width="80" alt="TD" className={styles.pic} src="https://i.imgur.com/poEaTAk.png"/>
                    <div>
                        <p className={styles.creds}>Music credits: <span className={styles.TD}>TD</span></p>
                        <Link onClick={() => window.open('https://soundcloud.com/tanookidaniel', '_blank')}>Link for more songs!</Link>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default ChillPage; 