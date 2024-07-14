
export default function HomeSection(){
    return(
        <section className="home">
            <div className="home__container container grid">
                <div className="home__content">
                    <h1 className="home__title">
                        WE PRINT<br /> WHAT YOU<br /> WANT!
                    </h1>
                    <a href="#zsec"  className="btn" id="sbtn">GET STARTED {'>'}</a>
                </div>
                <img src="Assets/images/RewaqGalleryD.png" alt="" className="home__img"/>
            </div> 
        </section>
    );
}
