import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

export interface Post {
	number: number;
	title: string;
	body: string;
	updated_at: string;
	comments: number;
    html_url: string
}

interface Perfil {
	login: string;
	avatar_url: string;
	html_url: string;
	name: string;
	company: string;
	bio: string;
	followers: number;
}

interface GitHubBlogContextType {
	posts: Post[];
	profile: Perfil;
	fetchPosts: (query?: string) => Promise<void>
}

const GitHubBlogContext = createContext({} as GitHubBlogContextType);

const GitHubBlogProvider = ({ children }: { children: ReactNode }) => {
	const [posts, setPosts] = useState<Post[]>([] as Post[]);

	const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME;
	const GITHUB_REPO = import.meta.env.VITE_GITHUB_REPO;

	const [profile, setProfile] = useState<Perfil>({} as Perfil);


	const fetchProfile = async () => {
		const response = await api.get(`/users/${GITHUB_USERNAME}`);

		const { login, avatar_url, html_url, name, company, bio, followers } =
			response.data;

		setProfile((state) => {
			return {
				...state,
				login,
				avatar_url,
				html_url,
				name,
				company,
				bio,
				followers,
			};
		});
	};

	const fetchPosts = async (query?: string) => {
        const url = `search/issues?q=${query ?? ""}%20repo:${GITHUB_USERNAME}/${GITHUB_REPO}`
		const response = await api.get(url);



		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const { items = [] } = response.data as { items: any[] };

		const fetchedPosts = items.map((item) => ({
			number: item.number,
			title: item.title,
			body: item.body,
			updated_at: item.updated_at,
			comments: item.comments,
            html_url: item.html_url
		}))
        .sort((a,b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());

        
		setPosts(fetchedPosts)
	};

	useEffect(() => {
		fetchProfile();
		fetchPosts();
	}, []);

	return (
		<GitHubBlogContext.Provider
			value={{
				posts,
				profile,
				fetchPosts
			}}
		>
			{children}
		</GitHubBlogContext.Provider>
	);
};

export { GitHubBlogContext, GitHubBlogProvider };
