import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const PostCardContainer = styled(NavLink)`
	text-decoration: none; /* Remove sublinhado padrão */
	color: inherit; /* Mantém a cor do tema ou do pai */

	display: flex;
	flex-direction: column;

	max-width: 416px;
	width: 100%;

	gap: 1.25rem;
	padding: 2rem;

	border-radius: 10px;
	border: 2px solid transparent;

	cursor: pointer;

	background-color: ${(props) => props.theme.colors.basePost};

	&:hover {
		border: 2px solid ${(props) => props.theme.colors.baseLabel};
	}

	&:focus,
	&:focus-visible {
		box-shadow: none;
	}
`;

export const PostCardHeader = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 1rem;

	strong {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;

		font-size: 1.25rem;
		line-height: 1.6;

		max-height: calc(1.7rem * 2);
		min-height: calc(1.6rem * 2);

		color: ${(props) => props.theme.colors.baseTitle};
	}

	span {
		font-size: 0.875rem;
		line-height: 1.6;
		color: ${(props) => props.theme.colors.baseSpan};
		white-space: nowrap;
	}
`;

export const PostCardText = styled.span`
	display: -webkit-box;
	-webkit-line-clamp: 4;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
	line-height: 1.6;
	max-height: calc(1.7rem * 4);
	min-height: calc(1.6rem * 4);
`;
