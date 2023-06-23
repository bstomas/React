import './Botao.scss'

function Botao({ color, background, children, className, size, click }) {

    return (
        <button
        onClick={click}
        className={className + " botao " + size}
        style={{ color, backgroundColor: background}}
        >
            {children}
        </button>
    )
}

export default Botao