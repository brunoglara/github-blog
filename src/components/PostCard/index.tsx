import { PostCardContainer, PostCardHeader, PostCardText } from "./styles";

export const PostCard = () => {
	return (
		<PostCardContainer to="/">
			<PostCardHeader>
				<strong>JavaScript data types and data structures</strong>
				<span>1 day ago</span>
			</PostCardHeader>
			<PostCardText>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget
				aliquam nunc. Aliquam erat volutpat. Pellentesque habitant morbi
				tristique senectus et netus et malesuada fames ac turpis
				egestas. Maecenas blandit pulvinar leo pharetra faucibus. Morbi
				vel ex id leo vulputate aliquet sagittis a orci. Vivamus non
				quam non massa finibus ullamcorper. Vestibulum ut quam vel nunc
				lobortis pellentesque et non ligula. Donec nibh est, feugiat
				eget porttitor eget, lacinia at sapien. Etiam maximus nisi sed
				sodales vulputate.
			</PostCardText>
		</PostCardContainer>
	);
};
