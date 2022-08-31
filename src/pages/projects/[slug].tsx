import React from "react";
import Image from "next/image";
import Head from "next/head";
import { GetStaticProps } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import rehypePrism from "rehype-prism-plus";
import { css } from "@stitchesConfig";
import { getSC, getSCSlug, PostMeta } from "src/pages/api";
import { Box, Container, GradientBtn, Text,Caption } from "@components/base";
import { Multitab, TechStacks } from "@components/inc";
import "prism-themes/themes/prism-atom-dark.min.css";

interface MDXShowcase {
  source: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, string>
  >;
  meta: PostMeta;
}

const blogStyles = css({
  pb: "$9",
  "& p": {
    lineHeight: 1.4,
    fontSize: "$mid",
    mb: "$4",
    mt: "$2",
    maxWidth: 1080,
    mx: "auto",
  },
  "& h1,h2,h3": {
    my: "$5",
    maxWidth: 1080,
    mx: "auto",
  },
  a: {
    textDecoration: "underline",
  },
  "h2>a": {
    textDecoration: "none",
  },
  "ul>*+*": {
    mt: "$2",
  },
  "& li": {
    listStyle: "none",
    position: "relative",
    fontSize: "$4",
    pl: 30,
    gap: "$2",
    lineHeight: 1.4,
    ai: "center",
    maxWidth: 1080,
    mx: "auto",
  },
  "& li::before": {
    content: "",
    position: "absolute",
    left: 0,
    top: 12,
    transform: "translateY(-50%)",
    size: 15,
    minWidth: 15,
    br: "$round",
    bg: "$gradient2",
  },
  "& li:nth-of-type(2n)::before": {
    bg: "$gradient3",
  },
  "& li:nth-of-type(3n)::before": {
    bg: "$gradient1",
  },
  "& li:nth-of-type(4n)::before": {
    bg: "$gradient4",
  },
  "@md": {
    "& p": {
      fontSize: "$5",
      lineHeight: 1.5,
    },
    "& li": {
      fontSize: "$mid",
      lineHeight: 1.5,
    },
  },
});

const Showcase = ({ showcase }: { showcase: MDXShowcase }) => {
  return (
    <Box css={{ minHeight: "90vh", pt: "$9", bg: "$backgroundSecondary" }}>
      <Head>
        <title>{showcase.meta.title}</title>
        <meta name="description" content={showcase.meta.excerpt} />
      </Head>
      <Container className={blogStyles.toString()}>
        <Text textAlign="center" as="h1" fontSize={"8"} fontWeight={"semibold"}>
          {showcase.meta.title}
        </Text>
        <MDXRemote
          {...showcase.source}
          components={{ Box, GradientBtn, Multitab, Image, TechStacks,Caption }}
        />
      </Container>
    </Box>
  );
};

export default Showcase;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const { content, meta } = getSC(slug);
  console.log({ meta });
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
        rehypePrism,
      ],
    },
  });
  return {
    props: { showcase: { source: mdxSource, meta } },
  };
};
export const getStaticPaths = async () => {
  const paths = getSCSlug().map((slug) => ({
    params: {
      slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};
