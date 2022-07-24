import { getAllPosts, getAllTagsFromPosts } from '@/libs/notion';
import SearchLayout from '../../components/layouts/SearchLayout';

export default function search({ tags, posts }) {
    return <SearchLayout tags={tags} posts={posts} />
}
export async function getStaticProps() {
    const posts = await getAllPosts({ includePages: false })
    const tags = getAllTagsFromPosts(posts)
    return {
        props: {
            tags,
            posts
        },
        revalidate: 1
    }
}
