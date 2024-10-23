
import React from 'react'
import styles from "./card.module.css"
import Image from 'next/image'
import Link from 'next/link'
const Card = () => {
  return (
    <div className={styles.container}>
       <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt='' width={400} height={400} />
        </div>
        <div className={styles.textContainer}>
            <div className={styles.detail}>
                <span className={styles.date}>11.02.2023</span>
                <br />
                <span className={styles.category}>CULTURE</span>
             
            </div>
            <Link href="/">
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            </Link>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio delectus alias aspernatur. Numquam accusantium, reprehenderit non recusandae eligendi magni possimus molestias veniam natus distinctio illo aspernatur. Sapiente reiciendis tempora soluta.</p>
            <Link href='/'>Read More</Link>
        </div>
    </div>
  )
}

export default Card
