export const state = () => ({
    defect: {address: 'Stanmer Drive, Eastbourne, United Kingdom', category: '', locNotes: '', addNotes: ''}
    
  })
  
  export const mutations = {
    setAddress(state, newAdd) {
      state.defect.address = newAdd
      
  },

  setCategory (state, newCat) {
    state.defect.category = newCat
  }
  
  
}  

