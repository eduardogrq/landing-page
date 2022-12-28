
import MainHeader from "./components/MainHeaderComponent";
import MainImage from "./components/MainImageComponent";
import CardsComponent from "./components/CardsComponent";

const App = () => {
  return(
    <div>
      <MainHeader />
      <MainImage />
      <div className="container">
        <CardsComponent />
      </div>
    </div>
  )
}

export default App;