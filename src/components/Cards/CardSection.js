import React from 'react'
import styles from "./cardsContainer.module.css"
import Cards from './Cards'

const CardSection = () => {
  return (
    <div className={styles.container}>
      <Cards/>
    </div>
  )
}

export default CardSection
