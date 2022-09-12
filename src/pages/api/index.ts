// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import fs from "fs";
import { sync } from "glob";
import matter from "gray-matter";

const SC_PATH = path.join(process.cwd(), "src", "static");

export const getSCSlug = (): string[] => {
  const paths = sync("*.mdx", { cwd: SC_PATH });
  return paths.map((path) => {
    const [slug, _] = path.split(".");
    return slug;
  });
};

export const getAllSC = () => {
  const showcases = getSCSlug().map((slug) => getSC(slug));
  console.log(getSCSlug());
};

interface Post {
  content: string;
  meta: PostMeta;
}
export interface PostMeta {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  tags: string[];
}

export const getSC = (slug: string): Post => {
  const postPath = path.join(SC_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(postPath);
  const { content, data } = matter(source);

  return {
    content,
    meta: {
      slug,
      title: data.title ?? "",
      excerpt: data.excerpt ?? slug,
      date: data.date ?? new Date().toString(),
      tags: (data.tags ?? []).sort(),
    },
  };
};
