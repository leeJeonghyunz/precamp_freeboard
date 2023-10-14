import { Carousel } from "antd";
import * as S from "./LayoutBanner.styles";

export default function LayoutBannerUI(): JSX.Element {
  return (
    <>
      <Carousel autoplay>
        <div>
          <S.SlideBanner src="/images/image 01.png" />
        </div>
        <div>
          <S.SlideBanner src="/images/image 02.png" />
        </div>
        <div>
          <S.SlideBanner src="/images/image 03.png" />
        </div>
        <div>
          <S.SlideBanner src="/images/image.png" />
        </div>
      </Carousel>
    </>
  );
}
