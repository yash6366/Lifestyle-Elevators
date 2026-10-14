import type {
  ElevatorProduct,
  ComponentItem,
  MeasurementRow,
  PitOverheadRow,
} from '@/types/product';

export const MAIN_ELEVATOR_PRODUCTS: ElevatorProduct[] = [
  {
    id: 'passenger-lift',
    name: 'Passenger Lift',
    slug: 'passenger-lift',
    category: 'passenger',
    tagline: 'Smooth, whisper-quiet transit engineered for modern living and workspaces',
    description:
      'Engineered for residential apartments, corporate complexes, and commercial towers. Combines durable raw materials with advanced micro-leveling and VVVF drives for seamless, vibration-free passenger comfort.',
    idealFor: [
      'Residential Apartments & Gated Communities',
      'Corporate Headquarters & Office Towers',
      'Hotels, Resorts & Hospitality',
      'Shopping Malls & Retail Centers',
    ],
    features: [
      'Micro-leveling system ensuring flush car-to-landing alignment',
      'Automatic Rescue Device (ARD) with emergency battery descent',
      'Automatic car light and fan shut-off for optimal power conservation',
      'Emergency Fireman Service with automatic ground lobby egress',
      'Voice Announcement system for directional and floor updates',
      'Advanced VVVF drive for whisper-quiet acceleration and deceleration',
    ],
    image: '/images/products/passenger-lift.jpg',
    featured: true,
  },
  {
    id: 'hospital-lift',
    name: 'Hospital Lift',
    slug: 'hospital-lift',
    category: 'hospital',
    tagline: 'Spacious, jerk-free transit designed for patient care and stretcher mobility',
    description:
      'Engineered specifically for healthcare environments, diagnostic centers, and nursing homes. Features deep cabins, wide automatic center-opening doors, and ultra-smooth starts and stops to ensure comfortable transportation of beds, stretchers, and critical medical equipment.',
    idealFor: [
      'Multi-speciality Hospitals',
      'Nursing Homes & Healthcare Centers',
      'Diagnostic Clinics & Trauma Centers',
      'Rehabilitation Facilities',
    ],
    features: [
      'Extra-depth clear cabin accommodating standard hospital stretchers',
      'Gentle jerk-free speed profile protecting sensitive medical patients',
      'Priority emergency call override and key-locked nurse/doctor modes',
      'Micro-leveling landing to ensure seamless rolling of wheeled beds',
      'Antibacterial SS finishes with easy-clean floor surfaces',
      'Wide SS Auto Center Opening doors with safety infrared multi-beam sensors',
    ],
    image: '/images/products/hospital-lift.jpg',
    featured: true,
  },
  {
    id: 'home-lift',
    name: 'Home Lift',
    slug: 'home-lift',
    category: 'home',
    tagline: 'Luxurious, compact vertical mobility tailored for private residences',
    description:
      'Tailored for villas, duplexes, and multi-storey residences. Designed to integrate into architectural spaces without requiring deep civil pits or bulky overhead machine rooms, offering quiet luxury and effortless inter-floor movement.',
    idealFor: [
      'Independent Luxury Villas',
      'Duplex & Triplex Homes',
      'Row Houses & Townhomes',
      'Senior Citizen Assisted Living Residences',
    ],
    features: [
      'Zero or minimal pit and low overhead requirements',
      'Operates seamlessly on single-phase or three-phase domestic power',
      'Whisper-quiet motor technology preserving home serenity',
      'Custom designer cabins: SS Rose Gold, Wooden finishes, or Framed Glass',
      'Child-safe control interfaces and automatic emergency lowering',
      'Low energy footprint with automatic standby power-down mode',
    ],
    image: '/images/products/home-lift.jpg',
    featured: true,
  },
  {
    id: 'goods-lift',
    name: 'Goods Lift',
    slug: 'goods-lift',
    category: 'goods',
    tagline: 'Heavy-duty, robust engineering for industrial logistics and material handling',
    description:
      'Constructed with reinforced structural steel and heavy-gauge cabins to handle substantial material loads, industrial trolleys, and freight pallets across factories, warehouses, and commercial distribution centers.',
    idealFor: [
      'Manufacturing Plants & Production Facilities',
      'Warehouses & Logistics Hubs',
      'Wholesale & Commercial Showrooms',
      'Industrial Workshops & Automobile Garages',
    ],
    features: [
      'Heavy-duty checkered or SS diamond-plate flooring for high impact resistance',
      'Reinforced car sling and heavy-capacity guide rail assemblies',
      'Flexible door configurations: MS Collapsible Gates or Heavy-Duty Telescopic',
      'Overload detection buzzer and safety interlock cut-offs',
      'Wide entrance openings for forklift and pallet trolley accessibility',
      'High-torque geared or gearless heavy freight drive systems',
    ],
    image: '/images/products/goods-lift.jpg',
    featured: true,
  },
  {
    id: 'hydraulic-elevators',
    name: 'Hydraulic Elevators',
    slug: 'hydraulic-elevators',
    category: 'hydraulic',
    tagline: 'Powerful lifting mechanics with flexible machinery placement',
    description:
      'Ideal for low-to-medium rise structures where rooftop overhead space is constrained. Hydraulic systems do not require an overhead machine room, as the pump unit can be located conveniently at ground or basement levels.',
    idealFor: [
      'Low-Rise Commercial Buildings (Up to 4-5 Floors)',
      'Luxury Private Bungalows & Penthouses',
      'Car Showrooms & Parking Elevators',
      'Heritage Renovations with Height Restrictions',
    ],
    features: [
      'No top-floor machine room needed; machinery placed in basement or side space',
      'Exceptionally smooth hydraulic acceleration and soft cushioned stops',
      'Gravity-assisted descent requiring minimal electrical power while descending',
      'Integrated manual emergency descent valve during power outages',
      'High lifting capacity with durable hydraulic cylinder assemblies',
      'Low mechanical noise and reduced building structural load stress',
    ],
    image: '/images/products/hydraulic-lift.jpg',
    featured: false,
  },
  {
    id: 'mrl-elevators',
    name: 'Machine Room-Less (MRL) Elevators',
    slug: 'mrl-elevators',
    category: 'mrl',
    tagline: 'Architectural freedom and superior energy efficiency with gearless technology',
    description:
      'Machine Room-Less (MRL) elevators place a permanent-magnet synchronous gearless motor directly inside the lift hoistway shaft. This eliminates the need for a penthouse machine room on the terrace, liberating valuable rooftop space and reducing building construction costs.',
    idealFor: [
      'Modern High-Rise & Mid-Rise Towers',
      'Contemporary Architecture with Rooftop Terraces or Pools',
      'Eco-Friendly Green Buildings Seeking Low Power Usage',
      'Commercial Malls & Mixed-Use Developments',
    ],
    features: [
      'Terrace machine room completely eliminated, saving architectural footprint',
      'Permanent Magnet Synchronous (PMSC) gearless drive with up to 40% energy savings',
      'Grease-free, environmentally responsible operation with no gear oil changes',
      'Ultra-precise digital speed regulation and whisper-quiet hoistway acoustics',
      'Reduced structural loads on building civil frames',
      'Compact control cabinet integrated into the top landing door frame',
    ],
    image: '/images/products/mrl-lift.jpg',
    featured: true,
  },
];

export const BROCHURE_COMPONENTS: ComponentItem[] = [
  // Doors
  {
    id: 'ms-manual-collapsible-gates',
    name: 'MS Manual Collapsible Gates',
    category: 'doors',
    categoryName: 'Elevator Doors',
    description: 'Durable lattice steel collapsible security gates for industrial and goods lifts.',
    image: '/images/products/components/door-ms-collapsible.jpg',
  },
  {
    id: 'ms-manual-swing-door',
    name: 'MS Manual Swing Door',
    category: 'doors',
    categoryName: 'Elevator Doors',
    description: 'Robust Mild Steel manual swing door with integrated vision glass slot.',
    image: '/images/products/components/door-ms-swing.jpg',
  },
  {
    id: 'ms-auto-telescopic-doors',
    name: 'MS Auto Telescopic Doors',
    category: 'doors',
    categoryName: 'Elevator Doors',
    description:
      'High-efficiency automated two-speed telescopic side opening doors in powder-coated steel.',
    image: '/images/products/components/door-ms-telescopic.jpg',
  },
  {
    id: 'ms-auto-center-opening-vision-doors',
    name: 'MS Auto Center Opening Small Vision Cutout Doors',
    category: 'doors',
    categoryName: 'Elevator Doors',
    description:
      'Center-opening automated landing doors equipped with architectural small vision cutouts.',
    image: '/images/products/components/door-ms-center-vision.jpg',
  },
  {
    id: 'ss-auto-center-opening-doors',
    name: 'SS Auto Center Opening Doors',
    category: 'doors',
    categoryName: 'Elevator Doors',
    description:
      'Sleek brushed Stainless Steel automated center opening doors for passenger elevators.',
    image: '/images/products/components/door-ss-center.jpg',
  },
  {
    id: 'ss-framed-glass-auto-center-doors',
    name: 'SS Framed Glass Auto Center Opening Doors',
    category: 'doors',
    categoryName: 'Elevator Doors',
    description:
      'Premium architectural safety glass framed in polished stainless steel for modern panoramic views.',
    image: '/images/products/components/door-ss-glass.jpg',
  },
  {
    id: 'ss-auto-telescopic-doors',
    name: 'SS Auto Telescopic Doors',
    category: 'doors',
    categoryName: 'Elevator Doors',
    description:
      'Stainless steel automated telescopic doors providing maximum entrance width in compact shafts.',
    image: '/images/products/components/door-ss-telescopic.jpg',
  },

  // Cabins
  {
    id: 'ms-powder-coated-cabin',
    name: 'MS Powder Coated Cabin',
    category: 'cabins',
    categoryName: 'Cabin Finishes',
    description:
      'Sturdy, corrosion-resistant powder-coated mild steel cabin available in bespoke industrial shades.',
    image: '/images/products/components/cabin-ms-powder.jpg',
  },
  {
    id: 'ss-matt-finish-cabin',
    name: 'SS Matt Finish Cabin',
    category: 'cabins',
    categoryName: 'Cabin Finishes',
    description:
      'High-grade hairline brushed stainless steel panels offering timeless corporate elegance and anti-scratch durability.',
    image: '/images/products/components/cabin-ss-matt.jpg',
  },
  {
    id: 'ss-wooden-finished-cabin',
    name: 'SS Wooden Finished Cabin',
    category: 'cabins',
    categoryName: 'Cabin Finishes',
    description:
      'Luxury stainless steel cabin complemented by warm architectural wooden-textured veneer inserts.',
    image: '/images/products/components/cabin-ss-wood.jpg',
  },
  {
    id: 'ss-design-cabin',
    name: 'SS Design Cabin',
    category: 'cabins',
    categoryName: 'Cabin Finishes',
    description:
      'Decorative etched stainless steel cabin with laser-cut ambient false ceiling and polished patterns.',
    image: '/images/products/components/cabin-ss-design.jpg',
  },
  {
    id: 'ss-rose-gold-design-cabin',
    name: 'SS Rose Gold Design Cabin',
    category: 'cabins',
    categoryName: 'Cabin Finishes',
    description:
      'Ultra-luxurious Ti-coated Rose Gold mirror stainless steel cabin with decorative architectural backlit ceiling.',
    image: '/images/products/components/cabin-ss-rose-gold.jpg',
  },

  // Motors
  {
    id: 'montennori-geared-motor',
    name: 'Montennori Geared Motor',
    category: 'motors',
    categoryName: 'Traction Motors',
    description:
      'Precision geared traction machine (as specified in company brochure technical data).',
    specifications: [
      { label: 'Static Load', value: '2,200 kg' },
      { label: 'Capacity', value: '408 kg (1:1)' },
      { label: 'Reduction Ratios', value: '1/37 - 1/46' },
      { label: 'Oil Capacity', value: '1.7 L' },
      { label: 'Gearbox Weight', value: '80 kg' },
      { label: 'Motor Frequency', value: '50 Hz' },
      { label: 'VVVF 4 Poles', value: '4 kW' },
    ],
    image: '/images/products/components/motor-montennori-geared.jpg',
  },
  {
    id: 'montennori-gearless-motor',
    name: 'Montennori Gearless Motor',
    category: 'motors',
    categoryName: 'Traction Motors',
    description:
      'High-efficiency permanent magnet gearless synchronous machine for MRL installations.',
    specifications: [
      { label: 'Static Load', value: '3,400 kg' },
      { label: 'Capacity', value: '816 kg (2:1)' },
      { label: 'Torque Moment', value: '385 Nm - S5 - 40% ED - 180 avv/h' },
      { label: 'Pulley Diameter', value: '240 - 320 mm' },
      { label: 'Gearless Weight', value: '180 kg' },
      { label: 'Voltage', value: '380 V' },
      { label: 'Encoder', value: 'ENDAT - SINCOS' },
    ],
    image: '/images/products/components/motor-montennori-gearless.jpg',
  },
  {
    id: 'bharath-bijilee-gearless-motor',
    name: 'Bharath Bijilee Gearless Motor',
    category: 'motors',
    categoryName: 'Traction Motors',
    description: 'High-reliability permanent-magnet electric gearless machine from Bharat Bijlee.',
    specifications: [
      { label: 'Phase', value: 'Single Phase / 3 Phase' },
      { label: 'Voltage', value: '110 - 380 V' },
      { label: 'Frequency', value: '50 - 60 Hz' },
      { label: 'Type', value: 'Gearless Synchronous' },
      { label: 'Power Source', value: 'Electric' },
    ],
    image: '/images/products/components/motor-bharath-bijilee.jpg',
  },

  // Wire Ropes
  {
    id: 'usha-martin-wire-rope',
    name: 'Usha Martin 13 mm Wire Rope',
    category: 'ropes',
    categoryName: 'Suspension & Ropes',
    description:
      'High-tensile, high-durability steel wire suspension ropes manufactured by Usha Martin for passenger safety.',
    specifications: [
      { label: 'Diameter', value: '13 mm' },
      { label: 'Standard', value: 'IS/ISO Elevator Grade' },
      { label: 'Core', value: 'Natural Fibre / Independent Wire Rope Core' },
    ],
    image: '/images/products/components/rope-usha-martin.jpg',
  },

  // Controllers
  {
    id: 'integrated-controller-3-phase',
    name: 'Integrated Controller and 3-Phase Control Board',
    category: 'controllers',
    categoryName: 'Control Systems & Automation',
    description:
      'Smart integrated microcomputer controller board and 3-phase power distribution panel.',
    specifications: [
      { label: 'Power Supply', value: '3 Phase, 415 VAC, 50 Hz, 4 Wire' },
      { label: 'Controlling Mode', value: 'Down Collective / Full Collective & Selective' },
      { label: 'Rated Speed', value: 'Upto 1.0 MPS' },
      { label: 'Type', value: 'Integrated Controller' },
      { label: 'Door Operation', value: 'Auto Door / Manual Door' },
      { label: 'Floor Sensing', value: '3 Reeds' },
      { label: 'Reed Support', value: 'Auto Door & Manual Door Compatible' },
    ],
    image: '/images/products/components/controller-board.jpg',
  },

  // Technical Drawings
  {
    id: 'machine-room-drawing-geared',
    name: 'Machine Room Drawing for Geared Machine',
    category: 'drawings',
    categoryName: 'Technical Drawings & Hoistway Schematics',
    description:
      'Engineering cross-section architectural schematic showing hoistway, pit depth, overhead, and top machine room clearances for geared elevator systems.',
    image: '/images/products/components/drawing-geared.jpg',
  },
  {
    id: 'machine-room-less-drawing-gearless',
    name: 'Machine Room Less (MRL) Drawing for Gearless Machine',
    category: 'drawings',
    categoryName: 'Technical Drawings & Hoistway Schematics',
    description:
      'Technical schematic illustrating hoistway layout, counterweight rails, travelling cables, and compact shaft-top gearless drive placement without a terrace machine room.',
    image: '/images/products/components/drawing-mrl.jpg',
  },
];

export const PASSENGER_MEASUREMENTS: MeasurementRow[] = [
  {
    capacityPersons: 4,
    capacityKg: 272,
    liftWellWidth: 1900,
    liftWellDepth: 1300,
    cabinWidth: 1100,
    cabinDepth: 700,
    entranceOpening: '700 (Min)',
  },
  {
    capacityPersons: 6,
    capacityKg: 408,
    liftWellWidth: 1900,
    liftWellDepth: 1700,
    cabinWidth: 1100,
    cabinDepth: 1000,
    entranceOpening: '700 (Min)',
  },
  {
    capacityPersons: 8,
    capacityKg: 544,
    liftWellWidth: 1900,
    liftWellDepth: 1900,
    cabinWidth: 1300,
    cabinDepth: 1100,
    entranceOpening: 800,
  },
  {
    capacityPersons: 10,
    capacityKg: 680,
    liftWellWidth: 1900,
    liftWellDepth: 2100,
    cabinWidth: 1300,
    cabinDepth: 1350,
    entranceOpening: 800,
  },
  {
    capacityPersons: 13,
    capacityKg: 884,
    liftWellWidth: 2500,
    liftWellDepth: 1900,
    cabinWidth: 2000,
    cabinDepth: 1100,
    entranceOpening: 900,
  },
  {
    capacityPersons: 16,
    capacityKg: 1088,
    liftWellWidth: 2500,
    liftWellDepth: 2100,
    cabinWidth: 2000,
    cabinDepth: 1300,
    entranceOpening: 1000,
  },
  {
    capacityPersons: 20,
    capacityKg: 1360,
    liftWellWidth: 2500,
    liftWellDepth: 2400,
    cabinWidth: 2000,
    cabinDepth: 1500,
    entranceOpening: 1000,
  },
];

export const HOSPITAL_MEASUREMENTS: MeasurementRow[] = [
  {
    capacityPersons: 15,
    capacityKg: 1020,
    liftWellWidth: 1800,
    liftWellDepth: 3000,
    cabinWidth: 1000,
    cabinDepth: 2400,
    entranceOpening: 800,
  },
  {
    capacityPersons: 20,
    capacityKg: 1360,
    liftWellWidth: 2200,
    liftWellDepth: 3000,
    cabinWidth: 1300,
    cabinDepth: 2400,
    entranceOpening: 1200,
  },
  {
    capacityPersons: 26,
    capacityKg: 1768,
    liftWellWidth: 2400,
    liftWellDepth: 3000,
    cabinWidth: 1600,
    cabinDepth: 2400,
    entranceOpening: 1200,
  },
];

export const GOODS_MEASUREMENTS: MeasurementRow[] = [
  {
    capacityKg: 1000,
    liftWellWidth: 2300,
    liftWellDepth: 2100,
    cabinWidth: 1400,
    cabinDepth: 1800,
    entranceOpening: 1400,
  },
  {
    capacityKg: 1500,
    liftWellWidth: 2600,
    liftWellDepth: 2300,
    cabinWidth: 1700,
    cabinDepth: 2000,
    entranceOpening: 1700,
  },
  {
    capacityKg: 2000,
    liftWellWidth: 2600,
    liftWellDepth: 2800,
    cabinWidth: 1700,
    cabinDepth: 2500,
    entranceOpening: 1700,
  },
  {
    capacityKg: 2500,
    liftWellWidth: 2900,
    liftWellDepth: 2800,
    cabinWidth: 2000,
    cabinDepth: 2500,
    entranceOpening: 2000,
  },
];

export const PIT_OVERHEAD_DIMENSIONS: PitOverheadRow[] = [
  {
    speed: 'Up to 0.70 m/s',
    pitDepth: 1350,
    overhead: 4200,
    machineRoomDepth: 'D + 2000',
    machineRoomWidth: 'C + 1000',
  },
  {
    speed: '0.70 - 1.00 m/s',
    pitDepth: 1500,
    overhead: 4250,
    machineRoomDepth: 'D + 2000',
    machineRoomWidth: 'C + 1000',
  },
  {
    speed: '1.00 - 1.25 m/s',
    pitDepth: 1600,
    overhead: 4800,
    machineRoomDepth: 'D + 2000',
    machineRoomWidth: 'C + 1200',
  },
  {
    speed: '1.25 - 1.50 m/s',
    pitDepth: 2150,
    overhead: 5200,
    machineRoomDepth: 'D + 2500',
    machineRoomWidth: 'C + 1200',
  },
  {
    speed: '1.50 - 1.75 m/s',
    pitDepth: 2200,
    overhead: 5400,
    machineRoomDepth: 'D + 2500',
    machineRoomWidth: 'C + 1500',
  },
  {
    speed: '1.75 - 2.00 m/s',
    pitDepth: 2500,
    overhead: 5400,
    machineRoomDepth: 'D + 2500',
    machineRoomWidth: 'C + 1500',
  },
];
