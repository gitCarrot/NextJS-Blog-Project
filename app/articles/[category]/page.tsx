import ArticlePreview from '@/app/components/card/ArticlePreview';
import getPostMetadata from '@/app/actions/getPostMetadata';
import getSpringContent from '@/app/actions/getSpringMetadata';

export const generateStaticParams = async () => {
  const posts = getSpringContent();
  return posts.map((post) => ({
    category: post.category,
  }))
};

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