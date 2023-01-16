/// File help taken from https://github.com/transitive-bullshit/nextjs-notion-starter-kit 

import got from 'got'
import lqip from 'lqip-modern'
import pMap from 'p-map'
import pMemoize from 'p-memoize'
import { ExtendedRecordMap, PreviewImage, PreviewImageMap } from 'notion-types'
import { getPageImageUrls, normalizeUrl } from 'notion-utils'
import { defaultMapImageUrl } from 'react-notion-x'


export async function getPreviewImageMap(
    recordMap: ExtendedRecordMap
): Promise<PreviewImageMap> {
    const urls: string[] = getPageImageUrls(recordMap, {
        mapImageUrl: (url, block) => defaultMapImageUrl(url, block)
    })
        .filter(Boolean)

    const previewImagesMap = Object.fromEntries(
        await pMap(
            urls,
            async (url) => {
                const cacheKey = normalizeUrl(url)
                return [cacheKey, await getPreviewImage(url, { cacheKey })]
            },
            {
                concurrency: 8
            }
        )
    )

    return previewImagesMap
}

async function createPreviewImage(
    url: string,
    { cacheKey }: { cacheKey: string }
): Promise<PreviewImage | null> {
    try {
        const { body } = await got(url, { responseType: 'buffer' })
        const result = await lqip(body)
        console.log('lqip', { ...result.metadata, url, cacheKey })

        const previewImage = {
            originalWidth: result.metadata.originalWidth,
            originalHeight: result.metadata.originalHeight,
            dataURIBase64: result.metadata.dataURIBase64
        }

        return previewImage
    } catch (err) {
        console.warn('failed to create preview image', url, err.message)
        return null
    }
}

export const getPreviewImage = pMemoize(createPreviewImage)