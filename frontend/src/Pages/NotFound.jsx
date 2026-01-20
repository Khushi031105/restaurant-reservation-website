import {Link} from "react-router-dom";
import {HiOutlineArrowNarrowRight} from "react-icons/hi";
const NotFound =()=>{
    return(
        <section className="notFound" >
            <div className="container">
                <img src="/notFound.svg" alt="notFound" />
                <h1>LOOKS LIKE YOU'RE LOST</h1>
                <p>We are not able to find the page you're looking for!</p>
                <Link to={"/"}>BACK TO HOME <span><HiOutlineArrowNarrowRight/></span></Link>
            </div>
        </section>
    )
}
export default NotFound;