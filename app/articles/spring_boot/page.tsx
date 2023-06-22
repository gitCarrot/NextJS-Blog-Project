import getPostMetadata from '@/app/actions/getPostMetadata'
import ArticlePreview from '@/app/components/card/ArticlePreview';
import React from 'react'

const page = () => {
  const postMetadata = getPostMetadata();
  const previews = postMetadata.map((post) => (
    <ArticlePreview 
    PostMetaData={post}
    category="spring_boot"
    />
  ))
  return (
    <div>{previews}</div>
  )
}

export default page