import type { ElevatorService } from '@/types/service';

export const ELEVATOR_SERVICES: ElevatorService[] = [
  {
    id: 'manufacturing-and-supply',
    name: 'Manufacturing & Supply',
    slug: 'manufacturing-and-supply',
    shortDescription:
      'High-grade elevator manufacturing and component supply backed by comprehensive post-check-up analysis reports.',
    fullDescription:
      'We manufacture and supply dependable elevator systems engineered for long-term durability. Every system undergoes rigorous quality checks throughout design and fabrication, combining high-grade raw materials with verified post-check-up analysis reports.',
    keyHighlights: [
      'Comprehensive vertical and trans movement solutions',
      'Intelligently researched smart-advanced elevator technology',
      'Strict quality inspection from design to fabrication stages',
      'Raw materials sourced from reputed industry brands',
      'Post-check-up analysis reports delivered with every system',
    ],
    callToAction: 'Enquire About Supply',
    iconName: 'Factory',
    image: '/images/services/service-manufacturing.jpg',
  },
  {
    id: 'elevator-installation',
    name: 'Elevator Installation',
    slug: 'elevator-installation',
    shortDescription:
      'Turnkey site erection and commissioning tailored to building architectural requirements using modern equipment.',
    fullDescription:
      'Our installation works are executed after thorough technical discussions regarding the exact lift type required for your building. Our engineering teams deploy modern equipment to ensure precise plumb alignment, structural safety, and smooth ride commissioning.',
    keyHighlights: [
      'Site structural feasibility and hoistway dimensional review',
      'Discussion on lift type and traffic capacity to meet building demands',
      'Installation carried out using modern erection equipment',
      'Rigorous safety inspection at every stage from erection to commissioning',
      'Compliance with standard pit, overhead, and landing safety clearances',
    ],
    callToAction: 'Request Installation Quote',
    iconName: 'Wrench',
    image: '/images/services/service-installation.jpg',
  },
  {
    id: 'repair-and-service-support',
    name: 'Repair & Service Support',
    slug: 'repair-and-service-support',
    shortDescription:
      'Dynamic technical professionals for rapid elevator repair, component troubleshooting, and device restoration.',
    fullDescription:
      'We possess dynamic professionals dedicated to providing repairing and maintenance services for optimal functioning of elevators and internal electronic devices. From motor overhauls to control board diagnostics, we restore your elevator to peak operating safety.',
    keyHighlights: [
      'Dynamic professionals for mechanical and electrical repairs',
      'Diagnostic troubleshooting of elevator components and inner devices',
      'Repairing and maintenance services at market price for better functioning',
      'Restoration of core operating and safety mechanisms',
      'Prompt repair and service support availability',
    ],
    callToAction: 'Request Repair / Service',
    iconName: 'Hammer',
    image: '/images/services/service-repair.jpg',
  },
  {
    id: 'annual-maintenance-contract',
    name: 'Annual Maintenance Contract (AMC)',
    slug: 'annual-maintenance-contract',
    shortDescription:
      'Comprehensive maintenance contracts for all lift types to ensure dependable operation and passenger safety.',
    fullDescription:
      'We are reliable and well-known service providers for elevator maintenance. We offer our clients annual maintenance contracts for all types of lifts to ensure continuous safe and smooth operation.',
    keyHighlights: [
      'Annual maintenance contracts available for all types of lifts',
      'Comprehensive maintenance and inspection of elevator systems',
      'Routine lubrication and mechanical device adjustments',
      'Customer feedback incorporation for service quality',
      'On-time service delivery by trained technicians',
    ],
    callToAction: 'Ask About AMC',
    iconName: 'ShieldCheck',
    image: '/images/services/service-amc.jpg',
  },
];
