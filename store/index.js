export const state = () => ({
    defect: {address: 'Stanmer Drive, Eastbourne, United Kingdom', categories: '', subCategory: '', locNotes: '', addNotes: ''}
    
  })
  
  export const mutations = {
    setAddress(state, newAdd) {
      state.defect.address = newAdd
      
  },

  setCategory (state, newCat) {
    state.defect.categories = newCat
  },
  setSubCat (state, newSubCat) {
    state.defect.subCategory = newSubCat
  }
  
  
}  

