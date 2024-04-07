import { Client, isFullPage, isNotionClientError } from "@notionhq/client";

export default class NotionClient {
  #secret = process.env.NOTION_DATABASE_SECRET;
  #dbId = process.env.NOTION_DATABASE_ID;

  constructor() {
    this.client = new Client({
      auth: this.#secret,
    });
  }

  async getDatabase() {
    try {
      if (!this.#dbId) return;
      const response = await this.client.databases.query({
        database_id: this.#dbId,
        
      });
      console.log(response);

      return response.results;
    } catch (error) {
      console.error(error);
      if (isNotionClientError(error)) {
      }
    }
  }

  async getTags() {
    const postData = await this.getPosts();
    const posts = typeof postData !== undefined ? postData.posts : [];
    if (!posts) return [];

    let tags = [];
    for (let i = 0; i < posts.length; i++) {
      const element = posts[i];
      if (!element?.tags) continue;
      for (let j = 0; j < element.tags.length; j++) {
        const tag = element.tags[j];
        if (!tag) continue;
        if (tags.map((x) => x.id).includes(tag.id)) continue;
        tags = [...tags, tag];
      }
    }

    return Array.from(tags.values());
  }
  static getColumns(post) {
    const title =
      post.properties["Name"]?.type === "title" &&
      post.properties["Name"]?.["title"]?.[0]?.type === "text"
        ? post.properties["Name"]["title"][0].plain_text
        : null;
    const status =
      (post.properties["Status"]?.type === "status" &&
        post.properties.Status.status?.name) ||
      null;
    const tags =
      (post.properties["Tags"]?.type == "multi_select" &&
        post.properties.Tags?.multi_select) ||
      null;
    const desc =
      post.properties["Description"]?.type == "rich_text" &&
      post.properties.Description?.rich_text[0]?.type == "text"
        ? post.properties.Description?.rich_text[0]?.plain_text
        : null;
    const cover =
      post.cover?.type === "external"
        ? post.cover.external.url
        : post.cover?.file.url || null;


    return { title, status, tags, cover, desc };
  }
  async getPosts( page = 0, strt, ...tag) {
    try {
      if (!this.#dbId) return;
      const response =
        strt === null
          ? await this.client.databases.query({
              database_id: this.#dbId ,
              page_size: page,
              filter: {
                and: [
                  ...tag.map((item) => ({
                    property: "Tags",
                    multi_select: {
                      contains: item ?? "",
                    },
                  })),
                  {
                    property: "Status",
                    status: {
                      equals: "Done",
                    },
                  },
                ],
              },
            })
          : await this.client.databases.query({
              database_id : this.#dbId ,
              page_size: page,
              start_cursor: strt,
              filter: {
                and: [
                  ...tag.map((item) => ({
                    property: "Tags",
                    multi_select: {
                      contains: item ?? "",
                    },
                  })),
                  {
                    property: "Status",
                    status: {
                      equals: "Done",
                    },
                  },
                ],
              },
            });
           
      const database = response.results;
      let posts = [];

      for (let index = 0; index < database.length; index++) {
        const element = database[index];
        if (!isFullPage(element)) continue;
        const column = NotionClient.getColumns(element);
        const post = {
          id: element.id,
          url: element.url,
          created_time: element.created_time,
          last_edited_time: element.last_edited_time,

          ...column,
        };

        posts = [...posts, post];
      }
      const hasMore = response.has_more;
      const nextCursor = response.next_cursor;

      return { posts, hasMore, nextCursor };
    } catch (error) {
      console.log(error);
      if (isNotionClientError(error)) {
        // Handle Notion-specific errors
      }
    }
  }

  async getPage(page_id) {
    try {
      return await this.client.pages.retrieve({
        page_id,
      });
    } catch (error) {
      console.error(error);
      if (isNotionClientError(error)) {
      }
    }
  }

  async getBlocks(block_id, page_size = 90) {
    try {
      return await this.client.blocks.children.list({
        block_id,
        page_size,
      });
    } catch (error) {
      console.error(error);
      if (isNotionClientError(error)) {
      }
    }
  }
}
