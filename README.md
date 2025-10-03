# 🎯 React Native Onboarding Screens

A modern, beautiful onboarding experience built with React Native, Expo, and NativeWind. This project showcases best practices for creating smooth, accessible onboarding flows with a professional design system.

## ✨ Features

- 🎨 **Modern UI Design** - Clean, professional interface with smooth transitions
- 🎭 **Beautiful Color Palette** - Carefully crafted color scheme with semantic colors
- 📱 **Responsive Layout** - Adapts to different screen sizes using relative dimensions
- 🖼️ **Optimized Images** - Uses Expo Image for better performance
- 🎪 **Smooth Animations** - Polished transitions between slides
- 💅 **NativeWind Styling** - Tailwind CSS-like utility classes for React Native
- 📦 **Type-Safe** - Full TypeScript support with organized types
- 🧩 **Modular Architecture** - Well-organized constants, types, and components

## 🚀 Tech Stack

- **[React Native](https://reactnative.dev/)** - Cross-platform mobile framework
- **[Expo](https://expo.dev)** - Development platform and tooling
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety and better DX
- **[NativeWind](https://www.nativewind.dev/)** - Tailwind CSS for React Native
- **[Expo Router](https://docs.expo.dev/router/introduction/)** - File-based routing
- **[Expo Image](https://docs.expo.dev/versions/latest/sdk/image/)** - Optimized image component
- **[React Native App Intro Slider](https://github.com/Jacse/react-native-app-intro-slider)** - Smooth onboarding slider

## 📁 Project Structure

```
onboarding-screens/
├── src/
│   ├── app/                    # Expo Router pages
│   │   ├── _layout.tsx        # Root layout
│   │   └── index.tsx          # Main entry point
│   ├── screens/               # Screen components
│   │   └── onboarding.tsx     # Onboarding screen
│   ├── constants/             # App constants
│   │   └── app.constants.tsx  # Colors, dimensions, spacing, slides
│   └── types/                 # TypeScript types
│       └── onboarding.types.ts # Onboarding-related types
├── assets/
│   └── images/                # Image assets
│       ├── onboarding-1.png
│       ├── onboarding-2.png
│       └── onboarding-3.png
└── ...
```

## 🎨 Design System

The app includes a comprehensive design system with:

- **Colors** - Primary, secondary, semantic, text, and border colors
- **Typography** - Predefined font sizes (xs to huge)
- **Spacing** - Consistent spacing scale (xs to xxl)
- **Dimensions** - Responsive dimensions based on screen size
- **Border Radius** - Consistent rounded corners

All design tokens are centralized in `src/constants/app.constants.tsx` for easy customization.

## 🛠️ Get Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- iOS Simulator (Mac only) or Android Emulator

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd onboarding-screens
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npx expo start
   ```

4. **Run on your device**
   - Press `a` for Android emulator
   - Press `i` for iOS simulator
   - Scan QR code with Expo Go app on your physical device

## 📝 Customization

### Modify Onboarding Slides

Edit `src/constants/app.constants.tsx`:

```typescript
export const ONBOARDING_SLIDES: Slide[] = [
  {
    key: 'one',
    title: 'Your Title',
    text: 'Your description',
    image: require('@img/your-image.png'),
    backgroundColor: COLORS.slides.one,
  },
  // Add more slides...
]
```

### Customize Colors

Update the color palette in `src/constants/app.constants.tsx`:

```typescript
export const COLORS = {
  primary: '#3B82F6',
  // Customize your colors...
}
```

### Adjust Dimensions

Modify responsive dimensions in `src/constants/app.constants.tsx`:

```typescript
export const DIMENSIONS = {
  imageHeight: SCREEN_HEIGHT * 0.4,
  imageWidth: SCREEN_WIDTH * 0.85,
  // Adjust as needed...
}
```

## 🎯 Path Aliases

The project uses TypeScript path aliases for cleaner imports:

- `@/` → `src/`
- `@constants/` → `src/constants/`
- `@screens/` → `src/screens/`
- `@types/` → `src/types/`
- `@img/` → `assets/images/`

## 🧪 Scripts

- `npm start` - Start Expo development server
- `npm run android` - Run on Android
- `npm run ios` - Run on iOS
- `npm run web` - Run on web

## 📚 Learn More

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [NativeWind Documentation](https://www.nativewind.dev/)
- [Expo Router Documentation](https://docs.expo.dev/router/introduction/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

---

Built with ❤️ using React Native and Expo
