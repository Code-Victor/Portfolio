import React from "react";
import useSWR from "swr";
import Image from "next/image";
import Link from "next/link";
import { fetcher, url,returns } from "@utils";
import { Section } from ".";
import { styled } from "@stitchesConfig";
import { Box, Container, Flex, GradientBtn, Text } from "../base";

const Blog = () => {
  const { data, error } = useSWR(url, fetcher<returns>);
  console.table({data})
  const loading = !data && !error;
  const items = data?.items;

  const getDescription = (text: string) => {
    return text
      .match(/<p>(.*?)<\/p>/g)
      ?.map((a) => a.replace(/<p>|<\/p>/g, ""))[0];
  };
  return (
    <Section
      title="Featured Articles"
      css={{
        bg: "$backgroundSecondary",
        pb: "$8",
      }}
      id="articles"
    >
      {items?.map((item, id) => {
        const { guid, title, description, categories, thumbnail, pubDate } =
          item;
        let time = new Date(pubDate).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
        });
        return (
          <Box key={id} css={{ maxWidth: "1240px", mx: "auto",mt:"$7" }}>
            <Flex direction={{ "@initial": "column", "@md": "row" }}>
              <Box
                css={{ py: "$4", spacey: "$3", order: 2, "@md": { order: 1 } }}
              >
                <Text>{time}</Text>

                <Text
                  as="a"
                  href={guid}
                  target="_blank"
                  fontWeight={{ "@initial": "semibold" }}
                  fontSize={{ "@initial": "5", "@lg": "6" }}
                  css={{ display: "block" }}
                >
                  {title}
                </Text>
                <Text as="p" fontSize={{ "@initial": 3, "@md": 4 }}>
                  {getDescription(description)}
                </Text>
                <Flex wrap="wrap" gap={{ "@initial": "2", "@md": "3" }}>
                  {categories.map((category, id) => {
                    return <Tag key={id}>{category}</Tag>;
                  })}
                </Flex>
              </Box>
              <Box
                css={{
                  position: "relative",
                  minWidth: "240px",
                  minHeight: "180px",
                  alignSelf: "stretch",
                  order: 1,
                  "@lg": {
                    order: 2,
                    minWidth: "300px",
                  },
                  "@xl": {
                    minWidth: "350px",
                  },
                }}
              >
                <Image
                  alt="article thumbnail"
                  src={thumbnail}
                  layout="fill"
                  objectFit="cover"
                />
              </Box>
            </Flex>
          </Box>
        );
      })}
      <Flex justify={"center"} css={{ mt: "$6" }}>
        <Link href={"https://medium.com/@oluwaborihamzat"} target="_blank">
          <GradientBtn>Follow Me</GradientBtn>
        </Link>
      </Flex>
    </Section>
  );
};

const Tag = styled("button", {
  border: "none",
  outline: "none",
  background: "$textSecondary",
  color: "$backgroundSecondary",
  py: "$1",
  px: "$2",
  fontWeight: "$3",
  fontSize: "$1",
  br: "$pill",
  "@md": {
    fontSize: "$2",
  },
  "@lg": {
    fontSize: "$3",
    p: "$2",
  },
});
export default Blog;
