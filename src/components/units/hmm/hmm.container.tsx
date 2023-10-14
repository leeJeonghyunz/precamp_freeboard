import { useEffect, useState } from "react";
import axios from "axios";
import HmmUI from "./hmm.presenter";

export default function Hmm(): JSX.Element {
  const [dog, setDog] = useState();

  const dogPicture = async (): Promise<void> => {
    const result = await axios.get("https://dog.ceo/api/breeds/image/random");
    setDog(result.data.message);
  };

  useEffect(() => {
    const onClickSync = async (): Promise<void> => {
      await dogPicture();
    };
    void onClickSync();
  }, []);

  const onClickReload = async (): Promise<void> => {
    await dogPicture();
  };

  return <HmmUI dog={dog} onClickReload={onClickReload} />;
}
