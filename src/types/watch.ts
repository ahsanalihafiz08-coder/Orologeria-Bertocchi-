export interface WatchCard {
  id: string;
  name: string;
  category: 'Watch Collections' | 'Watch Styles' | 'Gift Ideas' | 'Enquiries';
  subtitle?: string;
  shortDetails: string;
  fullDescription: string;
  image: string;
  priceTag?: string;
  highlights?: string[];
  specs?: {
    caseMaterial?: string;
    dialColor?: string;
    movementType?: string;
    waterResistance?: string;
    origin?: string;
  };
}

export interface BookingFormData {
  selectedItemName: string;
  category: string;
  fullName: string;
  phone: string;
  email: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}
