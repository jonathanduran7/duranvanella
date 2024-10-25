import { Post } from "@/app/interface/Post";
import dayjs from "dayjs";

interface ArticleCardProps {
  post: Post;
}

export default function ArticleCard({ post }: ArticleCardProps) {
  return (
    <div className="dark:bg-darkTerciary bg-[#efefef] rounded-md min-h-28 py-3 px-6">
      <p className="dark:text-gray-soft text-[#979797] text-[12px] font-medium">{dayjs(post.date).format('MMMM DD, YYYY')}</p>
      <p className="dark:text-white text-[20px] font-medium">{post.title}</p>
      <p className="dark:text-gray-soft text-[14px] mt-2">{post.description}</p>
    </div>
  );
}
