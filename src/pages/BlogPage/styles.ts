import styled from "styled-components";

export const BlogPageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	padding: 0 18rem;
`;

export const ProfileContainer = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: center;

	padding: 2rem;
	gap: 2rem;

	max-width: 864px;
	width: 100%;
	margin-top: -5.5rem;

	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); /* Efeito de sombra para destacar */
	position: relative; /* Mantém sobreposto */
	z-index: 10; /* Garante que fique acima do background */

	background-color: ${(props) => props.theme.colors.baseProfile};
	border-radius: 10px;

	> img {
		border-radius: 8px;
		max-width: 148px;
		width: 100%;
		height: auto;
		object-fit: contain;
	}
`;

export const ProfileContent = styled.div`
	display: flex;
	flex-direction: column;

	justify-content: center;
`;

export const ProfileHeader = styled.header`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;

	> strong {
		font-size: 1.5rem;
		line-height: 1.3;
		color: ${(props) => props.theme.colors.baseTitle};
	}

	> div {
		display: flex;
		align-items: center;
		gap: 0.5rem;

		color: ${(props) => props.theme.colors.blue};

		border-bottom: 1px solid transparent;

		cursor: pointer;

		&:hover {
			border-bottom: 1px solid ${(props) => props.theme.colors.blue};
		}
		> span {
			font-size: 0.75rem;
			line-height: 1.6;
			font-weight: bold;
		}
	}
`;

export const ProfileBio = styled.span`
	margin-top: 0.5rem;
	line-height: 1.6;
`;

export const GitHubContent = styled.div`
	display: flex;
    align-items: center;

	margin-top: 1.5rem;

	gap: 1.5rem;

	> div {
		display: flex;
		align-items: center;
        justify-content: center;
		gap: 0.5rem;

		line-height: 1.6;

		svg {
			width: 1.125rem;
			height: 1.125rem;
			color: ${(props) => props.theme.colors.baseLabel};
		}

		span {
			color: ${(props) => props.theme.colors.baseSubtitle};
		}
	}
`;

export const SearchContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.75rem;

	max-width: 864px;
	width: 100%;
	margin-top: 4.5rem;
`
export const SearchLabels = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	width: 100%;

	strong {
		font-size: 1.125rem;
		line-height: 1.6;
		color: ${(props) => props.theme.colors.baseSubtitle};
	}

	span {
		font-size: 0.875rem;
		line-height: 1.6;
		color: ${(props) => props.theme.colors.baseSpan};
	}
`

export const SearchForm = styled.form`
	width: 100%;
	input {
		width: 100%;
		flex: 1;
		padding: 0.75rem 1rem;

		background-color: ${(props) => props.theme.colors.baseInput};
		border: 1px solid ${(props) => props.theme.colors.baseBorder};
		color: ${(props) => props.theme.colors.baseText};

		border-radius: 6px;
		line-height: 1.6;

		&::placeholder {
			color: ${(props) => props.theme.colors.baseLabel};
		}

		
	}
`
export const ListPosts = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 2rem;

	margin: 3rem 0;
`