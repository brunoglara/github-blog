import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	BlogPageContainer,
	GitHubContent,
	ListPosts,
	ProfileBio,
	ProfileContainer,
	ProfileContent,
	ProfileHeader,
	SearchContainer,
	SearchForm,
	SearchLabels,
} from "./styles";
import {
	faArrowUpRightFromSquare,
	faBuilding,
	faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { PostCard } from "../../components/PostCard";

export const BlogPage = () => {
	return (
		<BlogPageContainer>
			<ProfileContainer>
				<img
					src="https://github.com/brunoglara.png"
					alt="Github profile image"
                    
				/>
				<ProfileContent>
					<ProfileHeader>
						<strong>Bruno Lara</strong>
						<div>
							<span>GITHUB</span>
							<FontAwesomeIcon
								icon={faArrowUpRightFromSquare}
								style={{ fontSize: "0.75rem" }}
							/>
						</div>
					</ProfileHeader>
					<ProfileBio>
						Tristique volutpat pulvinar vel massa, pellentesque
						egestas. Eu viverra massa quam dignissim aenean
						malesuada suscipit. Nunc, volutpat pulvinar vel mass.
					</ProfileBio>
					<GitHubContent>
						<div>
							<FontAwesomeIcon icon={faGithub} />
							<span>userName</span>
						</div>
						<div>
							<FontAwesomeIcon icon={faBuilding} />
							<span>Organization</span>
						</div>
						<div>
							<FontAwesomeIcon icon={faUserGroup} />
							<span>32 Followers</span>
						</div>
					</GitHubContent>
				</ProfileContent>
			</ProfileContainer>
  
			<SearchContainer>
				<SearchLabels>
					<strong>Posts</strong>
					<span>6 posts</span>
				</SearchLabels>
				<SearchForm>
					<input type="text" placeholder="Search Posts" />
				</SearchForm>
			</SearchContainer>

			<ListPosts>
				<PostCard />
				<PostCard />
				<PostCard />
			</ListPosts>
		</BlogPageContainer>
	);
};
