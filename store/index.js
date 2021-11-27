export const state = () => ({
  defect: {
    mapAddress: {},
  },
});

export const mutations = {
  setAddress(state, newAdd) {
    state.defect.mapAddress = newAdd;
  },

  setDefect(state, newDef) {
    state.defect = newDef;
  },
};
