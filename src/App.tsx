import "./App.css";

import { Button } from "./components/Buttons/Button";

import { Mood } from "@mui/icons-material";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button
          variant="transparent"
          color="danger"
          size="lg"
          icon={<Mood />}
          // onClick={(e) => console.log(e)}
        >
          Click Me!
        </Button>
      </header>
    </div>
  );
}

export default App;
