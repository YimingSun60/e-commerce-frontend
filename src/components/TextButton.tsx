
interface props {
    buttonName: string;
    className?: string;
    onClick?: ()=> void
}

const TextButton:React.FC<props> = ({className, buttonName,onClick}) => {
    return(
        <button className={`${className} text-base tracking-[.125em] cursor-pointer`} onClick={onClick}>
            {buttonName}        
        </button>
    )
}

export default TextButton
