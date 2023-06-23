import getPostMetadata from '@/app/actions/getPostMetadata'
import ArticlePreview from '@/app/components/card/ArticlePreview';
import React from 'react'

const page = ( props: any ) => {
  const category = props.params.category;
  const postMetadata = getPostMetadata(category);
  const image = `/${category}.png`;
  const previews = postMetadata.map((post) => (
    <ArticlePreview 
    key={post.slug}
    PostMetaData={post}
    category={category}
    imageUrl={image}
    />
  ))
  return (
    <div>{previews}</div>
    
  )
}

export default page