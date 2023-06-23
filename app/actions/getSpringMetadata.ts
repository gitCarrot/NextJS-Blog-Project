import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "../type/PostMetadata";

const getSpringMetadata = (): PostMetadata[] => {
  const folder = `posts/spring_boot/`;
  const files = fs.readdirSync(folder);
  console.log(files);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  // Get gray-matter data from each file.
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/spring_boot/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      category: matterResult.data.category,
      slug: fileName.replace(".md", ""),
    };
  });

  return posts;
};

export default getSpringMetadata;