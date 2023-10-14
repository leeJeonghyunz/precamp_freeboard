declare const window: typeof globalThis & {
  IMP: any;
};

export const onClickPayment = (): void => {
  const script = document.createElement("script");
  script.src = "https://cdn.iamport.kr/v1/iamport.js";
  document.head.appendChild(script); // head에 script추가

  script.onload = () => {
    const IMP = window.IMP;
    IMP.init("imp76042107"); // 예: 'imp00000000a'

    IMP.request_pay(
      {
        // param
        pg: "kakaopay",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011",    // 귀찮으니 자동 생성
        name: "노르웨이 회전 의자",
        amount: 100,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/section28/28-01-payment", // 모바일에서는 결제 주소가 바뀜 결제 후 돌아올 페이지
      },
      (rsp: any) => {
        // callback
        if (rsp.success === true) {
          // 결제 성공 시 로직,
          console.log(rsp);

          // 백엔드에 결제관련 데이터 넘겨주기 => mutation 실행하기
          // createPointTransactionLoading
        } else {
          // 결제 실패 시 로직,
        }
      },
    );
  };
};
