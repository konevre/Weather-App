import classNames from "classnames";

import { useSelector, useDispatch } from "react-redux";
import { setTemp, setWind, setPressure, setDistance } from "../SettingsSlice";

import "./style/unitsBlock.scss";

const UnitsBlock = () => {
    const { 
        activeTemp, 
        activeWind, 
        activePressure, 
        activeDistance 
    } = useSelector(state => state.settings);
    const dispatch = useDispatch();

    const settingsObj = [
        { title: "Temperatue", values: ["Celcius", "Fahrenheit", "Kelvin"], selector: activeTemp, setSelector: setTemp },
        { title: "Wind speed", values: ["km/h", "m/s", "Knots"], selector: activeWind, setSelector: setWind },
        { title: "Pressure", values: ["hPa", "Inches", "kPa", "mm"], selector: activePressure, setSelector: setPressure },
        { title: "Distance", values: ["Kilometers", "Miles"], selector: activeDistance, setSelector: setDistance },
    ]

    const makeActive = (value, action) => {
        dispatch(action(value))
    }

    const items = settingsObj.map(item => {
        const { title, values, selector, setSelector} = item;

        const content = values.map(value => {
            const togglerClass = classNames("units__toggler-btn", {
                "active": value === selector
                }
            )
            return (
                    <div 
                        key={value}
                        onClick={() => makeActive(value, setSelector)} 
                        className={togglerClass}>
                        {value}
                    </div>
            )
        })

        return (
            <div className="units__item" key={title}>
                <div className="units__title">{title}</div>
                <div className="units__toggler">
                    { content }
                </div>
            </div>
        )
    })

    return (
        <div className="units">
            <h2 className="units__header">Units</h2>
            <div className="units__block">
                { items }
            </div>
        </div>
    )
}

export default UnitsBlock;