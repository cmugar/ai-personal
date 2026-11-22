# Darkroom

A low-contrast theme for the Claude desktop and mobile apps. It started as a darkroom:
warm charcoal, bone-white text and one safelight amber. Amber darkens to brown on a
light page, so the accent became a slate blue in both modes. The name stuck.

## Palette

| | Light | Dark |
|---|---|---|
| Page | `#E5E3E0` | `#1E1B18` |
| Cards | `#EBE9E6` | `#221F1B` |
| Panels, menus | `#F0EEEB` | `#26221E` |
| Primary text | `#33312F` (10.1:1) | `#D6CDBD` (10.9:1) |
| Secondary text | `#56534F` | `#AAA295` |
| Muted text | `#686460` | `#958E83` |
| Buttons (fill) | `#306DB0`, paper-white text | `#306DB0`, white text |
| Links | `#215189` | `#75A8DF` |

Danger, success, warning and pro keep their meaning but are drained toward gray, so the
blue is the one colour that stands out. Git diff colours are still the app's defaults.

## Decisions

- Grays are near-neutral with a trace of warmth. An earlier cream version read as
  too yellow.
- The accent seed is `#3571B5` with `fillShade: 500`. One shade lighter and the
  design system switches button text to black, because black measures slightly
  higher than white on mid-blues.
- Text levels sit closer together than the default: the brightest text comes down,
  muted text stays about where it was.

## Files

- `darkroom-vs-default.html`: light mode next to the app's default light palette
- `darkroom-vs-default-dark.html`: dark mode next to the default dark palette

The mock conversations in these pages are sketches of the app, not screenshots.
