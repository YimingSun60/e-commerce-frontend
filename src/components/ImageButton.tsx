interface props{
    className?: string
    onClick?: () => void;
    src: string
}

const ImageButton: React.FC<props> = ({ className = '', onClick, src }) => {
    return (
      <button className={`${className} cursor-pointer w-[50px] h-[50px]`} onClick={onClick}>
        <img src={src} alt="" className="w-[50px] h-[50px]"/>
      </button>
    );
  };
  

export default ImageButton