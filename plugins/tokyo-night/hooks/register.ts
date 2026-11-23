import type { Register, ThemeSetArgs } from 'claude-code'

import { makeColors } from './make-colors.js'

// Tokyo Night Light by day and Tokyo Night by night, from the colours of
// enkia's tokyo-night-vscode-theme. VS Code's chrome (sidebars, title bar) is
// the darker gray, and its editor the lighter one, so the page is the chrome
// and cards and panels are the editor.
const { theme, problems } = makeColors({
  label: 'Tokyo Night',
  codeTheme: { dark: 'tokyo-night' },
  light: {
    roles: { accent: { seed: '#2959aa', fillShade: 550 }, danger: '#bd4040', success: '#385f0d', warning: '#8f5e15', pro: '#65359d' },
    gray: {
      anchors: {
        'surface-0': '#d6d8df',
        'surface-1': '#dfe0e6',
        'surface-2': '#e6e7ed',
        'surface-3': '#e6e7ed',
        'text-primary': '#343b59',
        'text-secondary': '#4c5170',
        'text-muted': '#626578',
      },
    },
    git: { added: '#166775', modified: '#2959aa', removed: '#914c54' },
  },
  dark: {
    roles: { accent: { seed: '#7aa2f7', fillShade: 500 }, danger: '#f7768e', success: '#9ece6a', warning: '#e0af68', pro: '#bb9af7' },
    gray: {
      anchors: {
        'surface-0': '#16161e',
        'surface-1': '#1a1b26',
        'surface-2': '#1f2030',
        'surface-3': '#1f2030',
        'text-primary': '#c0caf5',
        'text-secondary': '#a9b1d6',
        'text-muted': '#8288a8',
      },
    },
    git: { added: '#449dab', modified: '#6183bb', removed: '#db4b4b' },
  },
})

const LOOK: ThemeSetArgs = { colors: theme }

export const register: Register = on => {
  on('session.start', async ($, e, next) => {
    const unpainted = problems.find(line => line.startsWith("Desktop won't paint"))

    if (unpainted !== undefined) {
      $.ui.toast(unpainted)
    }
    const set = await $.theme.set(LOOK)

    if (!set.isDrawn) {
      $.ui.status(set.reason)
    }

    return next(e)
  })
}
