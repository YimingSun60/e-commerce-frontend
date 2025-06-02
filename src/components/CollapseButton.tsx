interface props{
    className?: string
    onClick?: () => void;
}

const CollapseButton:React.FC<props> = ({className, onClick}) =>{
    return(
        <button className={className} onClick={onClick}>
           <img src="assets/Group 36.svg"/>
        </button>
    )
}

export default CollapseButton