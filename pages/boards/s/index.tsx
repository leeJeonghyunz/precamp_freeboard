import { Modal } from "antd";
import { useState } from "react";
import DaumPostcodeEmbed from "react-daum-postcode";
import type { Address } from "react-daum-postcode";

export default function ModalAlertPage(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleModal = (): void => {
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (data: Address): void => {
    console.log(data);
    setIsOpen((prev) => !prev);
    console.log(data.zonecode);
    console.log(data.address);
  };

  return (
    <>
      <button onClick={onToggleModal}>모달창 열기!</button>
      {/* 모달 종료 방식 - 1.모달 숨기는 방법 */}
      {/* <Modal
        title="모달 제목"
        open={isOpen}
        onOk={handleOK}
        onCancel={handleCancel}
      >
        <DaumPostcodeEmbed onComplete={handleComplete} />
      </Modal> */}

      {/* 모달 종료 방식 - 2.모달 삭제하는 방법 */}
      {isOpen && (
        <Modal
          title="모달 제목"
          open={isOpen}
          onOk={onToggleModal}
          onCancel={onToggleModal}
        >
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </Modal>
      )}
      {/* isopen이 되었을 때 새로 만듦 */}
    </>
  );
}
