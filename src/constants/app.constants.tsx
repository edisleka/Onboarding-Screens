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
  primary: '#4A90E2',
  primaryDark: '#357ABD',
  secondary: '#50E3C2',
  background: '#FFFFFF',
  text: {
    primary: '#1A1A1A',
    secondary: '#666666',
    light: '#999999',
  },
  border: {
    light: '#E0E0E0',
    medium: '#CCCCCC',
  },
  dot: {
    inactive: '#D1D5DB',
    active: '#4A90E2',
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
    backgroundColor: '#FEF3E2',
  },
  {
    key: 'two',
    title: 'Fast Setup',
    text: 'Built using Expo and ready to go',
    image: require('@img/onboarding-2.png'),
    backgroundColor: '#E8F4F8',
  },
  {
    key: 'three',
    title: 'Get Started',
    text: "Let's dive in and start building something amazing!",
    image: require('@img/onboarding-3.png'),
    backgroundColor: '#F0F8F4',
  },
]
