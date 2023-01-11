import { useEffect, useState } from "react";

import { ContainerTitle, PageTitle, Main, Grid } from "./styled";

import { ImageCard } from "../../components/ImageCard";

import api from "../../services/api";

interface ImagesArray {
  id: string;
  link: string;
  type: string;
}

interface ImagesProps {
  id: string;
  title: string;
  description: string;
  link: string;
  type: string;
  images?: ImagesArray[];
}
interface responseProps {
  data: ImagesProps[];
}

// useMemo com dependencias conforme parametros
// validar se tem extensão no primeiro atributo link, caso contrario utilizar o link do array de images
// se tiver o atributo array images, eu ja utilizo a validação para video

export const Home = () => {
  const [images, setImages] = useState<ImagesProps[]>([]);

  const setUpData = (response: Array<ImagesProps>) => {
    return response.map((item) => {
      const itemObject = {
        id: item.id,
        title: item.title,
        link: item.link,
        type: item.type,
        description: item.description,
      };

      if (item.images) {
        itemObject.link = item.images[0].link;
        itemObject.type = item.images[0].type;
      }

      return itemObject;
    });
  };

  const getGallery = async () => {
    try {
      const resp = await api.get<responseProps>("/gallery/top");

      console.log("RESP >>>>", resp.data.data);

      const imagesTreated = setUpData(resp.data.data);

      console.log("IMAGES TREATED", imagesTreated);

      setImages(imagesTreated);
    } catch (error) {
      console.log(`Error function: ${error}`);
    }
  };

  useEffect(() => {
    getGallery();
  }, []);

  return (
    <>
      <ContainerTitle>
        <PageTitle>IMGUR</PageTitle>
      </ContainerTitle>
      <Main>
        <Grid>
          {images.map((image) => {
            return (
              <ImageCard
                key={image.id}
                source={image.link}
                description={image.title}
                type={image.type}
              />
            );
          })}
        </Grid>
      </Main>
    </>
  );
};
