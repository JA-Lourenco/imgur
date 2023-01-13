import { useEffect, useState, useMemo } from "react";
import api from "../../services/api";

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

import { useDispatch, useSelector } from "react-redux";
import { setImages } from "../../features/images/images-slice";

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
interface ResponseProps {
  data: ImagesProps[];
}

export const Home = () => {
  // const [images, setImages] = useState<ImagesProps[]>([]);
  const [section, setSection] = useState("hot");
  const [sort, setSort] = useState("viral");
  const [window, setWindow] = useState("day");
  const [isLoading, setIsLoading] = useState(true);

  const optForSections = ["hot", "top", "user"];
  const windowParams = ["day", "week", "month", "year", "all"];

  const dispatch = useDispatch();

  const images = useSelector((state) => state.images.images);
  console.log("images", images);

  const handleImages = (payload: any) => {
    dispatch(setImages(payload));
  };

  const sortParams = useMemo(() => {
    const sortOptions = ["viral", "top", "time"];

    if (section === "user") sortOptions.push("rising");

    return sortOptions;
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
      const resp = await api.get<ResponseProps>(
        `/gallery/${section}/${sort}/${window}`
      );

      const imagesTreated = setUpData(resp.data.data);

      console.log("imagesTreated", imagesTreated);

      handleImages(imagesTreated);
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
          options={sortParams}
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
