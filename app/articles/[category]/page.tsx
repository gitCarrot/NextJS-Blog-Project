import ArticlePreview from '@/app/components/card/ArticlePreview';
import getPostMetadata from '@/app/actions/getPostMetadata';

const page = ( props: any ) => {
  const category = props.params.category;
  const postMetadata = getPostMetadata(category);
  console.log(postMetadata);
  const image = `/${category}.png`;
  const previews = postMetadata.map((post) => (
    <div className="mt-8">
    <ArticlePreview 
    key={post.slug}
    PostMetaData={post}
    imageUrl={image}
    category={category}
    />
    </div>
  ))
  return (
    <div mt-2>{previews}</div>
    
  )
}

export default page