import type { IFirebaseWriteUIProps } from "./MyfirebaseWrite.types";

export default function FirebaseWriteUI(
  props: IFirebaseWriteUIProps,
): JSX.Element {
  return (
    <>
      <div wrapper>
        <div>
          작성자: <input onChange={props.onChangeWriter} />
        </div>
        <div>
          제목: <input onChange={props.onChangeTitle} />
        </div>
        <div>
          내용: <input onChange={props.onChangeContents} />
        </div>
        <div>
          <button onClick={props.onClickSubmit}>등록하기</button>
        </div>
      </div>
    </>
  );
}
