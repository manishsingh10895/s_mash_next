import { NotionAPI } from 'notion-client';
import { Client } from '@notionhq/client';
import dotenv from 'dotenv';
dotenv.config();

async function run2() {
    try {
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