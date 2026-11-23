# Tokyo Night

Tokyo Night Light in light mode and Tokyo Night in dark mode, with colours read from
the theme files in enkia/tokyo-night-vscode-theme (MIT, see `plugins/tokyo-night/NOTICE`).

## Mapping

VS Code's chrome (sidebar, title bar) is the darker gray and its editor the lighter one,
so the page takes the chrome colour and cards and panels take the editor colour.

| | Light (Tokyo Night Light) | Dark (Tokyo Night) |
|---|---|---|
| Page | `#D6D8DF` sideBar | `#16161E` sideBar |
| Cards | `#DFE0E6` (between) | `#1A1B26` editor |
| Panels | `#E6E7ED` editor | `#1F2030` |
| Primary text | `#343B59` editor.foreground | `#C0CAF5` variable |
| Secondary text | `#4C5170` | `#A9B1D6` editor.foreground |
| Muted text | `#626578` | `#8288A8` |
| Accent seed | `#2959AA`, fill shade 550 → button `#2A5AAB` | `#7AA2F7`, fill shade 500 → button `#3E62CA` |
| Danger | `#BD4040` editorError | `#F7768E` |
| Success | `#385F0D` string | `#9ECE6A` string |
| Warning | `#8F5E15` editorWarning | `#E0AF68` editorWarning |
| Pro | `#65359D` keyword | `#BB9AF7` keyword |
| Git added / modified / removed | `#166775` / `#2959AA` / `#914C54` | `#449DAB` / `#6183BB` / `#DB4B4B` |

## Departures from VS Code

- Muted text is a little darker than Tokyo's own `#707280` (light) and `#787C99` (dark),
  which fall under 4.5:1 on their own backgrounds.
- Code: dark mode asks the app for a `tokyo-night` code theme; where the app has none,
  and in light mode, code takes the role colours, so keywords are blue, not purple.
- The fill shades keep white or near-white text on buttons. Left to the default, the
  design system puts black text on the light-mode blue.
