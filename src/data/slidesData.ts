import { RubricItem, SlideData } from '../types';

export const PRESENTATION_INFO = {
  title: 'Biocompatibility of Graphene Oxide',
  subtitle: 'Translating in vitro Fibroblast Responses to Biomaterial Design at FGCU',
  authors: ['Jonathan Terrero', 'Gage Grismer'],
  date: 'September 8, 2026',
  course: 'BME3101C Bio Performance of Materials',
  instructor: 'Dr. Marzhan Sypabekova',
  institution: 'Florida Gulf Coast University (FGCU)',
  paperCitation: 'K. Wang, J. Ruan, H. Song, J. Zhang, Y. Wo, S. Guo, and D. Cui, "Biocompatibility of Graphene Oxide," Nanoscale Research Letters, vol. 6, art. no. 8, pp. 1–8, 2011.',
  doi: '10.1007/s11671-010-9751-6',
  doiUrl: 'https://doi.org/10.1007/s11671-010-9751-6',
  labCupUrl: 'https://fgcu.us.labcup.net',
};

export const RUBRIC_ITEMS: RubricItem[] = [
  {
    id: 'rubric-1',
    category: 'Article Overview',
    points: 10,
    description: 'Title, authors, journal, year, study goal, main findings, and why chosen.',
    slideRef: 'Slide 2: Article Overview',
    status: 'exceeded',
    evidence: 'Complete specs, structured goal, dose-viability findings, and semester project rationale.',
  },
  {
    id: 'rubric-2',
    category: 'Highlighted Method or Material',
    points: 10,
    description: '1–2 experimental techniques, tools, or materials explained with engaging visual diagrams.',
    slideRef: 'Slides 3, 4, & 5: Synthesis, Protocol & Mechanism',
    status: 'exceeded',
    evidence: 'Visual diagrams for AFM/TEM/FT-IR, 4-step exposure workflow, toxicity heatmap, and cellular cross-section.',
  },
  {
    id: 'rubric-3',
    category: 'Project Application & FGCU Feasibility',
    points: 10,
    description: 'Adaptation to project, specific FGCU equipment, LabCup inventory check, and simplification strategy.',
    slideRef: 'Slides 6 & 7: ECM Surface Translation & FGCU Feasibility',
    status: 'exceeded',
    evidence: 'TCP vs Collagen vs Gelatin matrix, 24–72h recovery workflow, specific FGCU instruments, and LabCup inventory audit.',
  },
  {
    id: 'rubric-4',
    category: 'Audience Engagement',
    points: 10,
    description: 'Discussion question, mini-challenge, or hands-up poll to engage classmates.',
    slideRef: 'Slide 8: Audience Challenge & Speedometer Poll',
    status: 'exceeded',
    evidence: 'Interactive oxidation degree prediction poll, mechanistic prompt, and survival vs recovery follow-up.',
  },
  {
    id: 'rubric-5',
    category: 'Reference & Slide Polish',
    points: 10,
    description: 'Full article citation in IEEE format with DOI link; clean visual layout, avoiding text paragraphs.',
    slideRef: 'Slide 9: IEEE Reference & Takeaways',
    status: 'exceeded',
    evidence: 'Strict IEEE reference format with active DOI link, visual focal points, and zero dense text walls.',
  },
];

export const SLIDES: SlideData[] = [
  {
    id: 'title',
    slideNumber: 1,
    categoryTag: 'BME3101C · RESEARCH ARTICLE PRESENTATION',
    title: 'Biocompatibility of Graphene Oxide',
    subtitle: 'Cellular Response in Human Fibroblasts & Translation to FGCU Biomaterial Protocols',
    speakerNotes: {
      timeEstimate: '1.0 min',
      presenter: 'Jonathan & Gage',
      mainScript: [
        'Good morning Dr. Sypabekova and classmates. Today, Gage and I are presenting our research article evaluation for BME3101C Bio Performance of Materials.',
        'We selected a landmark paper on the biocompatibility of graphene oxide by Wang et al., published in Nanoscale Research Letters.',
        'Our primary objective today is not just to summarize their findings, but to dissect their methodology and translate their in vitro dosing strategy into our own upcoming semester project here at FGCU.',
      ],
      keyEmphasis: 'Establish confidence, introduce the dual focus: literature baseline + our FGCU project translation.',
      anticipatedQuestions: [
        {
          question: 'Why graphene oxide specifically for a biomaterials class?',
          answer: 'Graphene oxide is being widely investigated for wound dressings, tissue engineering scaffolds, and drug delivery due to its high surface area and hydrophilicity. Understanding its biocompatibility limits is fundamental before applying it.',
        },
      ],
    },
  },
  {
    id: 'overview',
    slideNumber: 2,
    categoryTag: '01 · ARTICLE OVERVIEW',
    title: 'The Study at a Glance',
    subtitle: 'Establishing the dose- and time-dependent threshold of graphene oxide in human cells',
    rubricBadge: 'Rubric: Article Overview (10 pts)',
    speakerNotes: {
      timeEstimate: '1.5 min',
      presenter: 'Jonathan',
      mainScript: [
        'To fulfill our first rubric requirement, here is our article overview.',
        'The paper is titled "Biocompatibility of Graphene Oxide", authored by Kai Wang and colleagues from Shanghai Jiao Tong University, published in Nanoscale Research Letters.',
        'The core goal of the study was to evaluate GO toxicity in both human dermal fibroblasts in vitro and in mice in vivo, determining whether toxicity is strictly dose-dependent.',
        'The main findings were clear: concentrations below 20 µg/mL showed minimal cytotoxicity and over 80% cell viability. However, concentrations above 50 µg/mL caused marked cell detachment, morphological collapse, and apoptosis.',
        'Why we chose it: This paper provides the exact empirical baseline we need. It tests the identical cell type—human fibroblasts—we plan to cultivate in our FGCU lab, giving us a validated range for our sublethal pilot.',
      ],
      keyEmphasis: 'Emphasize the bifurcated response: <20 µg/mL is well tolerated, >50 µg/mL triggers severe cytotoxic collapse.',
      anticipatedQuestions: [
        {
          question: 'Did the paper test normal or cancerous cells?',
          answer: 'They specifically used Human Dermal Fibroblasts (HDF), which is a normal, non-transformed mammalian cell line. This makes it highly physiologically relevant to soft tissue engineering.',
        },
      ],
    },
  },
  {
    id: 'method-synthesis',
    slideNumber: 3,
    categoryTag: '02 · HIGHLIGHTED METHOD: PART 1',
    title: 'Material Synthesis & Physical Characterization',
    subtitle: 'From natural graphite flakes to validated 2D monolayer graphene oxide sheets',
    rubricBadge: 'Rubric: Highlighted Method (10 pts)',
    speakerNotes: {
      timeEstimate: '1.5 min',
      presenter: 'Gage',
      mainScript: [
        'Turning to the experimental methods: first, how did the authors synthesize and verify their graphene oxide material?',
        'They utilized a modified Hummers method, treating natural graphite powder with potassium permanganate and concentrated sulfuric acid to introduce oxygen-containing functionalities.',
        'To prove they actually produced single-layer graphene oxide, they validated it along three analytical axes:',
        'First, AFM (Atomic Force Microscopy) measured sheet heights of approximately 1.0 nanometer, confirming successful exfoliation into monolayers.',
        'Second, TEM (Transmission Electron Microscopy) visualized transparent, crumpled 2D sheet morphology with lateral dimensions of several hundred nanometers.',
        'Third, FT-IR spectroscopy revealed distinct peaks for hydroxyl (-OH), carbonyl (C=O), epoxy (C-O-C), and alkoxy bonds, proving dense surface oxidation that enables stable water dispersion.',
      ],
      keyEmphasis: 'AFM confirms single-layer thickness (~1 nm), TEM confirms 2D sheets, and FT-IR confirms oxygen functional groups for water solubility.',
      anticipatedQuestions: [
        {
          question: 'Why does GO disperse in water while pristine graphene aggregates?',
          answer: 'The oxygen functional groups (hydroxyls and epoxides on the basal plane, carboxyls on the edges) make GO strongly hydrophilic and negatively charged, preventing agglomeration through electrostatic repulsion.',
        },
      ],
    },
  },
  {
    id: 'method-protocol',
    slideNumber: 4,
    categoryTag: '02 · HIGHLIGHTED METHOD: PART 2',
    title: 'In Vitro Fibroblast Exposure & Toxicity Matrix',
    subtitle: 'A systematic 4-step pipeline mapping dose, exposure duration, and cellular survival',
    rubricBadge: 'Rubric: Highlighted Method (10 pts)',
    speakerNotes: {
      timeEstimate: '2.0 min',
      presenter: 'Jonathan',
      mainScript: [
        'The second highlighted method is their in vitro cellular dosing protocol. Notice the clean 4-step experimental logic:',
        'Step 1: Seed human dermal fibroblasts at 5,000 cells per well in 96-well culture plates and let them adhere for 24 hours at 37°C in 5% CO₂.',
        'Step 2: Replace standard growth medium with a GO dosing ladder spanning 5, 10, 20, 50, and 100 µg/mL.',
        'Step 3: Incubate continuously over a 5-day exposure window, sampling daily.',
        'Step 4: Quantify cell viability via CCK-8 colorimetric assay at 570 nm, and quantify cell adhesion spectrophotometrically at 405 nm after controlled centrifugal detachment.',
        'Take a look at the interactive Toxicity Matrix: up to 20 µg/mL, cells maintain green-zone viability across days 1 through 3. But past 50 µg/mL, cell survival plummets into the red zone.',
      ],
      keyEmphasis: 'Walk through the 4 steps clearly. Point out that toxicity depends on both concentration AND exposure time.',
      anticipatedQuestions: [
        {
          question: 'What is CCK-8 and why is it preferred over MTT?',
          answer: 'CCK-8 uses WST-8, a water-soluble tetrazolium salt that gets reduced by cellular dehydrogenases into an orange formazan dye. Unlike MTT, it does not require dissolving insoluble crystals in DMSO, reducing pipetting variability.',
        },
      ],
    },
  },
  {
    id: 'method-mechanism',
    slideNumber: 5,
    categoryTag: '02 · HIGHLIGHTED METHOD: CELLULAR IMPACT',
    title: 'Cellular Impact at High Exposure (>50 µg/mL)',
    subtitle: 'Why a cell can be metabolically active yet functionally compromised',
    rubricBadge: 'Rubric: Highlighted Method (10 pts)',
    speakerNotes: {
      timeEstimate: '1.5 min',
      presenter: 'Gage',
      mainScript: [
        'One of the most profound insights from Wang et al. is that biocompatibility is not just a binary "alive or dead" metric.',
        'Looking at our comparative cellular diagram on the left: healthy fibroblasts display an elongated, flat spindle morphology with dense focal adhesions anchored to extracellular matrix proteins.',
        'On the right, when exposed to high GO concentrations above 50 µg/mL, three cascading events occur:',
        '1. Internalization: TEM confirmed that GO sheets penetrate the plasma membrane through endocytosis, localizing inside lysosomes and mitochondria.',
        '2. Protein Down-Regulation: The paper discovered significant downregulation of crucial adhesion and cell-cycle proteins—specifically laminin, fibronectin, focal adhesion kinase (FAK), and cyclin D3.',
        '3. Morphological Collapse: Without anchor proteins, cells round up, detach from the substrate, shrink, and trigger apoptotic membrane blebbing.',
        'The key takeaway for our class: a cell can still be alive, but if its adhesion machinery is crippled, its bioperformance is broken.',
      ],
      keyEmphasis: 'Adhesion protein downregulation (FAK, fibronectin, laminin) explains why cells detach before dying.',
      anticipatedQuestions: [
        {
          question: 'How do GO sheets enter cells without microinjection?',
          answer: 'Cells internalize GO primarily through energy-dependent macropinocytosis and clathrin-mediated endocytosis. Smaller lateral sheets (<500 nm) penetrate more readily than large micro-sheets.',
        },
      ],
    },
  },
  {
    id: 'project-translation',
    slideNumber: 6,
    categoryTag: '03 · APPLICATION TO OUR PROJECT',
    title: 'Translating Literature to Our Semester Project',
    subtitle: 'Adding Extracellular Matrix (ECM) surfaces and post-exposure recovery dynamics',
    rubricBadge: 'Rubric: Application to Your Project (10 pts)',
    speakerNotes: {
      timeEstimate: '2.0 min',
      presenter: 'Jonathan',
      mainScript: [
        'Now we come to the third rubric criterion: how we adapt this method to our own semester project idea.',
        'In Wang et al., fibroblasts were cultured only on standard tissue culture polystyrene (TCP), with no recovery phase.',
        'For our BME3101C project, we are asking a new engineering question: Does the underlying ECM-like substrate protect fibroblasts from GO toxicity, and can cells recover once GO is removed?',
        'We will culture cells on three distinct biomaterial surfaces: bare TCP, Collagen Type I coated surfaces, and Gelatin coated surfaces.',
        'After exposing them to a sublethal GO concentration (calibrated from our pilot), we will wash the wells with fresh medium and track recovery at 24, 48, and 72 hours.',
        'We will measure structural recovery through confluence and cell retention, and functional recovery using an in vitro cell-exclusion wound closure migration assay.',
      ],
      keyEmphasis: 'We are expanding the literature by introducing 3 surface variables (TCP, Collagen, Gelatin) plus recovery kinetics.',
      anticipatedQuestions: [
        {
          question: 'Why would Collagen I or Gelatin change the cell response to GO?',
          answer: 'Collagen and gelatin provide native integrin-binding ligands (like RGD motifs) that activate FAK and promote cell survival signals. Furthermore, protein coatings can bind free GO sheets through hydrophobic interactions, shielding cells from direct membrane shearing.',
        },
      ],
    },
  },
  {
    id: 'fgcu-feasibility',
    slideNumber: 7,
    categoryTag: '03 · FEASIBILITY AT FGCU',
    title: 'FGCU Laboratory Feasibility & Equipment Audit',
    subtitle: 'Audited against the FGCU Bioengineering LabCup inventory and undergraduate resources',
    rubricBadge: 'Rubric: Feasibility at FGCU (10 pts)',
    speakerNotes: {
      timeEstimate: '2.0 min',
      presenter: 'Gage',
      mainScript: [
        'Next, can this actually be executed at Florida Gulf Coast University? We performed a direct feasibility audit and cross-referenced the FGCU LabCup inventory.',
        'Here is our confirmed equipment list: We have access to Class II Biosafety Cabinets and humidified 37°C / 5% CO₂ incubators in the cell culture lab. We have an inverted phase-contrast microscope with a digital camera, benchtop centrifuges, and multi-well plate readers.',
        'Reagent inventory: We have mammalian fibroblast lines, gelatin, standard DMEM media, and FBS.',
        'Items to procure: We need Collagen Type I coating solution, Ca²⁺/Mg²⁺-free DPBS, and cell-exclusion silicone inserts.',
        'How we simplify: Wang et al. used TEM, AFM, Western blots, and live mouse models. These are unnecessary for our hypothesis. We simplify our readouts to inverted microscopy, automated ImageJ/Python gap analysis, and standard viability dyes. This makes our project 100% executable within our course budget and schedule.',
      ],
      keyEmphasis: 'Directly cite FGCU equipment and LabCup inventory. Show that our scientific simplifications keep the core biology rigorous without expensive equipment.',
      anticipatedQuestions: [
        {
          question: 'What if commercial CCK-8 is too expensive for the lab budget?',
          answer: 'We can easily substitute Alamar Blue or standard MTT, both of which are readily stocked in the FGCU inventory and measure mitochondrial reductase activity with high precision on our existing plate reader.',
        },
      ],
    },
  },
  {
    id: 'audience-poll',
    slideNumber: 8,
    categoryTag: '04 · AUDIENCE ENGAGEMENT',
    title: 'Audience Prediction Challenge',
    subtitle: 'How does graphene oxide oxidation level alter the biological toxicity threshold?',
    rubricBadge: 'Rubric: Audience Engagement (10 pts)',
    speakerNotes: {
      timeEstimate: '2.0 min',
      presenter: 'Jonathan & Gage',
      mainScript: [
        'To engage everyone and test our collective bioengineering intuition, we have an audience prediction challenge.',
        'Scenario: Suppose we purchase commercial graphene oxide that has a substantially HIGHER degree of surface oxidation—meaning vastly more hydroxyl and carboxylic acid groups—than the in-house GO synthesized by Wang et al.',
        'Hands up poll: Do you predict the fibroblast toxicity threshold will be HIGHER (meaning cells tolerate concentrations above 50 µg/mL without dying) or LOWER (meaning cells start dying at lower concentrations, like 10 or 20 µg/mL)?',
        '[Pause for hands: Ask 1-2 classmates why they voted Higher or Lower].',
        'Mechanistic explanation: Highly oxidized GO is more hydrophilic and stays well dispersed, preventing sharp agglomerates that slice cell membranes. However, excessive oxygen groups also increase intracellular Reactive Oxygen Species (ROS) generation! The biological answer depends on that balance.',
        'Follow-up thought: If cell confluence reaches 100% after recovery, does that prove migration and collagen synthesis functions have fully recovered? (Hint: survival ≠ structural recovery ≠ functional recovery).',
      ],
      keyEmphasis: 'Actively ask classmates to raise their hands, call on someone for their reasoning, and connect to the underlying biochemistry.',
      anticipatedQuestions: [
        {
          question: 'What does literature actually show about oxidation degree vs toxicity?',
          answer: 'Recent literature shows a biphasic effect: moderately oxidized GO is less toxic than pristine hydrophobic graphene because it avoids agglomeration, but hyper-oxidized GO with heavy carboxyl density can disrupt lysosomal membrane integrity through protonation changes.',
        },
      ],
    },
  },
  {
    id: 'reference',
    slideNumber: 9,
    categoryTag: '05 · REFERENCE & SCIENTIFIC RIGOR',
    title: 'Reference & Key Takeaways',
    subtitle: 'IEEE formatted citation, DOI link, and semester project roadmap',
    rubricBadge: 'Rubric: Reference (10 pts)',
    speakerNotes: {
      timeEstimate: '1.0 min',
      presenter: 'Jonathan & Gage',
      mainScript: [
        'To conclude our presentation and fulfill the final rubric requirement, here is the full IEEE citation for our paper.',
        'K. Wang, J. Ruan, H. Song, J. Zhang, Y. Wo, S. Guo, and D. Cui, "Biocompatibility of Graphene Oxide," Nanoscale Research Letters, vol. 6, art. no. 8, pp. 1–8, 2011. DOI: 10.1007/s11671-010-9751-6.',
        'In summary: Wang et al. demonstrated that GO toxicity in human fibroblasts is dose- and time-dependent, mediated by internalization and down-regulation of adhesion proteins.',
        'Our project builds on their work by testing how ECM biomaterials (Collagen and Gelatin) modulate this toxicity and facilitate cell recovery.',
        'Thank you Dr. Sypabekova and classmates. We welcome any questions!',
      ],
      keyEmphasis: 'Deliver final IEEE citation clearly, summarize the bridge from Wang et al. to FGCU, open the floor for Q&A.',
      anticipatedQuestions: [
        {
          question: 'What is your very first benchtop step when starting the lab?',
          answer: 'Our first benchtop step is to perform a rapid 3-point dose-ranging pilot (10, 20, 50 µg/mL) with our specific commercial GO and fibroblast line to confirm our baseline before coating plates with collagen and gelatin.',
        },
      ],
    },
  },
];
