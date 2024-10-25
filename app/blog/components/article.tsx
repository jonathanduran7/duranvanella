import { Post } from "@/app/interface/Post";
import dayjs from "dayjs";

interface ArticleCardProps {
  post: Post;
}

export default function ArticleCard({ post }: ArticleCardProps) {
  return (
    <div className="bg-darkTerciary rounded-md min-h-28 py-3 px-6">
      <p className="text-gray-soft text-[12px] font-medium">{dayjs(post.date).format('MMMM DD, YYYY')}</p>
      <p className="text-white text-[20px] font-medium">{post.title}</p>
      <p className="text-gray-soft text-[14px] mt-2">{post.description}</p>
    </div>
  );
}
