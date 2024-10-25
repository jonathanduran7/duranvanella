import Link from "next/link";
import { getAllPosts } from "../lib/posts";
import Navbar from "../ui/navbar";
import ArticleCard from "./components/article";

export default function Page() {
  const allPostsData = getAllPosts();
  return (
    <div className="bg-background text-dark dark:bg-darkBackground dark:text-darkForeground paddingPage min-h-screen">
      <Navbar />

      <div className="mt-5 mb-5">
        <h1 className="text-4xl">Welcome to my Next.js blog</h1>
      </div>

      <div className="flex flex-col gap-5 pb-6">
        {allPostsData?.map((post) => (
          <Link href={`/blog/${post?.id}`} key={post.id}>
            <ArticleCard post={post} />
          </Link>
        ))}
      </div>
    </div>
  );
}
