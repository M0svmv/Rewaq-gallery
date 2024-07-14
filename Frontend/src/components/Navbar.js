import Logo from "./Logo";
import NavMenu from "./NavMenu";
// import SearchBar from "./Search";
// import WishList from "./WishList";
import HomeSection from "./HomeSection";
export default function navBar(){
    return(
        <header className="header">
        <nav className="nav">
        <div className="nav container">
        <Logo/>
        <NavMenu/>
        {/* <SearchBar/> */}
        {/* <WishList/> */}
        

        </div>
        </nav>
        <HomeSection/>
        </header>
    );
}

