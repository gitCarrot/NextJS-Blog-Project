import ArticlePreview from '@/app/components/card/ArticlePreview';
import getPostMetadata from '@/app/actions/getPostMetadata';

const page = ( props: any ) => {
  const category = props.params.category;
  const postMetadata = getPostMetadata(category);
  const image = `/${category}.png`;
  const previews = postMetadata.map((post) => (
    <ArticlePreview 
    key={post.slug}
    PostMetaData={post}
    imageUrl={image}
    category={category}
    />
  ))
  return (
    <div className="mt-8">{previews}</div>
    
  )
}

export default page