import configureStore from "redux-mock-store";
import { getIsUserAuth, getUserId } from "./getUserData";

const mockStore = configureStore([]);
const initialState = {
  user: {
    isAuth: true,
    id: null,
  },
};

describe("getUserId selector", () => {
  test("Должно вернуть false при null", () => {
    const store = mockStore(initialState);
    const state = store.getState();

    const result = getUserId(state);

    expect(result).toBe("");
  });
});

describe("getIsUserAuth selector", () => {
  test("Должно вернуть true если пользователь авторизован", () => {
    const store = mockStore(initialState);
    const state = store.getState();

    const result = getIsUserAuth(state);

    expect(result).toBe(true);
  });

  test("Должно вернуть false если пользователь не авторизован", () => {
    const store = mockStore({
      user: {
        isAuth: false,
      },
    });
    const state = store.getState();

    const result = getIsUserAuth(state);

    expect(result).toBe(false);
  });

  test("Должно вернуть false если user undefined", () => {
    const store = mockStore({});
    const state = store.getState();

    const result = getIsUserAuth(state);

    expect(result).toBe(false);
  });
});
