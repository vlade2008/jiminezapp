const predictive_medication = [
  {
    selectmedicine: 'Amoxicillin 100mg /1 ml',
    dispense: 1,
    form_unit: 'Bottle',
    sig: 'ml 3x a day x 7 days (6am-1pm-8pm)'
  },
  {
    selectmedicine: 'Amoxicillin 250mg/5 ml',
    form_unit: 'Bottle',
    dispense: 1,
    sig: 'ml 3x a day x 7 days (6am-1pm-8pm)'
  },
  {
    selectmedicine: 'Co-Amoxiclav 457mg/5 ml',
    form_unit: 'Bottle',
    dispense: 1,
    sig: 'ml 2x a day x 7 days (7am-7pm)'
  },
  {
    selectmedicine: 'Cefixime 20mg/1 ml',
    form_unit: 'Bottle',
    dispense: 1,
    sig: 'ml 2x a day x 7 days  (7am-7pm)'
  },
  {
    selectmedicine: 'Cefixime 100mg/5ml',
    form_unit: 'Bottle',
    dispense: 1,
    sig: 'ml 2x a day x 7 days  (7am-7pm)'
  },
  {
    selectmedicine: 'Cefuroxime 250mg/5ml',
    form_unit: 'Bottle',
    dispense: 1,
    sig: 'ml 2x a day x 7 days  (7am-7pm)'
  },
  {
    selectmedicine: 'Cefuroxime 500mg',
    form_unit: 'Caps',
    dispense: 1,
    take: '1',
    sig: 'cap 2x a day x 7 days  (7am-7pm)'
  },
  {
    selectmedicine: 'Sultamicillin tosylate 750mg/tab',
    brandname: 'Silgram',
    form_unit: 'Tablet',
    dispense: 14,
    take: '1',
    sig: '1 tab 2x a day x 7 days   (7am-7pm'
  },
  {
    selectmedicine: 'Clarithromycin 250mg/5ml',
    form_unit: 'Bottle',
    dispense: 1,
    sig: 'ml 2x a day x 7 days  (7am-7pm)'
  },
  {
    selectmedicine: 'Azithromycin 200mg/5ml',
    form_unit: 'Bottle',
    dispense: 1,
    sig: 'ml 1x a day  x 7 days  (8 pm)'
  },
  {
    selectmedicine: 'Salbutamol 2mg/5 ml',
    form_unit: 'Bottle',
    dispense: 1,
    sig: 'ml 3x a day x 5 days (6am-1pm-8pm)'
  },
  {
    selectmedicine: 'Salbutamol 2mg/tab',
    form_unit: 'Tablet',
    dispense: 15,
    take: 1,
    sig: 'tab 3x a day x 5 days  (6am-1pm-8pm)'
  },
  {
    selectmedicine: 'Procaterol 25 ug/5 ml',
    form_unit: 'Bottle',
    dispense: 1,
    sig: 'ml 2x a day x 7 days   (7am-7pm)'
  },
  {
    selectmedicine: 'Procaterol 25 ug/5 ml',
    form_unit: 'Bottle',
    dispense: 1,
    sig: 'ml 2x a day x 7 days   (7am-7pm)'
  },
  {
    selectmedicine: 'Procaterol 25ug/tab',
    form_unit: 'Tablet',
    take: 1,
    dispense: 14,
    sig: 'tab 2x a day x 7 days   (7am-7pm)'
  },
  {
    selectmedicine: 'Procaterol 50ug/tab',
    form_unit: 'Tablet',
    take: 1,
    dispense: 14,
    sig: 'tab 2x a day x 7 days   (7am-7pm)'
  },
  {
    selectmedicine: 'N-Acetylcisteine 100mg/5 ml',
    form_unit: 'Bottle',
    dispense: 1,
    sig: 'ml 2x a day x 5 days   (7am-7pm)'
  },
  {
    selectmedicine: 'N-Acetylcysteine 200mg/sachet',
    form_unit: 'Satchets',
    dispense: 14,
    take:1,
    sig: 'sachet plus 10 ml water x 5 days   (7am-7pm)'
  },
  {
    selectmedicine: 'N-Acetylcysteine 600mg/tab',
    form_unit: 'Tablet',
    dispense: 5,
    take:1,
    sig: 'tab plus 1 oz water 1x a day x 5 days  (8pm)'
  },
  {
    selectmedicine: 'Multivitamins plus buclizine syrup',
    brandname:'Biotermin',
    form_unit: 'Bottle',
    dispense: 1,
    sig: 'ml once a day x 2 mos   (8pm)'
  },
  {
    selectmedicine: 'Multivitamins Drops',
    form_unit: 'Bottle',
    dispense: 1,
    sig: 'ml once a day   (8pm)'
  },
  {
    selectmedicine: 'Multivitamins Syrup',
    form_unit: 'Bottle',
    dispense: 1,
    sig: 'ml 1x a day  (8pm)'
  },
  {
    selectmedicine: 'Montelukast 4 mg',
    form_unit: 'Tablet',
    take: 1,
    sig: 'tab 1x a day   (8pm)'
  },
  {
    selectmedicine: 'Montelukast 5 mg',
    form_unit: 'Tablet',
    take: 1,
    sig: 'tab 1x a day   (8pm)'
  },
  {
    selectmedicine: 'Montelukast 10 mg',
    form_unit: 'Tablet',
    unitofmeasure: 'tab',
    take: 1,
    sig: 'tab 1x a day   (8pm)'
  },
  {
    selectmedicine: 'Vit. C syrup',
    form_unit: 'Bottle',
    sig: 'ml once a day   (8pm)'
  },
  {
    selectmedicine: 'Vit, C Drops',
    form_unit: 'Bottle',
    dispense: 1,
    sig: 'ml once a day (8pm)'
  },
  {
    selectmedicine: 'FeSO4 Drops',
    form_unit: 'Bottle',
    dispense: 1,
    sig: 'ml once a day   (8 pm)'
  },
  {
    selectmedicine: 'Cetirizine 2.75mg/ml',
    form_unit: 'Bottle',
    dispense: 1,
    sig: 'ml ____ (1x or 2x  a day) x 1 week (8pm or 7am -7pm)'
  },
  {
    selectmedicine: 'Cetirizine 5mg/5 ml',
    form_unit: 'Bottle',
    dispense: 1,
    sig: 'ml ____ (1x or 2x  a day) x 1 week (8pm or 7am -7pm)'
  },
  {
    selectmedicine: 'Paracetamol 100 mg/ml',
    form_unit: 'Bottle',
    dispense: 1,
    sig: 'ml every 4 hours if temp ≥ 38'
  },
  {
    selectmedicine: 'Paracetamol 120 mg/5 ml',
    form_unit: 'Bottle',
    dispense: 1,
    sig: 'ml every 4 hours if temp ≥ 38'
  },
  {
    selectmedicine: 'Paracetamol 250 mg/5 ml',
    form_unit: 'Bottle',
    dispense: 1,
    sig: 'ml every 4 hours if temp ≥ 38'
  },
  {
    selectmedicine: 'Paracetamol 500 mg',
    form_unit: 'Tablet',
    take: 1,
    sig: 'tablet  every 4 hours if temp ≥ 38'
  },
  {
    selectmedicine: 'Doxofylline  100mg/5 ml',
    form_unit: 'Bottle',
    dispense: 1,
    sig: 'ml 2x a day x 1 week  (7am -7pm)'
  },

]

const unit_measure = [
  'L',
  'cc',
  'mL',
  'tab',
  'sachet',
  'Tbsp',
  'tsp',
  'fl oz',
  'pt',
  'gal',
  'mcg',
  'mg',
  'gm',
  'kg',
  'oz',
  'lbs',
]

const form_unitOptions = [
  'Tablet',
  'Sachets',
  'Bottle',
  'Caps',
]

export {
  unit_measure,
  form_unitOptions,
  predictive_medication,
}
