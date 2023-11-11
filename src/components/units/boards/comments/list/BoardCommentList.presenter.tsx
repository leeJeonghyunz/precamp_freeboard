import CommentListUIItem from "./BoardCommentList.presenteritem";
import type { ICommentListUIProps } from "./BoardCommentList.types";

export default function CommentListUI(props: ICommentListUIProps): JSX.Element {
  return (
    <div>
      {props.data?.fetchBoardComments.map((el) => (
        <CommentListUIItem data={props.data} key={el._id} el={el} />
      ))}
    </div>
  );
}
