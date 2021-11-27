export const state = () => ({
  defect: {
    address: {},
    details: {},
  },
});

export const mutations = {
  setAddress(state, newAdd) {
    state.defect.address = newAdd;
  },

  setDetails(state, newDet) {
    state.defect.details = newDet;
  },
};
