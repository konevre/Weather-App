import { Link } from "react-router-dom";
import img from "../../resources/404.png";
import "./style/page404.scss";

const Page404 = () => {
    return (
        <div className="page404__wrapper">
            <img src={img} alt="" />
            <div className="page404__title">
                Sorry, the page you requested could not be found
                <br />
                Please go to back homepage.
            </div>
            <Link to="/weather"><button className="page404__button">Get back</button></Link> 
        </div>
    )
}

export default Page404;