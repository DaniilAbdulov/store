import { Button, Card, Flex } from "antd";
import { PhotoLoadingHandler } from "./UI/PhotoLoadingHandler";
const { Meta } = Card;
export const MyCard = ({ data }) => {
  const { title, price, image } = data;

  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<PhotoLoadingHandler img={image} />}
    >
      <Flex vertical align="center">
        <Meta
          title={title}
          description={price}
          style={{ marginBottom: "10px" }}
        />
        <Button type="primary">В корзину</Button>
      </Flex>
    </Card>
  );
};
