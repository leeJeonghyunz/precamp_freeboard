import { useQueryFetchUsedItem } from "../hooks/queries/useQueryFetchUsedItem";
import * as S from "./styles";

interface IImageProps {
  id: string;
}

export default function Image01(props: IImageProps): JSX.Element {
  const id = props.id;

  const { data } = useQueryFetchUsedItem({ useditemId: id });

  const image = data?.fetchUseditem.images[0] ?? "";

  return (
    <>
      <div>
        {image && <S.Image src={`https://storage.googleapis.com/${image}`} />}
      </div>
    </>
  );
}
