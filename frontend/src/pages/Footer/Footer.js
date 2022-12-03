import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button/Button'
import './Footer.css';

function Footer() {
  return (
    <>
      <div className='footer-container'>
        <section className='footer-subscription'>
          <p className='footer-subscription-heading'>
            Join the Sharing Documents UIT to receive our best materials
          </p>
          <p className='footer-subscription-text'>
            You can unsubscribe at any time.
          </p>
          <div className='input-areas'>
            <form>
              <input
                className='footer-input'
                name='email'
                type='email'
                placeholder='Your Email'
              />
              <Button buttonStyle='btn--outline'>Subscribe</Button>
            </form>
          </div>
        </section>
        <div class='footer-links'>
          <div className='footer-link-wrapper'>
            <div class='footer-link-items'>
              <h2>About Us</h2>
              <Link to='/qanda'>How it works</Link>
            </div>
            <div class='footer-link-items'>
              <h2>Contact Us</h2>
              <a href='https://www.facebook.com/bhtcnpm'>Contact</a>
              <a href='https://www.facebook.com/groups/bht.cnpm.uit/'>Support</a>
            </div>
          </div>
          <div className='footer-link-wrapper'>
            <div class='footer-link-items'>
              <h2>Drive/Videos</h2>
              <a href='https://www.youtube.com/channel/UCctdMGAruqjAsXY1lb5b72w'>Course Video</a>
              <a href='https://www.facebook.com/bhtcnpm/posts/pfbid0CqeGQXbtEMFv16qMizNEpJVPXhMVu6hmf89ce5vFfLPnGHgsbDV8iUfpzryFmT5al'>Drive</a>
            </div>
            <div class='footer-link-items'>
              <h2>Social Media</h2>
              <a href='https://www.facebook.com/bhtcnpm'>Facebook</a>
              <a href='https://www.instagram.com/english.with.bht/'>Instagram</a>
            </div>
          </div>
        </div>
        <section class='social-media'>
          <div class='social-media-wrap'>
            <div class='footer-logo'>
              <Link to='/' className='social-logo'>
              Sharing Documents UIT
                <i class='fab fa-typo3' />
              </Link>
            </div>
            <small class='website-rights'>Sharing Documents UIT © 2022</small>
            
          </div>
        </section>
      </div>
    </>
  )
}

export default Footer