import React from 'react'
import { Button } from './Button'
import './Footer.css'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
         <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
               Join the Newsletter to learn about the newst games!! 
            </p>   
            <p className='footer-subscription-text'>
               You can Unsub at any point.
            </p> 
            <div className='input-areas'>
                <form>
                    <input type='email' name='email' placeholder='Your Email' className='footer-input'/>
                    <Button buttonStyle='btn--outline'>Subscribe</Button>
                </form>
            </div>
         </section> 
         <div className='footer-links'> 
            <div className='footer-link-wrapper'> 
                <div className='footer-link-items'>
                    <h2>About Us</h2>
                    <Link to='/sign-up'>How it works</Link>
                    <Link to='/'>Test Writing1</Link>
                    <Link to='/'>Test Writing2</Link>
                </div>
            
            <div className='footer-link-items'>
                    <h2>Contact Us</h2>
                    <Link to='/sign-up'>Num</Link>
                    <Link to='/'>Test Writing1</Link>
                    <Link to='/'>Test Writing2</Link>
                </div>
            </div>
            <div className='footer-link-wrapper'> 
                <div className='footer-link-items'>
                    <h2>About Us</h2>
                    <Link to='/sign-up'>How it works</Link>
                    <Link to='/'>Test Writing1</Link>
                    <Link to='/'>Test Writing2</Link>
                </div>
            </div>
         </div>
         <section className='social-media'>
             <div className='social-media-wrap'>
                 <div className='footer-logo'>
                     <Link to='/' className='social-logo'>
                         GME <i className='fas fa-gamepad' />
                     </Link>
                 </div>
                 <small className='website-rights'>GME © 2021</small>
                 <div className='social-icons'>
                     <Link className='social-icon-link facebook' to='/' target='_blank' aria-label='Facebook'>
                         <i className='fab fa-facebook-f' />
                     </Link>
                     <Link className='social-icon-link instagram' to='/' target='_blank' aria-label='Instagram'>
                         <i className='fab fa-instagram' />
                     </Link>
                 </div>
             </div>
         </section>
        </div>
    )
}

export default Footer
