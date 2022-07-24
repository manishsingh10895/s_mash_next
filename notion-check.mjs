import { NotionAPI } from 'notion-client';
import { Client } from '@notionhq/client';
import dotenv from 'dotenv';
dotenv.config();

async function run2() {
    try {
        let ids = [
            "a44bebdf-727a-4d11-9baa-659b41c4dd95",
            "f5e938d3-5f02-460c-96ac-d958cfa95cde",
            "21980a80-c984-4bf5-8222-8adc1472c60d",
            "37f2f933-c5d2-4f73-8b20-36f810a0cbb0",
            "e57664f8-11b0-4364-a01c-561a4bd21615",
            "e65dd846-20e4-4ea5-8b29-c77a155f41bc",
            "72002204-daff-44e6-ab8c-74fe85d40c7b",
            "6a15329a-6662-4beb-9e61-4870221f8210",
            "1092cad6-3dfe-466f-b987-eb440366e8ca",
            "cbfc8fa8-0464-4b17-bf6d-00e8006cc0f6",
            "1a3b4c4a-6f3f-45de-a86e-b425f6a8c29f",
            "5aaae4fb-165e-4e46-8c05-c1f5e3d74083",
            "27dbd4f4-e884-46fe-bb3a-198b28da0175",
            "c6e71a22-6e5e-4f73-a1aa-1521a6fb93ec",
            "63810343-077e-45b3-b656-bb8fddc7079d",
            "831d0de4-1b36-4d94-8a2a-0d01c7bdc75f",
            "3f956df0-179d-4182-97f4-a2955aa1f453",
            "dd3fc859-8c6d-4d08-b5e6-c5e83d7c4573",
            "ad78b7a8-8971-4ebb-902b-37bd09602782",
            "2070dd8a-3163-49d9-8619-f296b71b095a",
            "0ec98b74-df48-41fb-bd19-4edb80cfd16a",
            "b617969d-3f30-486c-a02c-d9c13a35892e",
            "c89c982f-729e-42eb-957b-7bdfe2f6ce29",
            "69488c07-37ef-4faf-b1b1-e2fedf4f54ed",
            "2f0b003d-c157-4645-ae2c-3e5bf21bc53d",
            "930ffd06-4399-4065-b10b-5ab61b6e6da7",
            "89337b4e-d5d4-4d34-8f99-1ef251b767ba",
            "3a456f59-ba7e-4489-99f5-4d541a82bcab",
        ];
        const notion = new Client({
            auth: process.env.NOTION_ACCESS_TOKEN
        });
        const res = await notion.databases.query({
            database_id: process.env.NOTION_PAGE_ID,
        });

        // const page = await notion.pages.retrieve({page_id: ids[0]});

        // console.log(page);

        console.log(res);

        // const users = await notion.users.list({});

        // console.log(users);
    } catch (error) {
        console.error(error);
    } finally {
        process.exit(0);
    }
}

async function run() {
    try {
        const pageId = process.env.NOTION_PAGE_ID;
        const authToken = process.env.NOTION_ACCESS_TOKEN;
        console.log('[AUTH TOKEN]', authToken);
        console.log('[PAGE ID]', pageId);
        const api = new NotionAPI({ authToken })
        const response = await api.getPage(pageId)
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

run2();