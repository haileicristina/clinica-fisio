interface BotaoProps{
    cor?: 'pink' | 'orange' | 'gray' | 'purple'
    className?: string
    children:any
    onClick?: () => void
}
export default function Botao(props: BotaoProps){
    const cor = props.cor ?? 'orange'
    return(
        <button onClick={props.onClick} className={`
            border border-${cor}-500 
            focus:bg-${cor}-500  hover:bg-${cor}-500
            text-white px-4 py-2 rounded-md  
            ${props.className}     
        `}
        >
            {props.children}
        </button>
    )
}