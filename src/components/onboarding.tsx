import { COLORS, DIMENSIONS } from '@root/src/app.constants'
import { Image } from 'expo-image'
import { Text, View } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider'

interface Slide {
  key: string
  title: string
  text: string
  image: any
  backgroundColor: string
}

const slides: Slide[] = [
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

interface OnboardingProps {
  onDone: () => void
}

export default function Onboarding({ onDone }: OnboardingProps) {
  const renderItem = ({ item }: { item: Slide }) => (
    <View
      className='flex-1 items-center justify-center px-8 pb-24'
      style={{ backgroundColor: item.backgroundColor }}
    >
      <View className='items-center'>
        <Image
          source={item.image}
          style={{
            width: DIMENSIONS.imageWidth,
            height: DIMENSIONS.imageHeight,
          }}
          contentFit='contain'
          transition={300}
          className='mb-12 rounded-3xl'
        />
        <Text className='text-4xl font-bold text-gray-900 mb-4 text-center'>
          {item.title}
        </Text>
        <Text className='text-lg text-gray-600 text-center leading-7 px-4'>
          {item.text}
        </Text>
      </View>
    </View>
  )

  const renderButton = (label: string, isPrimary = false) => (
    <View
      className={`px-6 py-3 rounded-full min-w-[80px] items-center ${
        isPrimary ? 'bg-blue-500 shadow-lg' : 'bg-transparent'
      }`}
    >
      <Text
        className={`text-base font-semibold ${
          isPrimary ? 'text-white' : 'text-gray-700'
        }`}
      >
        {label}
      </Text>
    </View>
  )

  return (
    <AppIntroSlider
      dotStyle={{ backgroundColor: COLORS.dot.inactive, width: 10, height: 10 }}
      activeDotStyle={{
        backgroundColor: COLORS.dot.active,
        width: 24,
        height: 10,
      }}
      renderItem={renderItem}
      data={slides}
      onDone={onDone}
      showSkipButton={true}
      renderNextButton={() => renderButton('Next', true)}
      renderDoneButton={() => renderButton('Done', true)}
      renderSkipButton={() => renderButton('Skip')}
    />
  )
}
