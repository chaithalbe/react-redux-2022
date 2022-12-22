import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
	name: "cars",
	initialState: {
		data: [],
		searchTerm: "",
	},
	reducers: {
		changeSearchTerm(state, action) {
			state.searchTerm = action.payload;
		},
		addCar(state, action) {
			// Assumption
			// action.payload = { name: 'abc', cost: 123 }
			state.data.push({
				name: action.payload.name,
				cost: action.payload.cost,
				id: nanoid(),
			});
		},
		removeCar(state, action) {
			// Assumption
			// action.payload = id of the car to be removed
			const updatedCars = state.data.filter((car) => {
				return car.id !== action.payload;
			});
			state.data = updatedCars;
		},
	},
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
