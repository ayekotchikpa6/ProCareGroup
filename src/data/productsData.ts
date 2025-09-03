// Products data configuration
export interface Product {
  id: string;
  name: string;
  category: string;
  description?: string;
}

export interface ProductsData {
  categoryList: string[];
  categories: Record<string, Product[]>;
}

export const productsData: ProductsData = {
  categoryList: [
    'General Medicine',
    'Emergency Medicine', 
    'Pediatrics'
  ],
  categories: {
    'General Medicine': [
      { id: 'gm-1', name: 'Stethoscopes', category: 'General Medicine', description: 'High-quality diagnostic stethoscopes' },
      { id: 'gm-2', name: 'Spirometers', category: 'General Medicine', description: 'Pulmonary function testing devices' },
      { id: 'gm-3', name: 'Examination Tables', category: 'General Medicine', description: 'Adjustable patient examination tables' },
      { id: 'gm-4', name: 'Weighing platforms', category: 'General Medicine', description: 'Digital patient weighing scales' },
      { id: 'gm-5', name: 'Peak Flow Meters', category: 'General Medicine', description: 'Respiratory monitoring devices' },
      { id: 'gm-6', name: 'Examination Lights', category: 'General Medicine', description: 'LED examination lighting systems' },
      { id: 'gm-7', name: 'Otoscopes', category: 'General Medicine', description: 'Ear examination instruments' },
      { id: 'gm-8', name: 'Nebulizers', category: 'General Medicine', description: 'Respiratory therapy devices' },
      { id: 'gm-9', name: 'Doctor\'s Briefcases', category: 'General Medicine', description: 'Professional medical bags' },
      { id: 'gm-10', name: 'Direct', category: 'General Medicine', description: 'Direct examination tools' },
      { id: 'gm-11', name: 'Nebulization masks', category: 'General Medicine', description: 'Patient nebulization accessories' },
      { id: 'gm-12', name: 'Bags for medical devices', category: 'General Medicine', description: 'Storage and transport bags' },
      { id: 'gm-13', name: 'Ophthalmoscopes', category: 'General Medicine', description: 'Eye examination instruments' },
      { id: 'gm-14', name: 'Inhalers', category: 'General Medicine', description: 'Respiratory medication delivery' },
      { id: 'gm-15', name: 'Pen lamps', category: 'General Medicine', description: 'Portable examination lights' },
      { id: 'gm-16', name: 'Dermatoscopes', category: 'General Medicine', description: 'Skin examination devices' },
      { id: 'gm-17', name: 'Inhalation chambers', category: 'General Medicine', description: 'Medication delivery chambers' },
      { id: 'gm-18', name: 'Reflex Hammers', category: 'General Medicine', description: 'Neurological examination tools' },
      { id: 'gm-19', name: 'Pulse Oximeters', category: 'General Medicine', description: 'Oxygen saturation monitors' },
      { id: 'gm-20', name: 'Examination chairs', category: 'General Medicine', description: 'Patient positioning chairs' },
      { id: 'gm-21', name: 'Blood Pressure Monitors', category: 'General Medicine', description: 'Digital BP measurement devices' },
      { id: 'gm-22', name: 'Thermometers', category: 'General Medicine', description: 'Digital temperature measurement' },
      { id: 'gm-23', name: 'Medical Scales', category: 'General Medicine', description: 'Precision weighing equipment' },
      { id: 'gm-24', name: 'Diagnostic Sets', category: 'General Medicine', description: 'Complete examination tool sets' },
      { id: 'gm-25', name: 'Tuning Forks', category: 'General Medicine', description: 'Neurological assessment tools' }
    ],
    'Emergency Medicine': [
      { id: 'em-1', name: 'Defibrillators', category: 'Emergency Medicine', description: 'Automated external defibrillators' },
      { id: 'em-2', name: 'Emergency Ventilators', category: 'Emergency Medicine', description: 'Portable ventilation systems' },
      { id: 'em-3', name: 'Trauma Kits', category: 'Emergency Medicine', description: 'Complete emergency care kits' },
      { id: 'em-4', name: 'Cardiac Monitors', category: 'Emergency Medicine', description: 'Real-time heart monitoring' },
      { id: 'em-5', name: 'Emergency Stretchers', category: 'Emergency Medicine', description: 'Patient transport systems' },
      { id: 'em-6', name: 'Oxygen Concentrators', category: 'Emergency Medicine', description: 'Portable oxygen delivery' },
      { id: 'em-7', name: 'Emergency Lights', category: 'Emergency Medicine', description: 'Battery-powered examination lights' },
      { id: 'em-8', name: 'Suction Units', category: 'Emergency Medicine', description: 'Portable suction devices' },
      { id: 'em-9', name: 'Emergency Bags', category: 'Emergency Medicine', description: 'Pre-stocked emergency kits' },
      { id: 'em-10', name: 'Splinting Materials', category: 'Emergency Medicine', description: 'Fracture immobilization supplies' },
      { id: 'em-11', name: 'IV Stands', category: 'Emergency Medicine', description: 'Mobile intravenous support' },
      { id: 'em-12', name: 'Emergency Medications', category: 'Emergency Medicine', description: 'Critical care pharmaceuticals' },
      { id: 'em-13', name: 'Resuscitation Masks', category: 'Emergency Medicine', description: 'CPR and ventilation masks' },
      { id: 'em-14', name: 'Emergency Blankets', category: 'Emergency Medicine', description: 'Thermal regulation supplies' },
      { id: 'em-15', name: 'Tourniquets', category: 'Emergency Medicine', description: 'Bleeding control devices' },
      { id: 'em-16', name: 'Emergency Scissors', category: 'Emergency Medicine', description: 'Trauma shears and cutting tools' },
      { id: 'em-17', name: 'Cervical Collars', category: 'Emergency Medicine', description: 'Neck stabilization devices' },
      { id: 'em-18', name: 'Emergency Syringes', category: 'Emergency Medicine', description: 'Pre-filled emergency medications' },
      { id: 'em-19', name: 'Pulse Oximeters', category: 'Emergency Medicine', description: 'Portable oxygen monitoring' },
      { id: 'em-20', name: 'Emergency Radios', category: 'Emergency Medicine', description: 'Communication equipment' },
      { id: 'em-21', name: 'First Aid Supplies', category: 'Emergency Medicine', description: 'Basic emergency care items' }
    ],
    'Pediatrics': [
      { id: 'ped-1', name: 'Pediatric Stethoscopes', category: 'Pediatrics', description: 'Child-sized diagnostic tools' },
      { id: 'ped-2', name: 'Infant Scales', category: 'Pediatrics', description: 'Precision baby weighing systems' },
      { id: 'ped-3', name: 'Pediatric Examination Tables', category: 'Pediatrics', description: 'Child-friendly exam surfaces' },
      { id: 'ped-4', name: 'Growth Charts', category: 'Pediatrics', description: 'Development tracking tools' },
      { id: 'ped-5', name: 'Pediatric Thermometers', category: 'Pediatrics', description: 'Child-safe temperature measurement' },
      { id: 'ped-6', name: 'Infant Monitors', category: 'Pediatrics', description: 'Vital signs monitoring for babies' },
      { id: 'ped-7', name: 'Pediatric Otoscopes', category: 'Pediatrics', description: 'Child ear examination tools' },
      { id: 'ped-8', name: 'Baby Nebulizers', category: 'Pediatrics', description: 'Infant respiratory therapy' },
      { id: 'ped-9', name: 'Pediatric Masks', category: 'Pediatrics', description: 'Child-sized medical masks' },
      { id: 'ped-10', name: 'Infant Resuscitators', category: 'Pediatrics', description: 'Newborn emergency equipment' },
      { id: 'ped-11', name: 'Pediatric Wheelchairs', category: 'Pediatrics', description: 'Child mobility solutions' },
      { id: 'ped-12', name: 'Growth Measurement Tools', category: 'Pediatrics', description: 'Height and development tracking' },
      { id: 'ped-13', name: 'Pediatric Syringes', category: 'Pediatrics', description: 'Child-appropriate injection tools' },
      { id: 'ped-14', name: 'Baby Monitors', category: 'Pediatrics', description: 'Continuous infant monitoring' },
      { id: 'ped-15', name: 'Pediatric Beds', category: 'Pediatrics', description: 'Child-sized hospital beds' },
      { id: 'ped-16', name: 'Infant Warmers', category: 'Pediatrics', description: 'Temperature regulation for newborns' },
      { id: 'ped-17', name: 'Pediatric IV Equipment', category: 'Pediatrics', description: 'Child-appropriate IV systems' },
      { id: 'ped-18', name: 'Baby Scales', category: 'Pediatrics', description: 'Accurate infant weight measurement' },
      { id: 'ped-19', name: 'Pediatric Splints', category: 'Pediatrics', description: 'Child-sized immobilization devices' },
      { id: 'ped-20', name: 'Infant Ventilators', category: 'Pediatrics', description: 'Respiratory support for babies' },
      { id: 'ped-21', name: 'Pediatric Diagnostic Kits', category: 'Pediatrics', description: 'Complete child examination sets' }
    ]
  }
};