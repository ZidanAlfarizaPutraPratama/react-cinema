import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../App/store";

export interface UserState {
    username: string;
    name: string;
    img_url: string;
    access_token: string;
    level: string
}

const initialState: UserState = {
    username: "",
    name: "",
    img_url: "",
    access_token: "Check Ada Token Lur",
    level: ""
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getUser: (state, actions: PayloadAction<UserState>) => {
            state.username = actions.payload.username,
            state.name = actions.payload.name,
            state.img_url = actions.payload.img_url,
            state.access_token = actions.payload.access_token,
            state.level = actions.payload.level
        }
    }
});

export const { getUser } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;
export default userSlice.reducer;