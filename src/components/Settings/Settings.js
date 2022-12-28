import BaseComponent from "../BaseComponent/BaseComponent";
import SettingsBlock from "./SettingsBlock/SettingsBlock";

const Settings = () => {
    return (
        <BaseComponent
            page="settings"
            middle={
                <SettingsBlock/>
            }
        />
    )
}

export default Settings;