import {
  DELETE_BOARD,
  DISLIKE_BOARD,
  FETCH_BOARD,
  LIKE_BOARD,
} from "./BoardDetail.queries";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import BoardDetailUI from "./BoardDetail.presenter";
import type {
  IMutation,
  IMutationDeleteBoardArgs,
  IMutationDislikeBoardArgs,
  IMutationLikeBoardArgs,
} from "../../../../commons/types/generated/types";

export default function BoardDetail(): JSX.Element {
  const router = useRouter();

  const { data, refetch } = useQuery(FETCH_BOARD, {
    variables: { _id: String(router.query.number) },
  });

  console.log(data);

  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);

  const [dislikeBoard] = useMutation<
    Pick<IMutation, "dislikeBoard">,
    IMutationDislikeBoardArgs
  >(DISLIKE_BOARD);

  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);

  const onClickMoveList = (): void => {
    void router.push("list");
  };

  const onClickMoveEdit = (): void => {
    void router.push(`${String(router.query.number)}/edit`);
  };

  const onClickLike = async (): Promise<void> => {
    await likeBoard({
      variables: {
        boardId: String(router.query.number),
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { _id: router.query.number },
        },
      ],
    });
  };

  const onClickDisLike = async (): Promise<void> => {
    await dislikeBoard({
      variables: {
        boardId: String(router.query.number),
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { _id: router.query.number },
        },
      ],
    });
  };

  const onClickDelete = async (): Promise<void> => {
    await deleteBoard({
      variables: {
        boardId: String(router.query.number),
      },
    });
    void router.push("/boards/list");
  };

  void refetch();

  return (
    <BoardDetailUI
      data={data}
      onClickMoveList={onClickMoveList}
      onClickMoveEdit={onClickMoveEdit}
      onClickLike={onClickLike}
      onClickDisLike={onClickDisLike}
      onClickDelete={onClickDelete}
    />
  );
}
