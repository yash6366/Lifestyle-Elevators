export const BUILDING_TYPES = [
  'Residential',
  'Commercial',
  'Hospital',
  'Industrial',
  'Other',
] as const;

export type BuildingType = (typeof BUILDING_TYPES)[number];

export const PRODUCT_SERVICE_OPTIONS = [
  'Passenger Lift',
  'Hospital Lift',
  'Home Lift',
  'Goods Lift',
  'Hydraulic Elevator',
  'MRL Elevator',
  'Manufacturing & Supply',
  'Elevator Installation',
  'Repair & Service Support',
  'Annual Maintenance Contract (AMC)',
  'Elevator Components & Modernisation',
  'Other',
] as const;

export type ProductServiceOption = (typeof PRODUCT_SERVICE_OPTIONS)[number];

export interface QuotationFormData {
  fullName: string;
  phoneNumber: string;
  productOrService: ProductServiceOption;
  buildingType?: BuildingType | '';
  projectLocation?: string;
  requirements?: string;
}

export interface ContactFormData {
  name: string;
  contactNumber: string;
  email?: string;
  subject: string;
  message: string;
}
