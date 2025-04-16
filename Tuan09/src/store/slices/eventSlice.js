import { createSlice } from '@reduxjs/toolkit';

const eventSlice = createSlice({
  name: 'events',
  initialState: {
    events: [],
    selectedEvent: null
  },
  reducers: {
    addEvent: (state, action) => {
      state.events.push({
        id: Date.now(),
        ...action.payload
      });
    },
    editEvent: (state, action) => {
      const index = state.events.findIndex(event => event.id === action.payload.id);
      if (index !== -1) {
        state.events[index] = action.payload;
      }
    },
    deleteEvent: (state, action) => {
      state.events = state.events.filter(event => event.id !== action.payload);
    },
    setSelectedEvent: (state, action) => {
      state.selectedEvent = action.payload;
    }
  }
});

export const { addEvent, editEvent, deleteEvent, setSelectedEvent } = eventSlice.actions;
export default eventSlice.reducer; 