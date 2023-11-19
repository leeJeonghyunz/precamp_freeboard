interface MypageSidebarEdit {
  image: string[];
  onChangeImage: (image1: string, index: number) => void;
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickEdit: () => Promise<void>
}
