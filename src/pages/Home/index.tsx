import { useEffect, useState } from "react";

import { Main, Grid } from "./styled";

import { ImageCard } from "../../components/ImageCard";

import api from "../../services/api";

interface ImagesArray {
  id: string;
  link: string;
  type: string;
}
[];

interface ImagesProps {
  id: string;
  title: string;
  description: string;
  link: string;
  type: string;
  images?: ImagesArray;
}

// useMemo com dependencias conforme parametros
// validar se tem extensão no primeiro atributo link, caso contrario utilizar o link do array de images
// se tiver o atributo array images, eu ja utilizo a validação para video

export const Home = () => {
  const [images, setImages] = useState<ImagesProps[]>([]);
  let array: any = [];

  // const repeatComp = () => {
  // 	const n = 10;

  // 	for (let i = 1; i <= n; i++) {
  // 		array.push(
  // 			<ImageCard
  // 				// source="https://i.imgur.com/ZKBy3sF.jpg"
  // 				source="https://i.imgur.com/0q7Yn3f.mp4"
  // 				description="React App"
  // 			/>
  // 		);
  // 	}
  // };
  // repeatComp();

  const getGallery = async () => {
    try {
      const resp = await api.get("/gallery/top");

      setImages(resp.data.data);
    } catch (error) {
      console.log(`Error function: ${error}`);
    }
  };

  useEffect(() => {
    getGallery();
  }, []);

  console.log("IMAGES", images);

  images.map((img) =>
    img.images
      ? console.log("teste", img.images.link)
      : console.log("NADA", img.images)
  );

  return (
    <Main>
      <Grid>
        {images.map((image) => {
          // console.log("image", image);
          return (
            <ImageCard
              key={image.id}
              source={image.link ? image.link : image.images.link}
              description={image.title}
            />
          );
        })}
        {/* {array} */}
      </Grid>
    </Main>
  );
};
