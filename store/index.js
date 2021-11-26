export const state = () => ({
  defect: {
    address: {},
  },
});

export const mutations = {
  setAddress(state, newAdd) {
    state.defect.address = newAdd;
  },

  setDefect(state, newDef) {
    state.defect = newDef;
  },
};
