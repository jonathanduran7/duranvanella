import Navbar from '@/app/ui/navbar';
import { getPostData } from '../../lib/posts';


export default async function Post({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id) as any;
  return (
    <div className="bg-background text-dark dark:bg-darkBackground dark:text-darkForeground paddingPage min-h-screen">
      <Navbar />
      <article className='prose mt-5'>
        <h1>{postData?.title}</h1>

        <div className='mt-5 mb-5'>
          <p>{postData?.date}</p>
        </div>

        <div dangerouslySetInnerHTML={{ __html: postData.content }} />
      </article>
    </div>
  );
}
