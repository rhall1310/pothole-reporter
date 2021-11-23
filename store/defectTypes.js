export const state = () => ({
    categories: [
        {
            category: 'footways',
            text: 'Footways',
            link: 'footways',
            subCategories:[
                {
                category: 'pothole',
                text: 'Pothole',
                link: 'footways/pothole',
                },
                {
                category: 'other',
                text: 'Other Footway Issue',
                link: 'footways/other',
                
                }
                         ]
        },
         {
            category: 'roads',
            text: 'Roads',
            link: 'roads',
            subCategories:[
                {
                category: 'pothole',
                text: 'Pothole',
                link: 'footways/pothole',
                },
                {
                    category: 'damage',
                    text: 'General road damage',
                    link: 'roads/damage',
                    
                },
                {
                category: 'other',
                text: 'Other Road Issue',
                link: 'roads/other',
                
                }
                         ]
           
        },
        {
            category: 'drainage',
            text: 'Drainage',
            link: 'drainage',
            subCategories:[
                {
                category: 'blocked',
                text: 'Blocked drain',
                link: 'drainage/blocked',
                },
                {
                category: 'other',
                text: 'Other Drainage Issue',
                link: 'drainage/other',
                
                }
                         ]
           
        },
    ]
  })