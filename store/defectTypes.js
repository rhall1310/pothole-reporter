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
           
        },
    ]
  })