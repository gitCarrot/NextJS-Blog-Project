import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "../type/PostMetadata";

const getPostMetadata = (categories: string[]): PostMetadata[] => {
  const posts = [];
  for (const category of categories) {
    const folder = `posts/${category}/`;
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith(".md"));
    // Get gray-matter data from each file.
    const postMetadata = markdownPosts.map((fileName) => {
      const fileContents = fs.readFileSync(`posts/${category}/${fileName}`, "utf8");
      const matterResult = matter(fileContents);
      return {
        title: matterResult.data.title,
        date: matterResult.data.date,
        subtitle: matterResult.data.subtitle,
        category: matterResult.data.category,
        slug: fileName.replace(".md", ""),
      };
    });
    posts.push(...postMetadata);
  }

  return posts;
};

export default getPostMetadata;