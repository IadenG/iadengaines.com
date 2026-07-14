import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = await getCollection("writing", ({ data }) => !data.draft);
  return rss({
    title: "Iaden Gaines",
    description: "Permanent home for everything I write and build.",
    site: context.site,
    items: posts
      .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
      .map((post) => ({
        title: post.data.title,
        pubDate: post.data.date,
        link: `/writing/${post.id}/`,
      })),
  });
}
