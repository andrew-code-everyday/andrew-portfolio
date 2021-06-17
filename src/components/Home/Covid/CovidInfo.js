import AnimatedNumber from "animated-number-react";

const CovidInfo = (props) => {
    return (
        <h3 className="info-label">{props.label}: <AnimatedNumber duration={2000} formatValue={value => `${Number(value).toFixed(0)}`} value={props.value}></AnimatedNumber> </h3>
    )
}

export default CovidInfo;