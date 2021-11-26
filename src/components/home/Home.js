import React from "react";
import Srevice from "../servicees/Service";
import CustomerPic from "./custopic/CustomerPic";
import HomeBanner from "./HomeBanner";
import Team from "./team/Team";

const Home = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <Srevice></Srevice>
      <CustomerPic></CustomerPic>
      <Team></Team>
    </div>
  );
};

export default Home;
