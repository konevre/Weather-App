import Sidebar from "../Sidebar/Sidebar";
import Search from "../Search/Search";
import LocationButton from "../LocationButton/LocationButton";

import "./baseComponent.scss";

import { motion } from "framer-motion";

const BaseComponent = (props) => {
    return (
        <div className="base-grid">
            <Sidebar />
            <div className="base-grid-middle">
                <div className="search-wrapper">
                    <Search page={props.page}/>
                    <LocationButton/>
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="base-grid-middle-item"
                >
                    {props.middle}
                </motion.div>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="base-grid-right"
            >
                {props.right}
            </motion.div>
            <div className="base-grid-item-filler"></div>
        </div>
    )
}

export default BaseComponent;