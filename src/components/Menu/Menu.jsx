import React from 'react'
import styles from "./menu.module.css"
import Link from 'next/link'
import MenuPost from '../menuPosts/MenuPost'
import MenuCategories from '../MenuCategories/menuCategories'
const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>What's hot</h2>
      <h1 className={styles.title}>Most Popular</h1>
       <MenuPost withImage={false}/>
        

      <h2 className={styles.subtitle}>Discover by topics</h2>
      <h1 className={styles.title}>Categories</h1>
       <MenuCategories/> 
    
      <h2 className={styles.subtitle}>Choosen by Editor</h2>
      <h1 className={styles.title}>Editor pick</h1>
      <MenuPost withImage={true}/>
    

    </div>
  )
}

export default Menu
