import Sidebar from "../Sidebar/Sidebar";
import Search from "../Search/Search";

import "./baseComponent.scss";

import { motion } from "framer-motion";

const BaseComponent = (props) => {
    return (
        <div className="base-grid">
            <Sidebar />
            <div className="base-grid-middle">
                <Search page={props.page}/>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="base-grid-item"
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
        </div>
    )
}

export default BaseComponent;