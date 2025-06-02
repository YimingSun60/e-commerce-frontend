import NavigationButton from "./TextButton"
import CollapseButton from "./CollapseButton"
import ImageButton from "./ImageButton";
function NavigationBar() {
    return (
       
        <div className="grid grid-cols-3 items-center w-full">
            <div className="flex flex-row gap-8 min-w-0 overflow-hidden">
                <CollapseButton className="cursor-pointer block md:hidden" />   
                <NavigationButton buttonName="Home" className="font-[Beatrice] cursor-pointer hidden md:block" />
                <NavigationButton buttonName="Collections" className="font-[Beatrice] cursor-pointer hidden md:block" />
                <NavigationButton buttonName="New" className="font-[Beatrice] cursor-pointer hidden md:block" />
            </div>
            <div className="justify-self-center w-24 h-auto">
            <img src="public/assets/Group 53.svg" alt='logo' />
            </div>
            <div className="flex flex-row gap-8 justify-self-end h-auto">
                <ImageButton src="public/assets/Group 8.svg" />
                <ImageButton src="public/assets/Group 7.svg" />
                <ImageButton src="public/assets/Group 6.svg" />
            </div>

            </div>
    );
}


export default NavigationBar