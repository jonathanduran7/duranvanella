import Navbar from '@/app/ui/navbar';
import { getPostData } from '../../lib/posts';
import dayjs from 'dayjs';


export default async function Post({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id) as any;
  return (
    <div className="bg-background text-dark dark:bg-darkBackground dark:text-darkForeground paddingPage min-h-screen">
      <Navbar />
      <article className='prose mt-5'>

        <div className='mt-5 mb-2'>
          <p className="dark:text-gray-soft text-[#979797] text-[12px] font-medium">{dayjs(postData.date).format('MMMM DD, YYYY')}</p>
          <h1 className="dark:text-white text-[20px] font-medium">{postData.title}</h1>
        </div>

        <div dangerouslySetInnerHTML={{ __html: postData.content }} />
      </article>
    </div>
  );
}
