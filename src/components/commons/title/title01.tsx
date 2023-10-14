interface ITitleProps {
  title: string;
}

export default function Title01(props: ITitleProps): JSX.Element {
  return (
    <>
      <div style={{ fontSize: "30px" }}>{props.title}</div>
    </>
  );
}
