export interface Slide {
  key: string
  title: string
  text: string
  image: any
  backgroundColor: string
}

export interface OnboardingProps {
  onDone: () => void
}
