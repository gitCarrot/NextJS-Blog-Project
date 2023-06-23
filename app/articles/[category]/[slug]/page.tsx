import Markdown from "markdown-to-jsx";
import getPostMetadata from '@/app/actions/getPostMetadata';
import getPostContent from "@/app/actions/getPostContent";

const page = (props: any) => {
  const category = props.params.category;
  const slug = props.params.slug;
  const staticParams = async () => {
    const posts = getPostMetadata(category);
    console.log(posts);
    return posts.map((post) =>({
      slug : post.slug,
      category : post.category
    }));
  };
    staticParams();
    const content = getPostContent(category,slug)
  return (
    <div>
        <div className="my-8">
          <h1 className='text-4xl text-slate-600 text-center'>
            {content.data.title}
          </h1>
        </div>

        <article className="prose lg:prose-xl">
        <Markdown>{content.content}</Markdown>
        </article>
    </div>
    
  )
}

export default page