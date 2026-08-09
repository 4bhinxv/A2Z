const sharp = require("sharp");
const path = require("path");

const WIDTH = 1200;
const HEIGHT = 630;

const svg = `
<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="fade" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0%" stop-color="#0e0d10" stop-opacity="1" />
      <stop offset="55%" stop-color="#0e0d10" stop-opacity="0.75" />
      <stop offset="100%" stop-color="#0e0d10" stop-opacity="0.25" />
    </linearGradient>
    <linearGradient id="side" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0e0d10" stop-opacity="0.95" />
      <stop offset="45%" stop-color="#0e0d10" stop-opacity="0.15" />
      <stop offset="100%" stop-color="#0e0d10" stop-opacity="0" />
    </linearGradient>
    <linearGradient id="gold" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#f6dfa6" />
      <stop offset="100%" stop-color="#c78a24" />
    </linearGradient>
  </defs>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#fade)" />
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#side)" />
  <circle cx="1000" cy="140" r="260" fill="#e3b155" opacity="0.16" />
  <text x="80" y="330" font-family="Arial, sans-serif" font-size="88" font-weight="700" fill="#f5f3ee" letter-spacing="1">
    AUTO<tspan fill="url(#gold)">GLOSS</tspan>
  </text>
  <text x="82" y="390" font-family="Arial, sans-serif" font-size="34" font-weight="500" fill="#c9c5be">
    Dubinsko pranje vozila i nameštaja
  </text>
  <text x="82" y="440" font-family="Arial, sans-serif" font-size="26" font-weight="400" fill="#9a9691">
    Smederevo i okolina — dolazimo na vašu adresu
  </text>
</svg>
`;

async function run() {
  const bgPath = path.join(
    __dirname,
    "..",
    "public/images/gallery/vw-interior.jpg"
  );
  const outPath = path.join(__dirname, "..", "public/og-image.jpg");

  const bg = await sharp(bgPath)
    .resize(WIDTH, HEIGHT, { fit: "cover", position: "attention" })
    .toBuffer();

  await sharp(bg)
    .composite([{ input: Buffer.from(svg), top: 0, left: 0 }])
    .jpeg({ quality: 88 })
    .toFile(outPath);

  console.log("OG image written to", outPath);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
