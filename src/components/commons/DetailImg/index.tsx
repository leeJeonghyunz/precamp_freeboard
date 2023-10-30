import { useApolloClient } from "@apollo/client";
import {
  USED_ITEM,
  useQueryFetchUsedItem,
} from "../hooks/queries/useQueryFetchUsedItem";
import * as S from "./styles";

interface IImageProps {
  id: string;
}

export default function Image01(props: IImageProps): JSX.Element {
  const id = props.id;
  const client = useApolloClient();

  const { data } = useQueryFetchUsedItem({ useditemId: id });

  const image = data?.fetchUseditem.images[0] ?? "";

  const prefetchBoard = (useditemId: string) => async () => {
    const result = await client.query({
      query: USED_ITEM,
      variables: { useditemId },
    });
    console.log(useditemId);
    console.log(result);
  };

  return (
    <>
      <div onMouseOver={prefetchBoard(props.id)}>
        {image && <S.Image src={`https://storage.googleapis.com/${image}`} />}
      </div>
    </>
  );
}
