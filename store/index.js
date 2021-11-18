export const state = () => ({
    defect: {address: 'Stanmer Drive, Eastbourne, United Kingdom', type: '', locNotes: '', addNotes: ''}
    
  })
  
  export const mutations = {
    setAddress(state, newAdd) {
      state.defect.address = newAdd
      
  },

  setType (state, newType) {
    state.defect.type = newType
  }
  
  
}  

