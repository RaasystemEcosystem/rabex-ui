// File: scripts/alias-refactor.js
const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath, callback);
    } else if (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.ts') || file.endsWith('.tsx')) {
      callback(fullPath);
    }
  });
}

function replaceImports(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  const original = content;

  content = content.replace(/(['"])\.\.\/(?:\.\.\/)*([^'"]+)/g, (_, quote, subPath) => {
    return `${quote}@/${subPath}`;
  });

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`✅ Updated: ${filePath}`);
  }
}

// Start walking the 'app' directory
walk(path.join(__dirname, '../app'), replaceImports);
