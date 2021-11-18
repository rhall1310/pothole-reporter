export const state = () => ({
    address: 'hello'
  })
  
  export const mutations = {
    setCounter(state, newAdd) {
      state.address = newAdd
  }
  
}  