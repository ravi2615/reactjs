import React from "react";
import PaintCard from "./PaintCard";
import Expert from "./Expert";
import Slider from "./Slider";
import Interest from "./Interest";


const Home = () => {

return(
    <>
      <Slider />
      
      <section>     
       <PaintCard/>
      <Expert/>
      <Interest />
      </section>

      
    </>
);
};
export default Home;