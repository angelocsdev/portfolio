import React from 'react'

import styles from "./Hero.module.css"

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Ângelo!</h1>
            <p className={styles.description}>I'm a Frontend Developer.</p>
            <a href="mailto:myemail@email.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src="../assets/hero/heroImage.png" alt="Hero image of me" className={styles.heroImg} />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
    </section>
  )
}

export default Hero