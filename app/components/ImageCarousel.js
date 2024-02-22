import React from 'react'

const ImageCarousel = () => {
  const images = [
    {url: '/schoolPorters1.jpg'},
    {url: '/schoolPorters2.jpg'},
    {url: '/schoolPorters3.jpg'},
  ]
  return (
    <div  style={{
      backgroundImage: `url(${images[0].url})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
      height: '48vh', // Adjust height as needed
      border: '1px solid black', // Add border as needed
    }} >
      Images
    </div>
  )
}

export default ImageCarousel
