# Biomedical Signal Models

Four-panel instrumentation models from Webster and Northrop: source loading, transduction linearity, common-mode rejection, and thermal noise.

## Open the visualization

**[Launch the signal-model dashboard](https://jonnyterrero.github.io/BME-Visualizations/biomedical-signal-models/visualizations.html)**

Or open [`visualizations.html`](visualizations.html) locally in a browser.

## What is in this folder

| File | What it is |
| --- | --- |
| [`visualizations.html`](visualizations.html) | Interactive browser version of the four-panel figure (sliders for \(Z_{in}\), CMRR, temperature, bandwidth) |
| [`biomedical_signal_models_visualizations.py`](biomedical_signal_models_visualizations.py) | Original matplotlib / NumPy source (same physics as the dashboard) |
| [`instrumentation_constraints.png`](instrumentation_constraints.png) | Static four-panel figure generated from the Python script |
| [`requirements.txt`](requirements.txt) | Python dependencies if you want to re-render the figure locally |

## Topics in the visualization

1. **Skin-electrode loading** — \(V_{measured} = V_{bio}\,Z_{in}/(Z_{in}+Z_{skin})\). Low \(Z_{in}\) attenuates the ECG.
2. **Sensor linearity** — thermistor \(R(T)=R_0\exp[\beta(1/T-1/T_0)]\) vs linear piezoresistive strain gauge.
3. **Instrumentation amplifier CMRR** — 60 Hz body-coupled interference leaking through finite \(A_{cm}=A_d/10^{\mathrm{CMRR}/20}\).
4. **Johnson noise** — \(V_{n,rms}=\sqrt{4k_B T R\,\Delta f}\), with a 10 MΩ microelectrode floor callout.

## Run the Python figure

```bash
cd biomedical-signal-models
python -m pip install -r requirements.txt
python biomedical_signal_models_visualizations.py
```

Uncomment `plt.show()` at the bottom of the script, or add `plt.savefig("instrumentation_constraints.png")`.
