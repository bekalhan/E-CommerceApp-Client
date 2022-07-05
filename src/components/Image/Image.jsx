import React from 'react';
import ImageLeft from '../ImageLeft/ImageLeft';
import ImageRight from '../ImageRight/ImageRight';
import './Image.css';

function Image() {
  return (
    <div className='Image'>
        <ImageLeft />
        <ImageRight />
    </div>
  )
}

export default Image;