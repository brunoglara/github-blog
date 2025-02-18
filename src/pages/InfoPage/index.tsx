import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	GitHubContentInfo,
	InfoContainer,
	InfoContent,
	InfoHeader,
	InfoLink,
	InfoPageContainer,
	InfoTitle,
	PostContent,
} from "./styles";
import {
	faArrowUpRightFromSquare,
	faCalendarDay,
	faChevronLeft,
	faComment,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import Markdown from "markdown-to-jsx";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

import { useParams } from "react-router-dom";
import { useContext } from "react";
import { GitHubBlogContext } from "../../contexts/GitHubBlogContext";
import { formatTimeAgo } from "../../utils/dateFormatter";

export const InfoPage = () => {
	const { posts, profile } = useContext(GitHubBlogContext);

	const { number } = useParams<{ number: string }>();

	const selectedPost = posts.find((post) => post.number === Number(number));

	const timeAgo = formatTimeAgo(selectedPost?.updated_at ?? "");

	const MarkdownRenderer = ({ content }: { content: string }) => {
		return (
		  <Markdown
			options={{
			  overrides: {
				pre: ({ children }) => {
				  return <>{children}</>;
				},
				code: ({ className, children }) => {
				  const language = className?.replace("lang-", "") || "javascript";
				  return (
					<SyntaxHighlighter style={vscDarkPlus} language={language}>
					  {String(children).trim()}
					</SyntaxHighlighter>
				  );
				},
				p: ({ children }) => {
				  return <p style={{ marginBottom: "1rem" }}>{children}</p>; // Garante espaço entre parágrafos
				},
			  },
			}}
		  >
			{content.replace(/\n/g, "  \n")}
		  </Markdown>
		);
	  };

	const markdown = selectedPost?.body;

	return (
		<InfoPageContainer>
			<InfoContainer>
				<InfoContent>
					<InfoHeader>
						<InfoLink to="/">
							<FontAwesomeIcon
								icon={faChevronLeft}
								style={{ fontSize: "0.75rem" }}
							/>
							<span>BACK</span>
						</InfoLink>

						<InfoLink
							to={selectedPost?.html_url ?? "/"}
							target="_blank"
						>
							<span>GITHUB</span>
							<FontAwesomeIcon
								icon={faArrowUpRightFromSquare}
								style={{ fontSize: "0.75rem" }}
							/>
						</InfoLink>
					</InfoHeader>
					<InfoTitle>{selectedPost?.title}</InfoTitle>
					<GitHubContentInfo>
						<div>
							<FontAwesomeIcon icon={faGithub} />
							<span>{profile.login}</span>
						</div>
						<div>
							<FontAwesomeIcon icon={faCalendarDay} />
							<span>{timeAgo}</span>
						</div>
						<div>
							<FontAwesomeIcon icon={faComment} />
							<span>{selectedPost?.comments} Comments</span>
						</div>
					</GitHubContentInfo>
				</InfoContent>
			</InfoContainer>
			<PostContent>
				<MarkdownRenderer content={markdown ?? ""} />
			</PostContent>
		</InfoPageContainer>
	);
};
