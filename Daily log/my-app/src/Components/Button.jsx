import style from './Button.module.css'

function Button(props) {
    const { type, disabled, onClick, children } = props;

    return <button
        className={style.button}
        type={type}
        disabled={disabled}
        onClick={onClick}
    >
        {children}
    </button>
}

export default Button;