import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import getPostMetadata from '@/app/actions/getPostMetadata';

const getPostContent = (category: string, slug: string) => {
  const folder = `posts/${category}/`;
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content)
  return matterResult;
}
export const generateStaticParams = async () => {
  const catelist = ["backend", "frontend", "algorithm", "data-engineering"];
  const posts = getPostMetadata(catelist);
  return posts.map((post) => ({
    category: post.category,
    slug: post.slug,
  }))
};

const page = (props: any) => {
  const category = props.params.category;
  const slug = props.params.slug;

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