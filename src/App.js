
import MainHeader from "./components/MainHeaderComponent";
import MainImage from "./components/MainImageComponent";
import CardsComponent from "./components/CardsComponent";
import FooterComponent from "./components/FooterComponent";

const App = () => {
  return(
    <div style={{background: "black"}}>
      <MainHeader />
      <MainImage />
      <div className="container">
        <CardsComponent />
      </div>
      <FooterComponent />
    </div>
  )
}

export default App;