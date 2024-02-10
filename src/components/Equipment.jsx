import { Flex } from "antd";
import { MyCard } from "./MyCard";

export const Equipment = () => {
  const equipments = [
    {
      id: 1,
      title: "Стойка для приседаний",
      price: 17000,
      image: "https://bryansk.jtraining.ru/images/product/86-800.jpg",
    },
    {
      id: 2,
      title: "Скамья для жима",
      price: 12000,
      image:
        "https://barfits.ru/upload/iblock/cc8/ntojt7zne83tb85uhf5z63i1xw982lpo/img_8836_1.jpg",
    },
    {
      id: 3,
      title: "Разгибание ног",
      price: 30000,
      image:
        "https://cdn.shopify.com/s/files/1/1368/0169/products/GLCE365_0004_Cut_8ace9fd1-5a6b-48cb-a5bb-c97977ea178d_2500x.png?v=1582753861",
    },
    {
      id: 4,
      title: "Сгибание ног",
      price: 25000,
      image:
        "https://cdn.shopify.com/s/files/1/2137/4043/products/Body-SolidPowerlinePLCE165XLegExtension_CurlMachineTopFrontView.jpg",
    },
    {
      id: 5,
      title: "Скамья Скотта",
      price: 10000,
      image:
        "https://spb.sportgoroda.ru/image/cache/catalog/import_yml/402/53/05a7ef76b918854dbf117d0331ba34fc-1200x1200.jpg",
    },
  ];
  return (
    <Flex
      wrap="wrap"
      align="center"
      justify="center"
      gap="small"
      style={{ padding: "30px" }}
    >
      {equipments.map((e) => {
        return <MyCard key={e.id} data={e} />;
      })}
    </Flex>
  );
};
