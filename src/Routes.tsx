import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { BlogPage } from "./pages/BlogPage";

export const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<DefaultLayout />}>
				<Route path="/" element={<BlogPage />} />
			</Route>
		</Routes>
	);
};
