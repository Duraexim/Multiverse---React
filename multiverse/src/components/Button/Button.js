const Button = (props) => {

    return (
            <button className="Button" onClick={props.callback}>{props.label}</button>

    )


}

export default Button