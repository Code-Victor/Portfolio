import React from "react";
import { Box, Container, Text,Flex } from "../base";
import {Section} from '.'
import useSWR from "swr";
import { fetcher } from "@utils";
import { Quotes } from "../icons";

interface returns {
  _id: string;
  content: string;
  author: string;
  tags: string[];
  authorSlug: string;
  length: number;
}
const url = "https://api.quotable.io/random?maxLength=100?minLength=20 ";
const DDoM = () => {
  const {data,error}=useSWR(url,fetcher<returns>);
  if(!data&&!error){
    return <Text>Loading...</Text>
  }
  if(error){
    return <Text>Failed to load</Text>
  }
  return (
    <Section title={'Daily Dose of Motivation'} css={{bg:'$backgroundSecondary'}}  centered>
        <Box css={{position:'relative',maxWidth:720,mx:'auto'}}>
          <Quotes style={{position:'absolute',top:0,opacity:0.3}} />
          <Text as="p" fontSize={{'@initial':7,'@md':9}} textAlign="center"  css={{my:'$4',fontFamily:'$greatVibes'}}>
          
           {data?.content}
          </Text>
          <Text as="h3" fontSize={{'@initial':3,'@md':5}} textAlign="center">
            {data?.author}
          </Text>
        </Box>
    </Section>

  );
};

export default DDoM;
