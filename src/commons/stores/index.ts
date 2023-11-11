import { atom, selector } from "recoil";
import { getAccessToken } from "../libraries/getAccessToken";

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const accessTokenUserName = atom({
  key: "accessTokenUserName",
  default: "",
});

export const isLoginState = atom({
  key: "isLoginState",
  default: false,
});

export const isEditState = atom({
  key: "isEditState",
  default: false,
});

export const visitedPageState = atom({
  key: "visitedPageState",
  default: "",
});

export const watchedItemsState = atom({
  key: "watchedItems",
  default: "",
});

export const restoreAccessTokenLoadable = selector({
  key: "restoreAccessTokenLoadable",
  get: async () => {
    const newAccessToken = await getAccessToken();
    return newAccessToken;
  },
});
