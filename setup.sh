#!/bin/bash

echo "🚀 Toku Tracker - Migration Setup Script"
echo "=========================================="
echo ""

# Step 1: Install dependencies
echo "📦 Installing dependencies..."
npm install

# Step 2: Set up Convex
echo ""
echo "🔧 Setting up Convex..."
echo "   You'll be prompted to sign in or create an account (GitHub recommended)."
echo ""
npx convex dev

# Step 3: Seed the database
echo ""
echo "🌱 Seeding the database with shows..."
echo ""
echo "   Run this command in a NEW terminal after Convex is set up:"
echo "   npx convex run progress:setShows --args \"\$(cat shows-data.json)\""
echo ""
read -p "   Have you seeded the database? (y/n) " -n 1 -r
echo ""
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
  echo "   Make sure to run the seed command above!"
fi

# Step 4: Start dev server
echo ""
echo "✅ Setup complete!"
echo ""
echo "To start the dev server:"
echo "   npm run dev"
echo ""
