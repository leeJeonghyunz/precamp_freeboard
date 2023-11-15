import { useQuery } from "@apollo/client";
import { FETCH_USER_LOGGED_IN } from "../../src/components/units/main/Main.queries";
import { IMutation, IQuery } from "../../src/commons/types/generated/types";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function AAA(): JSX.Element {
  const { data } = useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  const router = useRouter();
  console.log(data);

  const aa = () => {
    router.reload();
  };

  return (
    <>
      {data?.fetchUserLoggedIn.name}
      <button onClick={aa}></button>
    </>
  );
}
