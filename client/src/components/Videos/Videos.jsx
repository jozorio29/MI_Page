import React from 'react'
import styles from './Videos.module.css'
import VideoCard from './VideoCard/VideoCard'

const Videos = ({ videos }) => {
  return (
    <div className={styles.videos}>
        {videos.map((item, index) => (
            <VideoCard key={item.image} image={item.image} name={item.name} index={index} />
        ))}
    </div>
  )
}

export default Videos