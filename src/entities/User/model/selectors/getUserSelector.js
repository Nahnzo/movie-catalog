export const getIsAuthUser = (state) => state.user.isAuth ?? false;
export const getErrorUser = (state) => state.user.error ?? "";
export const getIsLoadingUser = (state) => state.user.loading ?? false;
