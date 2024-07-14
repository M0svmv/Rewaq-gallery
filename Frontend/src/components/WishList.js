export default function WishList(){
    return(
        <div className="container wish-bar">
            <div className="sidebar" id="wish-barside">
                <div className="head">
                    <div className="header__action-btn">
                        <i className="fi fi-rr-heart"></i> My Favorites
                    </div>
                    <div className="header__action-btn" id="wishToggle" >
                        <i className="fi fi-rr-cross"></i>
                    </div>
                </div>
                <div id="wishItem">
                    Your wish list is empty
                </div>
                <div className="foot">
                    
                </div>
            </div>
        </div>
    );
}