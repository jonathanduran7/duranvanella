import Link from "next/link";
import { getAllPostIds } from "../lib/posts";
import Navbar from "../ui/navbar";


export default function Page() {
  const allPostsData = getAllPostIds();
  console.log(allPostsData)
  return (
    <div className="bg-background text-dark dark:bg-darkBackground dark:text-darkForeground paddingPage min-h-screen">
      <Navbar />

      <div className="mt-5">
        <h1 className="text-4xl">Welcome to my Next.js blog</h1>
      </div>

      <ul>
        {allPostsData?.map(({ params }) => (
          <li key={params.id}>
            <Link href={`/blog/${params.id}`}>
              {params.id}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
