import "./App.css";

import { Button } from "./components/Buttons/Button";
import { ButtonGroup } from "./components/ButtonGroup/ButtonGroup";

import { Mood, MoodBad, ExpandCircleDownRounded } from "@mui/icons-material";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonGroup
          orientation="row"
          align="center"
          justify="space-evenly"
        >
          <Button
            icon={<MoodBad />}
            variant="fill"
            color="secondary"
            size="lg"
          >
            Test 1
          </Button>
          <Button
            variant="fill"
            icon={<ExpandCircleDownRounded />}
            color="success"
          >
            Test 2
          </Button>
          <Button
            variant="outline"
            icon={<ExpandCircleDownRounded />}
            color="success"
          >
            Test 3
          </Button>
        </ButtonGroup>
        <Button
          variant="transparent"
          color="primary"
          size="lg"
          icon={<Mood />}
        >
          Click Me!
        </Button>
      </header>
    </div>
  );
}

export default App;
