import React from 'react';
import './SocialMedia.scss';

import fb from '../../../assets/social_media/fb.png';
import gplus from '../../../assets/social_media/g_plus.png';
import instagram from '../../../assets/social_media/instagram.png';
import pinterest from '../../../assets/social_media/pinterest.png';
import twitter from '../../../assets/social_media/twitter.png';

const SocialMedia = () => (
  <div className="social-media">
    <h3 className="title">Social Media</h3>
    <div className="icons-wrapper">
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><img src={fb} alt="facebook" /></a>
      <a href="https://plus.google.com/" target="_blank" rel="noopener noreferrer"><img src={gplus} alt="google plus" /></a>
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="instagram" /></a>
      <a href="https://pl.pinterest.com/" target="_blank" rel="noopener noreferrer"><img src={pinterest} alt="pinterest" /></a>
      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="twitter" /></a>
    </div>
  </div>
);

export default SocialMedia;