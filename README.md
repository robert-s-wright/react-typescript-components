# Custom Icons Created Using React Typescript

The purpose of this project is to learn the fundamentals of creating custom, reusable components in React with Typescript.

## Available Components

### `Button`

Renders a Button element.

#### `Accepted props`

##### `variant`

- fill - Renders a filled button with background-color matching the color specified in color prop.
- outline - Renders a transparent button with border color matching the color specified in color prop.
- transparent - Renders a transparent button with background-color matching the color specified in color prop when the button is hovered.

##### `color`

- primary (default if no variant prop is passed to the component)
- secondary
- info
- success
- warning
- danger

##### `size`

- sm - button font-size 18px
- md - button font-size 30px
- lg - button font-size 40px

##### `icon`

Accepts any icon of type SVGElement passed

```
import "./App.css";

import { Button } from "./components/Buttons/Button";

import { Mood } from "@mui/icons-material";

function App() {
  return (
    <div className="App">
        <Button
          icon={<Mood />}
        >
          <div>Click Me!</div>
        </Button>
    </div>
  );
}

export default App;
```

##### `children`

Accepts one child of type ReactElement or string.
