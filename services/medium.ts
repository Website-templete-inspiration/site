import Parser from "rss-parser";
import {SocialMediaUser} from "../_data/social-media";
import {MediumPost} from "./interfaces/MediumPost";
import {JSDOM} from "jsdom";
import {Post} from "./interfaces/Post";

export async function getFeed(): Promise<MediumPost[]> {
    const parser = new Parser();

    const {items} = await parser.parseURL(
        "https://medium.com/feed/" + SocialMediaUser.Medium
    );

    return items as MediumPost[];
}

export async function getMediumPosts(): Promise<Post[]> {
    const items = await getFeed();
    return items
        .filter((post, index) => (index < 6)) // Yes I want to take only the last six
        .map((item, index) => {
            const content = item["content:encoded"];
            const dom = new JSDOM(content);
            let date = new Date(item.isoDate);

            return {
                id: item.guid,
                image: dom.window.document.querySelector("img").src.replace("max/1024", "max/3840"),
                title: item.title,
                link: item.link,
                tags: item.categories,
                pubDate: item.pubDate,
                date: date.getTime(),
                creator: item.creator
            };
        }).sort(function (a, b) {
            return b.date - a.date;
        }) as Post[];
}