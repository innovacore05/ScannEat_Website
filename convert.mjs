import sharp from "sharp";

const fotos = ["brittany", "alisson", "johan", "franciny", "laura"];

for (const nombre of fotos) {
  await sharp(`public/${nombre}.jpg`)
    .resize({ width: 900 })
    .webp({ quality: 78 })
    .toFile(`public/${nombre}.webp`);
  console.log(`listo: ${nombre}.webp`);
}
