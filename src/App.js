import { useEffect, useState } from "react";
import axios from "axios";
import { Card, AdviceID, Button } from "./Card";
import divider from "./pattern-divider-desktop.svg";
import dice from "./icon-dice.svg";

function App() {
  const [advice, setAdvice] = useState("");

  async function getAdvice() {
    const advice = await axios("https://api.adviceslip.com/advice");
    const response = advice.data;
    setAdvice(response.slip);
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <Card>
      <AdviceID>Advice #{advice.id}</AdviceID>"{advice.advice}"
      <img src={divider} alt="qoute" width="100%" />
      <Button onClick={getAdvice}>
        <img src={dice} alt="qoute" width="20px" />
      </Button>
    </Card>
  );
}

export default App;
