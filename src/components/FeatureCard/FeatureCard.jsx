import './FeatureCard.css'
import React from 'react'

const FeatureCard = ({title,icon,content}) => {
  return (
    <div className='featureCard-bg'>
        <div className='feature-icon-div'>
        <img src={process.env.PUBLIC_URL+`/assets/features/${icon}.png`} alt='feature-icon' className='feature-icon' />
        </div>
        <h4 className='featureCard-title'>{title}</h4>
        <p className='featuredCard-content'>{content}</p>
    </div>
  )
}

export default FeatureCard
