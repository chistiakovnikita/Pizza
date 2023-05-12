function ButtonCounter(props) {
    const { content, onClick } = props

    return (
        <button className="cart-product__counter" onClick={onClick}>
            {content}
        </button>
    )
}

export default ButtonCounter
