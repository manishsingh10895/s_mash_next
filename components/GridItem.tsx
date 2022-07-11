import { Box, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';
import React, { Children } from 'react'
import Image, { StaticImageData } from 'next/image';
import NextLink from 'next/link';
import { Global } from '@emotion/react';

type GridItemProps = {
    children: any,
    href?: string,
    id?: string,
    title: string,
    thumbnail: StaticImageData | string,
}

export function GridItem(props: GridItemProps) {
    const { children, href, title, thumbnail } = props;

    return <Box w="100%" textAlign={'center'}>
        <LinkBox cursor={'pointer'}>
            <Image src={thumbnail} alt={title} className={`grid-item-thumbnail`}
                placeholder={`blur`}
                loading="lazy"
            >
                <LinkOverlay href={href} target="_blank">
                    <Text mt={2}>{title}</Text>
                </LinkOverlay>
                <Text fontSize={14}>{children}</Text>
            </Image>
        </LinkBox>
    </Box>
}


export function WorkGridItem(props: GridItemProps) {
    const { id } = props;
    return (
        <Box w="100%" textAlign={'center'}>
            {/* <NextLink href={`works/${id}`} scroll={false}> */}
                {/* <LinkBox cursor={'pointer'}> */}
                    <Image src={props.thumbnail} alt={props.title} className={`grid-item-thumbnail`} placeholder='blur' />
                    {/* <LinkOverlay href={`works/${id}`}> */}
                        <Text mt={2} fontSize={20}>
                            {props.title}
                        </Text>
                    {/* </LinkOverlay> */}
                    <Text fontSize={14}>{props.children}</Text>
                {/* </LinkBox> */}
            {/* </NextLink> */}
        </Box>
    )
}

export const GridItemStyle = () => (
    <Global styles={`
            .grid-item-thumbnail {
                border-radius: 12px;
            }`}
    />
)