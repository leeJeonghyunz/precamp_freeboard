import { useApolloClient } from "@apollo/client";
import { USED_ITEM, useQueryFetchUsedItem } from "../hooks/queries/useQueryFetchUsedItem";
import * as S from "./styles";

interface IImageProps {
  id: string;
}

export default function Image01(props: IImageProps): JSX.Element {
  const id = props.id;
  const client = useApolloClient();

  const { data } = useQueryFetchUsedItem({ useditemId: id });

  const image = data?.fetchUseditem.images?.[0] ?? "";

  const prefetchBoard = (useditemId: string) => async () => {
    await client.query({
      query: USED_ITEM,
      variables: { useditemId },
    });
  };

  return (
    <>
      <div onMouseOver={prefetchBoard(props.id)}>
        {image && <S.Image src={`https://storage.googleapis.com/${image}`} />}
      </div>
    </>
  );
}
