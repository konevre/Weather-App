import Sidebar from "../Sidebar/Sidebar";
import Search from "../Search/Search";

import "./baseComponent.scss"

const BaseComponent = (props) => {
    return (
        <div className="base-grid" >
            <Sidebar />
            <div>
                <Search page={props.page}/>
                {props.middle}
            </div>
            {props.right}
        </div>
    )
}

export default BaseComponent;