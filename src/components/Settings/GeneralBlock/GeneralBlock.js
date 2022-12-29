import Switch from '@mui/material/Switch';
import { useDispatch, useSelector } from 'react-redux';
import { setHour12 } from "../SettingsSlice";
import "./general.scss";

const GeneralBlock = () => {
    const { hour12 } = useSelector(state => state.settings)
    const dispatch = useDispatch();

    return (
        <div className="general">
            <div className="general__header">General</div>
            <div className="general__block">
                <div className="general__wrapper">
                    <div className="general__title">12-Hour Time</div>
                    <Switch checked={hour12} onChange={() => dispatch(setHour12())}/>
                </div>
            </div>
        </div>
    )
}

export default GeneralBlock;