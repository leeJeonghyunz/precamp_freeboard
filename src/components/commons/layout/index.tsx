import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutHeader from "./header/LayoutHeader.conatainor";
import LayoutNavigation from "./navigation/LayoutNavigation.container";

interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps): JSX.Element {
  return (
    <>
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: "70%" }}>{props.children}</div>
      </div>
    </>
  );
}