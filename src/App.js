import Home from "components/Home";

import Portfolio from "components/Portfolio";
import ScrollToTop from "components/ScrollToTop";
import Services from "components/Services";
import Video from "components/Video";
import { motion } from "framer-motion";
import React from "react";

function App() {
  return (
    <motion.div initial="hidden" animate="show">
      <Home />
      <Services />
      <Portfolio />
      <Video />
      <ScrollToTop />
    </motion.div>
  );
}

export default App;
