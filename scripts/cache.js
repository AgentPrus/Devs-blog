const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const postData = () => {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");

    const markDownWithMeta = fs.readFileSync(
      path.join("posts", fileName),
      "utf-8"
    );
    const { data: frontmatter } = matter(markDownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return `export const posts = ${JSON.stringify(posts)}`;
};

try {
  fs.readdirSync("cache");
} catch (error) {
  fs.mkdirSync("cache");
}

fs.writeFile("cache/data.js", postData(), (error) => {
  if (error) return console.log(error);
  console.log("Posts cached");
});
