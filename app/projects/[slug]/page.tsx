import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import getPostMetadata from '@/app/actions/getPostMetadata';

const getPostContent = (slug: string) => {
  const folder = `posts/projects/`;
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content)
  return matterResult;
}
export const generateStaticParams = async () => {
  const catelist = ["projects"];
  const posts = getPostMetadata(catelist);
  return posts.map((post) => ({
    slug: post.slug,
  }))
};

const page = (props: any) => {
  const slug = props.params.slug;

  const content = getPostContent(slug)
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