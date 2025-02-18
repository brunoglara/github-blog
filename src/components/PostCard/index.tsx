import { formatTimeAgo } from "../../utils/dateFormatter";
import { PostCardContainer, PostCardHeader, PostCardText } from "./styles";


interface PostCardProps {
	title: string;
	description: string;
	updated_at: string;
	number: number;
}

export const PostCard = ({
	title,
	description,
	updated_at,
	number,
}: PostCardProps) => {



	const timeAgo = formatTimeAgo(updated_at)


	return (
		<PostCardContainer to={`/post/${number}`}>
			<PostCardHeader>
				<strong>{title}</strong>
				<span>{timeAgo}</span>
			</PostCardHeader>
			<PostCardText>{description}</PostCardText>
		</PostCardContainer>
	);
};
