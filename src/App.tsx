import "./App.css";

import { Button } from "./components/Buttons/Button";

import { Mood } from "@mui/icons-material";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button
          variant="danger"
          size="lg"
          icon={<Mood />}
          onClick={(e) => console.log(e)}
        >
          <div>Click Me!</div>
        </Button>
      </header>
    </div>
  );
}

export default App;
