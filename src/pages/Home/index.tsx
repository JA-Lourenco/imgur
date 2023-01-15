import { useEffect, useMemo } from "react";
import api from "../../services/api";

import {
  ContainerTitle,
  ContainerSelects,
  PageTitle,
  Main,
  Grid,
  Button,
  Footer,
} from "./styled";

import { ImageCard } from "../../components/ImageCard";
import { Select } from "../../components/Select";
import { Loading } from "../../components/Loading";

import { useDispatch, useSelector } from "react-redux";
import {
  setImages,
  ImagesProps,
  ImagesState,
} from "../../features/images/images-slice";
import { setLoading, LoadingProps } from "../../features/loading/loading-slice";
import { setGridLayout } from "../../features/gridLayout/gridLayout-slice";
import {
  setSection,
  SectionProps,
} from "../../features/sections/sections-slice";
import { setSort, SortsProps } from "../../features/sort/sort-slice";
import { setWindow, WindowsProps } from "../../features/window/window-slice";

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

interface GridLayoutSelectorProps {
  gridLayout: {
    changeGrid: boolean;
  };
}

interface SectionSelectorProps {
  sections: {
    section: string;
  };
}

interface SortSelectorProps {
  sorts: {
    sort: string;
  };
}

interface WindowSelectorProps {
  windows: {
    window: string;
  };
}

export const Home = () => {
  const scrollToTop = () => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  const dispatch = useDispatch();

  const images = useSelector(
    (state: ImageSelectorProps) => state.images.imagesData
  );
  const isLoading = useSelector(
    (state: LoadingSelectorProps) => state.loading.loading
  );
  const gridLayout = useSelector(
    (state: GridLayoutSelectorProps) => state.gridLayout.changeGrid
  );
  const section = useSelector(
    (state: SectionSelectorProps) => state.sections.section
  );
  const sort = useSelector((state: SortSelectorProps) => state.sorts.sort);
  const window = useSelector(
    (state: WindowSelectorProps) => state.windows.window
  );

  const handleImages = (payload: ImagesState) => {
    dispatch(setImages(payload.imagesData));
  };

  const handleLoading = (payload: LoadingProps) => {
    dispatch(setLoading(payload.loading));
  };

  const handleChangeLayout = () => {
    dispatch(setGridLayout());
  };

  const handleSections = (payload: SectionProps) => {
    dispatch(setSection(payload.section));
  };

  const handleSorts = (payload: SortsProps) => {
    dispatch(setSort(payload.sort));
  };

  const handleWindows = (payload: WindowsProps) => {
    dispatch(setWindow(payload.window));
  };

  const optForSections = ["hot", "top", "user"];
  const windowParams = ["day", "week", "month", "year", "all"];

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
          onChangeOptions={(value: string) =>
            handleSections({ section: value })
          }
        />
        <Select
          value={sort}
          options={sortParams}
          onChangeOptions={(value: string) => handleSorts({ sort: value })}
        />
        {section === "top" && (
          <Select
            value={window}
            options={windowParams}
            onChangeOptions={(value: string) =>
              handleWindows({ window: value })
            }
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

      <Footer>
        <Button onClick={() => scrollToTop()}>Voltar ao Topo</Button>
      </Footer>
    </>
  );
};
