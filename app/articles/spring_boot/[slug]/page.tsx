import React from 'react'
import getPostContent from '@/app/actions/getPostContent';
import Markdown from "markdown-to-jsx";

const page = (props: any) => {

    const slug = props.params.slug;
    const content = getPostContent(slug)

  return (
    <div>
        <article className="prose lg:prose-xl">
        <Markdown>{content}</Markdown>
        </article>
    </div>
    
  )
}

export default page