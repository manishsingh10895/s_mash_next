import BLOG, { notionAccessToken } from '@/blog.config'
import { NotionAPI } from 'notion-client'
import { idToUuid } from 'notion-utils'
import getAllPageIds from './getAllPageIds'
import getPageProperties from './getPageProperties'
import filterPublishedPosts from './filterPublishedPosts'
import { Client } from '@notionhq/client';
/**
 * @param {{ includePages: boolean }} - false: posts only / true: include pages
 */
export async function getAllPosts({ includePages = false }) {
    try {
        let id = BLOG.notionPageId as string;
        const authToken = BLOG.notionAccessToken || undefined

        const api = new NotionAPI({ authToken })
        const notion = new Client({ auth: process.env.NOTION_ACCESS_TOKEN });

        const response: any = await api.getPage(id, {
            signFileUrls: true,
        })

        id = idToUuid(id)
        const collection = (Object.values(response.collection)[0] as any)?.value
        const collectionQuery = response.collection_query
        const block = response.block
        const schema = collection?.schema

        const rawMetadata = block[id].value

        const res = await notion.databases.query({
            database_id: id,
        });

        ///Results from notionhq client
        const notionHqResults = res.results;

        // Check Type
        if (
            rawMetadata?.type !== 'collection_view_page' &&
            rawMetadata?.type !== 'collection_view'
        ) {
            console.log(`pageId "${id}" is not a database`)
            return null
        } else {
            // Construct Data
            const pageIds = getAllPageIds(collectionQuery)
            const data: any[] = []
            for (let i = 0; i < pageIds.length; i++) {
                const id = pageIds[i]
                const properties = (await getPageProperties(id, block, schema, authToken)) || null
                const notionHqPage = notionHqResults.find(p => p.id == id);

                if (notionHqPage && notionHqPage['cover']) {
                    let url;
                    if (notionHqPage['cover'].type == 'external') {
                        url = notionHqPage['cover'].external.url;
                    } else if (notionHqPage['cover'].type == 'file') {
                        url = notionHqPage['cover'].file.url;
                    }
                    properties.cover = url;
                }

                // Add fullwidth, createdtime to properties
                properties.createdTime = new Date(
                    block[id].value?.created_time
                ).toString()
                properties.fullWidth = block[id].value?.format?.page_full_width ?? false

                data.push(properties)
            }

            // remove all the the items doesn't meet requirements
            const posts = filterPublishedPosts({ posts: data, includePages })

            // Sort by date
            if (BLOG.sortByDate) {
                posts.sort((a, b) => {
                    const dateA = new Date(a?.date?.start_date || a.createdTime)
                    const dateB = new Date(b?.date?.start_date || b.createdTime)
                    return dateB.getUTCMilliseconds() - dateA.getUTCMilliseconds()
                })
            }
            return posts
        }
    } catch (error) {
        console.error('[ERROR GETTING ALL POSTS]');
        console.error(error);

        throw error;
    }
}
