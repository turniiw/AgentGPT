import fs from "fs";
import path from "path";

import matter from "gray-matter";

export interface PostCategory {
  title: string;
  href?: string;
}

export interface PostAuthor {
  name: string;
  role?: string;
  href?: string;
  imageUrl?: string;
}

export interface PostFrontmatter {
  title: string;
  description?: string;
  imageUrl?: string;
  date: string;
  datetime?: string;
  category?: PostCategory;
  author?: PostAuthor;
}

export type SlugData = PostFrontmatter & {
  id: string;
};

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData(): SlugData[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData: SlugData[] = fileNames.map((fileName) => {
    const id = fileName.replace(/\.mdx$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    const frontmatter = matterResult.data as PostFrontmatter;

    return {
      id,
      ...frontmatter,
    };
  });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export type PostData = PostFrontmatter & {
  slug: string;
  content: string;
};

export function getPostData(slug: string): PostData {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);
  const frontmatter = matterResult.data as PostFrontmatter;

  return {
    slug,
    ...frontmatter,
    content: matterResult.content,
  };
}
