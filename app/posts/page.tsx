import { postsApi } from "@/api/posts/index";
import Link from "next/link";

const getPosts = async () => ({
  /**
   * To revalidate cached data at a timed interval,
   * you can use the next.revalidate option in fetch()
   * to set the cache lifetime of a resource (in seconds).
   */
  posts: await postsApi.getAll({ next: { revalidate: 10 } }),
  timestamp: Date.now(),
});

const Page = async () => {
  const { posts, timestamp } = await getPosts();

  return (
    <div>
      <h1>Post list</h1>
      <i>FETCHED at {timestamp}</i>
      {posts.map((p) => (
        <div key={p.id}>
          <Link href={`/posts/${p.id}`}>{p.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default Page;
