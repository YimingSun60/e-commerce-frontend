interface props {
  contentsTop: string;
  contentsBot: string;
  img_src: string[];
}
const Advertise: React.FC<props> = ({ contentsTop, contentsBot, img_src }) => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col items-start gap-1">
          <div
            id="AdvertiseContents1"
            className="font-[Beatrice] font-extrabold text-[48px] text-left w-[350px] break-words leading-tight"
          >
            {contentsTop}
          </div>
          <div
            id="AdvertiseContents2"
            className="font-[Beatrice] font-extralight text-[16px] text-left w-[80px] break-words leading-tight"
          >
            {contentsBot}
          </div>
        </div>
        <div id="GoToShop" className="self-start">
          <button className="cursor-pointer">
            <img src="public/assets/Group 39.svg" alt="Go To Shop" />
          </button>
        </div>
      </div>
      <div
        id="scroll photo"
        className="relative w-[366px] h-[376px] overflow-hidden self-end ml-auto"
      >
        <div className="flex w-[calc(800px*2)]  animate-scroll-left">
          {img_src.concat(img_src).map((src, index) => (
            <img
              key={index}
              src={src}
              className="w-[800px] object-fill"
              alt={`scrolling-${index}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Advertise;
