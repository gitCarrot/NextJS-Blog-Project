import ArticlePreview from '@/app/components/card/ArticlePreview';
import getPostMetadata from '@/app/actions/getPostMetadata';
import getSpringContent from '@/app/actions/getSpringMetadata';
import { useRouter } from "next/router";
import { PostMetadata } from '@/app/type/PostMetadata';

export const generateStaticParams = async () => {
  return [ { category: "spring_boot"}, { category: "algorithm"}, { category: "data-engineering"} ];
};

const page = ( props: any ) => {
  const category = props.params.category;
  const postMetadata = getPostMetadata([category]);
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
    <div className="mt-8 mb-8">{previews}</div>
    
  )
}

export default page