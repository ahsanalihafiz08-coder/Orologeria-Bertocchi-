import { WatchCard } from '../types/watch';

export const SERVICES_CATEGORIES = [
  'All',
  'Watch Collections',
  'Watch Styles',
  'Gift Ideas',
  'Enquiries'
] as const;

export const SERVICES_CARDS: WatchCard[] = [
  {
    id: 'service-1',
    name: 'Rolex Datejust 41',
    category: 'Watch Collections',
    subtitle: 'Fluted Bezel • Stone Surface Setting',
    shortDetails: 'Classic Oystersteel Datejust with sunburst slate dial resting on textured stone backdrop.',
    fullDescription: 'The archetype of the modern watch. Aesthetically, the Datejust has spanned eras while retaining the enduring codes that make it one of the most recognized and recognizable of watches. Fitted with the iconic fluted white gold bezel and high-precision mechanical calibre.',
    image: '/assets/images/PZ3zjT3Q_Rolex-Datejust-on-stone-background-20261020014018.jpg',
    priceTag: '€14,800',
    highlights: ['Oystersteel & white gold fluted bezel', 'Calibre 3235 perpetual automatic movement', 'Balanced classical 41mm proportions', 'Twinlock waterproof crown architecture'],
    specs: {
      caseMaterial: 'Oystersteel & White Gold',
      dialColor: 'Sunburst Slate / Rhodium',
      movementType: 'High-Precision Automatic Calibre 3235',
      waterResistance: '100m (10 ATM)',
      origin: 'Geneva, Switzerland'
    }
  },
  {
    id: 'service-2',
    name: 'Rolex Submariner Date',
    category: 'Watch Collections',
    subtitle: 'Stainless Steel • Cerachrom Bezel',
    shortDetails: 'The quintessential divers timepiece in stainless steel with black ceramic bezel and Chromalight display.',
    fullDescription: 'The benchmark among divers watches. Crafted in surgical-grade Oystersteel with an unidirectional 60-minute rotatable Cerachrom bezel and solid-link Oyster bracelet with Glidelock fine-adjustment clasp.',
    image: '/assets/images/0yH5zrFG_Stainless-steel-watch-resting-20261020014008.jpg',
    priceTag: '€13,200',
    highlights: ['Unidirectional 60-minute Cerachrom ceramic bezel', 'Oystersteel 904L high-tensile alloy', 'Chromalight long-lasting blue luminescence', 'Solid Oyster bracelet with Glidelock clasp'],
    specs: {
      caseMaterial: 'Surgical Grade Oystersteel 904L',
      dialColor: 'Gloss Deep Black',
      movementType: 'Rolex Calibre 3235 with 70h Reserve',
      waterResistance: '300m (30 ATM Professional)',
      origin: 'Geneva, Switzerland'
    }
  },
  {
    id: 'service-3',
    name: 'Rolex Cosmograph Daytona Chronograph',
    category: 'Watch Collections',
    subtitle: 'Tachymeter Bezel • White Contrasting Dial',
    shortDetails: 'Legendary motorsport chronograph with column-wheel actuation and contrasting black sub-registers.',
    fullDescription: 'Designed to be the ultimate timing tool for endurance racing drivers. More than 50 years after its creation, the Cosmograph Daytona remains in a class of its own among sport chronographs, offering split-second precision and undeniable presence.',
    image: '/assets/images/0ycvgSrc_Rolex-Daytona-chronograph-on-sur-20261020014026.jpg',
    priceTag: '€34,500',
    highlights: ['Integrated mechanical chronograph mechanism', 'Cerachrom high-tech black ceramic tachymeter bezel', 'Column wheel and vertical clutch system', 'Screw-down chronograph pushers'],
    specs: {
      caseMaterial: 'Oystersteel & High-Tech Ceramic',
      dialColor: 'Panda White / Silver Contrasting',
      movementType: 'Rolex Calibre 4131 Chronograph',
      waterResistance: '100m (10 ATM)',
      origin: 'Geneva, Switzerland'
    }
  },
  {
    id: 'service-4',
    name: 'Rolex GMT-Master II',
    category: 'Watch Collections',
    subtitle: 'Dual Timezone • Jubilee Bracelet',
    shortDetails: 'High-precision dual time zone travel watch with 24-hour rotatable bezel and dedicated arrow indicator.',
    fullDescription: 'Designed for international globetrotters and aviators, the GMT-Master II displays two time zones simultaneously. Fitted with a supple five-link Jubilee bracelet and bi-directional ceramic bezel for effortless world travel.',
    image: '/assets/images/5Wspq1yL_Rolex-GMT-Master-II-watch-resting-20261020014035.jpg',
    priceTag: '€19,800',
    highlights: ['Independent rapid-setting hour hand', '24-hour bidirectional rotatable ceramic bezel', 'Jubilee five-piece link ergonomic bracelet', 'Twinlock waterproof screw-down crown'],
    specs: {
      caseMaterial: 'Oystersteel 904L',
      dialColor: 'Midnight Gloss Black',
      movementType: 'Calibre 3285 Dual Timezone Automatic',
      waterResistance: '100m (10 ATM)',
      origin: 'Geneva, Switzerland'
    }
  },
  {
    id: 'service-5',
    name: 'Rolex Oyster Perpetual Turquoise',
    category: 'Watch Collections',
    subtitle: 'Vivid Turquoise Celebration • Domed Bezel',
    shortDetails: 'Celebrated vivid turquoise lacquer dial paired with smooth domed stainless steel bezel.',
    fullDescription: 'The Oyster Perpetual is the purest expression of the Oyster concept, providing a clear and accurate time display. Its striking turquoise lacquer dial adds youthful vibrancy to classical Genevan proportions.',
    image: '/assets/images/9m1WzhYJ_Rolex-Oyster-Perpetual-turquoise-20261020014039.jpg',
    priceTag: '€10,500',
    highlights: ['Celebrated vivid turquoise lacquer dial', 'Domed smooth stainless steel bezel', 'Paraflex high-performance shock absorbers', 'Pure minimalist dial typography'],
    specs: {
      caseMaterial: 'Oystersteel 904L',
      dialColor: 'Turquoise Sky Blue Lacquer',
      movementType: 'Rolex Calibre 3230 Self-Winding',
      waterResistance: '100m (10 ATM)',
      origin: 'Geneva, Switzerland'
    }
  },
  {
    id: 'service-6',
    name: 'Rolex Air-King Precision',
    category: 'Watch Collections',
    subtitle: 'Aviation Cockpit Instrument Dial',
    shortDetails: 'Aeronautical tribute watch featuring distinctive black dial with prominent minute scale for navigation.',
    fullDescription: 'The Air-King celebrates the aeronautical heritage of the original Oyster. Featuring a distinctive black dial with large 3, 6, and 9 numerals and a prominent minutes scale for navigational time readings, accented by green signature second hand.',
    image: '/assets/images/sJ3pWyVb_Rolex-watch-on-white-background-20261020014046.jpg',
    priceTag: '€9,200',
    highlights: ['Prominent cockpit navigational numeral scale', 'Signature green seconds hand and yellow crown', 'Solid Oysterlock safety clasp with Easylink', 'Calibre with magnetic field shield resistance'],
    specs: {
      caseMaterial: 'Brushed Oystersteel',
      dialColor: 'Deep Instrument Black',
      movementType: 'Rolex Calibre 3230 Chronometer',
      waterResistance: '100m (10 ATM)',
      origin: 'Geneva, Switzerland'
    }
  },
  {
    id: 'service-7',
    name: 'Rolex Day-Date 40 Solid Gold',
    category: 'Watch Styles',
    subtitle: '18 ct Yellow Gold • President Bracelet',
    shortDetails: 'Prestige dress watch in solid 18 ct yellow gold featuring instantaneous day and date calendar apertures.',
    fullDescription: 'The ultimate watch of prestige. Worn by leaders, visionaries, and luminaries, the Day-Date was the first watch to indicate the day of the week spelt out in full in an arc-shaped window at 12 oclock, paired with the iconic President bracelet.',
    image: '/assets/images/SXR9hYvF_Gold-Rolex-watch-on-surface-20261020014052.jpg',
    priceTag: '€42,000',
    highlights: ['Solid 18 ct yellow gold construction', 'President semi-circular link bracelet with concealed clasp', 'Instantaneous day of week and date calendar', 'Fluted yellow gold bezel reflection'],
    specs: {
      caseMaterial: '18 ct Solid Yellow Gold',
      dialColor: 'Champagne Sunburst',
      movementType: 'Calibre 3255 Day-Date Automatic',
      waterResistance: '100m (10 ATM)',
      origin: 'Geneva, Switzerland'
    }
  },
  {
    id: 'service-8',
    name: 'Rolex Explorer II Polar White',
    category: 'Watch Styles',
    subtitle: 'Fixed 24h Steel Bezel • Orange Arrow',
    shortDetails: 'Polar white dial paired with fixed 24-hour steel bezel and high-visibility orange indicator hand.',
    fullDescription: 'The watch of choice for speleologists, volcanologists, and polar explorers. Its distinctive orange 24-hour hand and fixed engraved steel bezel allow explorers to distinguish day from night in extreme conditions.',
    image: '/assets/images/Xr7tqggF_Rolex-watch-on-white-surface-20261020014057.jpg',
    priceTag: '€12,800',
    highlights: ['Polar white dial with blackened hour markers', 'Fixed 24-hour engraved sunray steel bezel', 'Vibrant orange 24-hour expedition hand', 'Paraflex high-performance shock absorbers'],
    specs: {
      caseMaterial: 'Oystersteel 904L',
      dialColor: 'Polar White Lacquer',
      movementType: 'Calibre 3285 Dual Timezone Self-Winding',
      waterResistance: '100m (10 ATM)',
      origin: 'Geneva, Switzerland'
    }
  },
  {
    id: 'service-9',
    name: 'Rolex Sea-Dweller Deepsea',
    category: 'Watch Styles',
    subtitle: 'Helium Valve • D-Blue Gradient',
    shortDetails: 'Engineered for the abyss with helium escape valve, Ringlock high-pressure architecture, and blue gradient dial.',
    fullDescription: 'The pinnacle of underwater instrument engineering. Built in partnership with deep-sea exploration pioneers, featuring pressure resistance exceeding 1,200 meters, an RLX titanium caseback, and a dial transitioning from bright blue to bottomless black.',
    image: '/assets/images/bMLSwX46_Rolex-Sea-Dweller-watch-displayed-20261020014101.jpg',
    priceTag: '€15,600',
    highlights: ['Helium escape valve mechanism', 'D-Blue gradient dial from ocean blue to black', 'Ceramic 60-minute diving scale', 'Fliplock diver extension link'],
    specs: {
      caseMaterial: 'Oystersteel & RLX Titanium',
      dialColor: 'D-Blue Gradient',
      movementType: 'Heavy-Duty Calibre 3235 Automatic',
      waterResistance: '1,220m (122 ATM)',
      origin: 'Geneva, Switzerland'
    }
  },
  {
    id: 'service-10',
    name: 'Rolex Yacht-Master 42',
    category: 'Watch Styles',
    subtitle: '18 ct White Gold • Oysterflex Strap',
    shortDetails: 'Maritime luxury timepiece pairing 18 ct white gold with high-performance Oysterflex rubber strap.',
    fullDescription: 'The Yacht-Master embodies maritime prestige. The bidirectional rotatable matte ceramic bezel with polished raised numerals allows precise timing between nautical waypoints, paired with the elastomeric comfort of the Oysterflex bracelet.',
    image: '/assets/images/Q3NM3YXD_Rolex-Yacht-Master-on-surface-20261020014105.jpg',
    priceTag: '€29,400',
    highlights: ['Bidirectional matte ceramic bezel with raised polished numerals', 'Oysterflex titanium-blade elastomer strap', 'Glidelock fine-adjustment clasp', 'Chromalight long-lasting blue luminescence'],
    specs: {
      caseMaterial: '18 ct White Gold',
      dialColor: 'Matte Jet Black',
      movementType: 'Calibre 3235 Self-Winding Mechanical',
      waterResistance: '100m (10 ATM)',
      origin: 'Geneva, Switzerland'
    }
  },
  {
    id: 'service-11',
    name: 'Patek Philippe Aquanaut 5167A',
    category: 'Watch Collections',
    subtitle: 'Embossed Dial • Tropical Composite Strap',
    shortDetails: 'Rounded octagonal geometry with signature embossed black checkerboard dial and tropical composite strap.',
    fullDescription: 'A dynamic reinterpretation of Genevan haute horlogerie. Features an ultra-flat automatic movement, sapphire display back, and water resistance suited for modern sporting lifestyles, complemented by an indestructible tropical composite strap.',
    image: '/assets/images/Z6RmbpJR_Patek-Philippe-Aquanaut-watch-20261020014712.jpg',
    priceTag: '€58,000',
    highlights: ['Tropical UV and saltwater resistant strap', 'Satin-finished and polished rounded octagonal bezel', 'Calibre with stop-seconds mechanism', 'Patek Philippe seal standard'],
    specs: {
      caseMaterial: 'Stainless Steel',
      dialColor: 'Embossed Checkerboard Black',
      movementType: 'Ultra-Thin Automatic Calibre 26-330 S C',
      waterResistance: '120m (12 ATM)',
      origin: 'Geneva, Switzerland'
    }
  },
  {
    id: 'service-12',
    name: 'Patek Philippe Calatrava Officer-Style',
    category: 'Watch Styles',
    subtitle: '18k Rose Gold • Hinged Dust Cover',
    shortDetails: 'The quintessential round wristwatch with invisibly hinged officer caseback and warm ivory lacquered dial.',
    fullDescription: 'With its pure lines, this reference represents the supreme essence of the round dress watch. The officer-style hinged dust cover reveals the exquisitely finished Geneva-striped movement on demand, preserving historic watchmaking tradition.',
    image: '/assets/images/dNmQ32Z_Patek-Philippe-watch-on-surface-20261020014708.jpg',
    priceTag: '€38,500',
    highlights: ['Officer-style dust cover with invisible hinge', 'Ivory lacquered dial with gold applied indices', 'Fluted curved lugs with screw-pins', 'Hand-stitched shiny dark chestnut alligator strap'],
    specs: {
      caseMaterial: '18k Rose Gold',
      dialColor: 'Warm Ivory Lacquer',
      movementType: 'Self-Winding Calibre 324 S C',
      waterResistance: '30m (3 ATM)',
      origin: 'Geneva, Switzerland'
    }
  },
  {
    id: 'service-13',
    name: 'Patek Philippe Nautilus 5711',
    category: 'Watch Collections',
    subtitle: 'Sunburst Blue Dial • Integrated Bracelet',
    shortDetails: 'Lateral hinge porthole construction with horizontal embossed blue dial and integrated ergonomic bracelet.',
    fullDescription: 'Since its introduction in 1976, this silhouette has defined the luxury stainless steel sports watch genre. Its gentle octagonal bezel, lateral hinges, and satin-brushed surfaces create an unmistakable presence on the wrist.',
    image: '/assets/images/SDmk1jSb_Patek-Philippe-watch-on-surface-20261020014717.jpg',
    priceTag: '€76,000',
    highlights: ['Porthole lateral hinges and rounded bezel', 'Horizontal relief embossed blue dial', 'Tapered integrated steel bracelet', 'Exhibition sapphire crystal back'],
    specs: {
      caseMaterial: 'Stainless Steel',
      dialColor: 'Graduated Sunburst Blue',
      movementType: 'Calibre 26-330 S C with 21k Gold Central Rotor',
      waterResistance: '120m (12 ATM)',
      origin: 'Geneva, Switzerland'
    }
  },
  {
    id: 'service-14',
    name: 'Patek Philippe Annual Calendar',
    category: 'Watch Collections',
    subtitle: 'Triple Aperture Arc • Moonphase',
    shortDetails: 'Patented annual calendar displaying day, date, and month across three arc apertures with precision moonphase.',
    fullDescription: 'An emblematic complication requiring adjustment only once per year at the end of February. Featuring sculptured pierced lugs, graduated two-tone blue dial, and photorealistic moonphase disc accurate for over a century.',
    image: '/assets/images/kNbrSQw_Patek-Philippe-watch-on-background-20261020014720.jpg',
    priceTag: '€44,000',
    highlights: ['Three calendar apertures arranged in an arc', 'Pierced skeleton lugs architecture', 'Moonphase display accurate for 122 years', 'White gold applied faceted hour markers'],
    specs: {
      caseMaterial: '18k White Gold',
      dialColor: 'Sunburst Blue with Black Gradation',
      movementType: 'Annual Calendar Automatic Calibre 324 S QA LU',
      waterResistance: '30m (3 ATM)',
      origin: 'Geneva, Switzerland'
    }
  },
  {
    id: 'service-15',
    name: 'Patek Philippe Classic Chronograph',
    category: 'Watch Styles',
    subtitle: 'Hand-Wound Column-Wheel • Stepped Lugs',
    shortDetails: 'Hand-wound classic chronograph with guilloché round pushers and syringe hands on midnight blue dial.',
    fullDescription: 'Heir to legendary mid-century chronographs, this white gold piece combines vintage stepped lugs with contemporary technical mastery, featuring an instantaneous 30-minute jumping counter and column wheel.',
    image: '/assets/images/C5xTTxpT_Patek-Philippe-chronograph-on-su-20261020014725.jpg',
    priceTag: '€62,000',
    highlights: ['Triple stepped lug architecture', 'Fluted round guilloché pushers', 'Syringe luminescent hands', 'Hand-wound column-wheel manufacture calibre'],
    specs: {
      caseMaterial: '18k White Gold',
      dialColor: 'Varnished Midnight Blue',
      movementType: 'Manual Wind Chronograph Calibre CH 29-535 PS',
      waterResistance: '30m (3 ATM)',
      origin: 'Geneva, Switzerland'
    }
  },
  {
    id: 'service-16',
    name: 'Patek Philippe World Time 5230',
    category: 'Watch Collections',
    subtitle: '24 Time Zones • Hand-Guilloché Dial',
    shortDetails: 'City ring displaying 24 world time zones surrounding an intricate hand-guilloché circular basketweave center.',
    fullDescription: 'A classic traveler complication invented by Louis Cottier. With a single press of the 10 oclock pusher, the local hour hand and 24-hour city ring advance synchronously without losing seconds accuracy.',
    image: '/assets/images/S71r82jq_Patek-Philippe-luxury-watch-view-20261020014729.jpg',
    priceTag: '€54,000',
    highlights: ['Hand-turned guilloché dial center motif', '24 global time zone cities ring', 'Single pusher synchronization mechanism', 'Winglet-style sculpted lugs'],
    specs: {
      caseMaterial: 'Platinum 950 / White Gold',
      dialColor: 'Hand-Guilloché Charcoal & Opaline',
      movementType: 'Ultra-Thin Micro-Rotor Automatic Calibre 240 HU',
      waterResistance: '30m (3 ATM)',
      origin: 'Geneva, Switzerland'
    }
  },
  {
    id: 'service-17',
    name: 'Patek Philippe Golden Ellipse',
    category: 'Watch Styles',
    subtitle: 'Divine Proportion • Blue Gold Sunburst',
    shortDetails: 'Harmonious elliptical geometry based on the ancient Greek divine ratio with cobalt blue sunburst dial.',
    fullDescription: 'When it emerged in 1968, the Golden Ellipse broke with traditional watch cases. Its proportions were inspired by the golden ratio discovered by ancient Greek mathematicians, offering eternal aesthetic balance and ultra-thin elegance.',
    image: '/assets/images/wDBJF22_Patek-Philippe-watch-on-surface-20261020014735.jpg',
    priceTag: '€32,000',
    highlights: ['Golden ratio elliptical casing (1 : 1.618)', 'Cobalt blue gold-backed sunburst dial', 'Cabochon onyx set into crown', 'Ultra-thin automatic micro-rotor calibre'],
    specs: {
      caseMaterial: '18k Rose / White Gold',
      dialColor: 'Blue Gold Sunburst',
      movementType: 'Ultra-Thin Calibre 240 Micro-Rotor',
      waterResistance: '30m (3 ATM)',
      origin: 'Geneva, Switzerland'
    }
  },
  {
    id: 'service-18',
    name: 'Patek Philippe Grand Complications',
    category: 'Watch Collections',
    subtitle: 'Hand-Engraved Case • Reversible Dual-Dial',
    shortDetails: 'Hand-engraved laurel leaf relief casing with acoustically tuned chiming minute repeating gongs.',
    fullDescription: 'The pinnacle of acoustic watchmaking. Featuring hand-tuned cathedral gongs, multiple chiming strikes, perpetual calendar displays, and hand-engraved ornamental scrollwork along the entire reversible caseband.',
    image: '/assets/images/ZncTPwg_Patek-Philippe-watch-on-surface-20261020014737.jpg',
    priceTag: '€165,000',
    highlights: ['Hand-engraved laurel leaf relief casing', 'Acoustic cathedral gongs chime mechanism', 'Reversible swivel case mechanism', 'Multiple grand complications display'],
    specs: {
      caseMaterial: 'Hand-Engraved 18k White Gold',
      dialColor: 'Opaline Black & Silver Dials',
      movementType: 'Manual Wind Chiming Grand Complication',
      waterResistance: 'Humidity and Dust Protected',
      origin: 'Geneva, Switzerland'
    }
  },
  {
    id: 'service-19',
    name: 'Patek Philippe Pilot Travel Time',
    category: 'Watch Styles',
    subtitle: 'Dual Time Zones • Screw-Lock Pushers',
    shortDetails: 'Aeronautical tribute with large luminescent Arabic numerals and dual time zone local and home indicators.',
    fullDescription: 'Paying homage to traditional aviators watches from the 1930s, this white gold timepiece combines masculine presence with unparalleled travel utility, featuring patented safety screw-lock pushers and dual day/night indicators.',
    image: '/assets/images/1fvPdTbq_Patek-Philippe-watch-on-surface-20261020014741.jpg',
    priceTag: '€48,000',
    highlights: ['Patented safety screw-lock pushers', 'Separate local and home day/night apertures', 'Vintage brown calfskin strap with clevis buckle', 'Luminescent aviator cathedral hands'],
    specs: {
      caseMaterial: '18k White Gold',
      dialColor: 'Blue Varnished Dial',
      movementType: 'Travel Time Dual Calibre 324 S C FUS',
      waterResistance: '60m (6 ATM)',
      origin: 'Geneva, Switzerland'
    }
  },
  {
    id: 'service-20',
    name: 'Patek Philippe Twenty~4 Automatic',
    category: 'Watch Styles',
    subtitle: 'Diamond-Set Bezel • Shantung Dial',
    shortDetails: 'Articulated link bracelet watch set with 160 brilliant-cut diamonds in delicate dentelle technique.',
    fullDescription: 'Created for the modern, dynamic woman, this timepiece expresses timeless beauty and poise from morning to evening, complemented by an articulated bracelet that drapes across the wrist like silk and a diamond-paved bezel.',
    image: '/assets/images/5XKbN300_Patek-Philippe-watch-on-background-20261020014821.jpg',
    priceTag: '€26,500',
    highlights: ['160 flawless brilliant diamonds (~0.77 ct)', 'Silvery shantung vertical and horizontal satin dial', 'Articulated fluid bracelet links', 'Geneva seal hand finishing'],
    specs: {
      caseMaterial: 'Stainless Steel & Diamonds',
      dialColor: 'Silvery Shantung Satin Texture',
      movementType: 'Self-Winding Calibre 324 S C',
      waterResistance: '30m (3 ATM)',
      origin: 'Geneva, Switzerland'
    }
  },
  {
    id: 'service-21',
    name: 'Audemars Piguet Royal Oak Jumbo',
    category: 'Watch Collections',
    subtitle: '39mm Ultra-Thin • Petite Tapisserie Bleu',
    shortDetails: 'The quintessential octagonal bezel with exposed hexagonal white gold screws and Bleu Nuit Nuage 50 dial.',
    fullDescription: 'First launched in 1972, this timepiece overturned the prevailing codes of fine watchmaking and assumed its rightful place as a modern horological icon. Featuring hand-finished satin and polished bevels and ultra-thin profile.',
    image: '/assets/images/jqvhDCL_Audemars-Piguet-watch-on-surface-20261020015126.jpg',
    priceTag: '€59,000',
    highlights: ['Petite Tapisserie guilloché pattern', 'Ultra-thin case profile under 8.1mm', 'Hand-finished brushed and mirror bevels', 'Integrated tapering bracelet'],
    specs: {
      caseMaterial: 'Stainless Steel',
      dialColor: 'Bleu Nuit, Nuage 50',
      movementType: 'Ultra-Thin Calibre 7121 Automatic',
      waterResistance: '50m (5 ATM)',
      origin: 'Le Brassus, Switzerland'
    }
  },
  {
    id: 'service-22',
    name: 'Audemars Piguet Royal Oak Chronograph',
    category: 'Watch Collections',
    subtitle: '41mm Flyback Calibre • Grande Tapisserie',
    shortDetails: 'High-performance luxury sports chronograph featuring contrasting black counters and integrated bracelet.',
    fullDescription: 'The 41 mm Royal Oak Selfwinding Chronograph incorporates a flyback mechanism, offering instantaneous resetting and restarting with a single press, finished with Grande Tapisserie guilloché and column-wheel actuation.',
    image: '/assets/images/FLcQy10f_Audemars-Piguet-chronograph-watch-20261020015122.jpg',
    priceTag: '€46,000',
    highlights: ['Flyback column-wheel chronograph mechanism', 'Grande Tapisserie guilloché center', 'White gold hour-markers with luminescent coating', 'Integrated link bracelet with folding clasp'],
    specs: {
      caseMaterial: 'Stainless Steel',
      dialColor: 'Silver-Toned Grande Tapisserie',
      movementType: 'Manufacture Calibre 4401 Flyback',
      waterResistance: '50m (5 ATM)',
      origin: 'Le Brassus, Switzerland'
    }
  },
  {
    id: 'service-23',
    name: 'Audemars Piguet Offshore Diver',
    category: 'Watch Collections',
    subtitle: '300m Saturation Diver • Méga Tapisserie',
    shortDetails: 'Muscular sports silhouette equipped with rotating inner timing ring and ceramic crown protectors.',
    fullDescription: 'Engineered for the depths, this offshore diver features an inner rotating bezel controlled by an external 10 oclock ceramic crown, paired with quick-change ergonomic rubber straps and 300-meter hydrostatic resistance.',
    image: '/assets/images/PZBWR83w_Audemars-Piguet-watch-on-background-20261020015132.jpg',
    priceTag: '€32,500',
    highlights: ['Méga Tapisserie high-relief dial motif', 'Interchangeable rubber strap system', 'Black ceramic crowns at 3 and 10 oclock', '300m saturation diver rating'],
    specs: {
      caseMaterial: 'Stainless Steel',
      dialColor: 'Khaki Green / Deep Black',
      movementType: 'Calibre 4308 Automatic',
      waterResistance: '300m (30 ATM Professional)',
      origin: 'Le Brassus, Switzerland'
    }
  },
  {
    id: 'service-24',
    name: 'Audemars Piguet Royal Oak Frosted Gold',
    category: 'Watch Styles',
    subtitle: 'Florentine Micro-Hammered Finish • 18k Gold',
    shortDetails: 'Shimmering textured gold surface achieved via ancient Florentine micro-hammering jewelry techniques.',
    fullDescription: 'Created in collaboration with Florentine jewelry designer Carolina Bucci. The gold case and bracelet undergo gentle surface indentation with a diamond-tipped tool, sparkling like diamond dust under ambient light.',
    image: '/assets/images/LXjx3MvF_Audemars-Piguet-Royal-Oak-watch-20261020015136.jpg',
    priceTag: '€78,000',
    highlights: ['Florentine frosted micro-hammered gold', 'Mirror-polished bezel bevel contrasts', 'Petite Tapisserie matching dial', 'Exhibition sapphire crystal back'],
    specs: {
      caseMaterial: '18k Frosted White Gold',
      dialColor: 'Rhodium Toned Tapisserie',
      movementType: 'Self-Winding Manufacture Calibre',
      waterResistance: '50m (5 ATM)',
      origin: 'Le Brassus, Switzerland'
    }
  },
  {
    id: 'service-25',
    name: 'Audemars Piguet Code 11.59 Chronograph',
    category: 'Watch Collections',
    subtitle: 'Octagonal Midcase • Double-Curved Sapphire',
    shortDetails: 'Contemporary round bezel enclosing an octagonal midcase, skeletonized lugs, and smoked sunburst lacquer.',
    fullDescription: 'The Code collection features a sophisticated double-curved sapphire crystal and complex three-piece case architecture that highlights the interplay of curved and angular geometry with integrated flyback chronograph.',
    image: '/assets/images/Myhg1QD0_Audemars-Piguet-watch-on-background-20261020015157.jpg',
    priceTag: '€41,000',
    highlights: ['Double curved sapphire crystal optics', 'Octagonal mid-case nestled in round casing', 'Integrated column-wheel flyback calibre', 'Hand-stitched textured rubber strap'],
    specs: {
      caseMaterial: '18k White Gold / Ceramic',
      dialColor: 'Smoked Sunburst Blue / Anthracite',
      movementType: 'Integrated Flyback Chronograph Calibre 4401',
      waterResistance: '30m (3 ATM)',
      origin: 'Le Brassus, Switzerland'
    }
  },
  {
    id: 'service-26',
    name: 'Audemars Piguet Offshore Chronograph',
    category: 'Watch Collections',
    subtitle: 'High-Impact Ceramic & Titanium Pushers',
    shortDetails: 'Bold 43mm chronograph encased in titanium and black ceramic with contrasting sub-dials.',
    fullDescription: 'The Royal Oak Offshore Chronograph represents extreme sports horology. Designed to absorb severe shock and vibration while maintaining chronometric precision, featuring integrated flyback functionality and ergonomic pushers.',
    image: '/assets/images/ynV1DKf3_Audemars-Piguet-chronograph-on-s-20261020015201.jpg',
    priceTag: '€43,500',
    highlights: ['Black ceramic bezel and push-pieces', 'Flyback chronograph mechanism', 'Ergonomic interchangeable strap system', '100-meter water resistance rating'],
    specs: {
      caseMaterial: 'Titanium & Black Ceramic',
      dialColor: 'Smoked Slate Méga Tapisserie',
      movementType: 'Calibre 4401 Manufacture Automatic',
      waterResistance: '100m (10 ATM)',
      origin: 'Le Brassus, Switzerland'
    }
  },
  {
    id: 'service-27',
    name: 'Audemars Piguet Perpetual Calendar',
    category: 'Watch Collections',
    subtitle: 'Astronomical Moonphase • Ultra-Thin Calibre',
    shortDetails: 'Ultra-thin grand complication displaying astronomical moonphase, day, date, month, and leap year cycle.',
    fullDescription: 'Astronomical timekeeping in a wearable silhouette. The perpetual calendar mechanism automatically accounts for months with 28, 30, and 31 days as well as February in leap years, finished with signature Grande Tapisserie.',
    image: '/assets/images/MxX3TJwF_Audemars-Piguet-Royal-Oak-watch-20261020015204.jpg',
    priceTag: '€115,000',
    highlights: ['Full astronomical moonphase display', 'Automatic leap year calendar reckoning', 'Grande Tapisserie sub-register layout', 'Integrated bracelet with folding clasp'],
    specs: {
      caseMaterial: 'Stainless Steel & Titanium',
      dialColor: 'Deep Blue Grande Tapisserie',
      movementType: 'Ultra-Thin Perpetual Calibre 5134',
      waterResistance: '20m (2 ATM)',
      origin: 'Le Brassus, Switzerland'
    }
  },
  {
    id: 'service-28',
    name: 'Audemars Piguet Tourbillon Openworked',
    category: 'Watch Collections',
    subtitle: 'Flying Tourbillon • Hand-Finished Skeleton',
    shortDetails: 'Flying tourbillon cage rotating at 6 oclock with completely skeletonized bridges and contemporary finishing.',
    fullDescription: 'Without an upper bridge to impede the view, the flying tourbillon appears to float freely inside the movement. Hand-finished titanium bridges showcase haute horlogerie at its summit with breathtaking multi-tier transparency.',
    image: '/assets/images/whmyPmL0_Audemars-Piguet-Royal-Oak-watch-20261020015208.jpg',
    priceTag: '€148,000',
    highlights: ['Titanium flying tourbillon carriage', 'Anthracite openworked movement bridges', 'Hand-polished interior chamfers', 'Exhibition front and display back'],
    specs: {
      caseMaterial: 'Sandblasted Titanium',
      dialColor: 'Openworked Skeleton Bridges',
      movementType: 'Manual Wind Flying Tourbillon Calibre 2972',
      waterResistance: '50m (5 ATM)',
      origin: 'Le Brassus, Switzerland'
    }
  },
  {
    id: 'service-29',
    name: 'Audemars Piguet Royal Oak 37mm',
    category: 'Watch Styles',
    subtitle: 'Light Blue Tapisserie • Mid-Size Elegance',
    shortDetails: 'Ergonomic 37mm case tailored for slender wrists with refined light blue Grande Tapisserie dial.',
    fullDescription: 'Offering balanced proportions and comfortable wearability, this 37 mm self-winding timepiece incorporates the latest generation in-house calibre with a 60-hour power reserve and pristine ice blue dial reflection.',
    image: '/assets/images/DP3fJ1MP_Audemars-Piguet-Royal-Oak-watch-20261020015214.jpg',
    priceTag: '€36,000',
    highlights: ['Tailored 37mm versatile case diameter', 'Light blue Grande Tapisserie motif', 'White gold applied hour-markers', 'Sapphire crystal exhibition back'],
    specs: {
      caseMaterial: 'Stainless Steel',
      dialColor: 'Ice Blue / Light Blue Tapisserie',
      movementType: 'Calibre 5900 Automatic',
      waterResistance: '50m (5 ATM)',
      origin: 'Le Brassus, Switzerland'
    }
  },
  {
    id: 'service-30',
    name: 'Audemars Piguet Concept Flying Tourbillon',
    category: 'Watch Collections',
    subtitle: 'Sculpted Sandblasted Titanium Architecture',
    shortDetails: 'Sculpted futuristic titanium case featuring flying tourbillon cage and 10-day power reserve.',
    fullDescription: 'The Concept platform serves as an open laboratory for avant-garde materials and revolutionary horology, combining technical micro-engineering with organic angular case sculpting and futuristic manual-wind calibre.',
    image: '/assets/images/CKPNzJNQ_Watch-resting-on-textured-surface-20261020015119.jpg',
    priceTag: '€195,000',
    highlights: ['Flying tourbillon with no upper bridge', 'Angular faceted case sculpting', '10-day power reserve with twin barrels', 'White ceramic bezel insert'],
    specs: {
      caseMaterial: 'Sandblasted Titanium & Ceramic',
      dialColor: 'Openworked Futuristic Architecture',
      movementType: 'Manual Wind Flying Tourbillon Calibre 2964',
      waterResistance: '100m (10 ATM)',
      origin: 'Le Brassus, Switzerland'
    }
  },
  {
    id: 'service-31',
    name: 'Cartier Santos de Cartier',
    category: 'Gift Ideas',
    subtitle: 'SmartLink QuickSwitch • Roman Dial',
    shortDetails: 'The original modern aviator wristwatch with exposed bezel screws and iconic Roman numeral dial.',
    fullDescription: 'Created in 1904 by Louis Cartier for Alberto Santos-Dumont so he could check the time while flying. A cornerstone of modern horological geometry and a thoughtful gift for milestone achievements with tool-free QuickSwitch bracelet system.',
    image: '/assets/images/k6W6CsCw_Cartier-stainless-steel-watch-di-20261020015449.jpg',
    priceTag: '€8,800',
    highlights: ['QuickSwitch patented strap change system', 'SmartLink tool-free link adjustment', 'Blue synthetic spinel faceted crown', 'Exposed bezel screw aesthetics'],
    specs: {
      caseMaterial: 'Stainless Steel',
      dialColor: 'Silvered Opaline Roman Dial',
      movementType: 'Manufacture Calibre 1847 MC Automatic',
      waterResistance: '100m (10 ATM)',
      origin: 'La Chaux-de-Fonds, Switzerland'
    }
  },
  {
    id: 'service-32',
    name: 'Cartier Tank Française',
    category: 'Gift Ideas',
    subtitle: 'Curved Ergonomic Brancards • Steel Bracelet',
    shortDetails: 'Curved rectangular case seamlessly blending into a fluid metallic bracelet inspired by tank treads.',
    fullDescription: 'The Tank Française updated the legacy of the classic Tank watch with a curved case and integrated metal link bracelet that hugs the wrist with ergonomic naturalness, ideal for wedding and anniversary gifts.',
    image: '/assets/images/6hF6NtC_Watch-on-textured-surface-20261020015454.jpg',
    priceTag: '€5,600',
    highlights: ['Curved brancards for optimal wrist contour', 'Blued-steel sword-shaped hands', 'Sapphire cabochon set in octagonal crown', 'Fluid chain-link integrated bracelet'],
    specs: {
      caseMaterial: 'Stainless Steel',
      dialColor: 'Silvered Sunray Roman Dial',
      movementType: 'High-Autonomy Quartz Calibre',
      waterResistance: '30m (3 ATM)',
      origin: 'La Chaux-de-Fonds, Switzerland'
    }
  },
  {
    id: 'service-33',
    name: 'Cartier Tank Louis Cartier',
    category: 'Gift Ideas',
    subtitle: '18k Solid Yellow Gold • Blue Sapphire Cabochon',
    shortDetails: 'The purest expression of Art Deco geometry with parallel rectangular brancards and alligator strap.',
    fullDescription: 'Worn by Louis Cartier himself, the Tank Louis Cartier is the definitive classic. Its soft angles and delicate rounded brancards embody timeless Parisian chic, making it the ultimate heirloom gift.',
    image: '/assets/images/6R7QQ6Lg_Cartier-watch-on-textured-backgr-20261020015459.jpg',
    priceTag: '€13,800',
    highlights: ['Natural blue sapphire cabochon crown', 'Crisp railway minute track (chemin de fer)', 'Ultra-thin manual wind mechanical calibre', 'Hand-stitched burgundy alligator leather'],
    specs: {
      caseMaterial: '18k Solid Yellow Gold',
      dialColor: 'Grained Gilt Silver Dial',
      movementType: 'Manufacture Manual Calibre 1917 MC',
      waterResistance: '30m (3 ATM)',
      origin: 'Paris & Switzerland'
    }
  },
  {
    id: 'service-34',
    name: 'Cartier Panthère de Cartier',
    category: 'Gift Ideas',
    subtitle: 'Supple Five-Link Gold Bracelet • Feline Poise',
    shortDetails: 'Sensual feline elegance combining high jewellery craftsmanship with Swiss timekeeping precision.',
    fullDescription: 'More than a timepiece, the Panthère is a radiant jewel. Its ultra-flexible bracelet slinks onto the wrist with feline grace and undeniable glamor, celebrated for milestone birthdays and special occasions.',
    image: '/assets/images/y3zhd7r_Gold-watch-on-surface-20261020015502.jpg',
    priceTag: '€24,500',
    highlights: ['Supple five-link articulated gold bracelet', 'Concealed secret signature at VII', 'Blue sapphire winding crown', 'High-polish rounded bezel with screws'],
    specs: {
      caseMaterial: '18k Yellow Gold',
      dialColor: 'Silvered Dial with Roman Numerals',
      movementType: 'High-Precision Quartz Calibre',
      waterResistance: '30m (3 ATM)',
      origin: 'La Chaux-de-Fonds, Switzerland'
    }
  },
  {
    id: 'service-35',
    name: 'Cartier Ballon Bleu de Cartier',
    category: 'Enquiries',
    subtitle: 'Integrated Crown Guard • Fluted Blue Spinel',
    shortDetails: 'Pebble-shaped round case with convex curves and signature blue cabochon nestled inside protective crown arc.',
    fullDescription: 'Floating like a balloon and as blue as the cabochon safely nestled in its side, the Ballon Bleu watch adds a dash of elegance to male and female wrists alike. Roman numerals are guided on their path by a deep blue winding mechanism.',
    image: '/assets/images/hJ1PxJzS_Cartier-steel-watch-product-view-20261020015507.jpg',
    priceTag: '€7,400',
    highlights: ['Protective integrated crown arc arch', 'Cabochon synthetic spinel set in fluted crown', 'Guilloché silvered opaline dial', 'Blued-steel sword-shaped hands'],
    specs: {
      caseMaterial: 'Stainless Steel',
      dialColor: 'Silvered Guilloché Opaline',
      movementType: 'Mechanical Self-Winding Calibre 1847 MC',
      waterResistance: '30m (3 ATM)',
      origin: 'La Chaux-de-Fonds, Switzerland'
    }
  },
  {
    id: 'service-36',
    name: 'Cartier Roadster Chronograph',
    category: 'Enquiries',
    subtitle: 'Automotive Contours • Magnified Date Lens',
    shortDetails: 'Sleek tonneau silhouette inspired by 1950s sports roadsters with aerodynamic polished curves.',
    fullDescription: 'Taking its inspiration from classic sports roadsters of the 1950s, the Roadster Chronograph embodies vintage racing spirit. Features sweeping curved lugs, triple chronograph registers, and automotive dashboard numerals.',
    image: '/assets/images/Xkv08T4G_Cartier-Roadster-watch-on-surface-20261020015510.jpg',
    priceTag: '€6,800',
    highlights: ['Aerodynamic roadster-inspired tonneau case', 'Integrated quick-change bracelet system', 'Triple counter racing chronograph', 'Curved sapphire crystal with cyclops lens'],
    specs: {
      caseMaterial: 'Stainless Steel',
      dialColor: 'Two-Tone Silver & Black Racing Dial',
      movementType: 'Automatic Chronograph Calibre',
      waterResistance: '100m (10 ATM)',
      origin: 'La Chaux-de-Fonds, Switzerland'
    }
  }
];
