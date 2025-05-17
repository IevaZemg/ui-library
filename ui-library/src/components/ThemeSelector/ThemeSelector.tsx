import type { ThemeOption } from "./ThemeOption";

interface ThemeSelectorProps<T extends string = string> {
  currentTheme: T;
  setTheme: (theme: T) => void;
  themes?: ThemeOption<T>[];
}

const defaultThemes: ThemeOption[] = [];

export const ThemeSelector = <T extends string = string>({
  currentTheme,
  setTheme,
  themes = defaultThemes as ThemeOption<T>[],
}: ThemeSelectorProps<T>) => (
  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
    {themes.map(({ label, value, color }) => (
      <button
        key={value}
        onClick={() => setTheme(value)}
        title={label}
        style={{
          width: '28px',
          height: '28px',
          borderRadius: '50%',
          backgroundColor: color,
          border: currentTheme === value ? '2px solid #000' : '1px solid #ccc',
          boxShadow: currentTheme === value ? '0 0 0 3px rgba(0,0,0,0.2)' : 'none',
          outline: 'none',
          cursor: 'pointer',
          transition: 'all 0.2s ease-in-out',
        }}
        aria-label={`Switch to ${label} theme`}
      />
    ))}
  </div>
);
