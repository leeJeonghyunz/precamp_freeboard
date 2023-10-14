import PaymentPage from "../../../../src/components/commons/payment";
import CommentList from "../../../../src/components/units/boards/comments/list/BoardCommentList.container";
import CommentWrite from "../../../../src/components/units/boards/comments/write/BoardComment.container";
import ProductDetailBottom from "../../../../src/components/units/market/product/detail/body/ProductDetailBottom";
import ProductDetailTop from "../../../../src/components/units/market/product/detail/top/ProductDetailtop";

export default function ProductDetailPage(): JSX.Element {
  return (
    <>
      <ProductDetailTop />
      <ProductDetailBottom />
      <CommentWrite />
      <CommentList />
    </>
  );
}
