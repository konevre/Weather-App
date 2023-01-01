import BaseComponent from "../BaseComponent/BaseComponent";
import UnitsBlock from "./UnitsBlock/UnitsBlock";
import GeneralBlock from "./GeneralBlock/GeneralBlock";
import AdBlock from "./AdBlock/AdBlock";

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
            right={
                <AdBlock/>
            }
        />
    )
}

export default Settings;