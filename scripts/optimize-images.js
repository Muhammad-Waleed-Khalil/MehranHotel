#!/usr/bin/env node

/**
 * Image Optimization Script
 * Converts images to WebP format and generates responsive sizes
 * Requires: sharp (npm install sharp --save-dev)
 */

import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ASSETS_DIR = path.join(__dirname, '../src/assets');
const PUBLIC_DIR = path.join(__dirname, '../public');
const OUTPUT_DIR = path.join(__dirname, '../public/optimized');

// Responsive image sizes
const SIZES = [320, 640, 768, 1024, 1280, 1536, 1920];

// Quality settings
const QUALITY = {
  webp: 80,
  jpeg: 85,
  png: 90
};

async function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

async function optimizeImage(inputPath, outputDir, filename) {
  const name = path.parse(filename).name;
  const ext = path.parse(filename).ext.toLowerCase();
  
  console.log(`Optimizing ${filename}...`);
  
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    // Generate WebP versions for all sizes
    for (const size of SIZES) {
      const outputPath = path.join(outputDir, `${name}-${size}w.webp`);
      
      await image
        .resize(size, null, {
          withoutEnlargement: true,
          fit: 'inside'
        })
        .webp({ quality: QUALITY.webp })
        .toFile(outputPath);
    }
    
    // Generate optimized original format as fallback
    const fallbackPath = path.join(outputDir, `${name}-optimized${ext}`);
    
    if (ext === '.jpg' || ext === '.jpeg') {
      await image
        .jpeg({ quality: QUALITY.jpeg, progressive: true })
        .toFile(fallbackPath);
    } else if (ext === '.png') {
      await image
        .png({ quality: QUALITY.png, progressive: true })
        .toFile(fallbackPath);
    }
    
    console.log(`✓ Optimized ${filename}`);
    
  } catch (error) {
    console.error(`✗ Failed to optimize ${filename}:`, error.message);
  }
}

async function generateImageManifest() {
  const manifest = {
    images: {},
    lastUpdated: new Date().toISOString()
  };
  
  const files = fs.readdirSync(OUTPUT_DIR);
  
  for (const file of files) {
    if (file.endsWith('.webp') || file.endsWith('.jpg') || file.endsWith('.png')) {
      const name = path.parse(file).name;
      const ext = path.parse(file).ext;
      
      if (!manifest.images[name]) {
        manifest.images[name] = {
          webp: [],
          fallback: null
        };
      }
      
      if (ext === '.webp') {
        const sizeMatch = name.match(/-(\d+)w$/);
        if (sizeMatch) {
          const size = parseInt(sizeMatch[1]);
          const baseName = name.replace(`-${size}w`, '');
          if (!manifest.images[baseName]) {
            manifest.images[baseName] = { webp: [], fallback: null };
          }
          manifest.images[baseName].webp.push({
            size,
            url: `/optimized/${file}`
          });
        }
      } else {
        const baseName = name.replace('-optimized', '');
        if (!manifest.images[baseName]) {
          manifest.images[baseName] = { webp: [], fallback: null };
        }
        manifest.images[baseName].fallback = `/optimized/${file}`;
      }
    }
  }
  
  // Sort WebP sizes
  Object.keys(manifest.images).forEach(key => {
    if (manifest.images[key].webp) {
      manifest.images[key].webp.sort((a, b) => a.size - b.size);
    }
  });
  
  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'manifest.json'),
    JSON.stringify(manifest, null, 2)
  );
  
  console.log('✓ Generated image manifest');
}

async function main() {
  console.log('🖼️  Starting image optimization...');
  
  await ensureDir(OUTPUT_DIR);
  
  console.log(`📁 Assets directory: ${ASSETS_DIR}`);
  console.log(`📁 Public directory: ${PUBLIC_DIR}`);
  console.log(`📁 Output directory: ${OUTPUT_DIR}`);
  
  // Process assets directory
  if (fs.existsSync(ASSETS_DIR)) {
    console.log('✓ Assets directory found');
    const files = fs.readdirSync(ASSETS_DIR);
    const imageFiles = files.filter(file => 
      /\.(jpg|jpeg|png)$/i.test(file)
    );
    
    console.log(`📸 Found ${imageFiles.length} images in assets:`, imageFiles);
    
    for (const file of imageFiles) {
      const inputPath = path.join(ASSETS_DIR, file);
      await optimizeImage(inputPath, OUTPUT_DIR, file);
    }
  } else {
    console.log('⚠️  Assets directory not found');
  }
  
  // Process public directory
  if (fs.existsSync(PUBLIC_DIR)) {
    console.log('✓ Public directory found');
    const files = fs.readdirSync(PUBLIC_DIR);
    const imageFiles = files.filter(file => 
      /\.(jpg|jpeg|png)$/i.test(file)
    );
    
    console.log(`📸 Found ${imageFiles.length} images in public:`, imageFiles);
    
    for (const file of imageFiles) {
      const inputPath = path.join(PUBLIC_DIR, file);
      await optimizeImage(inputPath, OUTPUT_DIR, file);
    }
  } else {
    console.log('⚠️  Public directory not found');
  }
  
  await generateImageManifest();
  
  console.log('🎉 Image optimization complete!');
  console.log(`📁 Optimized images saved to: ${OUTPUT_DIR}`);
  console.log('📋 Next steps:');
  console.log('1. Update your OptimizedImage component to use the new optimized images');
  console.log('2. Update your preload links to use WebP format');
  console.log('3. Test the performance improvements');
}

// Run the script if called directly
if (import.meta.url === `file://${process.argv[1]}` || process.argv[1].endsWith('optimize-images.js')) {
  main().catch(console.error);
}

export { optimizeImage, generateImageManifest };
