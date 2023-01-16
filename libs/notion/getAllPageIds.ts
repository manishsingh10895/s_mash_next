import { idToUuid } from 'notion-utils'
export default function getAllPageIds(collectionQuery, viewId?) {
    const views: any = Object.values(collectionQuery)[0]
    let pageIds: string[] = []
    if (viewId) {
        const vId = idToUuid(viewId)
        pageIds = views[vId]?.blockIds
    } else {
        const pageSet = new Set<string>()
        Object.values(views).forEach((view: any) => {
            view?.collection_group_results?.blockIds?.forEach(id => pageSet.add(id))
        })
        pageIds = [...pageSet]
    }
    return pageIds
}
