import BoardDetail from "../../../src/components/units/boards/detail/BoardDetail.container";
import CommentWrite from "../../../src/components/units/boards/comments/write/BoardComment.container";
import CommentList from "../../../src/components/units/boards/comments/list/BoardCommentList.container";

export default function Page (){


    return( 
        <>
            <BoardDetail />
            <CommentWrite />
            <CommentList />
        </>
    )

}