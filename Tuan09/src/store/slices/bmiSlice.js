import { createSlice } from '@reduxjs/toolkit';

const bmiSlice = createSlice({
  name: 'bmi',
  initialState: {
    height: '',
    weight: '',
    result: null,
    category: ''
  },
  reducers: {
    updateInput: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    calculateBMI: (state) => {
      const height = parseFloat(state.height) / 100; // convert cm to m
      const weight = parseFloat(state.weight);
      
      if (height > 0 && weight > 0) {
        const bmi = weight / (height * height);
        state.result = bmi.toFixed(1);
        
        if (bmi < 18.5) state.category = 'Thiếu cân';
        else if (bmi < 24.9) state.category = 'Bình thường';
        else if (bmi < 29.9) state.category = 'Thừa cân';
        else state.category = 'Béo phì';
      }
    },
    resetBMI: (state) => {
      state.height = '';
      state.weight = '';
      state.result = null;
      state.category = '';
    }
  }
});

export const { updateInput, calculateBMI, resetBMI } = bmiSlice.actions;
export default bmiSlice.reducer; 