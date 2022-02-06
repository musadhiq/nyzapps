import React from "react";
import About from "../../components/about/About";
import Box from "../../components/Box/Box";
function AboutMain() {
  return (
    <div>
      <Box prev={"Home "} current={"About"} />
      <About />
    </div>
  );
}

export default AboutMain;
