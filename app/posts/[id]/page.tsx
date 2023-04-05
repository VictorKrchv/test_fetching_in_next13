import { postsApi } from "@/api/posts/index";
import Link from "next/link";

const Page = async ({ params }: any) => {
  // To fetch fresh data on every fetch request, use the cache: 'no-store' option.
  const post = await postsApi.getById(params.id, { cache: "no-store" });

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link href="/posts">All posts</Link>
    </div>
  );
};

export default Page;
