import './style.css'

export const Button = ({ text, click, disabled }) => {
    return (
        <div className='container-button' >
            <button onClick={click} disabled={disabled}>{text}</button>
        </div>
    )
}