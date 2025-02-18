import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { BlogPage } from "./pages/BlogPage";
import { InfoPage } from "./pages/InfoPage";

export const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<DefaultLayout />}>
				<Route path="/" element={<BlogPage />} />
				<Route path="/post/:number" element={<InfoPage />} />
			</Route>
		</Routes>
	);
};
