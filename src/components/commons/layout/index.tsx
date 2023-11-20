import { useRouter } from "next/router";
import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutHeader from "./header/LayoutHeader.conatainor";
import LayoutNavigation from "./navigation/LayoutNavigation.container";
import { useMediaQuery } from "react-responsive";

interface ILayoutProps {
  children: JSX.Element;
}
const HIDDEN_BODY = ["/main/"];

export default function Layout(props: ILayoutProps): JSX.Element {
  const router = useRouter();

  const isHiddenBody = HIDDEN_BODY.includes(router.asPath);

  const isMobile = useMediaQuery({
    query: "(max-width:800px)",
  });

  console.log(router.asPath);
  return (
    <>
      {!isHiddenBody ? (
        <>
          <LayoutHeader />
          <LayoutBanner />
          <LayoutNavigation />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: isMobile ? "90%" : "70%" }}>{props.children}</div>
          </div>
        </>
      ) : (
        props.children
      )}
    </>
  );
}
