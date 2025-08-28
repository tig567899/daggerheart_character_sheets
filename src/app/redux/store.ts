import { characterData } from '@dh_sheets/app/redux/character-data-store/reducer';
import { configureStore } from '@reduxjs/toolkit';

export const dataStore = configureStore({
    reducer: {
        characterData,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof dataStore.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof dataStore.dispatch;
