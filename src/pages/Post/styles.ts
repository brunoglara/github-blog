import styled from "styled-components";

export const InfoPageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	padding: 0 18rem;
`;

export const InfoContainer = styled.div`
	padding: 2rem;
	gap: 2rem;

	max-width: 864px;
	width: 100%;
	margin-top: -5.5rem;

	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); /* Efeito de sombra para destacar */
	position: relative; /* Mantém sobreInfoo */
	z-index: 10; /* Garante que fique acima do background */

	background-color: ${(props) => props.theme.colors.baseProfile};
	border-radius: 10px;
`;

export const InfoContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
`;

export const InfoHeader = styled.header`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;

	width: 100%;

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

export const InfoTitle = styled.strong`
    margin-top: 1.25rem;

	font-size: 1.5rem;
	line-height: 1.3;
	color: ${(props) => props.theme.colors.baseTitle};
`;

export const GitHubContentInfo = styled.div`
	display: flex;
	align-items: center;

	margin-top: 0.5rem;

	gap: 2rem;

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

export const PostContent = styled.section`
    max-width: 864px;
    width: 100%;
    height: auto;
    padding: 2.5rem 2rem;

    font-size: 1rem;
    line-height: 1.6;
    color: ${(props) => props.theme.colors.baseText};

    
    white-space: normal;

    a {
        color: ${(props) => props.theme.colors.blue};
    }
`
