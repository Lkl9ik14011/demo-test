import React, { useState } from "react";
import Box from "./components/Box";
import Button from "./components/Button";
import Container from "./components/Container";
import Display from "./components/Display";

const Calculator = () => {
  let [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
  });

  return (
    <Container>
      <Display value={calc.num || calc.res} />
      <Box>
        <Button calc={calc} setCalc={setCalc} />
      </Box>
    </Container>
  );
};

export default Calculator;
