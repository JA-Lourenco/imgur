import { useEffect, useState, useMemo } from "react";
import api from "../../services/api";

import {
  ContainerTitle,
  ContainerSelects,
  PageTitle,
  Main,
  Grid,
  Button,
} from "./styled";

import { ImageCard } from "../../components/ImageCard";
import { Select } from "../../components/Select";
import { Loading } from "../../components/Loading";

import { useDispatch, useSelector } from "react-redux";
import { setImages } from "../../features/images/images-slice";
import { setLoading } from "../../features/loading/loading-slice";

import { ImagesProps, ImagesState } from "../../features/images/images-slice";
import { LoadingProps } from "../../features/loading/loading-slice";

interface ImagesArray {
  id: string;
  link: string;
  type: string;
}

interface ImagesReqProps {
  id: string;
  title: string;
  link: string;
  type: string;
  images?: ImagesArray[];
}
interface ResponseProps {
  data: ImagesReqProps[];
}

interface ImageSelectorProps {
  images: {
    imagesData: ImagesProps[];
  };
}

interface LoadingSelectorProps {
  loading: {
    loading: boolean;
  };
}

export const Home = () => {
  const [gridLayout, setGridLayout] = useState(true);
  const [section, setSection] = useState("hot");
  const [sort, setSort] = useState("viral");
  const [window, setWindow] = useState("day");

  const optForSections = ["hot", "top", "user"];
  const windowParams = ["day", "week", "month", "year", "all"];

  const dispatch = useDispatch();

  const images = useSelector(
    (state: ImageSelectorProps) => state.images.imagesData
  );
  const isLoading = useSelector(
    (state: LoadingSelectorProps) => state.loading.loading
  );

  const handleImages = (payload: ImagesState) => {
    dispatch(setImages(payload.imagesData));
  };

  const handleLoading = (payload: LoadingProps) => {
    dispatch(setLoading(payload.loading));
  };

  const handleChangeLayout = () => setGridLayout((prevState) => !prevState);

  const sortParams = useMemo(() => {
    const sortOptions = ["viral", "top", "time"];

    if (section === "user") sortOptions.push("rising");

    return sortOptions;
  }, [section]);

  const setUpData = (response: Array<ImagesReqProps>) => {
    return response.map((item) => {
      const itemObject = {
        id: item.id,
        title: item.title,
        link: item.link,
        type: item.type,
      };

      if (item.images) {
        itemObject.link = item.images[0].link;
        itemObject.type = item.images[0].type;
      }

      return itemObject;
    });
  };

  const getGallery = async () => {
    handleLoading({ loading: true });
    try {
      const resp = await api.get<ResponseProps>(
        `/gallery/${section}/${sort}/${window}`
      );

      const imagesTreated = setUpData(resp.data.data);

      handleImages({ imagesData: imagesTreated });
    } catch (error) {
      console.log(`Error getGallery function: ${error}`);
    } finally {
      handleLoading({ loading: false });
    }
  };

  useEffect(() => {
    getGallery();
  }, [section, sort, window]);

  return (
    <>
      <ContainerTitle>
        <PageTitle>IMGUR</PageTitle>
        <Button onClick={() => handleChangeLayout()}>Tamanho Grid</Button>
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
          <Grid gridSize={gridLayout}>
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
