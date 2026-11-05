#!/usr/bin/env node

/**
 * Bare Project Generator
 * Uses the official Expo CLI to generate a bare React Native project tailored for Android.
 *
 * Usage:
 *   node scripts/generate-bare.js <project-name>
 */

const { execSync } = require('child_process');
const path = require('path');

const projectName = process.argv[2] || 'my-android-app';
const targetDir = path.resolve(process.cwd(), projectName);

console.log(`\n🚀 Generating bare Android project: ${projectName}...`);

try {
  // 1. Create project with blank TypeScript template using official CLI
  console.log('\n[1/3] Running official Expo CLI: npx create-expo-app...');
  execSync(`npx create-expo-app@latest "${projectName}" --template blank-typescript`, {
    stdio: 'inherit',
  });

  // 2. Prebuild bare Android native project
  console.log('\n[2/3] Generating native Android folder via npx expo prebuild...');
  execSync(`npx expo prebuild --platform android`, {
    cwd: targetDir,
    stdio: 'inherit',
  });

  console.log(`\n✅ Bare Android project successfully generated in: ${targetDir}`);
  console.log('\nTo run on Android:');
  console.log(`  cd ${projectName}`);
  console.log('  npm run android\n');
} catch (error) {
  console.error('\n❌ Error generating bare project:', error.message);
  process.exit(1);
}

