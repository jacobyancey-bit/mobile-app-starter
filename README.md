# Mobile App Starter (Android)

A bare, production-ready mobile starter template tailored specifically for **Android** applications. This project contains **zero business logic** and strictly non-negotiable infrastructure code: strict design tokens, accessible auth screens, environment configs, and Android native build setups.

---

## 📁 Project Structure

```text
mobile-app-starter/
├── assets/                       # App icons, splash screens, adaptive icons
├── scripts/
│   ├── generate-bare.js          # CLI helper to generate bare project from scratch
│   └── generate-assets.js        # Minimal asset validator
├── src/
│   ├── config/
│   │   ├── env.ts                # Type-safe environment variable mapping
│   │   └── constants.ts          # Android platform constants & layout rules
│   ├── tokens/                   # Strict design token system
│   │   ├── colors.ts             # Light & Dark color tokens (semantic & surface)
│   │   ├── typography.ts         # Font sizes, line heights, weights & text variants
│   │   ├── spacing.ts            # 4pt/8pt grid spacing scale
│   │   ├── radii.ts              # Border radius tokens
│   │   ├── elevation.ts          # Android elevation levels (1dp - 16dp)
│   │   └── index.ts              # ThemeProvider & useTheme hook
│   ├── components/
│   │   └── common/               # Pure UI primitives (no business logic)
│   │       ├── ScreenContainer.tsx # Android status bar, keyboard avoiding, safe area
│   │       ├── AppText.tsx       # Typography-driven text component
│   │       ├── AppButton.tsx     # Ripple-enabled Android button with loading state
│   │       ├── AppTextInput.tsx  # Accessible input with error, label & password toggle
│   │       └── index.ts
│   ├── screens/
│   │   └── auth/                 # Non-negotiable Auth screen scaffolds
│   │       ├── LoginScreen.tsx
│   │       ├── RegisterScreen.tsx
│   │       ├── ForgotPasswordScreen.tsx
│   │       └── index.ts
│   └── navigation/
│       ├── types.ts              # Auth stack route definitions
│       ├── AuthNavigator.tsx     # Pluggable auth flow state coordinator
│       └── index.ts
├── .env.example                  # Environment configuration template
├── .gitignore                    # Optimized for Android & React Native artifacts
├── app.json                      # Configured specifically for Android
├── eas.json                      # EAS Build profiles (debug APK, preview APK, release AAB)
├── package.json                  # Scripts & dependencies
├── tsconfig.json                 # Path aliases (@/*, @tokens/*, @components/*, etc.)
└── App.tsx                       # Root entry point with Theme & Safe Area providers
```

---

## 🛠️ Official CLI Generation Commands

You can generate a bare project from scratch using the official CLI at any time on your machine:

```powershell
# 1. Initialize fresh project with the official Expo CLI
npx create-expo-app@latest mobile-app-starter --template blank-typescript

# 2. Enter directory
cd mobile-app-starter

# 3. Generate native Android folder (Bare Workflow prebuild)
npx expo prebuild --platform android
```

Or run the included generation script:
```powershell
node scripts/generate-bare.js my-new-app
```

---

## 🚀 Running on Android

### Prerequisites
- Node.js (v18+)
- Java JDK 17+
- Android Studio with Android SDK & Platform Tools (or an active emulator/USB device)

### Quick Start
```powershell
# 1. Install dependencies
npm install

# 2. Verify placeholder assets
node scripts/generate-assets.js

# 3. Launch on connected Android device or emulator
npm run android
```

---

## 📦 Creating and Pushing to a GitHub Repository

To turn this directory into a Git repository and push it to GitHub:

```powershell
cd C:\Users\jacob\mobile-app-starter

# 1. Initialize local git repo
git init

# 2. Stage all files
git add .

# 3. Create initial commit
git commit -m "feat: initial commit for mobile-app-starter (Android)"

# 4. Rename main branch
git branch -M main

# 5. Link to your GitHub repository (replace with your repo URL)
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/mobile-app-starter.git

# 6. Push to GitHub
git push -u origin main
```

Once pushed, you can clone it anywhere:
```powershell
git clone https://github.com/<YOUR_GITHUB_USERNAME>/mobile-app-starter.git
```

---

## 🎨 Design Tokens & Customization

All design tokens are located in `src/tokens/`. The project supports automatic system appearance switching as well as manual theme toggling via `useTheme()`:

```tsx
import { useTheme } from '@/tokens';

const { colors, spacing, radii, elevations, isDark, setThemeMode } = useTheme();
```

