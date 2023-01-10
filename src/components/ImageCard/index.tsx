import { ImgContainer, Image, Video, DescBox, Description } from "./styled";

interface ImageCardProps {
  source: string;
  description: string;
}

export const ImageCard = ({ source, description }: ImageCardProps) => {
  if (description.length > 20) {
    description = `${description.substring(0, 20)}...`;
  }
  // source = "https://i.imgur.com/XEjZwlJ.jpg";

  const ImageOrVideo = () => {
    if (source.includes(".mp4")) {
      return (
        <Video muted autoPlay loop>
          <source src={source} type="video/mp4" />
        </Video>
      );
    }
    return <Image src={source} />;
  };

  return (
    <ImgContainer>
      <ImageOrVideo />
      <DescBox>
        <Description>{description}</Description>
      </DescBox>
    </ImgContainer>
  );
};
