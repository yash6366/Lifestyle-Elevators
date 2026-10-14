export type ProductCategory = 'passenger' | 'hospital' | 'home' | 'goods' | 'hydraulic' | 'mrl';

export type ComponentCategory =
  'doors' | 'cabins' | 'motors' | 'ropes' | 'controllers' | 'drawings';

export interface ProductSpecification {
  label: string;
  value: string;
}

export interface ElevatorProduct {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  tagline: string;
  description: string;
  idealFor: string[];
  features: string[];
  image: string;
  specifications?: ProductSpecification[];
  featured?: boolean;
}

export interface ComponentItem {
  id: string;
  name: string;
  category: ComponentCategory;
  categoryName: string;
  description?: string;
  specifications?: ProductSpecification[];
  image?: string;
}

export interface MeasurementRow {
  capacityPersons?: number;
  capacityKg: number;
  liftWellWidth: number;
  liftWellDepth: number;
  cabinWidth: number;
  cabinDepth: number;
  entranceOpening: string | number;
}

export interface PitOverheadRow {
  speed: string;
  pitDepth: number;
  overhead: number;
  machineRoomDepth: string;
  machineRoomWidth: string;
}
