# Custom Icons Created Using React Typescript

The purpose of this project is to learn the fundamentals of creating custom, reusable components in React with Typescript.

## Index

### `Button`

### `ButtonGroup`

## Available Components

### Button

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

### ButtonGroup

#### `Accepted props`

##### `orientation`

Sets the flex direction of the Button Group, accepts either `column` or `row`. If no value is passed, default is row.

##### `gap`

Sets the gap between Button components within the Button Group. Accepts a number as an argument, which is rendered in pixels. If no value is passed, the default value is 10.

##### `align`

Sets the align-items property of the Button Group container. Accepts values `flex-start`, `flex-end`, `center`, `baseline`, or `stretch`. If no value is passed to this property, the default value is center.

##### `justify`

Sets the justify-content property of the Button Group container. Accepts values `flex-start`, `flex-end`, `center`, `space-around`, `space-between`, `space-evenly`. If no value is passed to this property, the default value is space-evenly.

##### `wrap`

Sets the flex-wrap value of the Button Group container. Accepts boolean values. If no value is passed to this property, the default value is false.

##### `children`

Accepts one or more children of type ReactElement.
