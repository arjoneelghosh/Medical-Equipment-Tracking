import { Product } from '../types';

export const products: Product[] = [
  // Surgical Packs
  {
    id: 'angiography-pack-i',
    name: 'Angiography Pack – I',
    category: 'surgical-packs',
    description: 'Complete sterile pack for angiography procedures',
    image: 'https://varrada.com/wp-content/uploads/2023/06/Angiography-Pack-1.jpg',
    specifications: {
      'Type': 'Angiography Pack',
      'Sterilization': 'ETO',
      'Packaging': 'Individual Sterile Pack'
    }
  },
  {
    id: 'arthroscopy-pack-with-pouch',
    name: 'Arthroscopy Pack With Pouch',
    category: 'surgical-packs',
    description: 'Specialized pack for arthroscopic procedures with integrated pouch',
    image: 'https://varrada.com/wp-content/uploads/2023/06/Arthroscopy-Pack-With-Pouch.png',
    specifications: {
      'Type': 'Arthroscopy Pack',
      'Features': 'With Pouch',
      'Sterilization': 'ETO'
    }
  },
  {
    id: 'basic-pack',
    name: 'Basic Pack',
    category: 'surgical-packs',
    description: 'Essential surgical pack for basic procedures',
    image: 'https://varrada.com/wp-content/uploads/2023/06/Major-pack-and-other-pack.jpg',
    specifications: {
      'Type': 'Basic Surgical Pack',
      'Contents': 'Essential items',
      'Sterilization': 'ETO'
    }
  },
  {
    id: 'cabg-pack',
    name: 'CABG Pack',
    category: 'surgical-packs',
    description: 'Coronary artery bypass graft surgical pack',
    image: 'https://varrada.com/wp-content/uploads/2023/06/Cabg-Pack-570x570.jpg',
    specifications: {
      'Type': 'Cardiac Surgery Pack',
      'Procedure': 'CABG',
      'Sterilization': 'ETO'
    }
  },
  {
    id: 'cesarean-section-pack',
    name: 'Cesarean Section Pack',
    category: 'surgical-packs',
    description: 'Complete pack for cesarean section procedures',
    image: 'https://varrada.com/wp-content/uploads/2023/06/Cesarean-Section-Pack.jpg',
    specifications: {
      'Type': 'Obstetric Pack',
      'Procedure': 'C-Section',
      'Sterilization': 'ETO'
    }
  },
  {
    id: 'craniotomy-pack',
    name: 'Craniotomy Pack',
    category: 'surgical-packs',
    description: 'Specialized pack for craniotomy procedures',
    image: 'https://varrada.com/wp-content/uploads/2023/06/Craniotomy-Pack-570x570.jpg',
    specifications: {
      'Type': 'Neurosurgery Pack',
      'Procedure': 'Craniotomy',
      'Sterilization': 'ETO'
    }
  },
  {
    id: 'cystoscopy-pack',
    name: 'Cystoscopy Pack',
    category: 'surgical-packs',
    description: 'Complete pack for cystoscopy procedures',
    image: 'https://varrada.com/wp-content/uploads/2023/06/Cystoscopy-Pack.jpg',
    specifications: {
      'Type': 'Urology Pack',
      'Procedure': 'Cystoscopy',
      'Sterilization': 'ETO'
    }
  },
  {
    id: 'delivery-pack',
    name: 'Delivery Pack',
    category: 'surgical-packs',
    description: 'Essential pack for delivery procedures',
    image: 'https://varrada.com/wp-content/uploads/2023/06/Delivery-Pack-570x570.jpg',
    specifications: {
      'Type': 'Obstetric Pack',
      'Procedure': 'Delivery',
      'Sterilization': 'ETO'
    }
  },
  {
    id: 'general-surgery-pack',
    name: 'General Surgery Pack',
    category: 'surgical-packs',
    description: 'Complete sterile pack for general surgical procedures',
    image: 'https://varrada.com/wp-content/uploads/2023/06/General-Surgery-pack-570x570.png',
    specifications: {
      'Type': 'General Surgery',
      'Contents': 'Complete set',
      'Sterilization': 'ETO'
    }
  },
  {
    id: 'gynaecology-pack',
    name: 'Gynaecology Pack',
    category: 'surgical-packs',
    description: 'Specialized pack for gynecological procedures',
    image: 'https://varrada.com/wp-content/uploads/2023/06/Gynaecology-Pack.png',
    specifications: {
      'Type': 'Gynecology Pack',
      'Specialty': 'Gynecological',
      'Sterilization': 'ETO'
    }
  },
  {
    id: 'hip-surgery-pack',
    name: 'Hip Surgery Pack',
    category: 'surgical-packs',
    description: 'Complete pack for hip surgical procedures',
    image: 'https://varrada.com/wp-content/uploads/2023/06/Hip-Surgical-Pack.png',
    specifications: {
      'Type': 'Orthopedic Pack',
      'Procedure': 'Hip Surgery',
      'Sterilization': 'ETO'
    }
  },
  {
    id: 'hiv-pack',
    name: 'HIV Pack',
    category: 'surgical-packs',
    description: 'Specialized pack for HIV-related procedures',
    image: 'https://varrada.com/wp-content/uploads/2023/06/hiv-pack-other.jpg',
    specifications: {
      'Type': 'Specialized Pack',
      'Application': 'HIV procedures',
      'Sterilization': 'ETO'
    }
  },
  {
    id: 'major-pack',
    name: 'Major Pack',
    category: 'surgical-packs',
    description: 'Comprehensive pack for major surgical procedures',
    image: 'https://varrada.com/wp-content/uploads/2023/06/Major-pack-and-other-pack.jpg',
    specifications: {
      'Type': 'Major Surgery Pack',
      'Contents': 'Comprehensive set',
      'Sterilization': 'ETO'
    }
  },
  {
    id: 'minor-pack',
    name: 'Minor Pack',
    category: 'surgical-packs',
    description: 'Essential pack for minor surgical procedures',
    image: 'https://varrada.com/wp-content/uploads/2023/06/minor-pack-major-pack-570x535.png',
    specifications: {
      'Type': 'Minor Surgery Pack',
      'Contents': 'Essential items',
      'Sterilization': 'ETO'
    }
  },
  {
    id: 'neurosurgery-pack',
    name: 'Neurosurgery Pack',
    category: 'surgical-packs',
    description: 'Specialized pack for neurosurgical procedures',
    image: 'https://varrada.com/wp-content/uploads/2023/06/nuerosurgery-pack.png',
    specifications: {
      'Type': 'Neurosurgery Pack',
      'Specialty': 'Neurosurgical',
      'Sterilization': 'ETO'
    }
  },

  // Drapes
  {
    id: 'angiography-drape',
    name: 'Angiography Drape',
    category: 'drapes',
    description: 'Specialized drape for angiography procedures',
    image: 'https://varrada.com/wp-content/uploads/2023/06/Angiography-Drape-380-500.jpg',
    specifications: {
      'Type': 'Angiography Drape',
      'Material': 'Non-woven fabric',
      'Sterilization': 'ETO'
    }
  },
  {
    id: 'arm-o-drape',
    name: 'Arm O Drape',
    category: 'drapes',
    description: 'Circular drape for arm procedures',
    image: 'https://varrada.com/wp-content/uploads/2023/06/Arm-O-Drape.jpg',
    specifications: {
      'Type': 'Arm Drape',
      'Shape': 'Circular',
      'Sterilization': 'ETO'
    }
  },
  {
    id: 'arm-u-drape',
    name: 'Arm U Drape',
    category: 'drapes',
    description: 'U-shaped drape for arm procedures',
    image: 'https://varrada.com/wp-content/uploads/2023/06/Arm-U-Drape-570x570.jpg',
    specifications: {
      'Type': 'Arm Drape',
      'Shape': 'U-shaped',
      'Sterilization': 'ETO'
    }
  },
  {
    id: 'arthroscopy-knee-drape',
    name: 'Arthroscopy Knee Drape',
    category: 'drapes',
    description: 'Specialized drape for knee arthroscopy',
    image: 'https://varrada.com/wp-content/uploads/2023/06/Arthroscopy-Knee-Drape-570x570.jpg',
    specifications: {
      'Type': 'Arthroscopy Drape',
      'Application': 'Knee procedures',
      'Sterilization': 'ETO'
    }
  },
  {
    id: 'arthroscopy-shoulder-drape',
    name: 'Arthroscopy Shoulder Drape',
    category: 'drapes',
    description: 'Specialized drape for shoulder arthroscopy',
    image: 'https://varrada.com/wp-content/uploads/2023/06/shoulder-arthroscopy-drape-570x570.jpg',
    specifications: {
      'Type': 'Arthroscopy Drape',
      'Application': 'Shoulder procedures',
      'Sterilization': 'ETO'
    }
  },
  {
    id: 'bilateral-knee-drape',
    name: 'Bilateral Knee Drape',
    category: 'drapes',
    description: 'Drape for bilateral knee procedures',
    image: 'https://varrada.com/wp-content/uploads/2023/06/bilateral-knee-o-drape-570x570.jpg',
    specifications: {
      'Type': 'Knee Drape',
      'Application': 'Bilateral procedures',
      'Sterilization': 'ETO'
    }
  },
  {
    id: 'c-section-drape',
    name: 'C-Section Drape',
    category: 'drapes',
    description: 'Specialized drape for cesarean section procedures',
    image: 'https://varrada.com/wp-content/uploads/2023/06/C-Section-Drape-380-500.jpg',
    specifications: {
      'Type': 'Obstetric Drape',
      'Procedure': 'C-Section',
      'Sterilization': 'ETO'
    }
  },
  {
    id: 'cabg-drape-with-ioban',
    name: 'CABG Drape With Ioban',
    category: 'drapes',
    description: 'CABG drape with integrated Ioban adhesive film',
    image: 'https://varrada.com/wp-content/uploads/2023/06/CABG-DRAPE-WITH-IOBAN-380-500.jpg',
    specifications: {
      'Type': 'Cardiac Drape',
      'Features': 'With Ioban',
      'Sterilization': 'ETO'
    }
  },
  {
    id: 'caesarean-drape-with-pouch',
    name: 'Caesarean Drape With Pouch',
    category: 'drapes',
    description: 'Cesarean drape with integrated collection pouch',
    image: 'https://varrada.com/wp-content/uploads/2023/06/Caesarean-Drape-With-Pouch-380-500.jpg',
    specifications: {
      'Type': 'Obstetric Drape',
      'Features': 'With Pouch',
      'Sterilization': 'ETO'
    }
  },
  {
    id: 'cling-drape',
    name: 'Cling Drape',
    category: 'drapes',
    description: 'Adhesive cling drape for secure positioning',
    image: 'https://varrada.com/wp-content/uploads/2023/06/Cling-Drape.png',
    specifications: {
      'Type': 'Adhesive Drape',
      'Features': 'Self-adhesive',
      'Sterilization': 'ETO'
    }
  },
  {
    id: 'craniotomy-drape',
    name: 'Craniotomy Drape',
    category: 'drapes',
    description: 'Specialized drape for craniotomy procedures',
    image: 'https://varrada.com/wp-content/uploads/2023/06/CRANIOTOMY-DRAPE-380-500.jpg',
    specifications: {
      'Type': 'Neurosurgery Drape',
      'Procedure': 'Craniotomy',
      'Sterilization': 'ETO'
    }
  },
  {
    id: 'cystoscopy-drape',
    name: 'Cystoscopy Drape',
    category: 'drapes',
    description: 'Specialized drape for cystoscopy procedures',
    image: 'https://varrada.com/wp-content/uploads/2023/06/Cystoscopy-Drape-570x570.png',
    specifications: {
      'Type': 'Urology Drape',
      'Procedure': 'Cystoscopy',
      'Sterilization': 'ETO'
    }
  },
  {
    id: 'femoral-radial-angiography-drape',
    name: 'Femoral Radial Angiography Drape',
    category: 'drapes',
    description: 'Dual-access drape for femoral and radial angiography',
    image: 'https://varrada.com/wp-content/uploads/2023/06/Femoral-Radial-Angiography-Drape-380-500.jpg',
    specifications: {
      'Type': 'Angiography Drape',
      'Access': 'Femoral & Radial',
      'Sterilization': 'ETO'
    }
  },
  {
    id: 'gynaecology-drape-with-pouch',
    name: 'Gynaecology Drape With Pouch',
    category: 'drapes',
    description: 'Gynecological drape with integrated collection pouch',
    image: 'https://varrada.com/wp-content/uploads/2023/06/Gynaecology-Drape-With-Pouch-380-500.jpg',
    specifications: {
      'Type': 'Gynecology Drape',
      'Features': 'With Pouch',
      'Sterilization': 'ETO'
    }
  },
  {
    id: 'hip-u-drape',
    name: 'Hip U Drape',
    category: 'drapes',
    description: 'U-shaped drape for hip procedures',
    image: 'https://varrada.com/wp-content/uploads/2023/06/HIP-U-Drape-570x570.jpg',
    specifications: {
      'Type': 'Hip Drape',
      'Shape': 'U-shaped',
      'Sterilization': 'ETO'
    }
  },

  // Gloves
  {
    id: 'latex-powder-free-gloves',
    name: 'Latex Powder Free Gloves',
    category: 'gloves',
    description: 'High-quality latex examination gloves, powder-free',
    image: 'https://varrada.com/wp-content/uploads/2023/06/latex-gloves.png',
    specifications: {
      'Material': 'Natural latex',
      'Powder': 'Powder-free',
      'Packaging': '100 pieces per box'
    }
  },
  {
    id: 'latex-powder-free-disposable-gloves',
    name: 'Latex Powder Free Disposable Gloves',
    category: 'gloves',
    description: 'Disposable latex gloves for medical examination',
    image: 'https://varrada.com/wp-content/uploads/2023/06/latex-disposable-pf-570x417.jpg',
    specifications: {
      'Material': 'Natural latex',
      'Type': 'Disposable',
      'Powder': 'Powder-free'
    }
  },
  {
    id: 'latex-powder-free-surgical-gloves',
    name: 'Latex Powder Free Surgical Gloves',
    category: 'gloves',
    description: 'Sterile latex gloves for surgical procedures',
    image: 'https://varrada.com/wp-content/uploads/2023/06/surgical-gloves1-570x417.jpg',
    specifications: {
      'Material': 'Natural latex',
      'Type': 'Surgical',
      'Sterilization': 'Gamma radiation'
    }
  },
  {
    id: 'latex-powdered-examination-gloves',
    name: 'Latex Powdered Examination Gloves',
    category: 'gloves',
    description: 'Powdered latex gloves for examination procedures',
    image: 'https://varrada.com/wp-content/uploads/2023/06/latex-powsered-gloves-570x416.jpg',
    specifications: {
      'Material': 'Natural latex',
      'Powder': 'Cornstarch powder',
      'Type': 'Examination'
    }
  },
  {
    id: 'nitrile-black-examination-gloves',
    name: 'Nitrile Black Examination Gloves',
    category: 'gloves',
    description: 'Black nitrile examination gloves for enhanced visibility',
    image: 'https://varrada.com/wp-content/uploads/2023/06/Nitrile-Black-570x417.jpg',
    specifications: {
      'Material': 'Nitrile',
      'Color': 'Black',
      'Type': 'Examination'
    }
  },
  {
    id: 'nitrile-blue-examination-gloves',
    name: 'Nitrile Blue Examination Gloves',
    category: 'gloves',
    description: 'Blue nitrile examination gloves for medical use',
    image: 'https://varrada.com/wp-content/uploads/2023/06/Nitrile-Blue-examination-gloves-570x456.jpg',
    specifications: {
      'Material': 'Nitrile',
      'Color': 'Blue',
      'Type': 'Examination'
    }
  },
  {
    id: 'nitrile-green-examination-gloves',
    name: 'Nitrile Green Examination Gloves',
    category: 'gloves',
    description: 'Green nitrile examination gloves for medical procedures',
    image: 'https://varrada.com/wp-content/uploads/2023/06/Nitrile-Green-570x417.jpg',
    specifications: {
      'Material': 'Nitrile',
      'Color': 'Green',
      'Type': 'Examination'
    }
  },
  {
    id: 'nitrile-velvet-examination-gloves',
    name: 'Nitrile Velvet Examination Gloves',
    category: 'gloves',
    description: 'Premium velvet-textured nitrile examination gloves',
    image: 'https://varrada.com/wp-content/uploads/2023/06/volet-gloves-570x417.jpg',
    specifications: {
      'Material': 'Nitrile',
      'Texture': 'Velvet finish',
      'Type': 'Examination'
    }
  },
  {
    id: 'vinyl-powder-free-examination-gloves',
    name: 'Vinyl Powder Free Examination Gloves',
    category: 'gloves',
    description: 'Cost-effective vinyl examination gloves',
    image: 'https://varrada.com/wp-content/uploads/2023/06/Vinyle-glove-2-570x417.jpg',
    specifications: {
      'Material': 'PVC',
      'Powder': 'Powder-free',
      'Type': 'Examination'
    }
  },
  {
    id: 'vinyl-powdered-examination-gloves',
    name: 'Vinyl Powdered Examination Gloves',
    category: 'gloves',
    description: 'Powdered vinyl gloves for basic examination',
    image: 'https://varrada.com/wp-content/uploads/2023/06/vinyle-glove-570x417.jpg',
    specifications: {
      'Material': 'PVC',
      'Powder': 'Cornstarch powder',
      'Type': 'Examination'
    }
  },

  // Uniforms
  {
    id: 'classic-surgical-gown',
    name: 'Classic Surgical Gown',
    category: 'uniforms',
    description: 'Traditional surgical gown for operating room use',
    image: 'https://varrada.com/wp-content/uploads/2023/06/UCSG101-male-surgical-gown-570x570.png',
    specifications: {
      'Material': 'SMS non-woven',
      'Type': 'Surgical gown',
      'Sterilization': 'ETO'
    }
  },
  {
    id: 'wraparound-surgical-gown',
    name: 'Wraparound Surgical Gown',
    category: 'uniforms',
    description: 'Wraparound style surgical gown for enhanced coverage',
    image: 'https://varrada.com/wp-content/uploads/2023/06/UCSG-102-570x570.png',
    specifications: {
      'Material': 'SMS non-woven',
      'Style': 'Wraparound',
      'Sterilization': 'ETO'
    }
  },
  {
    id: 'overlap-surgical-gown',
    name: 'Overlap Surgical Gown',
    category: 'uniforms',
    description: 'Overlap design surgical gown for secure fit',
    image: 'https://varrada.com/wp-content/uploads/2023/06/UCSG-overlap-surgical-gown-570x570.png',
    specifications: {
      'Material': 'SMS non-woven',
      'Style': 'Overlap design',
      'Sterilization': 'ETO'
    }
  },
  {
    id: 'front-barrier-surgical-gown',
    name: 'Front Barrier Surgical Gown',
    category: 'uniforms',
    description: 'Surgical gown with reinforced front barrier protection',
    image: 'https://varrada.com/wp-content/uploads/2023/06/UCSG104-Front-Barrier-surgical-gown-570x570.png',
    specifications: {
      'Material': 'SMS with barrier',
      'Features': 'Front barrier protection',
      'Sterilization': 'ETO'
    }
  },
  {
    id: 'surgical-apron',
    name: 'Surgical Apron',
    category: 'uniforms',
    description: 'Protective surgical apron for medical procedures',
    image: 'https://varrada.com/wp-content/uploads/2023/06/UCSG105-Apron-570x570.png',
    specifications: {
      'Material': 'Non-woven fabric',
      'Type': 'Surgical apron',
      'Features': 'Tie closure'
    }
  },
  {
    id: 'scrub-suits-v-neck-3-pocket',
    name: 'Scrub Suits V-Neck 3-Pocket',
    category: 'uniforms',
    description: 'Unisex scrub suit with V-neck and 3 pockets',
    image: 'https://varrada.com/wp-content/uploads/2023/06/UCSS101-525x570.png',
    specifications: {
      'Material': '65% Polyester, 35% Cotton',
      'Style': 'V-neck',
      'Pockets': '3 pockets'
    }
  },
  {
    id: 'scrub-suits-v-neck-2-pocket',
    name: 'Scrub Suits V-Neck 2-Pocket',
    category: 'uniforms',
    description: 'Unisex scrub suit with V-neck and 2 pockets',
    image: 'https://varrada.com/wp-content/uploads/2023/06/UCSS102-458x570.png',
    specifications: {
      'Material': '65% Polyester, 35% Cotton',
      'Style': 'V-neck',
      'Pockets': '2 pockets'
    }
  },
  {
    id: 'long-length-doctor-coat-male',
    name: 'Long Length Doctor Coat - Male',
    category: 'uniforms',
    description: 'Professional long-length doctor coat for men',
    image: 'https://varrada.com/wp-content/uploads/2023/06/doctor-570x570.png',
    specifications: {
      'Material': '100% Cotton',
      'Length': 'Long',
      'Gender': 'Male'
    }
  },
  {
    id: 'long-length-doctor-coat-female',
    name: 'Long Length Doctor Coat - Female',
    category: 'uniforms',
    description: 'Professional long-length doctor coat for women',
    image: 'https://varrada.com/wp-content/uploads/2023/06/UCLB102-female-long-doctor-coat-570x570.png',
    specifications: {
      'Material': '100% Cotton',
      'Length': 'Long',
      'Gender': 'Female'
    }
  },
  {
    id: 'consultation-doctor-jacket',
    name: 'Consultation Doctor Jacket',
    category: 'uniforms',
    description: 'Professional consultation jacket for doctors',
    image: 'https://varrada.com/wp-content/uploads/2023/06/UCLB107-consultation-doctor-jacket-530x570.png',
    specifications: {
      'Material': '100% Cotton',
      'Type': 'Consultation jacket',
      'Features': 'Professional design'
    }
  },

  // Devices
  {
    id: 'blood-pressure-monitor-dr-morepen',
    name: 'Blood Pressure Monitor - Dr. Morepen BP 02',
    category: 'devices',
    description: 'Digital blood pressure monitor for accurate readings',
    image: 'https://varrada.com/wp-content/uploads/2023/07/1-1-570x510.jpg',
    specifications: {
      'Brand': 'Dr. Morepen',
      'Model': 'BP 02',
      'Type': 'Digital BP Monitor'
    }
  },
  {
    id: 'pulse-oximeter-dr-morepen',
    name: 'Dr. Morepen PO 12A Pulse Oximeter',
    category: 'devices',
    description: 'Fingertip pulse oximeter for SpO2 and pulse rate monitoring',
    image: 'https://varrada.com/wp-content/uploads/2023/07/2-2-1-570x570.jpg',
    specifications: {
      'Brand': 'Dr. Morepen',
      'Model': 'PO 12A',
      'Type': 'Pulse Oximeter'
    }
  },
  {
    id: 'digital-infrared-thermometer',
    name: 'Digital Infrared Thermometer - Dr Trust USA',
    category: 'devices',
    description: 'Non-contact infrared thermometer for temperature measurement',
    image: 'https://varrada.com/wp-content/uploads/2023/07/1-1-1-394x570.jpg',
    specifications: {
      'Brand': 'Dr Trust USA',
      'Type': 'Infrared Thermometer',
      'Features': 'Non-contact'
    }
  },
  {
    id: 'glucometer-onetouch-select-plus',
    name: 'Glucometer OneTouch Select Plus',
    category: 'devices',
    description: 'Blood glucose monitoring system with strips and lancets',
    image: 'https://varrada.com/wp-content/uploads/2023/07/4-1-570x570.jpg',
    specifications: {
      'Brand': 'OneTouch',
      'Model': 'Select Plus',
      'Includes': '10 strips + 10 lancets'
    }
  },
  {
    id: 'glucometer-accu-chek-active',
    name: 'Glucometer Accu-Chek Active',
    category: 'devices',
    description: 'Reliable blood glucose meter with test strips',
    image: 'https://varrada.com/wp-content/uploads/2023/07/acccheck1-570x570.jpg',
    specifications: {
      'Brand': 'Accu-Chek',
      'Model': 'Active',
      'Includes': '10 test strips'
    }
  },
  {
    id: 'bp-monitor-omron-hem-7124',
    name: 'BP Monitor - Omron HEM-7124',
    category: 'devices',
    description: 'Automatic blood pressure monitor by Omron',
    image: 'https://varrada.com/wp-content/uploads/2023/07/2-1-570x390.jpg',
    specifications: {
      'Brand': 'Omron',
      'Model': 'HEM-7124',
      'Type': 'Automatic BP Monitor'
    }
  },
  {
    id: 'pulse-oximeter-jziki',
    name: 'Jziki JZK-305 Pulse Oximeter',
    category: 'devices',
    description: 'Portable fingertip pulse oximeter',
    image: 'https://varrada.com/wp-content/uploads/2023/07/3-3-2-570x422.jpg',
    specifications: {
      'Brand': 'Jziki',
      'Model': 'JZK-305',
      'Type': 'Fingertip Pulse Oximeter'
    }
  },
  {
    id: 'glucometer-dr-morepen-bg03',
    name: 'Glucometer Dr Morepen BG 03',
    category: 'devices',
    description: 'Blood glucose monitoring kit with 25 strips',
    image: 'https://varrada.com/wp-content/uploads/2023/07/glucometer-dr-morepen-570x545.jpg',
    specifications: {
      'Brand': 'Dr Morepen',
      'Model': 'BG 03',
      'Includes': '25 test strips'
    }
  },
  {
    id: 'glucometer-beato-curv',
    name: 'Glucometer Beato Curv Smartphone Connected',
    category: 'devices',
    description: 'Smart glucometer with smartphone connectivity',
    image: 'https://varrada.com/wp-content/uploads/2023/07/6-2-570x570.jpg',
    specifications: {
      'Brand': 'Beato',
      'Model': 'Curv',
      'Features': 'Smartphone connected, Type-C USB'
    }
  },
  {
    id: 'mini-glucometer-arkray',
    name: 'Mini Glucometer - Arkray Max Glucocard 01',
    category: 'devices',
    description: 'Compact black glucometer for blood glucose monitoring',
    image: 'https://varrada.com/wp-content/uploads/2023/07/3-2-570x570.jpg',
    specifications: {
      'Brand': 'Arkray',
      'Model': 'Max Glucocard 01',
      'Color': 'Black'
    }
  }
];