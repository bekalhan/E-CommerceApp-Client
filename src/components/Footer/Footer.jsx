import React from 'react'
import './Footer.css';

function Footer() {
  return (
    <div className='Footer'>
        <div className='desc-root'>
            <h1>ROOT.</h1>
            <article>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </article>
        </div>
        <div className='useful-links'>
             <h3>Useful Links</h3>
             <div className='u-links'>
                <div className='f-links'>
                    <ul>
                        <li>Home</li>
                        <li>Man Fashion</li>
                        <li>Accessories</li>
                        <li>Order Tracking</li>
                    </ul>
                </div>
                <div className='s-links'>
                    <ul>
                        <li>Cart</li>
                        <li>Woman Fashion</li>
                        <li>My Account</li>
                        <li>Wishlist</li>
                    </ul>
                </div>
             </div>
        </div>
        <div className="contact">
             <h3>Contact</h3>
             <h6>622 Dixie Path , South Tobinchester 98336</h6>
             <h6>+1 234 56 78</h6>
             <h6>b07root07@gmail.com</h6>
        </div>
    </div>
  )
}

export default Footer