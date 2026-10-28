import { WatchCard } from '../types/watch';

export interface BrandInfo {
  id: string;
  name: string;
  tagline: string;
  origin: string;
  watches: WatchCard[];
}

export const BRAND_WATCHES_DATA: Record<string, BrandInfo> = {
  rolex: {
    id: 'rolex',
    name: 'Rolex',
    tagline: 'A Crown for Every Achievement',
    origin: 'Geneva, Switzerland',
    watches: [
      {
        id: 'rolex-1',
        name: 'Rolex Datejust 41',
        category: 'Watch Collections',
        subtitle: 'Fluted Bezel • Jubilee Bracelet',
        shortDetails: 'Classic Oystersteel Datejust with sunburst dial resting on textured stone backdrop.',
        fullDescription: 'The archetype of the modern watch. Aesthetically, the Datejust has spanned eras while retaining the enduring codes that make it one of the most recognized and recognizable of watches.',
        image: 'https://i.ibb.co/GvLmMzs5/Rolex-Datejust-on-stone-background-20261020021543.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Calibre 3235 perpetual movement', '70-hour power reserve', 'Oystersteel & white gold fluted bezel', 'Twinlock double waterproofness'],
        specs: {
          caseMaterial: 'Oystersteel & White Gold',
          dialColor: 'Sunburst Rhodium / Slate',
          movementType: 'Rolex Calibre 3235 Automatic',
          waterResistance: '100m (10 ATM)',
          origin: 'Geneva, Switzerland'
        }
      },
      {
        id: 'rolex-2',
        name: 'Rolex Submariner Date',
        category: 'Watch Collections',
        subtitle: 'Cerachrom Bezel • Oyster Bracelet',
        shortDetails: 'The quintessential divers timepiece in stainless steel with luminous Chromalight display.',
        fullDescription: 'The benchmark among divers watches. Launched in 1953, the Submariner was the first divers wristwatch waterproof to a depth of 100 metres (330 feet).',
        image: 'https://i.ibb.co/nMDN75yL/Stainless-steel-watch-resting-20261020014008.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Unidirectional rotatable 60-minute Cerachrom bezel', 'Solid-link Oyster bracelet with Glidelock', 'Chromalight long-lasting blue luminescence'],
        specs: {
          caseMaterial: 'Oystersteel 904L',
          dialColor: 'Gloss Deep Black',
          movementType: 'Rolex Calibre 3235',
          waterResistance: '300m (30 ATM Professional)',
          origin: 'Geneva, Switzerland'
        }
      },
      {
        id: 'rolex-3',
        name: 'Rolex Cosmograph Daytona',
        category: 'Watch Collections',
        subtitle: 'Chronograph • Tachymetric Scale',
        shortDetails: 'Legendary racing chronograph with precision column-wheel mechanism and black sub-registers.',
        fullDescription: 'Designed to be the ultimate timing tool for endurance racing drivers. More than 50 years after its creation, the Cosmograph Daytona remains in a class of its own.',
        image: 'https://i.ibb.co/DPcdSVmb/Rolex-Daytona-on-display-pad-20261020012301.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Chronograph accurate to 1/8th second', 'Tachymeter engraved Cerachrom bezel', 'Calibre 4130/4131 integrated movement'],
        specs: {
          caseMaterial: 'Oystersteel / White Gold',
          dialColor: 'Panda White / Silver',
          movementType: 'Rolex Calibre 4131 Chronograph',
          waterResistance: '100m (10 ATM)',
          origin: 'Geneva, Switzerland'
        }
      },
      {
        id: 'rolex-4',
        name: 'Rolex GMT-Master II',
        category: 'Watch Collections',
        subtitle: 'Dual Timezone • Cerachrom Insert',
        shortDetails: 'Iconic aviator timepiece displaying two time zones simultaneously with 24-hour rotatable bezel.',
        fullDescription: 'Designed to show the time in two different time zones simultaneously during intercontinental flights, the GMT-Master has come to be recognized for its robustness and versatile appearance.',
        image: 'https://i.ibb.co/Wpg3j0FY/Rolex-GMT-Master-II-watch-resting-20261020014035.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Bidirectional 24-hour rotatable bezel', 'Independent arrow 24-hour GMT hand', 'Jubilee / Oyster bracelet option'],
        specs: {
          caseMaterial: 'Oystersteel 904L',
          dialColor: 'Midnight Black',
          movementType: 'Rolex Calibre 3285 GMT',
          waterResistance: '100m (10 ATM)',
          origin: 'Geneva, Switzerland'
        }
      },
      {
        id: 'rolex-5',
        name: 'Rolex Oyster Perpetual',
        category: 'Watch Collections',
        subtitle: 'Turquoise Celebration Dial',
        shortDetails: 'Vibrant celebratory dial radiating joyful horological expression with purest Oyster casing.',
        fullDescription: 'Direct descendant of the original Oyster launched in 1926. The Oyster Perpetual models stand out with dials in subtle or vibrant colours, ensuring they always sport a contemporary look.',
        image: 'https://i.ibb.co/Zz6MzSZs/Rolex-Oyster-Perpetual-turquoise-20261020014039.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Clean three-hand architecture', 'Domatic polished smooth steel bezel', 'Vibrant lacquer dial pigmentation'],
        specs: {
          caseMaterial: 'Oystersteel',
          dialColor: 'Turquoise Sky Blue',
          movementType: 'Rolex Calibre 3230',
          waterResistance: '100m (10 ATM)',
          origin: 'Geneva, Switzerland'
        }
      },
      {
        id: 'rolex-6',
        name: 'Rolex Air-King Precision',
        category: 'Watch Collections',
        subtitle: 'Aeronautical Heritage Dial',
        shortDetails: 'Distinctive black dial with prominent minute markers for navigational time reading.',
        fullDescription: 'The Oyster Perpetual Air-King celebrates the aeronautical heritage of the original Rolex Oyster. It features a distinctive black dial with a combination of large 3, 6 and 9 numerals marking the hours.',
        image: 'https://i.ibb.co/fYtk7YD7/Rolex-watch-on-white-background-20261020014046.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Distinctive green second hand & yellow crown', 'Crown guards for cockpit protection', 'Optimized Chromalight legibility'],
        specs: {
          caseMaterial: 'Oystersteel',
          dialColor: 'Jet Black Aviator Display',
          movementType: 'Rolex Calibre 3230',
          waterResistance: '100m (10 ATM)',
          origin: 'Geneva, Switzerland'
        }
      },
      {
        id: 'rolex-7',
        name: 'Rolex Day-Date 40',
        category: 'Watch Collections',
        subtitle: '18 ct Yellow Gold • President Bracelet',
        shortDetails: 'The ultimate watch of prestige, showing the full day of the week spelled out in an arc window.',
        fullDescription: 'When it debuted in 1956, the Day-Date was the first waterproof and self-winding chronometer wristwatch to offer a modern calendar with instantaneous day display.',
        image: 'https://i.ibb.co/3y23fnHk/Gold-Rolex-watch-on-surface-20261020014052.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Exclusive 18 ct yellow gold alloy', 'President semi-circular three-piece link bracelet', 'Instantaneous day and date aperture'],
        specs: {
          caseMaterial: '18 ct Yellow Gold',
          dialColor: 'Champagne / Champagne Sunburst',
          movementType: 'Rolex Calibre 3255 Day-Date',
          waterResistance: '100m (10 ATM)',
          origin: 'Geneva, Switzerland'
        }
      },
      {
        id: 'rolex-8',
        name: 'Rolex Explorer II',
        category: 'Watch Collections',
        subtitle: 'Polar White Dial • Fixed 24h Bezel',
        shortDetails: 'Tool watch engineered for speleologists and polar explorers with high-visibility orange 24-hour hand.',
        fullDescription: 'The Explorer II is equipped with an additional orange 24-hour display and an engraved fixed bezel, allowing the wearer to distinguish daylight from night hours in extreme environments.',
        image: 'https://i.ibb.co/CKLCB03J/Rolex-watch-on-white-surface-20261020014057.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Polar white dial with black PVD hour surrounds', 'Fixed stainless steel sunray bezel', 'Paraflex shock absorbers'],
        specs: {
          caseMaterial: 'Oystersteel 904L',
          dialColor: 'Polar White Lacquer',
          movementType: 'Rolex Calibre 3285',
          waterResistance: '100m (10 ATM)',
          origin: 'Geneva, Switzerland'
        }
      },
      {
        id: 'rolex-9',
        name: 'Rolex Sea-Dweller Deepsea',
        category: 'Watch Collections',
        subtitle: 'Helium Escape Valve • Ultra-Resistant',
        shortDetails: 'Extreme deep-sea exploration instrument engineered to withstand crushing ocean depths.',
        fullDescription: 'Engineered by Rolex for extreme deep-sea diving, the Sea-Dweller was designed in collaboration with pioneer professional deep-sea divers who spent extended periods underwater.',
        image: 'https://i.ibb.co/21YfV85X/Rolex-Sea-Dweller-watch-displayed-20261020014101.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Ringlock system high-pressure casing', 'Nitrogen-alloyed steel central ring', 'Gas escape valve mechanism'],
        specs: {
          caseMaterial: 'Oystersteel & Titanium RLX Caseback',
          dialColor: 'D-Blue Gradient Dial',
          movementType: 'Rolex Calibre 3235',
          waterResistance: '1,220m (122 ATM)',
          origin: 'Geneva, Switzerland'
        }
      },
      {
        id: 'rolex-10',
        name: 'Rolex Yacht-Master 42',
        category: 'Watch Collections',
        subtitle: 'Oysterflex Strap • Bidirectional Bezel',
        shortDetails: 'Maritime luxury timepiece pairing precious metals with high-performance elastomer bracelet.',
        fullDescription: 'The Yacht-Master combines function and nautical style. The bidirectional rotatable 60-minute raised numeral bezel allows the wearer to easily calculate time between two navigation buoys.',
        image: 'https://i.ibb.co/8LFtD2ty/Rolex-Yacht-Master-on-surface-20261020014105.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Bidirectional matte ceramic bezel with raised polished numerals', 'Oysterflex high-resilience elastomer bracelet', 'Glidelock fine adjustment clasp'],
        specs: {
          caseMaterial: '18 ct White Gold / Platinum',
          dialColor: 'Matte Jet Black',
          movementType: 'Rolex Calibre 3235',
          waterResistance: '100m (10 ATM)',
          origin: 'Geneva, Switzerland'
        }
      }
    ]
  },
  patek_philippe: {
    id: 'patek_philippe',
    name: 'Patek Philippe',
    tagline: 'You never actually own a Patek Philippe',
    origin: 'Geneva, Switzerland',
    watches: [
      {
        id: 'patek-1',
        name: 'Patek Philippe Aquanaut 5167A',
        category: 'Watch Collections',
        subtitle: 'Tropical Composite Strap • Embossed Dial',
        shortDetails: 'Modern sporty elegance with rounded octagonal bezel and signature black embossed checkerboard dial.',
        fullDescription: 'When launched in 1997, the Aquanaut created a sensation. It was young, modern, and unexpected with its gently rounded octagonal case inspired by the Nautilus.',
        image: 'https://i.ibb.co/kVMTFQDH/Patek-Philippe-Aquanaut-watch-20261020014712.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Composite tropical strap resistant to UV & saltwater', 'Calibre 26-330 S C with stop-seconds', 'Screw-down crown with sapphire exhibition back'],
        specs: {
          caseMaterial: 'Stainless Steel',
          dialColor: 'Black Embossed Texture',
          movementType: 'Patek Philippe Calibre 26-330 S C',
          waterResistance: '120m (12 ATM)',
          origin: 'Geneva, Switzerland'
        }
      },
      {
        id: 'patek-2',
        name: 'Patek Philippe Calatrava 5227',
        category: 'Watch Collections',
        subtitle: 'Officer-Style Hinged Dust Cover',
        shortDetails: 'The quintessential round wristwatch with invisibly hinged officer caseback and cream lacquered dial.',
        fullDescription: 'With its pure lines, the Calatrava is recognized as the very essence of the round wristwatch and one of the finest symbols of the Patek Philippe style.',
        image: 'https://i.ibb.co/HfTmCnM9/Patek-Philippe-watch-on-surface-20261020014708.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Officer-style caseback with invisible hinge', 'Ivory lacquered dial with gold applied indices', 'Fluted curved lugs'],
        specs: {
          caseMaterial: '18k Rose Gold',
          dialColor: 'Ivory Lacquer',
          movementType: 'Self-winding Calibre 324 S C',
          waterResistance: '30m (3 ATM)',
          origin: 'Geneva, Switzerland'
        }
      },
      {
        id: 'patek-3',
        name: 'Patek Philippe Nautilus 5711',
        category: 'Watch Collections',
        subtitle: 'Porthole Construction • Blue Horizontal Ribs',
        shortDetails: 'Iconic luxury sports watch with rounded octagonal bezel, lateral hinges, and integrated bracelet.',
        fullDescription: 'With the rounded octagonal shape of its bezel, the ingenious porthole construction of its case, and its horizontally embossed dial, the Nautilus has epitomized the elegant sports watch since 1976.',
        image: 'https://i.ibb.co/yBkC0bZP/Patek-Philippe-watch-on-surface-20261020012310.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Satin-brushed and mirror-polished case bevels', 'Horizontal horizontally embossed dial', 'Integrated ergonomic steel bracelet'],
        specs: {
          caseMaterial: 'Stainless Steel',
          dialColor: 'Sunburst Graduated Blue',
          movementType: 'Calibre 324 S C Automatic',
          waterResistance: '120m (12 ATM)',
          origin: 'Geneva, Switzerland'
        }
      },
      {
        id: 'patek-4',
        name: 'Patek Philippe Complications 5205G',
        category: 'Watch Collections',
        subtitle: 'Annual Calendar • Moon Phases',
        shortDetails: 'Sublime complication showing day, date, and month in three apertures arranged along an arc.',
        fullDescription: 'The patented Annual Calendar was launched by Patek Philippe in 1996 and has been an emblematic success. Only requires one manual correction per year at the end of February.',
        image: 'https://i.ibb.co/Tqn0VPg7/Patek-Philippe-watch-on-background-20261020012234.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Three calendar apertures on upper dial', 'Moon phase disc accurate for decades', 'Pierced lugs design'],
        specs: {
          caseMaterial: '18k White Gold',
          dialColor: 'Blue Sunburst with Black Gradation',
          movementType: 'Calibre 324 S QA LU 24H/206',
          waterResistance: '30m (3 ATM)',
          origin: 'Geneva, Switzerland'
        }
      },
      {
        id: 'patek-5',
        name: 'Patek Philippe Chronograph 5172G',
        category: 'Watch Collections',
        subtitle: 'Vintage-Inspired Triple Stepped Lugs',
        shortDetails: 'Hand-wound classic chronograph with guilloché pushers and syringe hands on midnight blue dial.',
        fullDescription: 'Heir to a great classic, this white gold chronograph combines a vintage spirit with contemporary technical refinements, featuring a midnight blue dial and white gold applied Arabic numerals.',
        image: 'https://i.ibb.co/5X4fnsY9/Patek-Philippe-chronograph-on-su-20261020014725.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Column-wheel chronograph mechanism', 'Hand-stitched navy calfskin strap', 'Sapphire crystal box glass'],
        specs: {
          caseMaterial: '18k White Gold',
          dialColor: 'Varnished Blue',
          movementType: 'Manual Wind Calibre CH 29-535 PS',
          waterResistance: '30m (3 ATM)',
          origin: 'Geneva, Switzerland'
        }
      },
      {
        id: 'patek-6',
        name: 'Patek Philippe World Time 5230P',
        category: 'Watch Collections',
        subtitle: '24 Time Zones • Hand-Guilloché Dial',
        shortDetails: 'Simultaneous display of all 24 global time zones with hand-guilloché circular basketweave motif.',
        fullDescription: 'The World Time watch has been an indispensable companion for frequent travelers since the 1930s. A single pusher allows instantaneous synchronization of local time across the globe.',
        image: 'https://i.ibb.co/PnCRX6h/Patek-Philippe-luxury-watch-view-20261020014729.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Hand-guilloché dial center', 'City disc representing 24 time zones', '22k gold mini-rotor mechanism'],
        specs: {
          caseMaterial: 'Platinum 950',
          dialColor: 'Charcoal Grey Hand-Guilloché',
          movementType: 'Ultra-thin Calibre 240 HU',
          waterResistance: '30m (3 ATM)',
          origin: 'Geneva, Switzerland'
        }
      },
      {
        id: 'patek-7',
        name: 'Patek Philippe Grand Complications Perpetual',
        category: 'Watch Collections',
        subtitle: 'Retrograde Date • Leap Year Cycle',
        shortDetails: 'Masterwork of haute horlogerie with retrograde date hand sweeping across a 240-degree arc.',
        fullDescription: 'Perpetual calendars automatically account for months with 28, 30, and 31 days, and the 29th day of February in leap years. The retrograde hand snaps back instantly on the last day.',
        image: 'https://i.ibb.co/1JwJ61Hk/Patek-Philippe-watch-on-surface-20261020014735.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Retrograde perpetual calendar indication', 'Moonphase disc cut from sapphire crystal', 'Interchangeable full back and sapphire caseback'],
        specs: {
          caseMaterial: '18k Rose Gold',
          dialColor: 'Silvery Opaline',
          movementType: 'Calibre 324 S QR Perpetual',
          waterResistance: '30m (3 ATM)',
          origin: 'Geneva, Switzerland'
        }
      },
      {
        id: 'patek-8',
        name: 'Patek Philippe Golden Ellipse 5738R',
        category: 'Watch Collections',
        subtitle: 'Divine Proportion 1 / 1.6181',
        shortDetails: 'An elliptical case derived from the golden ratio, paired with sunburst black ebony dial.',
        fullDescription: 'Launched in 1968, the Golden Ellipse was a bold departure from traditional watch shapes. Its proportions were inspired by the golden section, a proportion discovered by ancient mathematicians.',
        image: 'https://i.ibb.co/S7WMc6mj/Patek-Philippe-watch-on-surface-20261020014737.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Case geometry based on golden ratio', 'Crown set with natural black onyx cabochon', 'Ultra-thin calibre under 2.53mm height'],
        specs: {
          caseMaterial: '18k Rose Gold',
          dialColor: 'Ebony Black Sunburst',
          movementType: 'Ultra-thin Calibre 240 Automatic',
          waterResistance: '30m (3 ATM)',
          origin: 'Geneva, Switzerland'
        }
      },
      {
        id: 'patek-9',
        name: 'Patek Philippe Pilot Travel Time 5524G',
        category: 'Watch Collections',
        subtitle: 'Dual Time Dual Day/Night Display',
        shortDetails: 'Aeronautical tribute with large luminescent Arabic numerals and dual time zone local/home indicators.',
        fullDescription: 'Paying homage to Patek Philippe traditional aviators watches from the 1930s, this white gold timepiece combines masculine presence with unparalleled travel utility.',
        image: 'https://i.ibb.co/Jj06TfNf/Pilot-watch-on-white-surface-20261020012222.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Patented safety screw-lock pushers', 'Local and home day/night apertures', 'Vintage brown calfskin strap with clevis prong buckle'],
        specs: {
          caseMaterial: '18k White Gold',
          dialColor: 'Blue Varnished Dial',
          movementType: 'Calibre 324 S C FUS Travel Time',
          waterResistance: '60m (6 ATM)',
          origin: 'Geneva, Switzerland'
        }
      },
      {
        id: 'patek-10',
        name: 'Patek Philippe Twenty~4 Automatic',
        category: 'Watch Collections',
        subtitle: 'Diamond Bezel • Silvery Dial',
        shortDetails: 'Pure feminine horological refinement set with 160 brilliant-cut diamonds in dentelle setting.',
        fullDescription: 'Created for the modern, dynamic woman, the Twenty~4 Automatic expresses timeless beauty and poise from morning to evening, complemented by an articulated bracelet that feels like silk.',
        image: 'https://i.ibb.co/nNjNM3RW/Patek-Philippe-watch-on-background-20261020014821.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['160 flawless brilliant diamonds (~0.77 ct)', 'Silvery sunburst vertical and horizontal shantung satin dial', 'Patek Philippe seal execution'],
        specs: {
          caseMaterial: 'Stainless Steel & Diamonds',
          dialColor: 'Silvery Shantung Satin Finish',
          movementType: 'Calibre 324 S C Automatic',
          waterResistance: '30m (3 ATM)',
          origin: 'Geneva, Switzerland'
        }
      }
    ]
  },
  audemars_piguet: {
    id: 'audemars_piguet',
    name: 'Audemars Piguet',
    tagline: 'To Break the Rules, You Must First Master Them',
    origin: 'Le Brassus, Switzerland',
    watches: [
      {
        id: 'ap-1',
        name: 'Audemars Piguet Royal Oak Jumbo 16202',
        category: 'Watch Collections',
        subtitle: 'Petite Tapisserie • Ultra-Thin 50th Anniversary',
        shortDetails: 'The quintessential Gérald Genta design in 39mm with iconic octagonal bezel and visible hexagonal screws.',
        fullDescription: 'First launched in 1972, the Royal Oak overturned the prevailing codes of fine watchmaking and assumed its rightful place as a modern horological icon.',
        image: 'https://i.ibb.co/GfXGvVB6/Audemars-Piguet-watch-on-surface-20261020015126.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Bleu Nuit Nuage 50 Petite Tapisserie pattern', 'Calibre 7121 with 55h power reserve', 'Hand-finished brushed and polished angles'],
        specs: {
          caseMaterial: 'Stainless Steel',
          dialColor: 'Bleu Nuit, Nuage 50',
          movementType: 'Self-winding Calibre 7121',
          waterResistance: '50m (5 ATM)',
          origin: 'Le Brassus, Switzerland'
        }
      },
      {
        id: 'ap-2',
        name: 'Audemars Piguet Royal Oak Chronograph 41mm',
        category: 'Watch Collections',
        subtitle: 'Grande Tapisserie • Integrated Chronograph',
        shortDetails: 'High-performance luxury sports chronograph featuring contrasting black counters and integrated bracelet.',
        fullDescription: 'The 41 mm Royal Oak Selfwinding Chronograph incorporates a flyback mechanism, offering instantaneous resetting and restarting with a single press.',
        image: 'https://i.ibb.co/4whMrwsZ/Audemars-Piguet-chronograph-watch-20261020015122.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Flyback column-wheel chronograph', 'Grande Tapisserie guilloché dial', 'White gold hour-markers with luminescent coating'],
        specs: {
          caseMaterial: 'Stainless Steel',
          dialColor: 'Silver-toned Grande Tapisserie',
          movementType: 'Audemars Piguet Calibre 4401 Flyback',
          waterResistance: '50m (5 ATM)',
          origin: 'Le Brassus, Switzerland'
        }
      },
      {
        id: 'ap-3',
        name: 'Audemars Piguet Royal Oak Offshore Diver',
        category: 'Watch Collections',
        subtitle: 'Méga Tapisserie • 300m Diving Instrument',
        shortDetails: 'Muscular sports silhouette equipped with rotating inner timing ring and ceramic crown protectors.',
        fullDescription: 'Engineered for the depths, the Royal Oak Offshore Diver features an inner rotating bezel controlled by an external 10 oclock ceramic crown.',
        image: 'https://i.ibb.co/Jw1rbSfx/Audemars-Piguet-watch-on-background-20261020015132.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Méga Tapisserie motif dial', 'Interchangeable rubber strap system', 'Black ceramic crowns at 3 and 10 oclock'],
        specs: {
          caseMaterial: 'Stainless Steel',
          dialColor: 'Khaki Green / Deep Black',
          movementType: 'Calibre 4308 Automatic',
          waterResistance: '300m (30 ATM Professional)',
          origin: 'Le Brassus, Switzerland'
        }
      },
      {
        id: 'ap-4',
        name: 'Audemars Piguet Royal Oak Frosted Gold',
        category: 'Watch Collections',
        subtitle: 'Florentine Micro-Hammering Technique',
        shortDetails: 'Shimmering diamond-dust finish achieved through ancient Florentine jewellery micro-indentation.',
        fullDescription: 'Created in collaboration with jewellery designer Carolina Bucci, the Frosted Gold surface catches light like precious diamond dust without setting stones.',
        image: 'https://i.ibb.co/nqq6gFSD/Audemars-Piguet-Royal-Oak-watch-20261020015136.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Florentine hammered frosted finish', 'Translucent sapphire exhibition caseback', 'Grand Tapisserie matching tone dial'],
        specs: {
          caseMaterial: '18k Frosted White Gold',
          dialColor: 'Rhodium Toned Grande Tapisserie',
          movementType: 'Calibre 5900 Automatic',
          waterResistance: '50m (5 ATM)',
          origin: 'Le Brassus, Switzerland'
        }
      },
      {
        id: 'ap-5',
        name: 'Audemars Piguet Royal Oak Double Balance Wheel',
        category: 'Watch Collections',
        subtitle: 'Openworked Skeleton Architecture',
        shortDetails: 'Mesmerizing skeletonized movement displaying twin balance wheels oscillating on the same axis.',
        fullDescription: 'By fixing two balance wheels and two hairsprings on the same axis, the system oscillates in perfect synchrony, significantly stabilizing rate precision.',
        image: 'https://i.ibb.co/vC2DFZd1/Audemars-Piguet-watch-on-background-20261020015157.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Patented double balance wheel geometry', 'Hand-beveled and polished openworked bridges', 'Anthracite galvanic openwork aesthetic'],
        specs: {
          caseMaterial: 'Black Ceramic / Stainless Steel',
          dialColor: 'Skeletonized Openworked Anthracite',
          movementType: 'Calibre 3132 Double Balance',
          waterResistance: '50m (5 ATM)',
          origin: 'Le Brassus, Switzerland'
        }
      },
      {
        id: 'ap-6',
        name: 'Audemars Piguet Code 11.59 Chronograph',
        category: 'Watch Collections',
        subtitle: 'Octagonal Middle Case • Double Curved Crystal',
        shortDetails: 'Architectural case featuring an octagonal middle nestled within a round bezel, with smoked lacquer dial.',
        fullDescription: 'Code 11.59 represents the conscious evolution of classic watch design, featuring a double curved glareproof sapphire crystal creating fascinating optical depth.',
        image: 'https://i.ibb.co/KjSChBfg/Audemars-Piguet-chronograph-on-s-20261020015201.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Complex multi-tier curved sapphire crystal', 'Octagonal core inside round external architecture', 'Smoked sunburst lacquered dial'],
        specs: {
          caseMaterial: '18k Pink Gold & Black Ceramic',
          dialColor: 'Smoked Sunburst Burgundy / Blue',
          movementType: 'Calibre 4401 Integrated Chronograph',
          waterResistance: '30m (3 ATM)',
          origin: 'Le Brassus, Switzerland'
        }
      },
      {
        id: 'ap-7',
        name: 'Audemars Piguet Royal Oak Selfwinding 37mm',
        category: 'Watch Collections',
        subtitle: 'Brilliant Diamond Bezel • Grey Tapisserie',
        shortDetails: 'Harmonious mid-size proportion adorned with 40 brilliant-cut diamonds and iconic bracelet.',
        fullDescription: 'Balancing sporty strength with refined elegance, this 37 mm Royal Oak showcases brilliant diamonds framing a delicate Grande Tapisserie dial.',
        image: 'https://i.ibb.co/yn0KZcC3/Audemars-Piguet-Royal-Oak-watch-20261020015204.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['40 brilliant-cut diamonds (~0.92 carats)', 'Ergonomic tapered integrated bracelet', 'Calibre 5900 with 60-hour reserve'],
        specs: {
          caseMaterial: 'Stainless Steel & Diamonds',
          dialColor: 'Ruthenium Grey Tapisserie',
          movementType: 'Calibre 5900 Selfwinding',
          waterResistance: '50m (5 ATM)',
          origin: 'Le Brassus, Switzerland'
        }
      },
      {
        id: 'ap-8',
        name: 'Audemars Piguet Royal Oak Perpetual Calendar',
        category: 'Watch Collections',
        subtitle: 'Astronomical Moon • Week of the Year',
        shortDetails: 'Astronomical grand complication indicating week number, day, date, astronomical moon, and leap year.',
        fullDescription: 'Continuing the rich tradition of astronomical complications at Le Brassus, this timepiece calculates the erratic calendar year with absolute accuracy until 2100.',
        image: 'https://i.ibb.co/4ww5tws1/Audemars-Piguet-Royal-Oak-watch-20261020015208.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Laser-microstructured photorealistic moon disc', 'Outer chapter ring displaying 52 weeks of the year', 'Hand-finished perlage and satin graining'],
        specs: {
          caseMaterial: 'Blue Ceramic / White Gold',
          dialColor: 'Grande Tapisserie Blue',
          movementType: 'Ultra-thin Calibre 5134 Perpetual',
          waterResistance: '20m (2 ATM)',
          origin: 'Le Brassus, Switzerland'
        }
      },
      {
        id: 'ap-9',
        name: 'Audemars Piguet Royal Oak Offshore Chrono 43mm',
        category: 'Watch Collections',
        subtitle: 'Black Ceramic Bezel • Mega Tapisserie',
        shortDetails: 'Uncompromising avant-garde sports chronograph with ergonomic push-piece guards and flyback calibre.',
        fullDescription: 'The Royal Oak Offshore collection has pushed limits since 1993. The 43 mm version introduces refined ergonomics, titanium or ceramic bezels, and interchangeable straps.',
        image: 'https://i.ibb.co/DfpRnQcd/Audemars-Piguet-Royal-Oak-watch-20261020015214.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Flyback chronograph with column wheel', 'Black ceramic bezel and pushpieces', 'Interchangeable textured rubber strap'],
        specs: {
          caseMaterial: 'Titanium & Black Ceramic',
          dialColor: 'Smoked Taupe / Anthracite',
          movementType: 'Calibre 4401 Integrated Flyback',
          waterResistance: '100m (10 ATM)',
          origin: 'Le Brassus, Switzerland'
        }
      },
      {
        id: 'ap-10',
        name: 'Audemars Piguet Royal Oak Concept Flying Tourbillon',
        category: 'Watch Collections',
        subtitle: 'Futuristic Micro-Mechanics Architecture',
        shortDetails: 'Sculpted futuristic titanium case featuring flying tourbillon cage at 6 oclock and crown position indicator.',
        fullDescription: 'Born in 2002 to celebrate the 30th anniversary of the Royal Oak, the Concept platform serves as an open laboratory for avant-garde materials and revolutionary horology.',
        image: 'https://i.ibb.co/BV6GGBk6/Watch-resting-on-textured-surface-20261020015119.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Flying tourbillon with no upper bridge', 'Angular faceted futuristic case sculpting', '10-day power reserve with twin barrels'],
        specs: {
          caseMaterial: 'Sandblasted Titanium',
          dialColor: 'Openworked Futuristic Architecture',
          movementType: 'Manual Wind Flying Tourbillon Calibre',
          waterResistance: '100m (10 ATM)',
          origin: 'Le Brassus, Switzerland'
        }
      }
    ]
  },
  cartier: {
    id: 'cartier',
    name: 'Cartier',
    tagline: 'The Jeweller of Kings and the King of Jewellers',
    origin: 'Paris, France',
    watches: [
      {
        id: 'cartier-1',
        name: 'Cartier Santos de Cartier',
        category: 'Watch Collections',
        subtitle: 'QuickSwitch Bracelet • SmartLink Adjustment',
        shortDetails: 'The original modern aviator wristwatch with exposed bezel screws and iconic Roman numeral dial.',
        fullDescription: 'Created in 1904 by Louis Cartier for his friend, Brazilian aviator Alberto Santos-Dumont, so he could check the time while flying. A cornerstone of modern horological geometry.',
        image: 'https://i.ibb.co/HLJXS40P/Watch-on-textured-surface-20261020015454.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['QuickSwitch patented strap change system', 'SmartLink tool-free link sizing', 'Blue synthetic spinel faceted crown'],
        specs: {
          caseMaterial: 'Stainless Steel',
          dialColor: 'Silvered Opaline Dial',
          movementType: 'Cartier Calibre 1847 MC Automatic',
          waterResistance: '100m (10 ATM)',
          origin: 'La Chaux-de-Fonds, Switzerland'
        }
      },
      {
        id: 'cartier-2',
        name: 'Cartier Tank Française',
        category: 'Watch Collections',
        subtitle: 'Integrated Chain-Link Bracelet',
        shortDetails: 'Curved rectangular case seamlessly blending into a fluid metallic bracelet inspired by battle tank treads.',
        fullDescription: 'The Tank Française updated the legacy of the classic Tank watch with a curved case and integrated metal link bracelet that hugs the wrist with ergonomic naturalness.',
        image: 'https://i.ibb.co/LzLmVPt9/Cartier-watch-on-white-surface-20261020012243.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Curved brancards for optimal wrist contour', 'Blued-steel sword-shaped hands', 'Sapphire cabochon set in octagonal crown'],
        specs: {
          caseMaterial: 'Stainless Steel',
          dialColor: 'Silvered Sunray Roman Dial',
          movementType: 'High-Autonomy Quartz / Automatic',
          waterResistance: '30m (3 ATM)',
          origin: 'La Chaux-de-Fonds, Switzerland'
        }
      },
      {
        id: 'cartier-3',
        name: 'Cartier Tank Louis Cartier',
        category: 'Watch Collections',
        subtitle: '18k Yellow Gold • Red Alligator Strap',
        shortDetails: 'The purest expression of Art Deco geometry with parallel rectangular brancards and sapphire cabochon.',
        fullDescription: 'Worn by Louis Cartier himself, the Tank Louis Cartier is the definitive classic. Its soft angles and delicate rounded brancards embody timeless Parisian chic.',
        image: 'https://i.ibb.co/LhJ3xcdw/Cartier-watch-on-textured-backgr-20261020015459.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Natural blue sapphire cabochon crown', 'Crisp railway minute track (chemin de fer)', 'Ultra-thin manual wind mechanical calibre'],
        specs: {
          caseMaterial: '18k Yellow Gold',
          dialColor: 'Grained Gilt Silver Dial',
          movementType: 'Manufacture Manual Calibre 1917 MC',
          waterResistance: '30m (3 ATM)',
          origin: 'Paris & Switzerland'
        }
      },
      {
        id: 'cartier-4',
        name: 'Cartier Panthère de Cartier Gold',
        category: 'Watch Collections',
        subtitle: 'Fluid Jewellery Bracelet • 18k Yellow Gold',
        shortDetails: 'Sensual, feline elegance combining high jewellery craftsmanship with Swiss timekeeping precision.',
        fullDescription: 'More than a timepiece, the Panthère de Cartier is a radiant jewel. Its ultra-flexible bracelet slinks onto the wrist with feline grace and undeniable glamor.',
        image: 'https://i.ibb.co/DfdScMX2/Gold-watch-on-surface-20261020015502.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Supple five-link articulated gold bracelet', 'Concealed Cartier secret signature at VII', 'Blue sapphire winding crown'],
        specs: {
          caseMaterial: '18k Yellow Gold',
          dialColor: 'Silvered Dial with Roman Numerals',
          movementType: 'High-Precision Quartz Movement',
          waterResistance: '30m (3 ATM)',
          origin: 'La Chaux-de-Fonds, Switzerland'
        }
      },
      {
        id: 'cartier-5',
        name: 'Cartier Santos-Dumont XL',
        category: 'Watch Collections',
        subtitle: 'Sunburst Satin Dial • Manual Wind',
        shortDetails: 'Slim profile recalling the original 1904 aviators watch with beaded crown and blued screws.',
        fullDescription: 'Tribute to aviation pioneer Alberto Santos-Dumont. The XL version features enlarged proportions yet maintains an ultra-thin profile that slides beneath the most tailored cuff.',
        image: 'https://i.ibb.co/FkYJpfnT/Cartier-steel-watch-product-view-20261020015507.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Engraved caseback with Alberto Santos-Dumont signature', 'Manual winding movement with 38h reserve', 'Semi-matte navy alligator strap'],
        specs: {
          caseMaterial: 'Stainless Steel & Rose Gold Bezel',
          dialColor: 'Silvered Satin Sunray Dial',
          movementType: 'Manual Winding Calibre 430 MC',
          waterResistance: '30m (3 ATM)',
          origin: 'La Chaux-de-Fonds, Switzerland'
        }
      },
      {
        id: 'cartier-6',
        name: 'Cartier Roadster Chronograph',
        category: 'Watch Collections',
        subtitle: 'Automotive Curves • Quick Release Links',
        shortDetails: 'Curvaceous tonneau silhouette inspired by 1950s sports convertibles and chrome dashboards.',
        fullDescription: 'The Roadster captures the streamlined aerodynamics of classic European sports cars with flowing curved lugs, fluted magnifying lens, and interchangeable straps.',
        image: 'https://i.ibb.co/8n3cCkh5/Cartier-Roadster-watch-on-surface-20261020015510.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Automotive radiator grill date magnifier', 'Tonneau contoured ergonomic case', 'Integrated chronometer counters'],
        specs: {
          caseMaterial: 'Stainless Steel',
          dialColor: 'Bi-color Silver & Black Racing Dial',
          movementType: 'Cartier Calibre 8510 Automatic',
          waterResistance: '100m (10 ATM)',
          origin: 'La Chaux-de-Fonds, Switzerland'
        }
      },
      {
        id: 'cartier-7',
        name: 'Cartier Baignoire Allongée',
        category: 'Watch Collections',
        subtitle: 'Elongated Oval • Sculpted Bezel',
        shortDetails: 'Elliptical curved silhouette celebrating avant-garde Parisian curves and feminine beauty.',
        fullDescription: 'First designed in 1912, the Baignoire (bathtub) owes its name to its curved oval shape. The Allongée version dramatically elongates the form, wrapping the wrist like sculpture.',
        image: 'https://i.ibb.co/tM38hgDd/Cartier-Baignoire-watch-on-surface-20261020015513.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Elongated curving oval case', 'Clous de Paris stud micro-sculpting', 'Alligator taupe leather strap'],
        specs: {
          caseMaterial: '18k Rose Gold',
          dialColor: 'Silvered Sunray Opaline',
          movementType: 'Cartier Manual Winding 1917 MC',
          waterResistance: '30m (3 ATM)',
          origin: 'Paris & Switzerland'
        }
      },
      {
        id: 'cartier-8',
        name: 'Cartier Ballon Bleu de Cartier 42mm',
        category: 'Watch Collections',
        subtitle: 'Integrated Crown Guard • Guilloché Dial',
        shortDetails: 'Spherical convex case with fluted blue sapphire winding crown nestled beneath protective arch.',
        fullDescription: 'Floating like a balloon and as blue as the sapphire set in its winding crown, the Ballon Bleu adds a dash of elegance to both male and female wrists.',
        image: 'https://i.ibb.co/S1MVv4k/Cartier-watch-on-white-background-20261020015517.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Sapphire cabochon nestled inside protective ring', 'Convex curved sapphire crystal', 'Guilloché silver dial with blued sword hands'],
        specs: {
          caseMaterial: 'Stainless Steel & 18k Rose Gold',
          dialColor: 'Flinqué Guilloché Opaline',
          movementType: 'Cartier Calibre 1847 MC Automatic',
          waterResistance: '30m (3 ATM)',
          origin: 'La Chaux-de-Fonds, Switzerland'
        }
      },
      {
        id: 'cartier-9',
        name: 'Cartier Pasha de Cartier 41mm',
        category: 'Watch Collections',
        subtitle: 'Chained Crown Cap • Interchangeable Straps',
        shortDetails: 'Extroverted round case featuring square minute track, chained crown protector, and blued hands.',
        fullDescription: 'First launched in 1985, the Pasha is characterized by its square filigree railway track inside a round dial, four bold Arabic numerals, and a chained crown cap.',
        image: 'https://i.ibb.co/8gK0T21W/Luxury-watch-on-surface-20261020015522.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Chained crown cap with blue spinel', 'Concealed personalized engraving under crown', 'QuickSwitch interchangeable bracelets'],
        specs: {
          caseMaterial: 'Stainless Steel',
          dialColor: 'Guilloché Opaline Dial',
          movementType: 'Cartier Calibre 1847 MC Automatic',
          waterResistance: '100m (10 ATM)',
          origin: 'La Chaux-de-Fonds, Switzerland'
        }
      },
      {
        id: 'cartier-10',
        name: 'Cartier Ronde Must de Cartier',
        category: 'Watch Collections',
        subtitle: 'Classical Circular Geometry • Eco-Friendly Strap',
        shortDetails: 'Circular case with railway minute track, central 24-hour scale, and apple-skin non-leather strap.',
        fullDescription: 'A study in classical French balance. The Ronde Must retains traditional Roman numerals and circular chemin de fer with modern sustainable strap innovations.',
        image: 'https://i.ibb.co/0psQngXx/Luxury-watch-on-surface-20261020015524.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['SolarBeat photovoltaic movement option', 'Sustainable plant-based non-animal strap', 'Traditional blued-steel handset'],
        specs: {
          caseMaterial: 'Stainless Steel',
          dialColor: 'Sandblasted Silver Dial',
          movementType: 'High-Precision Photovoltaic Movement',
          waterResistance: '30m (3 ATM)',
          origin: 'La Chaux-de-Fonds, Switzerland'
        }
      }
    ]
  },
  tudor: {
    id: 'tudor',
    name: 'Tudor',
    tagline: 'Born to Dare',
    origin: 'Geneva, Switzerland',
    watches: [
      {
        id: 'tudor-1',
        name: 'Tudor Royal 41mm',
        category: 'Watch Collections',
        subtitle: 'Integrated 5-Link Bracelet • Notched Bezel',
        shortDetails: 'Sport-chic watch with notched bezel in alternating cut grooves and polished finish.',
        fullDescription: 'The Tudor Royal range offers a versatile and sophisticated sport-chic aesthetic with its characteristic notched bezel and integrated metal bracelet.',
        image: 'https://i.ibb.co/G4zG2SNH/Tudor-Royal-watch-displayed-20261020015814.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Notched 316L steel bezel', 'Integrated five-link bracelet', 'Day and date display at 12 and 3 oclock'],
        specs: {
          caseMaterial: '316L Stainless Steel',
          dialColor: 'Sunray Salmon / Silver',
          movementType: 'Tudor Calibre T603 Selfwinding',
          waterResistance: '100m (10 ATM)',
          origin: 'Geneva, Switzerland'
        }
      },
      {
        id: 'tudor-2',
        name: 'Tudor Pelagos Titanium 500m',
        category: 'Watch Collections',
        subtitle: 'Grade 2 Titanium • Auto-Adjusting Spring Clasp',
        shortDetails: 'The definitive mechanical dive watch engineered from lightweight titanium with helium escape valve.',
        fullDescription: 'The ultimate tool watch, the Pelagos is one of the most complete traditional mechanical divers watches available, waterproof to 500 metres.',
        image: 'https://i.ibb.co/Q3dcSyBb/Tudor-Pelagos-dive-watch-display-20261020015811.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Patented auto-adjusting spring dive clasp', 'Ceramic matte rotating bezel with full luminescent markers', 'Manufacture Calibre MT5612 (COSC)'],
        specs: {
          caseMaterial: 'Grade 2 Satin Titanium',
          dialColor: 'Matte Blue / Black',
          movementType: 'Manufacture Calibre MT5612 (COSC)',
          waterResistance: '500m (50 ATM Professional)',
          origin: 'Geneva, Switzerland'
        }
      },
      {
        id: 'tudor-3',
        name: 'Tudor Black Bay Fifty-Eight 39mm',
        category: 'Watch Collections',
        subtitle: 'Vintage 1958 Proportions • Gilt Accents',
        shortDetails: 'Tribute to the historic 1958 Big Crown diver with gold-gilt dial accents and slim 11.9mm profile.',
        fullDescription: 'The Black Bay Fifty-Eight is named after the year 1958 in which the first Tudor divers watch waterproof to 200 metres, reference 7924, was introduced.',
        image: 'https://i.ibb.co/h1w0BFWc/Tudor-Black-Bay-Fifty-Eight-on-20261020015819.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Slim vintage case proportions', 'Iconic snowflake angular hour hand', 'Manufacture Calibre MT5402 with 70h reserve'],
        specs: {
          caseMaterial: '316L Stainless Steel',
          dialColor: 'Domed Black Dial with Pink Gilt',
          movementType: 'Manufacture Calibre MT5402 (COSC)',
          waterResistance: '200m (20 ATM)',
          origin: 'Geneva, Switzerland'
        }
      },
      {
        id: 'tudor-4',
        name: 'Tudor Ranger 39mm',
        category: 'Watch Collections',
        subtitle: 'British North Greenland Expedition Heritage',
        shortDetails: 'Robust field expedition watch with matte satin finish, beige hour markers, and T-fit micro-adjust clasp.',
        fullDescription: 'Celebrating the 70th anniversary of the British North Greenland Expedition, the Ranger is a tool watch steeped in polar exploration history.',
        image: 'https://i.ibb.co/8gR364cK/Tudor-Ranger-watch-on-strap-20261020015824.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Domed matte black grain dial', 'T-fit rapid size adjustment clasp', 'Arrow-shaped hour hand with red-tipped seconds'],
        specs: {
          caseMaterial: 'Satin-Brushed 316L Steel',
          dialColor: 'Matte Grained Black',
          movementType: 'Manufacture Calibre MT5402 (COSC)',
          waterResistance: '100m (10 ATM)',
          origin: 'Geneva, Switzerland'
        }
      },
      {
        id: 'tudor-5',
        name: 'Tudor Black Bay Chrono Panda',
        category: 'Watch Collections',
        subtitle: 'Motorsport & Aquatic Fusion • Screw-Down Pushers',
        shortDetails: 'High-contrast panda dial chronograph pairing racing heritage with diving snowflake hands.',
        fullDescription: 'Since 1970, Tudor has produced chronographs closely tied to motor racing. The Black Bay Chrono pairs this heritage with the famous aquatic Snowflake hands.',
        image: 'https://i.ibb.co/2106wmgf/Tudor-Black-Bay-Chrono-watch-20261020015829.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Manufacture Calibre MT5813 with silicon hairspring', 'Fixed black anodised aluminium tachymeter bezel', 'Hollowed black sub-registers'],
        specs: {
          caseMaterial: '316L Stainless Steel',
          dialColor: 'Opaline Panda Dial with Black Counters',
          movementType: 'Manufacture Calibre MT5813 (COSC)',
          waterResistance: '200m (20 ATM)',
          origin: 'Geneva, Switzerland'
        }
      },
      {
        id: 'tudor-6',
        name: 'Tudor Black Bay Pro 39mm',
        category: 'Watch Collections',
        subtitle: 'Fixed 24-Hour Bezel • Yellow GMT Hand',
        shortDetails: 'Compact dual-timezone adventurer watch equipped with yellow 24-hour snowflake hand.',
        fullDescription: 'The Black Bay Pro is an entirely new model with dual time zone feature, a technical complication that establishes local time without losing sight of the time at home.',
        image: 'https://i.ibb.co/sdF2HPyc/Tudor-watch-resting-on-surface-20261020012251.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Ceramic monobloc luminous hour markers', 'Fixed 24-hour satin-brushed steel bezel', 'Manufacture Calibre MT5652 GMT (COSC)'],
        specs: {
          caseMaterial: '316L Stainless Steel',
          dialColor: 'Grained Matte Black',
          movementType: 'Manufacture Calibre MT5652 GMT',
          waterResistance: '200m (20 ATM)',
          origin: 'Geneva, Switzerland'
        }
      },
      {
        id: 'tudor-7',
        name: 'Tudor Glamour Date 36mm',
        category: 'Watch Collections',
        subtitle: 'Double Bezel • Leaf-Shaped Hands',
        shortDetails: 'Subtle dress watch highlighting double-stepped steel bezel and silver dial with applied markers.',
        fullDescription: 'The Glamour line exemplifies Tudor retro-chic style. Its double bezel in steel creates a captivating ring of light around the dial.',
        image: 'https://i.ibb.co/S7vZStxp/Tudor-Glamour-Date-watch-on-20261020015838.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Double-stepped steel bezel', 'Feathered leaf-shaped hands', 'Calendar window at 3 oclock'],
        specs: {
          caseMaterial: '316L Stainless Steel',
          dialColor: 'Silver Sunray with Opaline Center',
          movementType: 'Tudor Calibre T201 Selfwinding',
          waterResistance: '100m (10 ATM)',
          origin: 'Geneva, Switzerland'
        }
      },
      {
        id: 'tudor-8',
        name: 'Tudor Submariner Vintage Tribute',
        category: 'Watch Collections',
        subtitle: 'Historic French Navy Reference Inspiration',
        shortDetails: 'Evocative homage to the famous Marine Nationale dive watches supplied to naval combat swimmers.',
        fullDescription: 'In the 1960s and 70s, Tudor supplied reliable Submariners to naval forces worldwide. This piece captures that rugged military heritage with blue bezel and dial.',
        image: 'https://i.ibb.co/MyGSH2zS/Tudor-Submariner-vintage-watch-o-20261020015847.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Navy blue matte aluminium bezel insert', 'Vintage font square and baton indices', 'Fabric NATO military strap option'],
        specs: {
          caseMaterial: '316L Stainless Steel',
          dialColor: 'Matte Navy Blue',
          movementType: 'High-Grade Automatic Calibre',
          waterResistance: '200m (20 ATM)',
          origin: 'Geneva, Switzerland'
        }
      },
      {
        id: 'tudor-9',
        name: 'Tudor 1926 Opaline 39mm',
        category: 'Watch Collections',
        subtitle: 'Waffle Embossed Dial • Rose Gold Accents',
        shortDetails: 'Named after the year brand founder Hans Wilsdorf registered Tudor, with waffle texture dial.',
        fullDescription: 'The 1926 range pays tribute to the early history of Tudor. Its embossed domed dial reflects the intricate vintage craft of mid-century Swiss watchmakers.',
        image: 'https://i.ibb.co/gbBSJ1t2/Tudor-watch-on-off-white-background-20261020015905.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Waffle honeycomb embossed dial texture', 'Seven-row articulated supple bracelet', 'Rose gold PVD Arabic numerals'],
        specs: {
          caseMaterial: '316L Stainless Steel',
          dialColor: 'Opaline Honeycomb Embossed',
          movementType: 'Tudor Calibre T601 Selfwinding',
          waterResistance: '100m (10 ATM)',
          origin: 'Geneva, Switzerland'
        }
      },
      {
        id: 'tudor-10',
        name: 'Tudor Pelagos FXD Marine Nationale',
        category: 'Watch Collections',
        subtitle: 'Fixed Strap Bars • Countdown Dive Bezel',
        shortDetails: 'Engineered in partnership with French Navy combat divers with monobloc fixed strap bars.',
        fullDescription: 'The Pelagos FXD was developed to unique military specifications in partnership with the French Navys combat swimmer unit, the Commando Hubert.',
        image: 'https://i.ibb.co/KzxH29pn/Tudor-dive-watch-on-surface-20261020015808.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Machined from single titanium block with fixed bars', 'Bidirectional 120-click retrograde countdown bezel', 'Single-piece woven fabric strap with velcro system'],
        specs: {
          caseMaterial: 'Titanium Satin Finish',
          dialColor: 'Matte Navy Blue',
          movementType: 'Manufacture Calibre MT5602 (COSC)',
          waterResistance: '200m (20 ATM)',
          origin: 'Geneva, Switzerland'
        }
      }
    ]
  },
  omega: {
    id: 'omega',
    name: 'Omega',
    tagline: 'Exact Time for Life',
    origin: 'Biel/Bienne, Switzerland',
    watches: [
      {
        id: 'omega-1',
        name: 'Omega Seamaster Diver 300M',
        category: 'Watch Collections',
        subtitle: 'Laser-Engraved Wave Dial • Ceragold Bezel',
        shortDetails: 'Celebrated maritime divers chronometer with conical helium valve and skeleton hands.',
        fullDescription: 'Since 1993, the Seamaster Professional Diver 300M has enjoyed a legendary following. Today, the modern collection embraces cutting-edge laser ceramic dials.',
        image: 'https://i.ibb.co/sdb1m77r/Omega-Seamaster-Diver-watch-20261020020136.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Laser-engraved polished ceramic waves', 'Master Chronometer certified to 15,000 gauss', 'Conical helium escape valve at 10 oclock'],
        specs: {
          caseMaterial: 'Stainless Steel & Sedna Gold',
          dialColor: 'Polished Black Zirconium Oxide Ceramic',
          movementType: 'Omega Co-Axial Master Chronometer 8800',
          waterResistance: '300m (30 ATM Professional)',
          origin: 'Biel/Bienne, Switzerland'
        }
      },
      {
        id: 'omega-2',
        name: 'Omega Speedmaster Professional Moonwatch',
        category: 'Watch Collections',
        subtitle: 'Co-Axial Master Chronometer Calibre 3861',
        shortDetails: 'The legendary Moonwatch qualified by NASA for all manned space missions.',
        fullDescription: 'The Speedmaster Moonwatch is one of the worlds most iconic timepieces. Having been a part of all six lunar missions, the legendary chronograph is an impressive representation of pioneering spirit.',
        image: 'https://i.ibb.co/yms0htfD/Omega-Speedmaster-watch-on-surface-20261020020132.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Calibre 3861 Master Chronometer manual movement', 'Step dial with dot over 90 (DON) bezel', 'Tapered five-arched-links per row bracelet'],
        specs: {
          caseMaterial: 'Stainless Steel',
          dialColor: 'Matte Step Black',
          movementType: 'Omega Calibre 3861 Manual Wind',
          waterResistance: '50m (5 ATM Space Flight)',
          origin: 'Biel/Bienne, Switzerland'
        }
      },
      {
        id: 'omega-3',
        name: 'Omega Seamaster Aqua Terra 150M',
        category: 'Watch Collections',
        subtitle: 'Horizontal Teak Concept Dial',
        shortDetails: 'Tribute to yachting luxury with teak wood deck pattern dial and anti-magnetic resistance.',
        fullDescription: 'The Seamaster Aqua Terra is a superb tribute to OMEGAs rich maritime heritage. In this 41mm model, the symmetrical case is crafted from stainless steel with horizontal teak pattern dial.',
        image: 'https://i.ibb.co/dsWHJhC4/Omega-Aqua-Terra-on-surface-20261020020139.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Horizontal teak wood yacht deck dial pattern', 'Resistant to magnetic fields up to 15,000 gauss', 'Screw-down crown with wave-edged caseback'],
        specs: {
          caseMaterial: 'Stainless Steel',
          dialColor: 'Sun-Brushed Blue Teak Pattern',
          movementType: 'Omega Co-Axial Master Chronometer 8900',
          waterResistance: '150m (15 ATM)',
          origin: 'Biel/Bienne, Switzerland'
        }
      },
      {
        id: 'omega-4',
        name: 'Omega Speedmaster Racing Chronograph',
        category: 'Watch Collections',
        subtitle: 'Alternating Minute Track • Tachymeter Bezel',
        shortDetails: 'Motorsport chronograph recalling the dashboard clocks of historic European racing cars.',
        fullDescription: 'Before the Speedmaster landed on the moon, it was designed for endurance sports car drivers. The Racing model salutes that motor heritage with alternating chequered track markings.',
        image: 'https://i.ibb.co/tp5XSBfX/Omega-Speedmaster-resting-on-bac-20261020020143.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Racing alternating minute chapter ring', 'Column-wheel mechanism with silicon balance spring', 'Bevelled sub-registers with concentric azurage'],
        specs: {
          caseMaterial: 'Stainless Steel',
          dialColor: 'Sunburst Matte Anthracite & Orange',
          movementType: 'Omega Co-Axial Master Chronometer 9900',
          waterResistance: '50m (5 ATM)',
          origin: 'Biel/Bienne, Switzerland'
        }
      },
      {
        id: 'omega-5',
        name: 'Omega Seamaster Planet Ocean 600M',
        category: 'Watch Collections',
        subtitle: 'Ceramic Liquidmetal Bezel • Orange Rubber Inlay',
        shortDetails: 'Professional deep diving instrument waterproof to 600 metres with helium escape valve.',
        fullDescription: 'It was with OMEGAs maritime legacy in mind that the brand launched its Planet Ocean line in 2005. Today, the stylish watch continues to pay homage to OMEGAs dive watch heritage.',
        image: 'https://i.ibb.co/bjz1Fm21/Omega-Seamaster-dive-watch-view-20261020020154.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Ceramic bezel with orange vulcanized rubber 15-minute scale', 'Alveol screw-down caseback with seahorse medallion', '600m depth capability'],
        specs: {
          caseMaterial: '316L Steel & Ceramic',
          dialColor: 'Polished Black Ceramic Dial',
          movementType: 'Omega Co-Axial Master Chronometer 8900',
          waterResistance: '600m (60 ATM Professional)',
          origin: 'Biel/Bienne, Switzerland'
        }
      },
      {
        id: 'omega-6',
        name: 'Omega Constellation Globemaster',
        category: 'Watch Collections',
        subtitle: 'Pie-Pan Dial • Fluted Hard-Metal Bezel',
        shortDetails: 'The worlds first Master Chronometer with iconic faceted 1952 pie-pan dial and tungsten carbide bezel.',
        fullDescription: 'The Globemaster is already a legendary name in the OMEGA family. It has been updated to become the worlds first Master Chronometer, setting new standards of precision.',
        image: 'https://i.ibb.co/tpWwPzLD/Omega-Constellation-watch-on-sur-20261020020158.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Faceted vintage pie-pan dial architecture', 'Scratchproof tungsten carbide fluted bezel', 'Observatory medallion set into sapphire back'],
        specs: {
          caseMaterial: 'Stainless Steel & Tungsten Carbide',
          dialColor: 'Sun-Brushed Opaline Silver',
          movementType: 'Omega Calibre 8900 Master Chronometer',
          waterResistance: '100m (10 ATM)',
          origin: 'Biel/Bienne, Switzerland'
        }
      },
      {
        id: 'omega-7',
        name: 'Omega De Ville Prestige',
        category: 'Watch Collections',
        subtitle: 'Silk-Pattern Dial • Roman & Cabochon Indices',
        shortDetails: 'Pure dress watch elegance with embossed silk-pattern dial and slender gold-toned hands.',
        fullDescription: 'The OMEGA De Ville Prestige collection has attracted a large and loyal following with its classic, elegant design. Characterized by pure styling with luxury finishes.',
        image: 'https://i.ibb.co/84cs7CZ5/Omega-De-Ville-watch-displayed-20261020020202.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Embossed silk-pattern dial inspired by 1960s luxury', 'Polished faceted hour cabochons', 'Ultra-comfortable multi-row beads of rice bracelet'],
        specs: {
          caseMaterial: 'Stainless Steel & Sedna Gold',
          dialColor: 'Silvery Opaline Silk Texture',
          movementType: 'Omega Co-Axial Master Chronometer 8800',
          waterResistance: '30m (3 ATM)',
          origin: 'Biel/Bienne, Switzerland'
        }
      },
      {
        id: 'omega-8',
        name: 'Omega Speedmaster Dark Side of the Moon',
        category: 'Watch Collections',
        subtitle: 'Monobloc Black Zirconium Ceramic',
        shortDetails: 'Machined from a single block of black ceramic, commemorating Apollo 8 astronauts.',
        fullDescription: 'The Speedmaster Dark Side of the Moon is a product of ground-breaking technology. It is crafted from a single block of black zirconium oxide ceramic, representing the mysteries of lunar space.',
        image: 'https://i.ibb.co/C5LWBGvR/Omega-Speedmaster-on-background-20261020020210.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Monobloc black ceramic case, bezel, and pushers', 'Titanium folding clasp on coated nylon fabric strap', 'Laser-engraved tachymeter in Chromium nitride'],
        specs: {
          caseMaterial: 'Black Zirconium Ceramic [ZrO2]',
          dialColor: 'Black Ceramic Mirror Polish',
          movementType: 'Omega Co-Axial Calibre 9300 Chronograph',
          waterResistance: '50m (5 ATM)',
          origin: 'Biel/Bienne, Switzerland'
        }
      },
      {
        id: 'omega-9',
        name: 'Omega De Ville Trésor Co-Axial',
        category: 'Watch Collections',
        subtitle: 'Curved Diamonds • Toile de Jouy Pattern',
        shortDetails: 'Ultra-slim contemporary design featuring asymmetric diamond pavé curving along both sides.',
        fullDescription: 'Characterized by its thin case and sparkling diamond pavé curves, the Trésor collection is a showcase of modern feminine poise and Swiss craftsmanship.',
        image: 'https://i.ibb.co/Wvxh9Rwm/Omega-De-Ville-watch-displayed-20261020020224.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Curved diamond ribbons framing case flank', 'Red liquid ceramic flower crown with single diamond', 'Domed Roman numerals'],
        specs: {
          caseMaterial: 'Stainless Steel & Diamonds',
          dialColor: 'Lacquered White / Ivory',
          movementType: 'Omega Calibre 4061 Quartz',
          waterResistance: '30m (3 ATM)',
          origin: 'Biel/Bienne, Switzerland'
        }
      },
      {
        id: 'omega-10',
        name: 'Omega Seamaster Aqua Terra Worldtimer',
        category: 'Watch Collections',
        subtitle: 'Laser-Ablated Earth Dial • Global 24 Zones',
        shortDetails: 'Spectacular worldtimer displaying a vision of planet Earth viewed from above the North Pole.',
        fullDescription: 'A marvel of precision micro-machining, the central dial features a grade 5 titanium plate laser-ablated to create the blue ocean and relief continents.',
        image: 'https://i.ibb.co/JRT2FChG/Omega-Seamaster-Aqua-Terra-World-20261020020229.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Laser-ablated 3D relief globe of Earth', 'Hesyte ring with 24-hour day/night indication', 'Global destination ring with Biel in red (GMT+1)'],
        specs: {
          caseMaterial: 'Stainless Steel',
          dialColor: 'Sunburst Blue with Laser-Etched Continents',
          movementType: 'Omega Co-Axial Master Chronometer 8938',
          waterResistance: '150m (15 ATM)',
          origin: 'Biel/Bienne, Switzerland'
        }
      }
    ]
  },
  breguet: {
    id: 'breguet',
    name: 'Breguet',
    tagline: 'In Every Watchmaker Beats a Heart of Breguet',
    origin: 'L’Abbaye, Vallée de Joux, Switzerland',
    watches: [
      {
        id: 'breguet-1',
        name: 'Breguet Tradition 7097',
        category: 'Watch Collections',
        subtitle: 'Exposed Souscription Architecture • Retrograde Seconds',
        shortDetails: 'Audacious open architecture revealing the entire gear train and balance wheel above the baseplate.',
        fullDescription: 'The Tradition collection pays tribute to the memory of Abraham-Louis Breguet. It reveals the secrets of the watchs movement, placed openly above the mainplate.',
        image: 'https://i.ibb.co/jP7Zsq0q/Breguet-watch-on-textured-surface-20261020020635.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Movement components symmetrical layout', 'Retrograde seconds arc at 10 oclock', 'Parachute shock absorber inverted device'],
        specs: {
          caseMaterial: '18k White Gold',
          dialColor: 'Silvered Gold Hand-Engraved Off-Center Dial',
          movementType: 'Self-winding Calibre 505SR1',
          waterResistance: '30m (3 ATM)',
          origin: 'Vallée de Joux, Switzerland'
        }
      },
      {
        id: 'breguet-2',
        name: 'Breguet Tradition Automatique 7038',
        category: 'Watch Collections',
        subtitle: 'Mother-of-Pearl Sub-Dial • Barrel Decoration',
        shortDetails: 'Feminine technical mastery highlighting openworked gilded mechanics and diamond-set bezel.',
        fullDescription: 'Blending haute horlogerie mechanics with jewellery flair, this piece reveals the escapement and mainspring barrel adorned with delicate rosette engraving.',
        image: 'https://i.ibb.co/93Z3BMDJ/Breguet-Tradition-mechanical-wat-20261020020633.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['68 brilliant-cut diamonds on bezel (~0.895 ct)', 'Tahitian mother-of-pearl off-center subdial', 'Rosette engraved mainspring barrel'],
        specs: {
          caseMaterial: '18k Rose Gold & Diamonds',
          dialColor: 'Natural Mother-of-Pearl',
          movementType: 'Self-winding Calibre 505SR',
          waterResistance: '30m (3 ATM)',
          origin: 'Vallée de Joux, Switzerland'
        }
      },
      {
        id: 'breguet-3',
        name: 'Breguet Type XXI 3817 Chronograph',
        category: 'Watch Collections',
        subtitle: 'Flyback Fly-Return Pilot Chronograph',
        shortDetails: 'Aviation instrument developed directly from the historic Type XX commissioned by French naval aviation.',
        fullDescription: 'The Type XXI chronograph roots itself in the pilot watches delivered by Breguet to the French naval air army in the 1950s, complete with instantaneous flyback restart.',
        image: 'https://i.ibb.co/M5MsW59z/Breguet-chronograph-pilot-watch-20261020020640.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Flyback retour en vol function', 'Central elapsed minutes chronograph hand', 'Bidirectional rotating grooved bezel'],
        specs: {
          caseMaterial: 'Satin-Brushed Stainless Steel',
          dialColor: 'Slate Grey Vintage Parchment Lume',
          movementType: 'Self-winding Calibre 584Q/2 Flyback',
          waterResistance: '100m (10 ATM)',
          origin: 'Vallée de Joux, Switzerland'
        }
      },
      {
        id: 'breguet-4',
        name: 'Breguet Classique 7147',
        category: 'Watch Collections',
        subtitle: 'Grand Feu Enamel Dial • Secret Signature',
        shortDetails: 'The summit of classical watchmaking featuring fired white enamel and blued moon-tip Breguet hands.',
        fullDescription: 'A pure demonstration of Breguet aesthetics: a grand feu enamel dial fired at 800 degrees, authentic hollow crescent moon hands, and delicate fluted caseband.',
        image: 'https://i.ibb.co/s9rWTpzS/Breguet-watch-on-textured-surface-20261020020644.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Grand Feu vitreous enamel dial', 'Delicate coin-edge hand-fluted caseband', 'Ultra-thin automatic calibre under 2.4mm'],
        specs: {
          caseMaterial: '18k Rose Gold',
          dialColor: 'Grand Feu White Enamel',
          movementType: 'Ultra-thin Calibre 502.3SD',
          waterResistance: '30m (3 ATM)',
          origin: 'Vallée de Joux, Switzerland'
        }
      },
      {
        id: 'breguet-5',
        name: 'Breguet Classique 5177 Guilloché',
        category: 'Watch Collections',
        subtitle: 'Hand-Crafted Clous de Paris Engine-Turning',
        shortDetails: 'Silvery gold dial adorned with hand-turned engine guilloché patterns and blued open-tipped hands.',
        fullDescription: 'Each Breguet guilloché dial is individually engraved by master artisans on historic rose engines dating back over a century, producing shimmering light reflections.',
        image: 'https://i.ibb.co/Kp9zRVkp/Breguet-watch-on-textured-surface-20261020020646.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Hand-turned Clous de Paris guilloché center', 'Individually numbered dial with secret signature', 'Silicon escapement and balance spring'],
        specs: {
          caseMaterial: '18k White Gold',
          dialColor: 'Silvered 18k Gold Engine-Turned',
          movementType: 'Breguet Calibre 777J Automatic',
          waterResistance: '30m (3 ATM)',
          origin: 'Vallée de Joux, Switzerland'
        }
      },
      {
        id: 'breguet-6',
        name: 'Breguet Classique Perpetual Calendar 7327',
        category: 'Watch Collections',
        subtitle: 'Quantième Perpétuel • Moon Phases',
        shortDetails: 'Poetic grand complication presenting day, date, month, leap year, and retrograde moon phase.',
        fullDescription: 'Abraham-Louis Breguet was one of the first to build perpetual calendars for European monarchs. The 7327 refines this royal heritage into an ultra-wearable profile.',
        image: 'https://i.ibb.co/8nvpSr6n/Perpetual-calendar-watch-product-20261020020650.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Photorealistic hammered gold moon disc', 'Clous de Paris and grain dorge guilloché', 'Sub-dial calendar indicators arranged in harmony'],
        specs: {
          caseMaterial: '18k White Gold',
          dialColor: 'Silvered Hand-Engraved Gold',
          movementType: 'Ultra-thin Calibre 502.3.P Perpetual',
          waterResistance: '30m (3 ATM)',
          origin: 'Vallée de Joux, Switzerland'
        }
      },
      {
        id: 'breguet-7',
        name: 'Breguet Héritage 5410 Tonneau',
        category: 'Watch Collections',
        subtitle: 'Curved Tonneau Case • Wave Engine-Turning',
        shortDetails: 'Ergonomic tonneau case curved in two directions with radiating wave engine-turned guilloché.',
        fullDescription: 'The Héritage models represent an alternative to the round case, with curved tonneau shapes that hug the wrist perfectly while retaining Breguets classic decorative signatures.',
        image: 'https://i.ibb.co/7xfF0zfD/Breguet-H-ritage-watch-on-surface-20261020020652.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Dual-axis curved tonneau case', 'Radiating wave pattern engine-turned dial', 'Large date display at 12 oclock'],
        specs: {
          caseMaterial: '18k Rose Gold',
          dialColor: 'Engine-Turned Silvered Gold',
          movementType: 'Self-winding Calibre 516GG',
          waterResistance: '30m (3 ATM)',
          origin: 'Vallée de Joux, Switzerland'
        }
      },
      {
        id: 'breguet-8',
        name: 'Breguet Tourbillon Extra-Plat 5367',
        category: 'Watch Collections',
        subtitle: 'Invention of the Tourbillon (1801)',
        shortDetails: 'The pinnacle of horology: titanium tourbillon carriage housed within an ultra-thin 7mm profile.',
        fullDescription: 'Invented by Abraham-Louis Breguet in 1801 to counteract the effects of gravity, the tourbillon remains the undisputed queen of mechanical watchmaking complications.',
        image: 'https://i.ibb.co/5gLf7YfW/Breguet-Tourbillon-watch-on-surface-20261020020655.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Titanium tourbillon carriage under 0.29 grams', 'Peripheral rotor mechanism allowing ultra-thin casing', 'Grand Feu white enamel dial'],
        specs: {
          caseMaterial: 'Platinum 950',
          dialColor: 'Grand Feu White Enamel',
          movementType: 'Ultra-thin Calibre 581 Automatic Tourbillon',
          waterResistance: '30m (3 ATM)',
          origin: 'Vallée de Joux, Switzerland'
        }
      },
      {
        id: 'breguet-9',
        name: 'Breguet Marine 5517 Titanium',
        category: 'Watch Collections',
        subtitle: 'Maritime Chronometer of the Royal Navy',
        shortDetails: 'Sporty nautical timepiece with wave fluting, Roman numeral chapter ring, and wave-shaped crown protectors.',
        fullDescription: 'Abraham-Louis Breguet was appointed Chronometer-maker to the French Royal Navy in 1815. The Marine line pays tribute to this supreme naval appointment.',
        image: 'https://i.ibb.co/PsfW7ynG/Breguet-watch-on-textured-backgr-20261020020659.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Sunburst slate grey titanium dial', 'Rotor shaped like a ships helm', 'Hand-finished wave-fluted caseband'],
        specs: {
          caseMaterial: 'Grade 5 Titanium',
          dialColor: 'Sunburst Slate Grey',
          movementType: 'Calibre 777A Self-winding',
          waterResistance: '100m (10 ATM)',
          origin: 'Vallée de Joux, Switzerland'
        }
      },
      {
        id: 'breguet-10',
        name: 'Breguet Reine de Naples 8918',
        category: 'Watch Collections',
        subtitle: 'Created for Caroline Murat, Queen of Naples (1810)',
        shortDetails: 'Egg-shaped high jewellery watch with pear-cut diamond at 6 oclock and Tahitian mother-of-pearl.',
        fullDescription: 'In 1810, Abraham-Louis Breguet created the worlds first known wristwatch for Caroline Murat, Queen of Naples. The Reine de Naples honors this landmark invention.',
        image: 'https://i.ibb.co/PvjrmLx1/Breguet-pocket-wristwatch-on-sur-20261020020704.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Ovoid curved case with fluted caseband', 'Bespoke pear-cut diamond at 6 oclock (~0.08 ct)', '117 brilliant-cut diamonds framing bezel'],
        specs: {
          caseMaterial: '18k Rose Gold & Diamonds',
          dialColor: 'Natural Mother-of-Pearl & Engine-Turned Silver',
          movementType: 'Breguet Calibre 537/3 Automatic',
          waterResistance: '30m (3 ATM)',
          origin: 'Vallée de Joux, Switzerland'
        }
      }
    ]
  },
  vacheron_constantin: {
    id: 'vacheron_constantin',
    name: 'Vacheron Constantin',
    tagline: 'Do Better If Possible, and That Is Always Possible',
    origin: 'Geneva, Switzerland (Est. 1755)',
    watches: [
      {
        id: 'vc-1',
        name: 'Vacheron Constantin Traditionnelle Complete Calendar',
        category: 'Watch Collections',
        subtitle: 'Railway Track • Stepped Casing • Hallmark of Geneva',
        shortDetails: 'Masterpiece of Geneva watchmaking with day, date, month, and precision astronomical moonphase.',
        fullDescription: 'The Traditionnelle collection expresses the rigorous traditions of Genevan haute horlogerie passed down since 1755, certified with the prestigious Hallmark of Geneva.',
        image: 'https://i.ibb.co/G3TSPZG8/Vacheron-Constantin-Traditionnel-20261020021004.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Hallmark of Geneva certified execution', 'Precision moonphase disc accurate to 122 years', 'Stepped case with circular satin-brushed caseback'],
        specs: {
          caseMaterial: '18k Pink Gold',
          dialColor: 'Velvet-Finish Slate Grey / Opaline',
          movementType: 'Manufacture Calibre 2460 QCL/1',
          waterResistance: '30m (3 ATM)',
          origin: 'Geneva, Switzerland'
        }
      },
      {
        id: 'vc-2',
        name: 'Vacheron Constantin Patrimony Manual-Winding',
        category: 'Watch Collections',
        subtitle: 'Pure Circular Minimalism • 6.79mm Ultra-Thin',
        shortDetails: 'Understated refinement inspired by 1950s minimalism with curved hour markers and slender baton hands.',
        fullDescription: 'Circular perfection and understated minimalism define the Patrimony. Inspired by models from the 1950s, the dial and slender hands follow the gentle curve of the case.',
        image: 'https://i.ibb.co/60871kSY/Vacheron-Constantin-Patrimony-dr-20261020021001.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Ultra-thin 6.79 mm profile', 'Applied pearl minute track in pink gold', 'Manual winding Calibre 1400 with 40h reserve'],
        specs: {
          caseMaterial: '18k White Gold',
          dialColor: 'Silvered Opaline Dial',
          movementType: 'Manufacture Calibre 1400 Manual Wind',
          waterResistance: '30m (3 ATM)',
          origin: 'Geneva, Switzerland'
        }
      },
      {
        id: 'vc-3',
        name: 'Vacheron Constantin Overseas Self-Winding',
        category: 'Watch Collections',
        subtitle: 'Maltese Cross Bezel • Interchangeable 3-Strap System',
        shortDetails: 'The spirit of luxury travel: six-sided bezel evoking the Maltese cross with blue lacquered dial.',
        fullDescription: 'Designed for the spirit of world travel, the Overseas collection is equipped with an ingenious tool-free strap interchange system between steel, rubber, and alligator leather.',
        image: 'https://i.ibb.co/4w1vZkjs/Watch-resting-on-textured-backgr-20261020021010.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Maltese cross faceted bezel and link bracelet', 'Soft iron antimagnetic protection ring (25,000 A/m)', '22k gold oscillating weight adorned with wind rose'],
        specs: {
          caseMaterial: 'Stainless Steel',
          dialColor: 'Translucent Blue Lacquer',
          movementType: 'Manufacture Calibre 5100 Automatic',
          waterResistance: '150m (15 ATM)',
          origin: 'Geneva, Switzerland'
        }
      },
      {
        id: 'vc-4',
        name: 'Vacheron Constantin Historiques American 1921',
        category: 'Watch Collections',
        subtitle: 'Diagonal Driving Dial • Roaring Twenties',
        shortDetails: 'Cushion-shaped case with diagonal 45-degree dial engineered for reading time while driving a car.',
        fullDescription: 'A classic of the Roaring Twenties, this icon features a crown at 1 oclock and a diagonal dial orientation allowing the gentleman driver to read time without turning the wrist.',
        image: 'https://i.ibb.co/b5MT4X89/Watch-on-minimalist-surface-20261020021014.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Diagonal reading dial angled at 45 degrees', 'Cushion case with offset crown at 1 oclock', 'Breguet-style painted Arabic numerals'],
        specs: {
          caseMaterial: '18k White Gold',
          dialColor: 'Grained Silver Dial',
          movementType: 'Manual Wind Calibre 4400 AS',
          waterResistance: '30m (3 ATM)',
          origin: 'Geneva, Switzerland'
        }
      },
      {
        id: 'vc-5',
        name: 'Vacheron Constantin Égérie Creative Edition',
        category: 'Watch Collections',
        subtitle: 'Haute Horlogerie Meets Haute Couture',
        shortDetails: 'Pleated tapestry dial reminiscent of silk dresses with off-center diamond-ringed date window.',
        fullDescription: 'Égérie is the encounter between Haute Horlogerie and Haute Couture. Its pleated dial texture is produced using the traditional tapestry technique on an antique 1904 pantograph.',
        image: 'https://i.ibb.co/93qwrMVr/Diamond-luxury-watch-on-surface-20261020021016.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Pleated silk tapestry dial pattern', 'Off-center date encircled with brilliant diamonds', 'Crown set with faceted moonstone'],
        specs: {
          caseMaterial: '18k Pink Gold & Diamonds',
          dialColor: 'Silvered Pleated Opaline',
          movementType: 'Manufacture Calibre 1088 Automatic',
          waterResistance: '30m (3 ATM)',
          origin: 'Geneva, Switzerland'
        }
      },
      {
        id: 'vc-6',
        name: 'Vacheron Constantin Overseas Chronograph',
        category: 'Watch Collections',
        subtitle: 'Column-Wheel Chronograph • Reverse Panda Dial',
        shortDetails: 'High-complication sports chronograph with contrasting silver sub-dials and integrated architecture.',
        fullDescription: 'Equipped with a column-wheel chronograph movement certified with the Hallmark of Geneva, this Overseas timepiece captures dynamic movement and elegance in every detail.',
        image: 'https://i.ibb.co/yn30vc5q/Vacheron-Constantin-watch-on-sur-20261020021028.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Column-wheel chronograph mechanism with vertical clutch', 'Maltese cross crown and pushers', 'Quick-release interchangeable steel and rubber bands'],
        specs: {
          caseMaterial: 'Stainless Steel',
          dialColor: 'Black Lacquered Dial with Silver Counters',
          movementType: 'Manufacture Calibre 5200 Chronograph',
          waterResistance: '150m (15 ATM)',
          origin: 'Geneva, Switzerland'
        }
      },
      {
        id: 'vc-7',
        name: 'Vacheron Constantin Historiques Cornes de Vache 1955',
        category: 'Watch Collections',
        subtitle: 'Cow Horn Lugs • Classic Chronograph Heritage',
        shortDetails: 'Legendary 1955 chronograph featuring distinctive curved cow horn lugs and tachymetric scale.',
        fullDescription: 'Named after its curved cow horn lugs, the Cornes de Vache 1955 reinterprets Vacheron Constantins first water-resistant chronograph with column-wheel lateral clutch.',
        image: 'https://i.ibb.co/Df6HMbLv/Vacheron-Constantin-watch-on-sur-20261020021032.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Iconic sculpted cow horn lugs', 'Hand-wound column-wheel chronograph calibre', 'Strap crafted by Milanese leather artisans Serapian'],
        specs: {
          caseMaterial: 'Stainless Steel',
          dialColor: 'Velvet Finish Slate Grey',
          movementType: 'Manufacture Calibre 1142 Manual Wind',
          waterResistance: '30m (3 ATM)',
          origin: 'Geneva, Switzerland'
        }
      },
      {
        id: 'vc-8',
        name: 'Vacheron Constantin Traditionnelle Tourbillon',
        category: 'Watch Collections',
        subtitle: 'Maltese Cross Tourbillon Carriage',
        shortDetails: 'Supreme horological grandeur featuring an open tourbillon cage shaped as the Maltese cross emblem.',
        fullDescription: 'The open cage at 6 oclock rotates once every minute, shaped in the form of the brands historic Maltese cross emblem. Finished with meticulous interior anglage.',
        image: 'https://i.ibb.co/xpkkt2w/Vacheron-Constantin-luxury-dress-20261020021034.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Hand-chamfered Maltese cross tourbillon carriage', 'Peripheral oscillating weight providing clear view', 'Hallmark of Geneva certification'],
        specs: {
          caseMaterial: '18k Pink Gold',
          dialColor: 'Silvered Opaline Dial',
          movementType: 'Manufacture Calibre 2160 Ultra-thin Tourbillon',
          waterResistance: '30m (3 ATM)',
          origin: 'Geneva, Switzerland'
        }
      },
      {
        id: 'vc-9',
        name: 'Vacheron Constantin Malte Manual-Winding',
        category: 'Watch Collections',
        subtitle: 'Curved Tonneau Architecture • 18k Pink Gold',
        shortDetails: 'Sculptural barrel-shaped case celebrating over a century of Vacheron Constantin tonneau horology.',
        fullDescription: 'Vacheron Constantin was among the first watchmakers to embrace barrel cases in 1912. The Malte collection expresses this geometric mastery with pure lines and gold Roman numerals.',
        image: 'https://i.ibb.co/8Dp9VF0r/Rose-gold-chronograph-on-strap-20261020021038.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Architectural curved tonneau case', 'Small seconds counter at 6 oclock', 'Dark brown Mississippiensis alligator leather strap'],
        specs: {
          caseMaterial: '18k Pink Gold',
          dialColor: 'Sandblasted Silver Opaline',
          movementType: 'Manufacture Calibre 4400 AS Manual',
          waterResistance: '30m (3 ATM)',
          origin: 'Geneva, Switzerland'
        }
      },
      {
        id: 'vc-10',
        name: 'Vacheron Constantin Overseas Dual Time',
        category: 'Watch Collections',
        subtitle: 'Second Timezone • Day/Night Indicator',
        shortDetails: 'The ideal global travellers companion with dual time zone and coordinated AM/PM indicator.',
        fullDescription: 'Dedicated to travelers, the Overseas Dual Time allows the simultaneous reading of two time zones, complemented by a day/night indicator synchronized with home time.',
        image: 'https://i.ibb.co/TBKz5ZM3/Vacheron-Constantin-watch-on-sur-20261020021120.jpg',
        priceTag: 'Price on enquiry',
        highlights: ['Central arrow-tipped GMT second time hand', 'Day/night indicator aperture at 9 oclock', 'Three interchangeable bracelets included'],
        specs: {
          caseMaterial: 'Stainless Steel',
          dialColor: 'Translucent Silver-Toned Lacquer',
          movementType: 'Manufacture Calibre 5110 DT Automatic',
          waterResistance: '150m (15 ATM)',
          origin: 'Geneva, Switzerland'
        }
      }
    ]
  }
};

export const BRAND_LIST = [
  { id: 'rolex', name: 'Rolex', logoText: 'ROLEX', subtitle: 'Geneva' },
  { id: 'patek_philippe', name: 'Patek Philippe', logoText: 'PATEK PHILIPPE', subtitle: 'Genève' },
  { id: 'audemars_piguet', name: 'Audemars Piguet', logoText: 'AUDEMARS PIGUET', subtitle: 'Le Brassus' },
  { id: 'cartier', name: 'Cartier', logoText: 'CARTIER', subtitle: 'Paris' },
  { id: 'tudor', name: 'Tudor', logoText: 'TUDOR', subtitle: 'Geneva' },
  { id: 'omega', name: 'Omega', logoText: 'OMEGA', subtitle: 'Bienne' },
  { id: 'breguet', name: 'Breguet', logoText: 'BREGUET', subtitle: '1775' },
  { id: 'vacheron_constantin', name: 'Vacheron Constantin', logoText: 'VACHERON CONSTANTIN', subtitle: 'Genève 1755' },
];
