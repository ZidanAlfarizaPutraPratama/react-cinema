import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../App/store";

export interface LoadingState{
    isLoading: boolean;
}

const initialState: LoadingState = {
    isLoading: false
}

export const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        getLoading: (state, actions: PayloadAction<LoadingState>) => {
            state.isLoading = actions.payload.isLoading
        }
    }
});

export const { getLoading } = loadingSlice.actions;

export const selectLoading = (state: RootState) => state.loading;
export default loadingSlice.reducer;