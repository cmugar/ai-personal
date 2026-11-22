import type { Register, ThemeSetArgs } from 'claude-code'

import { makeColors } from './make-colors.js'

// Darkroom: warm charcoal and warm gray paper, bone and charcoal text, one
// slate blue accent (a little saturated so buttons read as actions; fill one
// shade darker so buttons keep white text, not black). The other
// roles keep their meaning (red is still danger) but are drained of saturation
// so the blue is the only thing that stands out.
const { theme, problems } = makeColors({
  label: 'Darkroom',
  roles: { accent: { seed: '#3571b5', fillShade: 500 }, danger: '#b0584c', success: '#7d8870', warning: '#a3975f', pro: '#877f8f' },
  // Daylight: the same print carried out of the darkroom. Near-neutral paper with a trace of warmth,
  // charcoal ink, the same lone amber.
  light: {
    gray: {
      anchors: {
        'surface-0': '#e5e3e0',
        'surface-1': '#ebe9e6',
        'surface-2': '#f0eeeb',
        'surface-3': '#f0eeeb',
        'text-primary': '#33312f',
        'text-secondary': '#56534f',
        'text-muted': '#686460',
      },
    },
  },
  dark: {
    gray: {
      anchors: {
        'surface-0': '#1e1b18',
        'surface-1': '#221f1b',
        'surface-2': '#26221e',
        'surface-3': '#26221e',
        'text-primary': '#d6cdbd',
        'text-secondary': '#aaa295',
        'text-muted': '#958e83',
      },
    },
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
