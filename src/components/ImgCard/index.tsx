import { ImgContainer, Image, DescBox, Description } from "./styled"

interface ImageCardProps {
	source: string
	description: string
}

export const ImageCard = ({ source, description }: ImageCardProps) => {
	return (
		<ImgContainer>
			<Image src={source} />
			<DescBox>
				<Description>{description}</Description>
			</DescBox>
		</ImgContainer>
	)
}
