import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { loginThunk, logoutThunk, refreshThunk, registerThunk } from './operations'

const initialState = {
    user: {
        name: '',
        email: '',
    },
    token: null,
    loading: false,
    error: false,
    isLoggedIn: false,
    isRefresh: false,
}

const slice = createSlice({
    name: 'auth',
    initialState,
    selectors: {
        selectUser: state => state.user,
        selectIsLoggedIn: state => state.isLoggedIn,
        selectToken: state => state.isLoggedIn,
        selectIsRefresh: state => state.isRefresh,
    },


    extraReducers: builder => {
        builder
        //     .addCase(registerThunk.fulfilled, (state, { payload }) => {
        //     state.user.name = payload.user.name
        //     state.user.email = payload.user.email
        //     state.token = payload.token
        //     state.isLoggedIn = true
        // })
        //     .addCase(loginThunk.fulfilled, (state, { payload }) => {
        //     state.user.name = payload.user.name
        //     state.user.email = payload.user.email
        //     state.token = payload.token
        //     state.isLoggedIn = true
        //     })
            .addCase(logoutThunk.fulfilled, state => {
            return initialState
            })
            .addCase(refreshThunk.fulfilled, (state, { payload }) => {
            state.user.name = payload.name
            state.user.email = payload.email
            state.isLoggedIn = true
            state.isRefresh = false
            })
            .addCase(refreshThunk.pending, (state) => {
            state.isRefresh = true
            })
            .addCase(refreshThunk.rejected, state => {
				state.isRefresh = false
            })
            .addMatcher(isAnyOf(registerThunk.fulfilled, loginThunk.fulfilled), (state, { payload }) => {
            state.user.name = payload.user.name
            state.user.email = payload.user.email
            state.token = payload.token
            state.isLoggedIn = true
            })
            
    },
})

export const authReducer = slice.reducer

export const { selectIsLoggedIn, selectUser, selectToken, selectIsRefresh } = slice.selectors






// import { createSlice } from '@reduxjs/toolkit';
// import { loginThunk, logoutThunk, refreshThunk, registerThunk } from './operations';

// const initialState = {
//     user: {
//         name: '',
//         email: '',
//     },
//     token: null,
//     loading: false,
//     error: false,
//     isLoggedIn: false,
//     isRefresh: false,
// };

// const slice = createSlice({
//     name: 'auth',
//     initialState,
//     selectors: {
//         selectUser: state => state.user,
//         selectIsLoggedIn: state => state.isLoggedIn,
//         selectToken: state => state.isLoggedIn,
//         selectIsRefresh: state => state.isRefresh,
//     },

//     extraReducers: builder => {
//         builder
//             .addCase(registerThunk.fulfilled, (state, { payload }) => {
//                 state.user.name = payload.user.name;
//                 state.user.email = payload.user.email;
//                 state.token = payload.token;
//                 state.isLoggedIn = true;
//             })
//             .addCase(loginThunk.fulfilled, (state, { payload }) => {
//                 state.user.name = payload.user.name;
//                 state.user.email = payload.user.email;
//                 state.token = payload.token;
//                 state.isLoggedIn = true;
//             })
//             .addCase(logoutThunk.fulfilled, state => {
//                 return initialState;
//             })
//             .addCase(refreshThunk.fulfilled, (state, { payload }) => {
//                 state.user.name = payload.name;
//                 state.user.email = payload.email;
//                 state.isLoggedIn = true;
//                 state.isRefresh = false;
//             })
//             .addCase(refreshThunk.pending, (state, action) => {
//                 // Set isRefresh only for the specific refreshThunk action
//                 if (action.meta.arg === 'refresh') {
//                     state.isRefresh = true;
//                 }
//             });
//     },
// });

// export const authReducer = slice.reducer;

// export const { selectIsLoggedIn, selectUser, selectToken, selectIsRefresh } = slice.selectors;