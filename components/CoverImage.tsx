import React, { useCallback, useEffect, useState } from 'react'
import Image from 'next/image';
import { Box } from '@chakra-ui/react';
import { QueryKey, useQuery } from '@tanstack/react-query';
import { coverBlurDataUrl } from '../libs/image-data';

type Props = {
    alt: string,
    source: string,
}

const UNSPLASH_API_KEY = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;

const getRandomImage = async () => {
    try {
        const res = await fetch(`https://api.unsplash.com/photos/random?client_id=${UNSPLASH_API_KEY}&query=programming&orientation=landscape`);
        if (res.ok)
            return await res.json();
        else throw new Error(res.statusText);
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export default function CoverImage(props: Props) {
    const { alt, source } = props;

    const [src, setSrc] = useState(source);

    const [toFetchUnsplashImage, setToFetchUnsplashImage] = useState(false);

    const { data, isFetching, isLoading, error, isError, remove, isFetched } = useQuery(['coverImage'], getRandomImage, {
        enabled: toFetchUnsplashImage,
        refetchOnMount: false,
        retry: false,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
        refetchInterval: 1000 * 60 * 60 * 24,
    });

    // Where is current image fetching from
    // Can be 'notion', 'unsplash', 'local'
    const [imageParent, setImageParent] = useState<'notion' | 'unsplash' | 'local'>('notion');

    useEffect(() => {
        if (typeof source == 'undefined' || source == null) {
            setToFetchUnsplashImage(true);
            setImageParent('unsplash');
        }
    }, [source]);

    const imageErrorCallback = useCallback(() => {
        console.log('[ON Image Error]');

        if (imageParent == 'notion') {
            setToFetchUnsplashImage(true);
            setImageParent('unsplash');
        } else if (imageParent == 'unsplash') {
            remove();
            setImageParent('local');
            setSrc('/images/default-cover.jpg');
        }
    }, [imageParent, remove]);

    useEffect(() => {
        if (!isError && isFetched) {
            setSrc(data.urls['regular']);
        } else if (isError) {
            remove();
            setImageParent('local');
            setSrc('/images/default-cover.jpg');
        }
    }, [isFetched, data, isError, remove]);

    return (
        <Box h={`46vw`}
            overflowX={'hidden'}
            marginLeft={`calc((100% - 100vw) / 2)`}
            w={'calc(100vw - 0.1rem)'}
            maxW={'100vw'} position="relative">
            {
                src && <Image
                    priority={true}
                    loading='eager'
                    blurDataURL={coverBlurDataUrl}
                    placeholder='blur' objectFit='cover'
                    style={{ overflowX: 'hidden' }} layout='fill' alt={alt} src={src}
                    onError={imageErrorCallback}
                >
                </Image>
            }
        </Box>
    )
}
