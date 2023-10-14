import { FormEvent } from "react";

export const wrapAsync = (비동기함수: () => Promise<void>) => () => {
  void 비동기함수();
};

export const wrapFormAsync =
  (비동기함수: () => Promise<void>) => (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void 비동기함수();
  };
