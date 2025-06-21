// copyAbis.js
const fs = require("fs");
const path = require("path");

const contracts = [
  "Raaskoin",
  "Raastoken",
  "Rabex",
  "Raaswallet",
  "Raaspay",
  "GoldPriceOracle"
];

const sourceDir = path.join(__dirname, "@/build/contracts");
const destDir = path.join(__dirname, "@/frontend/contracts/abis");

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

contracts.forEach((contract) => {
  const sourceFile = path.join(sourceDir, `${contract}.json`);
  const destFile = path.join(destDir, `${contract}.json`);
  
  if (fs.existsSync(sourceFile)) {
    const content = JSON.parse(fs.readFileSync(sourceFile));
    fs.writeFileSync(destFile, JSON.stringify(content.abi, null, 2));
    console.log(`✅ Copied ABI for ${contract}`);
  } else {
    console.warn(`⚠️ ABI for ${contract} not found in build/contracts.`);
  }
});
