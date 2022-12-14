import { Link } from "react-router-dom";

import "./preview.scss";
import preview_img from "../../resources/preview/preview.svg";
import preview_logo from "../../resources/logo.svg";

const Preview = () => {
    return (
        <div className="preview">
            <div className="preview__weather">
                <div className="preview__weather-img">
                    <img src={preview_img} alt="preview-img" />
                </div>
            </div>
            <div className="preview__logo">
                <div className="preview__logo-box">
                    <img src={preview_logo} alt="" className="preview__logo-icon" />
                </div>
                <h1 className="preview__logo-title">Kreeze</h1>
                <h2 className="preview__logo-subtitle">Weather App</h2>
                <Link to="/weather"><button className="preview__logo-button">Get started</button></Link> 
            </div>
        </div>
    )
}

export default Preview;