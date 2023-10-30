import { FormEvent } from "react";

export const wrapAsync =
  <E>(비동기함수: (event: E) => Promise<void>) =>
  (event: E) => {
    void 비동기함수(event);
  };

export const wrapFormAsync =
  (비동기함수: () => Promise<void>) => (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void 비동기함수();
  };
