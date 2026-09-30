import pepperImg from '../assets/spices/pepper.jpg'
import cardamomImg from '../assets/spices/cardamom.jpg'
import cinnamonImg from '../assets/spices/cinnamon.jpg'
import clovesImg from '../assets/spices/cloves.jpg'
import turmericImg from '../assets/spices/turmeric.jpg'

export const siteInfo = {
  name: 'anjillan spice_exim',
  legalName: 'Anjillan Exim Private Limited',
  tagline: "Connecting Kerala's Spice Heritage with the UAE",
  headline: 'From the Spice Gardens of Kerala to the Global Markets of the UAE',
  description:
    'Anjillan Exim connects authentic, single-origin Kerala spices with distributors, wholesalers, and food manufacturers across the UAE through transparent sourcing, rigorous laboratory testing, and seamless maritime logistics.',
  contact: {
    uaeOffice: 'Dubai Maritime City / Deira Spice Souk Hub, Dubai, UAE',
    indiaOffice: 'Wayanad & Kochi Spice Trade Corridor, Kerala, India',
    email: 'trade@anjillanexim.com',
    phoneUAE: '+971 4 234 5678',
    phoneIndia: '+91 484 298 7654',
    whatsapp: '+971501234567',
  },
  stats: [
    { label: 'Origin Verification', value: '100%' },
    { label: 'Export Grade Spices', value: '9+ Varieties' },
    { label: 'Direct Partner Farms', value: '45+ Estates' },
    { label: 'Cochin to Jebel Ali Transit', value: '3 - 4 Days' }
  ]
}

export const spices = [
  {
    id: 'pepper',
    name: 'Tellicherry Malabar Black Pepper',
    category: 'whole',
    origin: 'Wayanad & Idukki, Kerala',
    grade: 'TGSEB (Tellicherry Garbled Special Extra Bold)',
    specs: {
      moisture: '< 11.5%',
      piperine: '5.2% - 6.5%',
      density: '570 - 600 g/L',
      packaging: '25kg / 50kg multi-wall paper or jute bags'
    },
    desc: 'The celebrated King of Spices. Hand-harvested mature berries sun-dried on bamboo mats, yielding deep citrus notes and intense, clean pungency.',
    img: pepperImg,
    badge: 'Flagship Export'
  },
  {
    id: 'cardamom',
    name: 'Alleppey Green Extra Bold Cardamom',
    category: 'whole',
    origin: 'Cardamom Hills, Idukki, Kerala',
    grade: 'AGEB (Alleppey Green Extra Bold 8mm+)',
    specs: {
      moisture: '< 10.0%',
      volatileOil: '7.5% - 9.0%',
      color: 'Lush natural deep green',
      packaging: '5kg airtight poly-lined cartons in 25kg master cases'
    },
    desc: 'The Queen of Spices. Characterized by uniform intense green pods, high volatile oil content, and a sweet, camphorous, floral aroma revered across the Gulf.',
    img: cardamomImg,
    badge: 'Premium Grade'
  },
  {
    id: 'cinnamon',
    name: 'Kerala True Ceylon Cinnamon',
    category: 'bark',
    origin: 'Malabar Foothills, Kerala',
    grade: 'C5 Alba / M4 Superfine Quills',
    specs: {
      moisture: '< 12%',
      coumarin: '< 0.004% (True Cinnamon)',
      length: '8 - 10 cm hand-rolled quills',
      packaging: '10kg / 25kg craft cartons'
    },
    desc: 'Delicate, multi-layered rolls of paper-thin inner bark with low coumarin, prized for natural sweetness, subtle warmth, and culinary refinement.',
    img: cinnamonImg,
    badge: 'Single Origin'
  },
  {
    id: 'cloves',
    name: 'Hand-Picked Malabar Cloves',
    category: 'whole',
    origin: 'Kottayam & Idukki, Kerala',
    grade: 'Hand-Picked Special (HPS Grade A)',
    specs: {
      moisture: '< 11%',
      eugenol: '18% - 21%',
      headRetention: '> 95% intact crowns',
      packaging: '10kg vacuum packs / 25kg corrugated cartons'
    },
    desc: 'Full-bodied flower buds harvested right before blooming. Rich in eugenol oil with distinct spicy-sweet warmth and intact crowns.',
    img: clovesImg,
    badge: 'High Eugenol'
  },
  {
    id: 'turmeric',
    name: 'Wayanad High-Curcumin Turmeric',
    category: 'powder',
    origin: 'Wayanad, Kerala',
    grade: 'Pratibha Grade A Fingers & Polished Bulbs',
    specs: {
      curcumin: '5.2% - 6.8%',
      moisture: '< 9.5%',
      ash: '< 6.0%',
      packaging: '25kg / 50kg vacuum hermetic bags'
    },
    desc: 'Deep orange-yellow rhizomes celebrated worldwide for exceptional natural curcumin levels, intense earthy fragrance, and medicinal purity.',
    img: turmericImg,
    badge: 'High Curcumin'
  },
  {
    id: 'dry-ginger',
    name: 'Cochin Bleached & Unbleached Dry Ginger',
    category: 'whole',
    origin: 'Central Kerala',
    grade: 'Garbled Cochin Clean Rhizome',
    specs: {
      moisture: '< 11%',
      gingerol: '1.8% - 2.4%',
      fiber: '< 4%',
      packaging: '25kg / 50kg jute sacks'
    },
    desc: 'Sun-cured fibrous ginger rhizomes offering sharp, lemony pungency essential for Middle Eastern tea blends, confections, and spice rubs.',
    img: pepperImg,
    badge: 'Sun-Dried'
  },
  {
    id: 'nutmeg',
    name: 'Kerala Nutmeg & Golden Mace',
    category: 'whole',
    origin: 'Periyar River Basin, Kerala',
    grade: 'Sound Whole Kernels / Flower Red Mace',
    specs: {
      moisture: '< 8%',
      myristicin: 'High natural oil content',
      aflatoxin: 'Compliant to EU & ESMA regulations',
      packaging: '25kg vacuum-sealed cartons'
    },
    desc: 'Hand-cracked aromatic kernels and lacy crimson-gold mace arils with intoxicating sweet-warm fragrance.',
    img: cinnamonImg,
    badge: 'Aromatic'
  },
  {
    id: 'chilli',
    name: 'Guntur & Byadgi Stemless Red Chillies',
    category: 'whole',
    origin: 'Southern India Corridor',
    grade: 'Premium Deep Red Stemless (SHU 15,000 - 35,000)',
    specs: {
      colorValue: '120 - 150 ASTA',
      moisture: '< 10%',
      brokenPercent: '< 2%',
      packaging: '25kg compressed export bales'
    },
    desc: 'Lustrous, deep crimson chillies offering vibrant natural red color and balanced culinary warmth for Gulf spice grinders.',
    img: clovesImg,
    badge: 'Rich Color'
  },
  {
    id: 'star-anise',
    name: 'Whole Eight-Pointed Star Anise',
    category: 'whole',
    origin: 'Southern India Highland Farms',
    grade: 'Whole Pods Grade A (>85% intact)',
    specs: {
      moisture: '< 11%',
      anethole: 'High essential oil profile',
      diameter: '2.5 - 3.5 cm pods',
      packaging: '10kg master cartons'
    },
    desc: 'Symmetrical, fragrant star-shaped seed pods imparting a liquorice-sweet aroma cherished in Arabic rice dishes and spice mixes.',
    img: cardamomImg,
    badge: 'Select Pods'
  }
]

export const qualitySteps = [
  {
    step: '01',
    title: 'Farm Gate Selection',
    description:
      'We partner directly with certified smallholder spice gardens and heritage estates across Idukki, Wayanad, and Cochin—bypassing brokers to secure earliest seasonal pickings.'
  },
  {
    step: '02',
    title: 'Lab Testing & Grading',
    description:
      'Every batch undergoes rigorous ISO/IEC 17025 accredited laboratory tests for moisture content, volatile oil percentages, microbial safety, and pesticide zero-residue.'
  },
  {
    step: '03',
    title: 'Hermetic & Vacuum Packaging',
    description:
      'Spices are packed in multi-barrier food-grade vacuum pouches, nitrogen-flushed containers, or multi-wall kraft paper sacks to preserve volatile oils and aroma during sea voyages.'
  },
  {
    step: '04',
    title: 'Port Logistics & UAE Clearance',
    description:
      'Seamless shipment from Cochin Port to Jebel Ali / Port Rashid. Full documentation handled: Phytosanitary certificates, Certificates of Origin, and Dubai Municipality food registrations.'
  }
]

export const tradePillars = [
  {
    icon: 'ShieldCheck',
    title: 'Direct Origin Traceability',
    description:
      'Every lot traces back to specific geographic plantation clusters in Kerala, ensuring consistent taste, color, and culinary potency.'
  },
  {
    icon: 'Award',
    title: 'Gulf Regulatory Compliance',
    description:
      'Our export protocols strictly adhere to ESMA (Emirates Authority for Standardization and Metrology) and Dubai Municipality food safety standards.'
  },
  {
    icon: 'TrendingUp',
    title: 'Wholesale Pricing Advantage',
    description:
      'By eliminating tiers of intermediaries, we provide competitive FOB Cochin and CIF Jebel Ali quotations for importers, distributors, and mills.'
  },
  {
    icon: 'Ship',
    title: 'Rapid Sea Transit (3-4 Days)',
    description:
      'Direct maritime routes between Cochin International Container Transshipment Terminal (ICTT) and Jebel Ali Port ensure minimal inventory transit lag.'
  }
]
