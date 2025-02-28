import React from 'react'

import styles from "./About.module.css"

const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src="../assets/about/aboutImage.png" alt="Me sitting with a laptop" className={styles.aboutImage}/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src="../assets/about/cursorIcon.png" alt="Cursor icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>Eu sou um desenvolvedor frontend com experiência em construção de sites responsivos e otimizados.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src="../assets/about/serverIcon.png" alt="Server icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>Eu tenho experiência em desenvolvimento rápido e otimizado de sistemas backend e API's.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src="../assets/about/uiIcon.png" alt="UI icon" />
                    <div className={styles.aboutItemText}>
                        <h3>UI/UX Designer</h3>
                        <p>Eu tenho noções em Design UI/UX e tenho experiência em construção de sites com uma boa interface do usuário pensando no cliente em 1º lugar.</p>
                    </div>
                </li>
            </ul>
        </div>
        
    </section>
  )
}

export default About