const express = require('express')
const router = express.Router()

const conversion_chart = {
    'conversions': 
    [{
        'type': 'oz',
        'desc': 'ounce',
        'conversion': '28.3495',
        'conversion_type': 'g',
        'conversion_desc': 'gram'
    },
    {
        'type': 'fl_oz',
        'desc': 'fluid ounce',
        'conversion': '29.5735',
        'conversion_type': 'ml',
        'conversion_desc': 'milliliter'
    },
    {
        'type': 'c',
        'desc': 'cup',
        'conversion': '237',
        'conversion_type': 'ml',
        'conversion_desc': 'milliliter'
    },
    {
        'type': 'pt',
        'desc': 'pint',
        'conversion': '473',
        'conversion_type': 'ml',
        'conversion_desc': 'milliliter'
    },
    {
        'type': 'qt',
        'desc': 'quart',
        'conversion': '946',
        'conversion_type': 'ml',
        'conversion_desc': 'milliliter'
    },
    {
        'type': 'gal',
        'desc': 'gallon',
        'conversion': '3.8',
        'conversion_type': 'l',
        'conversion_desc': 'liters'
    },
    {
        'type': 'tsp',
        'desc': 'teaspoon',
        'conversion': '5',
        'conversion_type': 'ml',
        'conversion_desc': 'milliliter'
    },
    {
        'type': 'tbsp',
        'desc': 'tablespoon',
        'conversion': '15',
        'conversion_type': 'ml',
        'conversion_desc': 'milliliter'
    },
    {
        'type': 'mg',
        'desc': 'milligram',
        'conversion': '0.0154',
        'conversion_type': 'gr',
        'conversion_desc': 'grain'
    },
    {
        'type': 'lb',
        'desc': 'pound',
        'conversion': '0.453592',
        'conversion_type': 'kg',
        'conversion_desc': 'kilogram'
    },
    {
        'type': 'g',
        'desc': 'gram',
        'conversion': '0.0353',
        'conversion_type': 'oz',
        'conversion_desc': 'ounce'
    },
    {
        'type': 'kg',
        'desc': 'kilogram',
        'conversion': '2.046',
        'conversion_type': 'lb',
        'conversion_desc': 'pound'
    }
]}

router.post('/', (req, res) => { 
    const data = req.body
    let result = []

    for (let i = 0; i < data.length; i++) {
        const conversion = Object.keys(conversion_chart.conversions).find(c => conversion_chart.conversions[c].type === data[i].unit_type)
        let conversionType = conversion_chart.conversions[conversion].conversion_type
        let conversionRate = conversion_chart.conversions[conversion].conversion
        let convertedAmount = Math.round(((parseFloat(data[i].unit_quantity) * parseFloat(conversionRate)) + Number.EPSILON) * 1000) / 1000
        
        result[i] = {
            converted_type: conversionType,
            converted_quantity: convertedAmount,
            source: data[i].source
        }
    }

    res.json(result)
})

module.exports = router