//import Anounce from "./components/anouncement";
//import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./products/page";
import Top_sell from "./products/sell";
import Fonts from "./components/fonts";


  export default function Home(){
    return(

      <div>
        <Hero/>
        <Fonts/>
        <Products/>
        <Top_sell/>
      </div>
    );
}

