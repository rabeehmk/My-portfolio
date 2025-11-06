const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

console.log('🚀 Starting Firebase deployment...\n');

// Read package.json
const packageJsonPath = path.join(__dirname, 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
const originalHomepage = packageJson.homepage;

// Step 1: Remove homepage field and set PUBLIC_URL for Firebase
console.log('📝 Removing homepage field for Firebase build...');
delete packageJson.homepage;
// Set PUBLIC_URL to empty for Firebase (root domain)
process.env.PUBLIC_URL = '';
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');

try {
  // Step 2: Clean build directory to ensure fresh build
  console.log('🧹 Cleaning build directory...');
  const buildPath = path.join(__dirname, 'build');
  if (fs.existsSync(buildPath)) {
    fs.rmSync(buildPath, { recursive: true, force: true });
  }

  // Step 3: Clean npm cache and node_modules if needed
  console.log('🔧 Ensuring clean environment...');
  
  // Step 4: Build with production mode and empty PUBLIC_URL for Firebase
  console.log('🔨 Building for Firebase...');
  // Use cross-env to set PUBLIC_URL to empty string for Firebase
  execSync('cross-env PUBLIC_URL= npm run build', { 
    stdio: 'inherit', 
    cwd: __dirname,
    env: { ...process.env, NODE_ENV: 'production', CI: 'true' }
  });
  
  // Verify build output
  if (!fs.existsSync(buildPath)) {
    throw new Error('Build failed - build directory not found');
  }
  
  const indexHtmlPath = path.join(buildPath, 'index.html');
  if (!fs.existsSync(indexHtmlPath)) {
    throw new Error('Build failed - index.html not found in build directory');
  }
  
  console.log('✅ Build verification passed');

  // Step 5: Deploy to Firebase with force flag to bypass cache
  console.log('🌐 Deploying to Firebase...');
  execSync('firebase deploy --only hosting --force', { stdio: 'inherit', cwd: __dirname });

  console.log('\n✅ Firebase deployment complete!');
  console.log('🌐 Your site is live at: https://rabeeh-mk.web.app');
  console.log('💡 Changes will appear immediately - no refresh needed!');
} catch (error) {
  console.error('\n❌ Deployment failed:', error.message);
  process.exit(1);
} finally {
  // Step 5: Restore homepage field
  console.log('📝 Restoring homepage field for GitHub Pages...');
  packageJson.homepage = originalHomepage;
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');
  console.log('✅ Homepage field restored.\n');
}

