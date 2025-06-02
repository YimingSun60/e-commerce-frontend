interface props {
  contentsTop: string;
  contentsBot: string;
  img_src: string[];
}
const Advertise: React.FC<props> = ({ contentsTop, contentsBot, img_src }) => {
    return (
      <div className="flex flex-col justify-between">
        {/* 上方内容区域 */}
        <div className="flex flex-col items-start gap-1">
          <div
            id="AdvertiseContents1"
            className="font-[Beatrice] font-extrabold text-4xl text-left w-[300px] break-words leading-tight"
          >
            {contentsTop}
          </div>
          <div
            id="AdvertiseContents2"
            className="font-[Beatrice] font-extralight text-xs text-left w-[80px] break-words leading-tight"
          >
            {contentsBot}
          </div>
        </div>
  
        {/* 底部按钮区域 */}
        <div id="GoToShop" className="self-start mb-4">
          <button>
            <img src="public/assets/Group 39.svg" alt="Go To Shop" />
          </button>
        </div>
      </div>
    );
  };
  

export default Advertise;

{
  /* <div className="relative w-[366px] h-[376px] overflow-hidden">
        <div className="flex w-[calc(800px*2)] animate-scroll-left">
          {img_src.concat(img_src).map((src, index) => (
            <img
              key={index}
              src={src}
              className="w-[800px] object-fill"
              alt={`scrolling-${index}`}
            />
          ))}
        </div>
      </div> */
}
