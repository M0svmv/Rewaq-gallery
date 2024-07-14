import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function NavMenu(){
    const [categories,setCategories]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:4200/products/categories')
            .then(res=>res.json())
            .then(data=>setCategories(data))
    },[])
    return(
        <div className="nav__menu" id="nav-menu">
                {/* <div className="nav__menu-top">
                    <a href="index.html" className="nav__menu-logo">
                        <img src="Assets\images\logorewaq.png" alt="Logo"/>
                    </a>

                    <div className="nav__close" id="nav-close">
                        <i className="fi fi-rr-cross-small"></i>
                    </div>
                </div> */}

                <div className="nav__list-div">
                <ul className="nav__list">

                <li className="nav__item">
                        <a href="#zsec" className="nav__link">
                            Our Products
                        </a>
                    </li>
                    <li className="nav__item">
                        <a target="_blank" href="https://www.instagram.com/direct/t/17845977407818382" className="nav__link">
                            Order|Contact
                        </a>
                    </li>

                </ul>
                
            </div>
                    

            </div>
    )
    ;
}