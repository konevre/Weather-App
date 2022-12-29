import BaseComponent from "../BaseComponent/BaseComponent";
import UnitsBlock from "./UnitsBlock/UnitsBlock";
import GeneralBlock from "./GeneralBlock/GeneralBlock";

const Settings = () => {
    return (
        <BaseComponent
            page="settings"
            middle={
                <>
                    <UnitsBlock/>
                    <GeneralBlock/>
                </>
            }
        />
    )
}

export default Settings;