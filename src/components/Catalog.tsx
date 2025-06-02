import TextButton from "./TextButton"
function Catalog(){
    return (
        <div className="grid grid-rows-3 items-start">
        <TextButton className="font-[Beatrice-light] justify-self-start" buttonName="Men" />
        <TextButton className="font-[Beatrice-light] justify-self-start" buttonName="Women" />
        <TextButton className="font-[Beatrice-light] justify-self-start" buttonName="Kids" />
        </div>
    )
}

export default Catalog