# React Tabs Component

This package provides a headless UI for managing tab navigation in React. It leverages React's Context API to manage tab state and URL query parameters for navigation. The components included are `TabPanel`, `TabTrigger`, and `Tabs`.

**Note:** This library is headless and does not come with any built-in styles. It focuses on functionality and leaves styling up to you.

## Installation

To use this package, you can install it via npm or yarn:

```bash
npm install your-package-name
# or
yarn add your-package-name
```

## Usage

### Components

#### `Tabs`

The `Tabs` component manages the tab state and URL query parameters. It provides a context to its child components to control which tab is active.

**Props:**

- `defaultTab` (optional): The default tab to be active when the component mounts.
- `children`: The child components, which should include `TabTrigger` and `TabPanel`.

```jsx
import React from 'react';
import { Tabs, TabPanel, TabTrigger } from 'your-package-name';

const MyTabsComponent = () => {
  return (
    <Tabs defaultTab="tab1">
      <h1>Tab Navigation Example</h1>
      <div>
        <TabTrigger to="tab1">Tab 1</TabTrigger>
        <TabTrigger to="tab2">Tab 2</TabTrigger>
        <TabTrigger to="tab3">Tab 3</TabTrigger>
      </div>

      <div>
        <TabPanel value="tab1">
          <p>Content for Tab 1</p>
        </TabPanel>
        <TabPanel value="tab2">
          <p>Content for Tab 2</p>
        </TabPanel>
        <TabPanel value="tab3">
          <p>Content for Tab 3</p>
        </TabPanel>
      </div>
    </Tabs>
  );
};
```

#### `TabTrigger`

The `TabTrigger` component represents a clickable element that changes the active tab.

**Props:**

- `to`: The value of the tab this trigger will activate.
- `children`: The content or function to render, which receives a boolean indicating whether the tab is active.

```jsx
import { TabTrigger } from 'your-package-name';

const MyTabTriggers = () => (
  <div>
    <TabTrigger to="tab1">Tab 1</TabTrigger>
    <TabTrigger to="tab2">Tab 2</TabTrigger>
    <TabTrigger to="tab3">Tab 3</TabTrigger>
  </div>
);
```

#### `TabPanel`

The `TabPanel` component renders content based on the active tab.

**Props:**

- `value`: The value of the tab that this panel corresponds to.
- `children`: The content to display when this tab is active.

```jsx
import { TabPanel } from 'your-package-name';

const MyTabPanels = () => (
  <div>
    <TabPanel value="tab1">
      <p>Content for Tab 1</p>
    </TabPanel>
    <TabPanel value="tab2">
      <p>Content for Tab 2</p>
    </TabPanel>
    <TabPanel value="tab3">
      <p>Content for Tab 3</p>
    </TabPanel>
  </div>
);
```

## API

### `useTabs()`

A custom hook to access the `Tabs` context. It provides the current `activeTab` and `handleTabClick` function.

**Returns:**

- `activeTab`: The currently active tab.
- `handleTabClick(value: string)`: Function to change the active tab.

### `useTabTriggerActive(tab: string)`

A custom hook to check if a specific tab is active. Useful for conditional styling or logic based on the active tab.

**Returns:**

- `{ isActive: boolean }`: Indicates whether the provided tab is currently active.

## Examples

You can use the `Tabs` component with `TabTrigger` and `TabPanel` to create a tabbed interface:

```jsx
import React from 'react';
import { Tabs, TabPanel, TabTrigger } from 'your-package-name';

const Example = () => (
  <Tabs defaultTab="tab1">
    <div>
      <TabTrigger to="tab1">Tab 1</TabTrigger>
      <TabTrigger to="tab2">Tab 2</TabTrigger>
      <TabTrigger to="tab3">Tab 3</TabTrigger>
    </div>
    <div>
      <TabPanel value="tab1">
        <p>Content for Tab 1</p>
      </TabPanel>
      <TabPanel value="tab2">
        <p>Content for Tab 2</p>
      </TabPanel>
      <TabPanel value="tab3">
        <p>Content for Tab 3</p>
      </TabPanel>
    </div>
  </Tabs>
);
```

## License

MIT License. See [LICENSE](LICENSE) for more details.

## Contributing

Feel free to contribute by submitting issues and pull requests. For more details, please refer to [CONTRIBUTING.md](CONTRIBUTING.md).
