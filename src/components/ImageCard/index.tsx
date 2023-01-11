import { Loading } from "../Loading";
import { ImgContainer, A, Image, Video, DescBox, Description } from "./styled";

interface ImageCardProps {
  source: string;
  description: string;
  type?: string;
  isLoading?: boolean;
}

export const ImageCard = ({
  source,
  description,
  type,
  isLoading,
}: ImageCardProps) => {
  if (description.length > 20) {
    description = `${description.substring(0, 20)}...`;
  }
  // source = "https://i.imgur.com/XEjZwlJ.jpg";

  const ImageOrVideo = () => {
    if (source.includes(".mp4")) {
      return (
        <Video muted autoPlay loop>
          <source src={source} type={type} />
        </Video>
      );
    }
    return <Image src={source} />;
  };

  return (
    <ImgContainer>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <A href={source} target="_blank">
            <ImageOrVideo />
          </A>
          <DescBox>
            <Description>{description}</Description>
          </DescBox>
        </>
      )}
    </ImgContainer>
  );
};
