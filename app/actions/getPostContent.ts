import fs from "fs";
import matter from "gray-matter";

const getPostContent = (category: string, slug: string) => {
    const folder = `posts/${category}/`;
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content)
    return matterResult;
}

export default getPostContent;