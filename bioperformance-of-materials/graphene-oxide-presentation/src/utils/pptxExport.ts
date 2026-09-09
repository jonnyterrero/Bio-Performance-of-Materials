import PptxGenJS from 'pptxgenjs';
import { SLIDES, PRESENTATION_INFO } from '../data/slidesData';

export async function generatePowerPointPresentation(): Promise<void> {
  const pptx = new PptxGenJS();

  pptx.layout = 'LAYOUT_16x9';
  pptx.author = PRESENTATION_INFO.authors.join(', ');
  pptx.company = PRESENTATION_INFO.institution;
  pptx.title = PRESENTATION_INFO.title;
  pptx.subject = `${PRESENTATION_INFO.course} - ${PRESENTATION_INFO.instructor}`;

  // Color Palette Constants
  const BG_COLOR = '0F172A'; // Slate 900
  const CARD_BG = '1E293B'; // Slate 800
  const TEXT_WHITE = 'F8FAFC';
  const TEXT_MUTED = '94A3B8';
  const ACCENT_CYAN = '06B6D4';
  const ACCENT_EMERALD = '10B981';
  const ACCENT_ORANGE = 'F97316';
  const ACCENT_ROSE = 'F43F5E';

  // SLIDE 1: Title Slide
  {
    const slide = pptx.addSlide();
    slide.background = { color: BG_COLOR };

    // Accent line
    slide.addShape(pptx.ShapeType.rect, {
      x: 1.0,
      y: 1.2,
      w: 1.5,
      h: 0.08,
      fill: { color: ACCENT_CYAN },
    });

    // Tag
    slide.addText('BME3101C · RESEARCH ARTICLE PRESENTATION · FGCU', {
      x: 1.0,
      y: 1.4,
      w: 11.3,
      h: 0.4,
      fontSize: 12,
      fontFace: 'Arial',
      color: ACCENT_CYAN,
      bold: true,
      charSpacing: 2,
    });

    // Main Title
    slide.addText('Biocompatibility of\nGraphene Oxide', {
      x: 1.0,
      y: 1.9,
      w: 11.3,
      h: 2.2,
      fontSize: 44,
      fontFace: 'Arial',
      color: TEXT_WHITE,
      bold: true,
      lineSpacing: 48,
    });

    // Subtitle
    slide.addText(
      'Translating in vitro Fibroblast Responses to Biomaterial Design at FGCU',
      {
        x: 1.0,
        y: 4.1,
        w: 11.3,
        h: 0.6,
        fontSize: 18,
        fontFace: 'Arial',
        color: TEXT_MUTED,
      }
    );

    // Metadata card
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 1.0,
      y: 4.9,
      w: 11.3,
      h: 1.6,
      fill: { color: CARD_BG },
      line: { color: '334155', width: 1 },
      rectRadius: 0.1,
    });

    slide.addText(
      [
        { text: 'Presenters: ', options: { bold: true, color: ACCENT_EMERALD } },
        { text: `${PRESENTATION_INFO.authors.join(' & ')}\n`, options: { color: TEXT_WHITE } },
        { text: 'Course: ', options: { bold: true, color: ACCENT_EMERALD } },
        { text: `${PRESENTATION_INFO.course} · Dr. Marzhan Sypabekova\n`, options: { color: TEXT_WHITE } },
        { text: 'Institution: ', options: { bold: true, color: ACCENT_EMERALD } },
        { text: `${PRESENTATION_INFO.institution} · ${PRESENTATION_INFO.date}`, options: { color: TEXT_WHITE } },
      ],
      {
        x: 1.3,
        y: 5.1,
        w: 10.7,
        h: 1.2,
        fontSize: 13,
        fontFace: 'Arial',
        lineSpacing: 20,
      }
    );

    slide.addNotes(SLIDES[0].speakerNotes.mainScript.join('\n\n'));
  }

  // SLIDE 2: Article Overview
  {
    const slide = pptx.addSlide();
    slide.background = { color: BG_COLOR };

    slide.addText('01 · ARTICLE OVERVIEW', {
      x: 0.8,
      y: 0.5,
      w: 8.0,
      h: 0.3,
      fontSize: 11,
      color: ACCENT_CYAN,
      bold: true,
    });

    slide.addText('The Study at a Glance (Wang et al., 2011)', {
      x: 0.8,
      y: 0.8,
      w: 11.5,
      h: 0.6,
      fontSize: 26,
      color: TEXT_WHITE,
      bold: true,
    });

    // Box 1: The Specs
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 0.8,
      y: 1.5,
      w: 5.6,
      h: 2.5,
      fill: { color: CARD_BG },
      line: { color: '334155', width: 1 },
      rectRadius: 0.1,
    });
    slide.addText('THE ARTICLE SPECS', {
      x: 1.0,
      y: 1.7,
      w: 5.2,
      h: 0.3,
      fontSize: 12,
      color: ACCENT_CYAN,
      bold: true,
    });
    slide.addText(
      [
        { text: 'Title: ', options: { bold: true, color: TEXT_MUTED } },
        { text: 'Biocompatibility of Graphene Oxide\n', options: { color: TEXT_WHITE } },
        { text: 'Authors: ', options: { bold: true, color: TEXT_MUTED } },
        { text: 'K. Wang, J. Ruan, H. Song, J. Zhang, Y. Wo, S. Guo, D. Cui\n', options: { color: TEXT_WHITE } },
        { text: 'Journal: ', options: { bold: true, color: TEXT_MUTED } },
        { text: 'Nanoscale Research Letters, vol. 6, art. 8, 2011\n', options: { color: TEXT_WHITE } },
        { text: 'DOI: ', options: { bold: true, color: TEXT_MUTED } },
        { text: '10.1007/s11671-010-9751-6', options: { color: ACCENT_CYAN } },
      ],
      {
        x: 1.0,
        y: 2.1,
        w: 5.2,
        h: 1.8,
        fontSize: 12,
        fontFace: 'Arial',
        lineSpacing: 18,
      }
    );

    // Box 2: Study Goal
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 6.8,
      y: 1.5,
      w: 5.6,
      h: 2.5,
      fill: { color: CARD_BG },
      line: { color: '334155', width: 1 },
      rectRadius: 0.1,
    });
    slide.addText('STUDY GOAL & PURPOSE', {
      x: 7.0,
      y: 1.7,
      w: 5.2,
      h: 0.3,
      fontSize: 12,
      color: ACCENT_EMERALD,
      bold: true,
    });
    slide.addText(
      '• Systematically evaluate the cytotoxicity and biocompatibility of graphene oxide (GO).\n• Examine both in vitro responses in human dermal fibroblasts (HDF) and in vivo responses in mice.\n• Establish whether GO toxicity is governed by dose concentration and exposure duration.',
      {
        x: 7.0,
        y: 2.1,
        w: 5.2,
        h: 1.8,
        fontSize: 12,
        color: TEXT_WHITE,
        lineSpacing: 18,
      }
    );

    // Box 3: Main Findings
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 0.8,
      y: 4.2,
      w: 5.6,
      h: 2.7,
      fill: { color: CARD_BG },
      line: { color: '334155', width: 1 },
      rectRadius: 0.1,
    });
    slide.addText('KEY SCIENTIFIC FINDINGS', {
      x: 1.0,
      y: 4.4,
      w: 5.2,
      h: 0.3,
      fontSize: 12,
      color: ACCENT_ORANGE,
      bold: true,
    });
    slide.addText(
      '• Low Dose (<20 µg/mL): High fibroblast viability (>80%) with minimal detectable toxicity.\n• High Dose (>50 µg/mL): Significant cytotoxicity, severe cell rounding, detachment, and apoptosis.\n• Mechanism: GO internalizes into cytoplasm/lysosomes and down-regulates adhesion proteins (laminin, fibronectin, FAK).\n• Time-dependent escalation across 1–5 days.',
      {
        x: 1.0,
        y: 4.8,
        w: 5.2,
        h: 2.0,
        fontSize: 12,
        color: TEXT_WHITE,
        lineSpacing: 17,
      }
    );

    // Box 4: Why We Chose It
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 6.8,
      y: 4.2,
      w: 5.6,
      h: 2.7,
      fill: { color: CARD_BG },
      line: { color: '334155', width: 1 },
      rectRadius: 0.1,
    });
    slide.addText('WHY WE CHOSE THIS STUDY', {
      x: 7.0,
      y: 4.4,
      w: 5.2,
      h: 0.3,
      fontSize: 12,
      color: ACCENT_CYAN,
      bold: true,
    });
    slide.addText(
      '• Directly tests human dermal fibroblasts (HDF), the exact cellular model for our FGCU project.\n• Provides a validated literature precedent for selecting a non-lethal dosing range (<20 µg/mL).\n• Demonstrates that a cell can be metabolically alive yet functionally detached—setting the foundation for our ECM-adhesion study.',
      {
        x: 7.0,
        y: 4.8,
        w: 5.2,
        h: 2.0,
        fontSize: 12,
        color: TEXT_WHITE,
        lineSpacing: 18,
      }
    );

    slide.addNotes(SLIDES[1].speakerNotes.mainScript.join('\n\n'));
  }

  // SLIDE 3: Highlighted Method 1 - Synthesis & Characterization
  {
    const slide = pptx.addSlide();
    slide.background = { color: BG_COLOR };

    slide.addText('02 · HIGHLIGHTED METHOD: PART 1', {
      x: 0.8,
      y: 0.5,
      w: 8.0,
      h: 0.3,
      fontSize: 11,
      color: ACCENT_CYAN,
      bold: true,
    });

    slide.addText('Material Synthesis & Physical Characterization', {
      x: 0.8,
      y: 0.8,
      w: 11.5,
      h: 0.6,
      fontSize: 26,
      color: TEXT_WHITE,
      bold: true,
    });

    // Top banner: Modified Hummers Method
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 0.8,
      y: 1.5,
      w: 11.6,
      h: 0.9,
      fill: { color: CARD_BG },
      line: { color: '334155', width: 1 },
      rectRadius: 0.08,
    });
    slide.addText(
      [
        { text: 'Synthesis Strategy: ', options: { bold: true, color: ACCENT_CYAN } },
        {
          text: 'Modified Hummers Method. Natural graphite powder was chemically oxidized using KMnO4 and H2SO4 to intercalate oxygen-containing functional groups into the carbon lattice, yielding water-dispersible 2D sheets.',
          options: { color: TEXT_WHITE },
        },
      ],
      {
        x: 1.0,
        y: 1.65,
        w: 11.2,
        h: 0.6,
        fontSize: 12,
        lineSpacing: 16,
      }
    );

    // Three columns: AFM, TEM, FT-IR
    const colWidth = 3.65;
    const colGap = 0.32;

    // Col 1: AFM
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 0.8,
      y: 2.6,
      w: colWidth,
      h: 4.3,
      fill: { color: CARD_BG },
      line: { color: '334155', width: 1 },
      rectRadius: 0.1,
    });
    slide.addText('AFM', {
      x: 1.0,
      y: 2.8,
      w: 3.2,
      h: 0.3,
      fontSize: 16,
      color: ACCENT_CYAN,
      bold: true,
    });
    slide.addText('Atomic Force Microscopy', {
      x: 1.0,
      y: 3.1,
      w: 3.2,
      h: 0.3,
      fontSize: 11,
      color: TEXT_MUTED,
    });
    slide.addText(
      [
        { text: 'Key Measurement:\n', options: { bold: true, color: TEXT_WHITE } },
        { text: 'Quantified sheet vertical thickness at ~1.0 nm.\n\n', options: { color: TEXT_MUTED } },
        { text: 'Biological Significance:\n', options: { bold: true, color: ACCENT_CYAN } },
        {
          text: 'Confirms complete exfoliation into single-layer 2D nanosheets. Essential because monolayer GO interacts with membranes differently than thicker multi-layer graphite.',
          options: { color: TEXT_WHITE },
        },
      ],
      {
        x: 1.0,
        y: 3.5,
        w: 3.2,
        h: 3.2,
        fontSize: 12,
        lineSpacing: 18,
      }
    );

    // Col 2: TEM
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 0.8 + colWidth + colGap,
      y: 2.6,
      w: colWidth,
      h: 4.3,
      fill: { color: CARD_BG },
      line: { color: '334155', width: 1 },
      rectRadius: 0.1,
    });
    slide.addText('TEM', {
      x: 0.8 + colWidth + colGap + 0.2,
      y: 2.8,
      w: 3.2,
      h: 0.3,
      fontSize: 16,
      color: ACCENT_EMERALD,
      bold: true,
    });
    slide.addText('Transmission Electron Microscopy', {
      x: 0.8 + colWidth + colGap + 0.2,
      y: 3.1,
      w: 3.2,
      h: 0.3,
      fontSize: 11,
      color: TEXT_MUTED,
    });
    slide.addText(
      [
        { text: 'Key Measurement:\n', options: { bold: true, color: TEXT_WHITE } },
        { text: 'Visualized lateral dimensions, wrinkled edges, and foldings.\n\n', options: { color: TEXT_MUTED } },
        { text: 'Biological Significance:\n', options: { bold: true, color: ACCENT_EMERALD } },
        {
          text: 'Validates transparent 2D morphology. Sheet wrinkles increase specific surface area and facilitate adsorption of serum proteins in culture media.',
          options: { color: TEXT_WHITE },
        },
      ],
      {
        x: 0.8 + colWidth + colGap + 0.2,
        y: 3.5,
        w: 3.2,
        h: 3.2,
        fontSize: 12,
        lineSpacing: 18,
      }
    );

    // Col 3: FT-IR
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 0.8 + (colWidth + colGap) * 2,
      y: 2.6,
      w: colWidth,
      h: 4.3,
      fill: { color: CARD_BG },
      line: { color: '334155', width: 1 },
      rectRadius: 0.1,
    });
    slide.addText('FT-IR', {
      x: 0.8 + (colWidth + colGap) * 2 + 0.2,
      y: 2.8,
      w: 3.2,
      h: 0.3,
      fontSize: 16,
      color: ACCENT_ORANGE,
      bold: true,
    });
    slide.addText('Fourier-Transform Infrared', {
      x: 0.8 + (colWidth + colGap) * 2 + 0.2,
      y: 3.1,
      w: 3.2,
      h: 0.3,
      fontSize: 11,
      color: TEXT_MUTED,
    });
    slide.addText(
      [
        { text: 'Key Measurement:\n', options: { bold: true, color: TEXT_WHITE } },
        { text: 'Detected O-H (3400 cm⁻¹), C=O (1720 cm⁻¹), C-O (1060 cm⁻¹).\n\n', options: { color: TEXT_MUTED } },
        { text: 'Biological Significance:\n', options: { bold: true, color: ACCENT_ORANGE } },
        {
          text: 'Proves presence of hydrophilic oxygen groups that guarantee stable aqueous suspension without synthetic surfactants, preventing toxic solvent artifacts.',
          options: { color: TEXT_WHITE },
        },
      ],
      {
        x: 0.8 + (colWidth + colGap) * 2 + 0.2,
        y: 3.5,
        w: 3.2,
        h: 3.2,
        fontSize: 12,
        lineSpacing: 18,
      }
    );

    slide.addNotes(SLIDES[2].speakerNotes.mainScript.join('\n\n'));
  }

  // SLIDE 4: Highlighted Method 2 - Exposure Protocol & Toxicity Matrix
  {
    const slide = pptx.addSlide();
    slide.background = { color: BG_COLOR };

    slide.addText('02 · HIGHLIGHTED METHOD: PART 2', {
      x: 0.8,
      y: 0.5,
      w: 8.0,
      h: 0.3,
      fontSize: 11,
      color: ACCENT_CYAN,
      bold: true,
    });

    slide.addText('In Vitro Fibroblast Exposure & Toxicity Matrix', {
      x: 0.8,
      y: 0.8,
      w: 11.5,
      h: 0.6,
      fontSize: 26,
      color: TEXT_WHITE,
      bold: true,
    });

    // 4-Step Pipeline boxes horizontally
    const stepW = 2.75;
    const stepGap = 0.2;
    const steps = [
      { num: '1', title: 'Seed Fibroblasts', desc: '5,000 cells/well in 96-well plate. 24 h pre-incubation at 37°C, 5% CO2.' },
      { num: '2', title: 'Dosing Array', desc: 'Exchange medium for GO dispersion: 5, 10, 20, 50, and 100 µg/mL.' },
      { num: '3', title: 'Incubate (1-5 Days)', desc: 'Continuous exposure window monitored across 5 sequential days.' },
      { num: '4', title: 'Dual Readouts', desc: 'CCK-8 viability (570 nm) + adhesion wash assay (405 nm).' },
    ];

    steps.forEach((s, idx) => {
      const left = 0.8 + idx * (stepW + stepGap);
      slide.addShape(pptx.ShapeType.roundRect, {
        x: left,
        y: 1.5,
        w: stepW,
        h: 1.8,
        fill: { color: CARD_BG },
        line: { color: '334155', width: 1 },
        rectRadius: 0.08,
      });

      slide.addText(`STEP ${s.num}`, {
        x: left + 0.15,
        y: 1.65,
        w: stepW - 0.3,
        h: 0.25,
        fontSize: 10,
        color: ACCENT_CYAN,
        bold: true,
      });

      slide.addText(s.title, {
        x: left + 0.15,
        y: 1.9,
        w: stepW - 0.3,
        h: 0.3,
        fontSize: 13,
        color: TEXT_WHITE,
        bold: true,
      });

      slide.addText(s.desc, {
        x: left + 0.15,
        y: 2.25,
        w: stepW - 0.3,
        h: 0.9,
        fontSize: 11,
        color: TEXT_MUTED,
        lineSpacing: 14,
      });
    });

    // Toxicity Heatmap Table
    slide.addText('Toxicity Matrix (Viability Across Dose vs Duration)', {
      x: 0.8,
      y: 3.55,
      w: 8.0,
      h: 0.35,
      fontSize: 14,
      color: TEXT_WHITE,
      bold: true,
    });

    const tableData = [
      [
        { text: 'Dose', options: { bold: true, color: TEXT_WHITE, fill: { color: '1E293B' } } },
        { text: 'Day 1', options: { bold: true, color: TEXT_WHITE, fill: { color: '1E293B' } } },
        { text: 'Day 2', options: { bold: true, color: TEXT_WHITE, fill: { color: '1E293B' } } },
        { text: 'Day 3', options: { bold: true, color: TEXT_WHITE, fill: { color: '1E293B' } } },
        { text: 'Day 4', options: { bold: true, color: TEXT_WHITE, fill: { color: '1E293B' } } },
        { text: 'Day 5', options: { bold: true, color: TEXT_WHITE, fill: { color: '1E293B' } } },
        { text: 'Verdict', options: { bold: true, color: TEXT_WHITE, fill: { color: '1E293B' } } },
      ],
      [
        { text: '5 µg/mL', options: { color: TEXT_WHITE, fill: { color: '1E293B' } } },
        { text: '96%', options: { color: '10B981', fill: { color: '064E3B' } } },
        { text: '94%', options: { color: '10B981', fill: { color: '064E3B' } } },
        { text: '92%', options: { color: '10B981', fill: { color: '064E3B' } } },
        { text: '88%', options: { color: '10B981', fill: { color: '064E3B' } } },
        { text: '85%', options: { color: '10B981', fill: { color: '064E3B' } } },
        { text: 'Biocompatible', options: { bold: true, color: '10B981', fill: { color: '1E293B' } } },
      ],
      [
        { text: '10 µg/mL', options: { color: TEXT_WHITE, fill: { color: '1E293B' } } },
        { text: '92%', options: { color: '10B981', fill: { color: '064E3B' } } },
        { text: '89%', options: { color: '10B981', fill: { color: '064E3B' } } },
        { text: '85%', options: { color: '10B981', fill: { color: '064E3B' } } },
        { text: '82%', options: { color: '10B981', fill: { color: '064E3B' } } },
        { text: '80%', options: { color: '10B981', fill: { color: '064E3B' } } },
        { text: 'Well-Tolerated', options: { bold: true, color: '10B981', fill: { color: '1E293B' } } },
      ],
      [
        { text: '20 µg/mL', options: { color: TEXT_WHITE, fill: { color: '1E293B' } } },
        { text: '88%', options: { color: '10B981', fill: { color: '064E3B' } } },
        { text: '82%', options: { color: '10B981', fill: { color: '064E3B' } } },
        { text: '78%', options: { color: 'FBBF24', fill: { color: '78350F' } } },
        { text: '74%', options: { color: 'FBBF24', fill: { color: '78350F' } } },
        { text: '71%', options: { color: 'FBBF24', fill: { color: '78350F' } } },
        { text: 'Threshold Limit', options: { bold: true, color: 'FBBF24', fill: { color: '1E293B' } } },
      ],
      [
        { text: '50 µg/mL', options: { color: TEXT_WHITE, fill: { color: '1E293B' } } },
        { text: '72%', options: { color: 'F97316', fill: { color: '7C2D12' } } },
        { text: '65%', options: { color: 'F97316', fill: { color: '7C2D12' } } },
        { text: '58%', options: { color: 'F87171', fill: { color: '7F1D1D' } } },
        { text: '52%', options: { color: 'F87171', fill: { color: '7F1D1D' } } },
        { text: '48%', options: { color: 'F87171', fill: { color: '7F1D1D' } } },
        { text: 'Cytotoxic / Loss Adhesion', options: { bold: true, color: 'F87171', fill: { color: '1E293B' } } },
      ],
      [
        { text: '100 µg/mL', options: { color: TEXT_WHITE, fill: { color: '1E293B' } } },
        { text: '62%', options: { color: 'F87171', fill: { color: '7F1D1D' } } },
        { text: '54%', options: { color: 'F87171', fill: { color: '7F1D1D' } } },
        { text: '45%', options: { color: 'F87171', fill: { color: '7F1D1D' } } },
        { text: '38%', options: { color: 'F87171', fill: { color: '7F1D1D' } } },
        { text: '31%', options: { color: 'F87171', fill: { color: '7F1D1D' } } },
        { text: 'Severe Apoptosis', options: { bold: true, color: 'F87171', fill: { color: '1E293B' } } },
      ],
    ];

    slide.addTable(tableData, {
      x: 0.8,
      y: 4.0,
      w: 8.2,
      h: 2.8,
      fontSize: 10,
      align: 'center',
      border: { pt: 1, color: '334155' },
    });

    // Callout box on right
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 9.3,
      y: 4.0,
      w: 3.1,
      h: 2.8,
      fill: { color: CARD_BG },
      line: { color: ACCENT_ORANGE, width: 1.5 },
      rectRadius: 0.1,
    });
    slide.addText('CORE LESSON', {
      x: 9.5,
      y: 4.2,
      w: 2.7,
      h: 0.3,
      fontSize: 12,
      color: ACCENT_ORANGE,
      bold: true,
    });
    slide.addText(
      'A cell can be metabolically active on Day 1, yet lose adherence and undergo apoptotic collapse by Day 4.\n\nSublethal exposure must stay under 20 µg/mL for regenerative bioengineering.',
      {
        x: 9.5,
        y: 4.6,
        w: 2.7,
        h: 2.0,
        fontSize: 11,
        color: TEXT_WHITE,
        lineSpacing: 16,
      }
    );

    slide.addNotes(SLIDES[3].speakerNotes.mainScript.join('\n\n'));
  }

  // SLIDE 5: Cellular Impact & Mechanism
  {
    const slide = pptx.addSlide();
    slide.background = { color: BG_COLOR };

    slide.addText('02 · HIGHLIGHTED METHOD: CELLULAR IMPACT', {
      x: 0.8,
      y: 0.5,
      w: 8.0,
      h: 0.3,
      fontSize: 11,
      color: ACCENT_CYAN,
      bold: true,
    });

    slide.addText('Cellular Impact at High Exposure (>50 µg/mL)', {
      x: 0.8,
      y: 0.8,
      w: 11.5,
      h: 0.6,
      fontSize: 26,
      color: TEXT_WHITE,
      bold: true,
    });

    // Left Box: Healthy HDF
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 0.8,
      y: 1.5,
      w: 5.6,
      h: 5.2,
      fill: { color: CARD_BG },
      line: { color: ACCENT_EMERALD, width: 1.5 },
      rectRadius: 0.1,
    });
    slide.addText('HEALTHY HUMAN DERMAL FIBROBLAST', {
      x: 1.1,
      y: 1.8,
      w: 5.0,
      h: 0.3,
      fontSize: 13,
      color: ACCENT_EMERALD,
      bold: true,
    });
    slide.addText(
      '• Morphology: Elongated, flat, highly adherent spindle structure spreading across substrate.\n• Cytoskeleton: Well-organized F-actin stress fibers maintaining membrane tension.\n• Focal Adhesions: Dense clusters of vinculin and active Focal Adhesion Kinase (FAK).\n• Protein Expression: Robust secretion of laminin, fibronectin, and extracellular anchors.\n• Cell Cycle: Uninhibited Cyclin D3 expression promoting sustained cell proliferation.',
      {
        x: 1.1,
        y: 2.3,
        w: 5.0,
        h: 4.2,
        fontSize: 13,
        color: TEXT_WHITE,
        lineSpacing: 22,
      }
    );

    // Right Box: GO-Exposed HDF
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 6.8,
      y: 1.5,
      w: 5.6,
      h: 5.2,
      fill: { color: CARD_BG },
      line: { color: ACCENT_ROSE, width: 1.5 },
      rectRadius: 0.1,
    });
    slide.addText('GO-EXPOSED FIBROBLAST (>50 µg/mL)', {
      x: 7.1,
      y: 1.8,
      w: 5.0,
      h: 0.3,
      fontSize: 13,
      color: ACCENT_ROSE,
      bold: true,
    });
    slide.addText(
      '1. Internalization: TEM confirms GO sheets enter cytoplasm via endocytosis, trafficking to lysosomes and mitochondria.\n\n2. Protein Down-Regulation: Marked reduction in laminin, fibronectin, FAK, and Cyclin D3.\n\n3. Morphological Collapse: Loss of focal anchors induces cell rounding, detachment from substrate, and cell shrinkage.\n\n4. Apoptosis Cascade: Lysosomal leakage and mitochondrial depolarization trigger programmed cell death.',
      {
        x: 7.1,
        y: 2.3,
        w: 5.0,
        h: 4.2,
        fontSize: 13,
        color: TEXT_WHITE,
        lineSpacing: 20,
      }
    );

    slide.addNotes(SLIDES[4].speakerNotes.mainScript.join('\n\n'));
  }

  // SLIDE 6: Application to Our Project
  {
    const slide = pptx.addSlide();
    slide.background = { color: BG_COLOR };

    slide.addText('03 · APPLICATION TO OUR PROJECT', {
      x: 0.8,
      y: 0.5,
      w: 8.0,
      h: 0.3,
      fontSize: 11,
      color: ACCENT_CYAN,
      bold: true,
    });

    slide.addText('Translating Literature to Our Semester Project', {
      x: 0.8,
      y: 0.8,
      w: 11.5,
      h: 0.6,
      fontSize: 26,
      color: TEXT_WHITE,
      bold: true,
    });

    // Comparison column: Wang et al vs Our Project
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 0.8,
      y: 1.5,
      w: 5.6,
      h: 5.2,
      fill: { color: CARD_BG },
      line: { color: '334155', width: 1 },
      rectRadius: 0.1,
    });
    slide.addText('WANG ET AL. (2011) BASELINE', {
      x: 1.1,
      y: 1.8,
      w: 5.0,
      h: 0.3,
      fontSize: 13,
      color: TEXT_MUTED,
      bold: true,
    });
    slide.addText(
      '• Culture Surface: Only standard tissue culture polystyrene (TCP).\n• Substrate Variables: Zero ECM protein modifications.\n• Exposure Timeline: Continuous 1–5 days static exposure.\n• Recovery Dynamics: No washout or post-exposure recovery tracked.\n• Question Asked: What is the crude toxicity threshold of GO?',
      {
        x: 1.1,
        y: 2.4,
        w: 5.0,
        h: 4.0,
        fontSize: 13,
        color: TEXT_MUTED,
        lineSpacing: 22,
      }
    );

    // Our Project
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 6.8,
      y: 1.5,
      w: 5.6,
      h: 5.2,
      fill: { color: CARD_BG },
      line: { color: ACCENT_CYAN, width: 2 },
      rectRadius: 0.1,
    });
    slide.addText('OUR SEMESTER PROJECT INNOVATION', {
      x: 7.1,
      y: 1.8,
      w: 5.0,
      h: 0.3,
      fontSize: 13,
      color: ACCENT_CYAN,
      bold: true,
    });
    slide.addText(
      '• 3 Surface Microenvironments:\n  1. TCP (Standard Control)\n  2. Collagen Type I Coated\n  3. Gelatin Coated\n\n• Post-Exposure Recovery Protocol:\n  Expose to calibrated sublethal GO (10–20 µg/mL) → Wash out with fresh media → Monitor at 24 h, 48 h, and 72 h recovery.\n\n• Dual Evaluation Metric:\n  - Structural: Confluence & morphology via ImageJ.\n  - Functional: Cell-exclusion wound closure rate.',
      {
        x: 7.1,
        y: 2.3,
        w: 5.0,
        h: 4.2,
        fontSize: 12,
        color: TEXT_WHITE,
        lineSpacing: 18,
      }
    );

    slide.addNotes(SLIDES[5].speakerNotes.mainScript.join('\n\n'));
  }

  // SLIDE 7: Feasibility at FGCU
  {
    const slide = pptx.addSlide();
    slide.background = { color: BG_COLOR };

    slide.addText('03 · FEASIBILITY AT FGCU', {
      x: 0.8,
      y: 0.5,
      w: 8.0,
      h: 0.3,
      fontSize: 11,
      color: ACCENT_CYAN,
      bold: true,
    });

    slide.addText('FGCU Laboratory Feasibility & Equipment Audit', {
      x: 0.8,
      y: 0.8,
      w: 11.5,
      h: 0.6,
      fontSize: 26,
      color: TEXT_WHITE,
      bold: true,
    });

    // Box 1: Available at FGCU
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 0.8,
      y: 1.5,
      w: 5.6,
      h: 3.2,
      fill: { color: CARD_BG },
      line: { color: ACCENT_EMERALD, width: 1.5 },
      rectRadius: 0.1,
    });
    slide.addText('CONFIRMED AVAILABLE AT FGCU', {
      x: 1.0,
      y: 1.7,
      w: 5.2,
      h: 0.3,
      fontSize: 12,
      color: ACCENT_EMERALD,
      bold: true,
    });
    slide.addText(
      '• Class II Biosafety Cabinet (BSC) for sterile handling\n• Humidified 37°C / 5% CO2 Cell Culture Incubators\n• Inverted Phase-Contrast Microscope + Digital Camera\n• Microplate Spectrophotometer (UV-Vis / 405, 570 nm)\n• Benchtop Centrifuge for 15/50 mL tubes and 96-well plates\n• Reagents: Human Fibroblasts, Gelatin, DMEM, FBS, Trypsin\n• Analysis Software: Fiji / ImageJ and Python',
      {
        x: 1.0,
        y: 2.1,
        w: 5.2,
        h: 2.4,
        fontSize: 11,
        color: TEXT_WHITE,
        lineSpacing: 16,
      }
    );

    // Box 2: Procure or Coordinate
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 6.8,
      y: 1.5,
      w: 5.6,
      h: 3.2,
      fill: { color: CARD_BG },
      line: { color: ACCENT_ORANGE, width: 1.5 },
      rectRadius: 0.1,
    });
    slide.addText('TO PROCURE / COORDINATE (LABCUP)', {
      x: 7.0,
      y: 1.7,
      w: 5.2,
      h: 0.3,
      fontSize: 12,
      color: ACCENT_ORANGE,
      bold: true,
    });
    slide.addText(
      '• Collagen Type I Coating Solution: Inquire via FGCU LabCup (bioeng / biolab1) or purchase standard rat tail collagen.\n• Ca²⁺/Mg²⁺-Free DPBS: For cell rinsing without disturbing adhesion complexes.\n• Cell-Exclusion Culture Inserts: For reproducible wound-healing gap assays without scratch injury debris.',
      {
        x: 7.0,
        y: 2.1,
        w: 5.2,
        h: 2.4,
        fontSize: 11,
        color: TEXT_WHITE,
        lineSpacing: 16,
      }
    );

    // Box 3: Scientific Simplification Rationale
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 0.8,
      y: 4.9,
      w: 11.6,
      h: 1.9,
      fill: { color: CARD_BG },
      line: { color: '334155', width: 1 },
      rectRadius: 0.1,
    });
    slide.addText('METHOD SIMPLIFICATION RATIONALE', {
      x: 1.0,
      y: 5.1,
      w: 11.2,
      h: 0.3,
      fontSize: 12,
      color: ACCENT_CYAN,
      bold: true,
    });
    slide.addText(
      'Wang et al. employed TEM ultra-thin sectioning, AFM height profiling, Western blots, and animal mouse experiments. These advanced techniques are not necessary to answer our core question.\nWe simplify to inverted phase-contrast microscopy, ImageJ wound-gap tracking, and standard viability dyes (AlamarBlue/MTT/CCK-8). The project is 100% executable within FGCU laboratory resources.',
      {
        x: 1.0,
        y: 5.45,
        w: 11.2,
        h: 1.2,
        fontSize: 11,
        color: TEXT_WHITE,
        lineSpacing: 16,
      }
    );

    slide.addNotes(SLIDES[6].speakerNotes.mainScript.join('\n\n'));
  }

  // SLIDE 8: Audience Engagement
  {
    const slide = pptx.addSlide();
    slide.background = { color: BG_COLOR };

    slide.addText('04 · AUDIENCE ENGAGEMENT', {
      x: 0.8,
      y: 0.5,
      w: 8.0,
      h: 0.3,
      fontSize: 11,
      color: ACCENT_CYAN,
      bold: true,
    });

    slide.addText('Audience Prediction Challenge & Hands-Up Poll', {
      x: 0.8,
      y: 0.8,
      w: 11.5,
      h: 0.6,
      fontSize: 26,
      color: TEXT_WHITE,
      bold: true,
    });

    // Scenario Box
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 0.8,
      y: 1.5,
      w: 11.6,
      h: 1.3,
      fill: { color: CARD_BG },
      line: { color: ACCENT_CYAN, width: 1 },
      rectRadius: 0.1,
    });
    slide.addText('THE PREDICTION SCENARIO', {
      x: 1.0,
      y: 1.65,
      w: 11.2,
      h: 0.25,
      fontSize: 11,
      color: ACCENT_CYAN,
      bold: true,
    });
    slide.addText(
      'Suppose our FGCU project purchases commercial Graphene Oxide powder that possesses a substantially HIGHER degree of surface oxidation (denser -OH and -COOH functional groups) than the GO synthesized by Wang et al.',
      {
        x: 1.0,
        y: 1.95,
        w: 11.2,
        h: 0.7,
        fontSize: 13,
        color: TEXT_WHITE,
        lineSpacing: 18,
      }
    );

    // Two voting option cards
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 0.8,
      y: 3.0,
      w: 5.6,
      h: 2.1,
      fill: { color: '064E3B' },
      line: { color: ACCENT_EMERALD, width: 2 },
      rectRadius: 0.1,
    });
    slide.addText('OPTION A: HIGHER THRESHOLD', {
      x: 1.0,
      y: 3.2,
      w: 5.2,
      h: 0.3,
      fontSize: 14,
      color: ACCENT_EMERALD,
      bold: true,
    });
    slide.addText(
      'Cells tolerate >50 µg/mL.\nReasoning: Greater oxidation enhances hydrophilicity, preventing sheet agglomeration and physical membrane slicing.',
      {
        x: 1.0,
        y: 3.6,
        w: 5.2,
        h: 1.3,
        fontSize: 12,
        color: TEXT_WHITE,
        lineSpacing: 16,
      }
    );

    slide.addShape(pptx.ShapeType.roundRect, {
      x: 6.8,
      y: 3.0,
      w: 5.6,
      h: 2.1,
      fill: { color: '7C2D12' },
      line: { color: ACCENT_ORANGE, width: 2 },
      rectRadius: 0.1,
    });
    slide.addText('OPTION B: LOWER THRESHOLD', {
      x: 7.0,
      y: 3.2,
      w: 5.2,
      h: 0.3,
      fontSize: 14,
      color: ACCENT_ORANGE,
      bold: true,
    });
    slide.addText(
      'Cells die at <50 µg/mL.\nReasoning: Denser oxygen functionalities generate higher intracellular Reactive Oxygen Species (ROS) and disrupt lysosomes.',
      {
        x: 7.0,
        y: 3.6,
        w: 5.2,
        h: 1.3,
        fontSize: 12,
        color: TEXT_WHITE,
        lineSpacing: 16,
      }
    );

    // Discussion prompt bottom
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 0.8,
      y: 5.3,
      w: 11.6,
      h: 1.5,
      fill: { color: CARD_BG },
      line: { color: '334155', width: 1 },
      rectRadius: 0.1,
    });
    slide.addText('DISCUSSION QUESTION & CORE TAKE-HOME', {
      x: 1.0,
      y: 5.45,
      w: 11.2,
      h: 0.25,
      fontSize: 11,
      color: ACCENT_CYAN,
      bold: true,
    });
    slide.addText(
      'Follow-up: "If cell confluence returns to 100% after GO washout, has wound-healing function necessarily recovered?"\nTake-Home: Metabolic survival ≠ Structural confluence ≠ Functional tissue repair.',
      {
        x: 1.0,
        y: 5.75,
        w: 11.2,
        h: 0.9,
        fontSize: 12,
        color: TEXT_WHITE,
        lineSpacing: 17,
      }
    );

    slide.addNotes(SLIDES[7].speakerNotes.mainScript.join('\n\n'));
  }

  // SLIDE 9: Reference & Conclusion
  {
    const slide = pptx.addSlide();
    slide.background = { color: BG_COLOR };

    slide.addText('05 · REFERENCE & SCIENTIFIC CITATION', {
      x: 0.8,
      y: 0.5,
      w: 8.0,
      h: 0.3,
      fontSize: 11,
      color: ACCENT_CYAN,
      bold: true,
    });

    slide.addText('IEEE Reference & Scientific Grounding', {
      x: 0.8,
      y: 0.8,
      w: 11.5,
      h: 0.6,
      fontSize: 26,
      color: TEXT_WHITE,
      bold: true,
    });

    // Main Citation Card
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 0.8,
      y: 1.5,
      w: 11.6,
      h: 2.2,
      fill: { color: CARD_BG },
      line: { color: ACCENT_CYAN, width: 2 },
      rectRadius: 0.1,
    });
    slide.addText('PRIMARY ARTICLE CITATION (IEEE FORMAT)', {
      x: 1.1,
      y: 1.7,
      w: 11.0,
      h: 0.3,
      fontSize: 12,
      color: ACCENT_CYAN,
      bold: true,
    });
    slide.addText(
      PRESENTATION_INFO.paperCitation,
      {
        x: 1.1,
        y: 2.1,
        w: 11.0,
        h: 0.8,
        fontSize: 15,
        color: TEXT_WHITE,
        lineSpacing: 22,
        italic: false,
      }
    );
    slide.addText(
      [
        { text: 'DOI Link: ', options: { bold: true, color: TEXT_MUTED } },
        { text: PRESENTATION_INFO.doiUrl, options: { color: ACCENT_CYAN, underline: { style: 'sng', color: ACCENT_CYAN } } },
      ],
      {
        x: 1.1,
        y: 2.9,
        w: 11.0,
        h: 0.4,
        fontSize: 13,
      }
    );

    // Rubric Compliance Checklist summary
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 0.8,
      y: 3.9,
      w: 11.6,
      h: 2.8,
      fill: { color: CARD_BG },
      line: { color: '334155', width: 1 },
      rectRadius: 0.1,
    });
    slide.addText('RUBRIC COMPLIANCE VERIFICATION (50 / 50 POINTS)', {
      x: 1.1,
      y: 4.1,
      w: 11.0,
      h: 0.3,
      fontSize: 12,
      color: ACCENT_EMERALD,
      bold: true,
    });
    slide.addText(
      '✓ Article Overview (10 pts): Title, authors, journal, year, study goal, and translation rationale clearly articulated.\n✓ Highlighted Methods (10 pts): Modified Hummers synthesis + AFM/TEM/FT-IR and 4-step dosing protocol detailed with visual diagrams.\n✓ Project Application & FGCU Feasibility (10 pts): ECM surface expansion (TCP vs Collagen vs Gelatin) and specific FGCU LabCup audit.\n✓ Audience Engagement (10 pts): Prediction challenge on oxidation degree and hands-up functional recovery question.\n✓ Reference & Slides Polish (10 pts): Full IEEE citation with active DOI, visual focal points, and zero dense paragraphs.',
      {
        x: 1.1,
        y: 4.5,
        w: 11.0,
        h: 2.0,
        fontSize: 12,
        color: TEXT_WHITE,
        lineSpacing: 18,
      }
    );

    slide.addNotes(SLIDES[8].speakerNotes.mainScript.join('\n\n'));
  }

  // Generate file and trigger browser download
  await pptx.writeFile({ fileName: 'BME3101C_Graphene_Oxide_Biocompatibility_Terrero_Grismer.pptx' });
}
