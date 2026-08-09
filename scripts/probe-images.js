const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

function walk(dir, out) {
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) walk(p, out);
    else if (/\.(jpg|jpeg|png)$/i.test(f)) out.push(p);
  }
}

async function run() {
  const files = [];
  walk(path.join(__dirname, "..", "public/images"), files);
  for (const f of files) {
    const meta = await sharp(f).metadata();
    console.log(
      path.relative(path.join(__dirname, ".."), f),
      `${meta.width}x${meta.height}`,
      (meta.width / meta.height).toFixed(3)
    );
  }
}

run();
