export default function(){
    return(
        <footer className="header">
        <footer className="footer container section">
            <div className="footer__container grid">
                <div className="footer__content">
                    <a href="#" className="footer__logo">
                        <img alt="" src=".\Assets\images\logorewaq.png" className="footer__logo-img" />
                    </a>

                    <h4 className="footer__subtitle">
                        contact
                    </h4>
                    <p className="footer__description">
                        <span>Address:</span> soon!
                    </p>

                    <p className="footer__description">
                        <span>Phone:</span> +20 106 101 4924
                    </p>

                    <div className="footer__social">
                        <h4 className="footer__subtitle">Follow US</h4>

                        <div className="footer__social-links flex">
                            <a target="_blank" href="https://www.facebook.com/RewaqG">
                                <img src=".\Assets\images\facebook.svg" alt="" className=" footer__social-icon "/>

                            </a>

                            <a target="_blank" href="https://www.instagram.com/Rewaqgallery?fbclid=IwAR0Ht3uvWxfGgWRIXnpy9CUdrsE98VgdokkNF-o1zEXgpUxbydTEtD2LLsU">
                                <img alt="" src=".\Assets\images\instagram.svg" className="footer__social-icon"/>
                                
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer__content">
                    <h3 className="footer__title">Address</h3>
                    <ul className="footer__links">
                        <li><a href="#" className="footer__link">Home</a></li>
                        
                        <li><a target="_blank" href="https://www.instagram.com/direct/t/17845977407818382" className="footer__link">Contact Us</a></li>
                        
                    </ul>
                </div>


            </div>

            <div className="footer__bottom">
                <p className="copyright">&copy; 2024 Rewaq. All Rights Reserved.</p>
                <span className="designer">Created by <a target="_blank" href="https://www.linkedin.com/in/mohamed-osama3000/">@Mohammed Osama</a> | <a target="_blank" href="https://www.linkedin.com/in/mohamed-elafandy-692327181/">@Mohammed ElAfandy</a></span>
                
            </div>
        </footer>


    </footer>
    );
}