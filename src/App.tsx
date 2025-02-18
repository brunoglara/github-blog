import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { GlobalStyle } from "./styles/global";
import { Router } from "./Routes";
import { BrowserRouter } from "react-router-dom";
import { GitHubBlogProvider } from "./contexts/GitHubBlogContext";

function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyle />
			<GitHubBlogProvider>
				<BrowserRouter>
					<Router />
				</BrowserRouter>
			</GitHubBlogProvider>
		</ThemeProvider>
	);
}

export default App;
