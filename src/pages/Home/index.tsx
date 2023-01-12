import { useEffect, useState, useMemo } from "react";

import {
  ContainerTitle,
  ContainerSelects,
  PageTitle,
  Main,
  Grid,
} from "./styled";

import { ImageCard } from "../../components/ImageCard";
import { Select } from "../../components/Select";
import { Loading } from "../../components/Loading";

import api from "../../services/api";

interface ImagesArray {
  id: string;
  link: string;
  type: string;
}

interface ImagesProps {
  id: string;
  title: string;
  link: string;
  type: string;
  description: string;
  images?: ImagesArray[];
}
interface responseProps {
  data: ImagesProps[];
}

export const Home = () => {
  const [images, setImages] = useState<ImagesProps[]>([]);
  const [section, setSection] = useState("hot");
  const [sort, setSort] = useState("viral");
  const [window, setWindow] = useState("day");
  const [isLoading, setIsLoading] = useState(true);

  const optForSections = ["hot", "top", "user"];
  const windowParams = ["day", "week", "month", "year", "all"];

  const sortOptions = useMemo(() => {
    const sortParams = ["viral", "top", "time"];

    if (section === "user") sortParams.push("rising");

    return sortParams;
  }, [section]);

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
      const resp = await api.get<responseProps>(
        `/gallery/${section}/${sort}/${window}`
      );

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
  }, [section, sort, window]);

  return (
    <>
      <ContainerTitle>
        <PageTitle>IMGUR</PageTitle>
      </ContainerTitle>
      <ContainerSelects>
        <Select
          value={section}
          options={optForSections}
          onChangeOptions={(value: string) => setSection(value)}
        />
        <Select
          value={sort}
          options={sortOptions}
          onChangeOptions={(value: string) => setSort(value)}
        />
        {section === "top" && (
          <Select
            value={window}
            options={windowParams}
            onChangeOptions={(value: string) => setWindow(value)}
          />
        )}
      </ContainerSelects>

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
