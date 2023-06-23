import React from 'react'
import getPostContent from '@/app/actions/getPostContent';
import Markdown from "markdown-to-jsx";
import getPostMetadata from '@/app/actions/getPostMetadata';

export const generateStaticParams = async (props: any) => {
  const category = props.params.category;
  const posts = getPostMetadata(category);
  return posts.map((post) => ({
    slug: post.slug,
  }))
  
}

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