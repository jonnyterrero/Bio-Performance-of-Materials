# Biofluid Mechanics

Research-grade interactive models for blood rheology, arterial hydrostatics, and capillary rise.

## Open the visualization

**[Launch the Biofluid Mechanics dashboard](https://jonnyterrero.github.io/BME-Visualizations/biofluid-mechanics/dashboard.html)**

Or open [`dashboard.html`](dashboard.html) locally in a browser.

## What is in this folder

| File | What it is |
| --- | --- |
| [`dashboard.html`](dashboard.html) | Three-tab computational dashboard with live Chart.js plots and sliders |

## Topics in the dashboard

1. **Rheology** — Newtonian plasma \(\tau = \mu\dot{\gamma}\) vs shear-thinning whole blood \(\tau = K\dot{\gamma}^n\), including the Fåhræus–Lindqvist effect in microvessels.
2. **Hydrostatics** — standing arterial pressure \(P_{total} = P_{heart} + \rho g h\). Drag density and gravity to see MAP at the feet change.
3. **Capillary action** — Jurin's law \(h = 2\sigma\cos\theta / (\rho g R)\). Radius, surface tension, and contact angle drive the animated meniscus (alveolar / organ-on-chip scale).

## How to use

Switch tabs in the header. Hydrostatics and capillary panels update as soon as you move a slider. No install required.
