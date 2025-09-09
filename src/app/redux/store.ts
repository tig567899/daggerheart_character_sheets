import { configureStore } from "@reduxjs/toolkit";

import { characterData } from "@dh_sheets/app/redux/character-data-store/reducer";
import { saveData } from "@dh_sheets/app/redux/middleware";

export const dataStore = configureStore({
    reducer: {
        characterData,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat([saveData]),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof dataStore.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof dataStore.dispatch;
