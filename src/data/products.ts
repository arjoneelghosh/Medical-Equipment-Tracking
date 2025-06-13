import { Product } from '../types';

export const products: Product[] = [
  // Surgical Packs
  {
    id: 'general-surgery-pack',
    name: 'General Surgery Pack',
    category: 'surgical-packs',
    description: 'Complete sterile pack for general surgical procedures',
    image: 'https://images.pexels.com/photos/3259629/pexels-photo-3259629.jpeg',
    specifications: {
      'Contents': '10 pieces',
      'Sterilization': 'ETO',
      'Packaging': 'Individual Sterile Pack'
    }
  },
  {
    id: 'cardiac-surgery-pack',
    name: 'Cardiac Surgery Pack',
    category: 'surgical-packs',
    description: 'Specialized pack for cardiac surgical procedures',
    image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg',
    specifications: {
      'Contents': '15 pieces',
      'Sterilization': 'ETO',
      'Packaging': 'Individual Sterile Pack'
    }
  },
  {
    id: 'orthopedic-surgery-pack',
    name: 'Orthopedic Surgery Pack',
    category: 'surgical-packs',
    description: 'Complete pack for orthopedic surgical procedures',
    image: 'https://images.pexels.com/photos/3376790/pexels-photo-3376790.jpeg',
    specifications: {
      'Contents': '12 pieces',
      'Sterilization': 'ETO',
      'Packaging': 'Individual Sterile Pack'
    }
  },

  // Drapes
  {
    id: 'surgical-drape-standard',
    name: 'Standard Surgical Drape',
    category: 'drapes',
    description: 'High-quality sterile drape for general procedures',
    image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg',
    specifications: {
      'Material': 'Non-woven fabric',
      'Size': '150cm x 200cm',
      'Sterilization': 'ETO'
    }
  },
  {
    id: 'fenestrated-drape',
    name: 'Fenestrated Surgical Drape',
    category: 'drapes',
    description: 'Specialized drape with fenestration for targeted procedures',
    image: 'https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg',
    specifications: {
      'Material': 'Non-woven fabric',
      'Fenestration': '10cm diameter',
      'Sterilization': 'ETO'
    }
  },
  {
    id: 'adhesive-drape',
    name: 'Adhesive Surgical Drape',
    category: 'drapes',
    description: 'Self-adhesive drape for secure positioning',
    image: 'https://images.pexels.com/photos/3259629/pexels-photo-3259629.jpeg',
    specifications: {
      'Material': 'Non-woven with adhesive',
      'Size': '100cm x 150cm',
      'Sterilization': 'ETO'
    }
  },

  // Gloves
  {
    id: 'nitrile-examination-gloves',
    name: 'Nitrile Examination Gloves',
    category: 'gloves',
    description: 'Powder-free nitrile gloves for medical examination',
    image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg',
    specifications: {
      'Material': 'Nitrile',
      'Powder': 'Powder-free',
      'Packaging': '100 pieces per box'
    }
  },
  {
    id: 'latex-surgical-gloves',
    name: 'Latex Surgical Gloves',
    category: 'gloves',
    description: 'Sterile latex gloves for surgical procedures',
    image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg',
    specifications: {
      'Material': 'Natural latex',
      'Sterilization': 'Gamma radiation',
      'Packaging': 'Sterile pairs'
    }
  },
  {
    id: 'vinyl-examination-gloves',
    name: 'Vinyl Examination Gloves',
    category: 'gloves',
    description: 'Cost-effective vinyl gloves for basic examination',
    image: 'https://images.pexels.com/photos/3376790/pexels-photo-3376790.jpeg',
    specifications: {
      'Material': 'PVC',
      'Powder': 'Powder-free',
      'Packaging': '100 pieces per box'
    }
  },

  // Uniforms
  {
    id: 'surgical-scrubs-set',
    name: 'Surgical Scrubs Set',
    category: 'uniforms',
    description: 'Professional surgical scrubs for healthcare workers',
    image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg',
    specifications: {
      'Material': '65% Polyester, 35% Cotton',
      'Colors': 'Blue, Green, White',
      'Sizes': 'XS to XXL'
    }
  },
  {
    id: 'lab-coat-premium',
    name: 'Premium Lab Coat',
    category: 'uniforms',
    description: 'High-quality lab coat for medical professionals',
    image: 'https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg',
    specifications: {
      'Material': '100% Cotton',
      'Features': 'Multiple pockets, snap buttons',
      'Sizes': 'XS to XXL'
    }
  },
  {
    id: 'disposable-caps',
    name: 'Disposable Surgical Caps',
    category: 'uniforms',
    description: 'Single-use surgical caps for hygiene protection',
    image: 'https://images.pexels.com/photos/3259629/pexels-photo-3259629.jpeg',
    specifications: {
      'Material': 'Non-woven polypropylene',
      'Type': 'Bouffant style',
      'Packaging': '100 pieces per box'
    }
  },

  // Devices
  {
    id: 'digital-thermometer',
    name: 'Digital Thermometer',
    category: 'devices',
    description: 'Accurate digital thermometer for temperature monitoring',
    image: 'https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg',
    specifications: {
      'Accuracy': '±0.1°C',
      'Range': '32°C to 42.9°C',
      'Battery': 'LR41 button cell'
    }
  },
  {
    id: 'pulse-oximeter',
    name: 'Pulse Oximeter',
    category: 'devices',
    description: 'Portable pulse oximeter for oxygen saturation monitoring',
    image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg',
    specifications: {
      'SpO2 Range': '70% to 100%',
      'Pulse Rate': '30 to 250 BPM',
      'Display': 'OLED'
    }
  },
  {
    id: 'blood-pressure-monitor',
    name: 'Digital Blood Pressure Monitor',
    category: 'devices',
    description: 'Automatic blood pressure monitor for clinical use',
    image: 'https://images.pexels.com/photos/3376790/pexels-photo-3376790.jpeg',
    specifications: {
      'Cuff Size': 'Standard adult',
      'Memory': '60 readings',
      'Power': 'AC adapter or batteries'
    }
  }
];