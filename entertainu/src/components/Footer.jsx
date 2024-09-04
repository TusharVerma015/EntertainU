import React from 'react'
import '../Footer.css'
export const Footer = () => {
  return (
    <div>
      
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-about">
                <h2>About Us</h2>
                <p>We are a team of passionate developers creating awesome websites. Follow us on social media for the latest updates!</p>
            </div>

            <div class="footer-links">
                <h2>Quick Links</h2>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>

            <div class="footer-social">
                <h2>Follow Us</h2>
                <div class="social-icons">
                    <a href="#"><img src="https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png" alt="Facebook"/></a>
                    <a href="#"><img src="https://img.icons8.com/ios-filled/50/ffffff/twitter.png" alt="Twitter"/></a>
                    <a href="#"><img src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png" alt="Instagram"/></a>
                    <a href="#"><img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="LinkedIn"/></a>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <p>&copy; 2024 EntertainU. All rights reserved.</p>
        </div>
    </footer>


    </div>
  )
}
