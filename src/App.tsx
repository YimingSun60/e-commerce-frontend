import "./App.css";
import Catalog from "./components/Catalog";
import NavigationBar from "./components/NavigationBar";
import SearchBar from "./components/SearchBar";
import Advertise from "./components/Advertise";
function App() {
  return (
    <>
      <div className="px-4 grid grid-flow-row auto-rows gap-10 min-w-[768px] h-screen">
        <NavigationBar />
        <div className="grid auto-rows gap-8">
          <Catalog />
          <SearchBar />
        </div>
        <Advertise
            contentsTop="NEW COLLECTION"
            contentsBot="Summer 2024"
            img_src={[
              "public/assets/Rectangle 12.png",
              "public/assets/Rectangle 13.png",
            ]}
          />
      </div>
    </>
  );
}

export default App;
