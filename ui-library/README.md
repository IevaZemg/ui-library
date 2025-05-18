# @ievazem/ui-library

A React + TypeScript UI component library designed for web applications. Includes reusable components such as Button, Dropdown, Radio, SearchBox, Card, Toggle, and ThemeSelector with support for multiple themes (light, dark, colorful, grey).

## Installation

Install the library via npm:

```bash
npm install @ievazem/ui-library
```

## Usage

Import and use components in your React application.

```tsx
import React from 'react';
import '@ievazem/ui-library/style.css';

import {
  ThemeProvider,
  Button,
  Dropdown,
  RadioGroup,
  SearchBox,
  Toggle,
  Card,
  ThemeSelector,
  useTheme,
} from '@ievazem/ui-library';

const App = () => (
  <ThemeProvider>
    <Button variant="primary">Click Me</Button>
  </ThemeProvider>
);

export default App;
```

## Required Global Styles

The component library depends on CSS variables defined in the global `themes.css` file, which is included in the build as `style.css`. You must import it in your root file;

```ts
import '@ievazem/ui-library/style.css';
```
## Dependencies

These are the main runtime dependencies required for the library to function:

```tsx
"dependencies": {
  "clsx": "^2.1.1",
  "react": "^19.1.0",
  "react-dom": "^19.1.0"
}
```

- clsx – Utility for constructing className strings conditionally
- react – Required peer dependency for building the components
- react-dom – Required for rendering components

## Theming

The library supports four themes:

* light
* dark
* colorful
* grey

Wrap your application in the `ThemeProvider` to enable theming:

```tsx
import { ThemeProvider } from '@ievazem/ui-library';

const App = () => (
  <ThemeProvider>
    {/* your app */}
  </ThemeProvider>
);
```

To allow users to select themes, use the `useTheme` hook and `ThemeSelector` component:

```tsx
import { useTheme, ThemeSelector } from '@ievazem/ui-library';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <ThemeSelector
      currentTheme={theme}
      setTheme={setTheme}
      themes={[
        { label: 'Light', value: 'light', color: '#f5f5f5' },
        { label: 'Dark', value: 'dark', color: '#1e1e1e' },
        { label: 'Colorful', value: 'colorful', color: '#ff6f61' },
        { label: 'Grey', value: 'grey', color: '#888888' },
      ]}
    />
  );
};
```

The theme selection is stored in `localStorage` and applied globally via the `data-theme` attribute on the `<html>` element.

## Components

### Button

A flexible button component that supports multiple visual styles and sizes.

```tsx
<Button variant="primary" size="md">Click Me</Button>
```

**Props:**

| Prop     | Type                                             | Default   | Description                   |
| -------- | ------------------------------------------------ | --------- | ----------------------------- |
| variant  | 'primary' \| 'secondary' \| 'outline' \| 'ghost' | 'primary' | Controls the button style     |
| size     | 'sm' \| 'md' \| 'lg'                             | 'md'      | Controls the button size      |
| disabled | boolean                                          | false     | Disables the button           |
| onClick  | (event) => void                                  | –         | Click event handler           |
| ...rest  | React.ButtonHTMLAttributes                       | –         | Native HTML button attributes |

### Dropdown

```tsx
<Dropdown
  name="dropdown"
  variant="pill"
  align="left"
  width="full"
  options={[
    { label: 'Option A', value: 'a' },
    { label: 'Option B', value: 'b' },
  ]}
/>
```

**Props:**

| Prop    | Type                                                        | Default   | Description                 |
| ------- | ----------------------------------------------------------- | --------- | --------------------------- |
| options | { label: string, value: string }\[]                         | –         | Array of dropdown options   |
| variant | 'default' \| 'bordered' \| 'underline' \| 'pill' \| 'ghost' | 'default' | Visual style                |
| align   | 'left' \| 'center'                                          | 'left'    | Text alignment              |
| width   | 'auto' \| 'full' \| number                                  | 'full'    | Width of dropdown           |
| ...rest | React.SelectHTMLAttributes                                  | –         | Native select element props |

### RadioGroup

```tsx
<RadioGroup
  name="group"
  options={[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
  ]}
  onChange={(val) => console.log(val)}
/>
```

**Props:**

| Prop     | Type                                | Description                      |
| -------- | ----------------------------------- | -------------------------------- |
| name     | string                              | Group name for the radio buttons |
| options  | { label: string, value: string }\[] | List of radio options            |
| onChange | (value: string) => void             | Called when selection changes    |

### SearchBox

```tsx
<SearchBox
  placeholder="Search..."
  variant="pill"
  align="left"
  width={400}
  onSearch={(query) => console.log(query)}
/>
```

**Props:**

| Prop        | Type                                                        | Default     | Description            |
| ----------- | ----------------------------------------------------------- | ----------- | ---------------------- |
| placeholder | string                                                      | 'Search...' | Placeholder text       |
| variant     | 'default' \| 'bordered' \| 'underline' \| 'pill' \| 'ghost' | 'default'   | Visual style           |
| align       | 'left' \| 'center'                                          | 'left'      | Horizontal alignment   |
| width       | 'auto' \| 'full' \| number                                  | 'full'      | Input width            |
| onSearch    | (query: string) => void                                     | –           | Triggered on Enter key |

### Card

```tsx
<Card
  image="https://example.com/image.jpg"
  title="Card Title"
  subtitle="Optional Subtitle"
  description="Card content goes here."
  actions={[
    { label: 'Learn More', onClick: () => {}, variant: 'primary' },
    { label: 'Dismiss', onClick: () => {}, variant: 'ghost' },
  ]}
/>
```

**Props:**

| Prop        | Type          | Description                 |
| ----------- | ------------- | --------------------------- |
| image       | string        | Image URL (optional)        |
| title       | string        | Title text                  |
| subtitle    | string        | Subtitle text (optional)    |
| description | string        | Card content or description |
| actions     | CardAction\[] | List of buttons             |

**CardAction:**

```ts
interface CardAction {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}
```

### Toggle

```tsx
<Toggle checked={true} onChange={(checked) => console.log(checked)} />
```

**Props:**

| Prop     | Type                       | Description                        |
| -------- | -------------------------- | ---------------------------------- |
| checked  | boolean                    | Whether the toggle is on/off       |
| onChange | (checked: boolean) => void | Callback when toggle state changes |

### ThemeSelector

```tsx
<ThemeSelector
  currentTheme="dark"
  setTheme={(theme) => setTheme(theme)}
  themes={[
    { label: 'Light', value: 'light', color: '#ffffff' },
    { label: 'Dark', value: 'dark', color: '#1e1e1e' },
  ]}
/>
```

**Props:**

| Prop         | Type                                      | Description              |
| ------------ | ----------------------------------------- | ------------------------ |
| currentTheme | 'light' \| 'dark' \| 'colorful' \| 'grey' | Currently active theme   |
| setTheme     | (theme: string) => void                   | Callback to update theme |
| themes       | ThemeOption\[]                            | Theme options list       |

**ThemeOption:**

```ts
interface ThemeOption<T extends string = string> {
  label: string;
  value: T;
  color: string;
}
```
## Component Preview
![Component Preview](https://github.com/IevaZemg/ui-library/blob/main/component-examples/components.png)

## License

MIT
