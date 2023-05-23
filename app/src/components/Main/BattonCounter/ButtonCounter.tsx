type ButtonCounterProps = {
    content: string
    onClick: () => void
}

const ButtonCounter: React.FC<ButtonCounterProps> = (props) => {
    const { content, onClick } = props

    return (
        <button className="cart-product__counter" onClick={onClick}>
            {content}
        </button>
    )
}

export default ButtonCounter
