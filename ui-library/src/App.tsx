import React from 'react';
import {
  Button,
  Dropdown,
  RadioGroup,
  SearchBox,
  Toggle,
  ThemeProvider,
  ThemeSelector,
  Card,
  useTheme,
} from './index';
import type { ThemeOption } from './components/ThemeSelector/ThemeOption';

type ThemeType = 'light' | 'dark' | 'colorful' | 'grey';

const customThemes: ThemeOption<ThemeType>[] = [
  { label: 'Light', value: 'light', color: '#f5f5f5' },
  { label: 'Dark', value: 'dark', color: '#1e1e1e' },
  { label: 'Colorful', value: 'colorful', color: '#ff6f61' },
  { label: 'Grey', value: 'grey', color: '#888888' },
];

const options = [
  { label: 'Option A', value: 'a' },
  { label: 'Option B', value: 'b' },
];

const Demo: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';

  const toggleLightDark = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setTheme(newTheme);
  };

  return (
    <div
      style={{
        padding: 20,
        minHeight: '100vh',
        backgroundColor: 'var(--color-bg)',
        color: 'var(--color-text)',
        transition: 'background-color 0.3s, color 0.3s',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 20,
        }}
      >
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <span style={{ fontSize: '0.9rem' }}>Theme:</span>
          <ThemeSelector
            currentTheme={theme}
            setTheme={setTheme}
            themes={customThemes}
          />
        </div>

        <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '0.9rem' }}>
            {isDark ? 'Dark Mode 🌙' : 'Light Mode ☀️'}
          </span>
          <Toggle checked={isDark} onChange={toggleLightDark} />
        </label>
      </div>

      <h1>Components</h1>

      <h2>Button Group Preview</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="outline" disabled>Outline Disabled</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="ghost" disabled>Ghost Disabled</Button>
      </div>

      <h2>Radio Group</h2>
      <RadioGroup
        name="choices"
        options={[
          { label: 'Option 1', value: '1' },
          { label: 'Option 2', value: '2' },
        ]}
        onChange={(val) => console.log('Radio selected:', val)}
      />

      <div>
      <h2>Dropdown Variants</h2>

      <h3>Default</h3>
      <Dropdown
        name="dropdown-default"
        variant="default"
        options={options}
        onChange={(e) => console.log('Default:', e.target.value)}
      />

      <h3>Bordered</h3>
      <Dropdown
        name="dropdown-bordered"
        variant="bordered"
        options={options}
        onChange={(e) => console.log('Bordered:', e.target.value)}
      />

      <h3>Underline</h3>
      <Dropdown
        name="dropdown-underline"
        variant="underline"
        options={options}
        onChange={(e) => console.log('Underline:', e.target.value)}
      />

      <h3>Pill</h3>
      <Dropdown
        name="dropdown-pill"
        variant="pill"
        options={options}
        onChange={(e) => console.log('Pill:', e.target.value)}
      />

      <h3>Ghost</h3>
      <Dropdown
        name="dropdown-ghost"
        variant="ghost"
        options={options}
        onChange={(e) => console.log('Ghost:', e.target.value)}
      />
    </div>

      <h2>Search Box</h2>

      <h3>Default (full width)</h3>
      <SearchBox
        variant="default"
        width="full"
        align="left"
        onSearch={(q) => console.log('Default:', q)}
      />

      <h3>Pill (fixed 400px)</h3>
      <SearchBox
        variant="pill"
        width={400}
        align="left"
        onSearch={(q) => console.log('Pill:', q)}
      />

      <h3>Underline (auto width)</h3>
      <SearchBox
        variant="underline"
        width="auto"
        align="left"
        onSearch={(q) => console.log('Underline:', q)}
      />

      <h3>Ghost (auto width)</h3>
      <SearchBox
        variant="ghost"
        width="auto"
        align="left"
        onSearch={(q) => console.log('Ghost:', q)}
      />

      <h2>Cards</h2>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <Card
          image="https://www.wearegecko.co.uk/media/50316/mountain-3.jpg"
          title="Mountain Climbing"
          subtitle="Climb the highest peaks"
          description="More information about the topic will come here."
          actions={[
            { label: 'Learn More', onClick: () => alert('Learn More'), variant: 'ghost' },
            { label: 'Get Started', onClick: () => alert('Get Started'), variant: 'outline' },
          ]}
        />
        <Card
          image=""
          title="Mountain Climbing"
          description="More information about the topic will come here."
          actions={[
            { label: 'Learn More', onClick: () => alert('Learn More'), variant: 'primary' },
            { label: 'Learn More', onClick: () => alert('Get Started'), variant: 'secondary' },
          ]}
        />
      </div>
    </div>
  );
};

const App: React.FC = () => (
  <ThemeProvider>
    <Demo />
  </ThemeProvider>
);

export default App;
