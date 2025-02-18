import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	BlogPageContainer,
	GitHubContentBlog,
	ListPosts,
	ProfileBio,
	ProfileContainer,
	ProfileContent,
	ProfileGithubLink,
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
import { useContext } from "react";
import { GitHubBlogContext } from "../../contexts/GitHubBlogContext";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { ClipLoader } from "react-spinners";

import { useTheme } from "styled-components";

const searchFormSchema = z.object({
	query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export const BlogPage = () => {
	const { profile, posts, fetchPosts } = useContext(GitHubBlogContext);

	const { login, avatar_url, html_url, name, company, bio, followers } =
		profile;

	const {
		register,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm<SearchFormInputs>({
		resolver: zodResolver(searchFormSchema),
	});

	const theme = useTheme();	

	const handleSearchPosts = async (data: SearchFormInputs) => {
		if (isSubmitting) return;

		await fetchPosts(data.query);
	};

	

	return (
		<BlogPageContainer>
			<ProfileContainer>
				<img src={avatar_url} alt="Github profile image" />
				<ProfileContent>
					<ProfileHeader>
						<strong>{name}</strong>
						<ProfileGithubLink to={html_url} target="_blank">
							<span>GITHUB</span>
							<FontAwesomeIcon
								icon={faArrowUpRightFromSquare}
								style={{ fontSize: "0.75rem" }}
							/>
						</ProfileGithubLink>
					</ProfileHeader>

					<ProfileBio>{bio}</ProfileBio>

					<GitHubContentBlog>
						<div>
							<FontAwesomeIcon icon={faGithub} />
							<span>{login}</span>
						</div>
						<div>
							<FontAwesomeIcon icon={faBuilding} />
							<span>{company}</span>
						</div>
						<div>
							<FontAwesomeIcon icon={faUserGroup} />
							<span>{followers} Followers</span>
						</div>
					</GitHubContentBlog>
				</ProfileContent>
			</ProfileContainer>

			<SearchContainer>
				<SearchLabels>
					<strong>Posts</strong>
					<span>{posts.length} posts</span>
				</SearchLabels>
				<SearchForm onSubmit={handleSubmit(handleSearchPosts)}>
					<input
						type="text"
						placeholder="Search Posts"
						{...register("query")}
					/>
				</SearchForm>
			</SearchContainer>

			{isSubmitting ? (
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						marginTop: "4rem",
					}}
				>
					<ClipLoader size={50} color={theme.colors.blue}/>
				</div>
			) : (
				<ListPosts>
					{posts.map((post) => (
						<PostCard
							key={post.number}
							title={post.title}
							description={post.body}
							updated_at={post.updated_at}
							number={post.number}
						/>
					))}
				</ListPosts>
			)}
		</BlogPageContainer>
	);
};
