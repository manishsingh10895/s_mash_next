import { getTextContent, getDateValue, getPageImageUrls } from 'notion-utils'
import { NotionAPI } from 'notion-client';


async function getPageProperties(id, block, schema, authToken?) {
    const api = new NotionAPI({ authToken })
    const rawProperties = Object.entries(block?.[id]?.value?.properties || [])
    const excludeProperties = ['date', 'select', 'multi_select', 'person', 'file']
    const properties: any = {};
    for (let i = 0; i < rawProperties.length; i++) {
        const [key, val] = rawProperties[i] as [any, any];
        properties.id = id
        if (schema[key]?.type && !excludeProperties.includes(schema[key].type)) {
            properties[schema[key].name] = getTextContent(val)
        } else {
            switch (schema[key]?.type) {
                case 'date': {
                    const dateProperty = getDateValue(val)
                    // delete dateProperty['type'];
                    properties[schema[key].name] = dateProperty
                    break
                }
                case 'select':
                case 'multi_select': {
                    const selects = getTextContent(val)
                    if (selects[0]?.length) {
                        properties[schema[key].name] = selects.split(',')
                    }
                    break
                }
                case 'file': {
                    console.log(schema[key]);
                    const imageUrl = val[0]?.[1]?.[0]?.[1];
                    properties[schema[key].name] = `${imageUrl}?token_v2=${authToken}`;
                    break;
                }
                case 'person': {
                    const rawUsers = val.flat()
                    const users: any[] = []
                    for (let i = 0; i < rawUsers.length; i++) {
                        if (rawUsers[i][0][1]) {
                            const userId = rawUsers[i][0]
                            const res: any = await api.getUsers(userId)
                            const resValue =
                                res?.recordMapWithRoles?.notion_user?.[userId[1]]?.value
                            const user = {
                                id: resValue?.id,
                                first_name: resValue?.given_name,
                                last_name: resValue?.family_name,
                                profile_photo: resValue?.profile_photo
                            }
                            users.push(user)
                        }
                    }
                    properties[schema[key].name] = users
                    break
                }
                default:
                    break
            }
        }
    }
    return properties
}

export { getPageProperties as default }
