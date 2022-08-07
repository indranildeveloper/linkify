const express = require("express");
const cors = require("cors");
const cheerio = require("cheerio");
const extractUrls = require("extract-urls");
const fetch = require("node-fetch");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server running...");
});

app.post("/", async (req, res) => {
  try {
    const scrapeMetatags = (text) => {
      const urls = extractUrls(text);
      const requests = urls.map(async (url) => {
        const res = await fetch(url);
        const html = await res.text();
        const $ = cheerio.load(html);

        const getMetaTag = (name) =>
          $(`meta[name=${name}]`).attr("content") ||
          $(`meta[property="og:${name}"]`).attr("content") ||
          $(`meta[name="twitter${name}"]`).attr("content");

        return {
          url,
          title: $("title").first().text(),
          description: getMetaTag("description"),
          image: getMetaTag("image"),
          author: getMetaTag("author"),
        };
      });

      return Promise.all(requests);
    };
    const body = JSON.parse(JSON.stringify(req.body));
    const data = await scrapeMetatags(body.text);
    return res.json(data);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
});

const port = process.env.PORT || 8000;

app.listen(port, () => console.log("Server running..."));
