import React from "react";
import Header from "./components/layout/Header";
import Contents from "./components/layout/Contents";
import Slider from "./components/includes/Slider";
import Image from "./components/includes/Image";
import ImgText from "./components/includes/ImgText";
import Card from "./components/includes/Card";
import Banner from "./components/includes/Banner";
import Text from "./components/includes/Text";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Header />
      <Contents>
        <Slider />
        <Image />
        <ImgText />
        <Card />
        <Banner />
        <Text />
      </Contents>
      <Footer />
    </>
  );
}

export default App;
