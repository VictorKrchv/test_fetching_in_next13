import { Post } from "@/api/posts/types";

const getAll = (config: RequestInit): Promise<Post[]> =>
  fetch("https://jsonplaceholder.typicode.com/posts", config).then((res) =>
    res.json()
  );

const getById = (id: number, config: RequestInit): Promise<Post> => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, config).then(
    (res) => res.json()
  );
};

export const postsApi = { getAll, getById };
