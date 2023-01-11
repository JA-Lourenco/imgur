import { useEffect, useState } from "react";

import { ContainerTitle, PageTitle, Main, Grid } from "./styled";

import { ImageCard } from "../../components/ImageCard";

import api from "../../services/api";
import { Loading } from "../../components/Loading";

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
  const [section, setSection] = useState("hot");
  const [isLoading, setIsLoading] = useState(true);

  const Select = () => {
    const sections = ["hot", "top", "user"];

    return (
      <select
        value={section}
        onChange={(event) => setSection(event.target.value)}
      >
        {sections.map((sec) => {
          return <option>{sec}</option>;
        })}
      </select>
    );
  };

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
    setIsLoading(true);
    try {
      const resp = await api.get<responseProps>(`/gallery/${section}`);

      const imagesTreated = setUpData(resp.data.data);

      setImages(imagesTreated);
    } catch (error) {
      console.log(`Error getGallery function: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getGallery();
  }, [section]);

  return (
    <>
      <ContainerTitle>
        <PageTitle>IMGUR</PageTitle>
        <Select />
      </ContainerTitle>
      <Main>
        {isLoading ? (
          <Loading />
        ) : (
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
        )}
      </Main>
    </>
  );
};
