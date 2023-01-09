import Sidebar from "../Sidebar/Sidebar";
import Search from "../Search/Search";
import LocationButton from "../LocationButton/LocationButton";

import "./baseComponent.scss";

import { motion } from "framer-motion";

const BaseComponent = (props) => {
    const attributes = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.25 }
    }
    return (
        <div className="base-grid">
            <Sidebar />
            <div className="base-grid-middle">
                <div className="search-wrapper">
                    <Search page={props.page}/>
                    <LocationButton page={props.page}/>
                </div>
                <motion.div {...attributes} className="base-grid-middle-item">
                    {props.middle}
                </motion.div>
            </div>
            <motion.div {...attributes} className="base-grid-right">
                {props.right}
            </motion.div>
            <div className="base-grid-item-filler"></div>
        </div>
    )
}

export default BaseComponent;