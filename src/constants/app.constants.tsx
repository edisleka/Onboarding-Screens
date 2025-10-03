import { Slide } from '@/types/onboarding.types'
import { Dimensions } from 'react-native'

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const

export const FONT_SIZE = {
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20,
  xxl: 24,
  xxxl: 32,
  huge: 40,
} as const

export const COLORS = {
  // Primary brand colors - Modern blue palette
  primary: '#3B82F6', // Bright blue
  primaryDark: '#2563EB', // Darker blue
  primaryLight: '#60A5FA', // Light blue

  // Secondary accent colors
  secondary: '#8B5CF6', // Purple
  secondaryLight: '#A78BFA',
  accent: '#EC4899', // Pink

  // Semantic colors
  success: '#10B981', // Green
  warning: '#F59E0B', // Amber
  error: '#EF4444', // Red
  info: '#3B82F6', // Blue

  // Neutral colors
  background: '#FFFFFF',
  backgroundAlt: '#F9FAFB',
  surface: '#FFFFFF',

  // Text colors
  text: {
    primary: '#111827', // Almost black
    secondary: '#6B7280', // Medium gray
    tertiary: '#9CA3AF', // Light gray
    inverse: '#FFFFFF', // White text
  },

  // Border colors
  border: {
    light: '#E5E7EB',
    medium: '#D1D5DB',
    dark: '#9CA3AF',
  },

  // Dot pagination colors
  dot: {
    inactive: '#D1D5DB',
    active: '#3B82F6',
  },

  // Onboarding slide backgrounds
  slides: {
    one: '#EEF2FF', // Indigo tint
    two: '#F0FDFA', // Teal tint
    three: '#FEF3E2', // Amber tint
  },
} as const

export const DIMENSIONS = {
  screenWidth: SCREEN_WIDTH,
  screenHeight: SCREEN_HEIGHT,
  imageHeight: SCREEN_HEIGHT * 0.4,
  imageWidth: SCREEN_WIDTH * 0.85,
  buttonMinWidth: 80,
} as const

export const BORDER_RADIUS = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  full: 9999,
} as const

export const ONBOARDING_SLIDES: Slide[] = [
  {
    key: 'one',
    title: 'Welcome',
    text: 'Simple onboarding with React Native',
    image: require('@img/onboarding-1.png'),
    backgroundColor: COLORS.slides.one,
  },
  {
    key: 'two',
    title: 'Fast Setup',
    text: 'Built using Expo and ready to go',
    image: require('@img/onboarding-2.png'),
    backgroundColor: COLORS.slides.two,
  },
  {
    key: 'three',
    title: 'Get Started',
    text: "Let's dive in and start building something amazing!",
    image: require('@img/onboarding-3.png'),
    backgroundColor: COLORS.slides.three,
  },
]
