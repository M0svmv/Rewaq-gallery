import { Link } from "react-router-dom";
export default function Logo(){
    return(
        <div className="Logo-div">
            <Link to="/" className="nav__logo">
                <img src=".\Assets\images\logorewaq.png" alt="Rewaq logo" className="nav__logo-img"/>
            </Link>
        </div>
    );

}