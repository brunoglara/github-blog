import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	GitHubContentInfo,
	InfoContainer,
	InfoContent,
	InfoHeader,
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

import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import remarkBreaks from 'remark-breaks';


export const InfoPage = () => {
	const markdown = `
**Programming languages all have built-in data structures, but these often differ from one language to another.** This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
&nbsp;

[Dynamic typing](#)
JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
&nbsp;

\`\`\`javascript
let foo = 42;    // foo is now a number
foo = 'bar';     // foo is now a string
foo = true;      // foo is now a boolean
\`\`\`
`;

	return (
		<InfoPageContainer>
			<InfoContainer>
				<InfoContent>
					<InfoHeader>
						<div>
							<FontAwesomeIcon
								icon={faChevronLeft}
								style={{ fontSize: "0.75rem" }}
							/>
							<span>BACK</span>
						</div>

						<div>
							<span>GITHUB</span>
							<FontAwesomeIcon
								icon={faArrowUpRightFromSquare}
								style={{ fontSize: "0.75rem" }}
							/>
						</div>
					</InfoHeader>
					<InfoTitle>
						JavaScript data types and data structures
					</InfoTitle>
					<GitHubContentInfo>
						<div>
							<FontAwesomeIcon icon={faGithub} />
							<span>userName</span>
						</div>
						<div>
							<FontAwesomeIcon icon={faCalendarDay} />
							<span>1 day ago</span>
						</div>
						<div>
							<FontAwesomeIcon icon={faComment} />
							<span>5 Comments</span>
						</div>
					</GitHubContentInfo>
				</InfoContent>
			</InfoContainer>
			<PostContent>
				<Markdown
                    remarkPlugins={[remarkBreaks]}
					components={{
						code({ className, children }) {
							const match = /language-(\w+)/.exec(
								className || ""
							);
							return match ? (
								<SyntaxHighlighter
									style={vscDarkPlus}
									language={match[1]}
									PreTag="div"
								>
									{String(children).trim()}
								</SyntaxHighlighter>
							) : (
								<code className={className}>{children}</code>
							);
						},
					}}
				>
					{markdown}
				</Markdown>
			</PostContent>
		</InfoPageContainer>
	);
};
