import {Link} from "react-router-dom";
import {HiOutlineArrowNarrowRight} from "react-icons/hi";
const About =()=>{
    return(
        <section className="about" id="about">
            <div className="container">
                <div className="banner">
                    <div className="top">
                        <h1 className="heading"></h1>
                        <p>The Only Thing We're Serious About Is Food.</p>
                    </div>
                    <p className="mid">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit maxime esse et eaque at maiores, iste ipsam architecto nostrum quibusdam voluptatibus delectus exercitationem mollitia laborum? Tenetur, ipsum illo? Odit velit suscipit fugit ipsum tempora corporis, maxime est eligendi expedita hic molestiae soluta iure ipsam iusto possimus delectus et impedit laborum.
                    </p>
                    <Link to={"/"}>Explore Menu 
                    <span>
                        <HiOutlineArrowNarrowRight/>
                    </span>
                    </Link>
                </div>
                <div className="banner">
                    <img src="/about.png" alt="about"/>
                </div>
            </div>

        </section>
    )
}
export default About;