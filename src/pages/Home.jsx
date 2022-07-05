import React from 'react';
import Image from '../components/Image/Image';
import Card from '../components/Card/Card';
import Photos from '../components/Photos/Photos';
import Search from '../components/Search/Search';
import Footer from '../components/Footer/Footer';

function Home() {
  return (
    <div className='Home'>
        <Image />
        <Card />
        <Photos />
        <Search />
        <Footer />
    </div>
  )
}

export default Home