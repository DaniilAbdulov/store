import { Spin } from "antd";
import { useImageLoader } from "../../hooks/useImageLoader";
export const PhotoLoadingHandler = ({ img }) => {
  const { imgIsLoading, hasError } = useImageLoader(img);
  return (
    <>
      {imgIsLoading ? (
        <img src={img} style={{ height: "200px" }} alt="Flower" />
      ) : hasError ? (
        <p>no photo</p>
      ) : (
        <Spin />
      )}
    </>
  );
};
