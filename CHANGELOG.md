# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## \[0.1.1] – 2025-05-18

### Added

* Project-wide README.md file documenting all components, usage, theming, and configuration.
* Exported `ThemeOption` type publicly from the root index: `export type { ThemeOption } from './components/ThemeSelector/ThemeOption';`

---

## \[0.1.0] – 2025-05-17

### Added

* **Button** component with support for `primary`, `secondary`, `outline`, and `ghost` variants, and `sm`, `md`, `lg` sizes.
* **Dropdown** component with variants: `default`, `bordered`, `underline`, `pill`, `ghost`.
* **Radio** and **RadioGroup** components for grouped selection UI.
* **SearchBox** with variant support and alignment options.
* **Toggle** component with accessible styling and theming.
* **Card** component with image, title, subtitle, description, and action buttons.
* **ThemeSelector** and **ThemeProvider** with support for `light`, `dark`, `colorful`, and `grey` themes.
* Responsive CSS styling using CSS Modules and design tokens via CSS variables.
* Theme switching with localStorage persistence.

---
