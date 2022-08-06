import './Footer.scss';


export const Footer = () => {
    return (
        <div className="footer">
           <div className="rounded-social-buttons">
                    <a className="social-button facebook" href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></a>
                    <a className="social-button twitter" href="https://www.twitter.com/" target="_blank"><i className="fab fa-twitter"></i></a>
                    <a className="social-button linkedin" href="https://www.linkedin.com/" target="_blank"><i className="fab fa-linkedin"></i></a>
                    <a className="social-button youtube" href="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube"></i></a>
                    <a className="social-button instagram" href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram"></i></a>
                </div>

            <div className="row">
                <ul>
                    <li><a href="#">Contact us</a></li>
                    <li><a href="#">Our Services</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                    <li><a href="#">Career</a></li>
                </ul>
            </div>

            <div className="text-footer-under">
               <span>Cocktail-App Copyright © 2022 - All rights reserved || Designed with ♥ by: Wilson Díaz</span>
            </div>
        </div>
    );
};

export default Footer;
