import { OnboardingProps, Slide } from '@/types/onboarding.types'
import { COLORS, DIMENSIONS, ONBOARDING_SLIDES } from '@constants/app.constants'
import { Image } from 'expo-image'
import { Text, View } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider'

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
        <Text
          className='text-4xl font-bold mb-4 text-center'
          style={{ color: COLORS.text.primary }}
        >
          {item.title}
        </Text>
        <Text
          className='text-lg text-center leading-7 px-4'
          style={{ color: COLORS.text.secondary }}
        >
          {item.text}
        </Text>
      </View>
    </View>
  )

  const renderButton = (label: string, isPrimary = false) => (
    <View
      className={`px-6 py-3 rounded-full min-w-[80px] items-center ${
        isPrimary ? 'shadow-lg' : 'bg-transparent'
      }`}
      style={{
        backgroundColor: isPrimary ? COLORS.primary : 'transparent',
      }}
    >
      <Text
        className={`text-base font-semibold ${isPrimary ? 'text-white' : ''}`}
        style={{
          color: isPrimary ? COLORS.text.inverse : COLORS.text.secondary,
        }}
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
      data={ONBOARDING_SLIDES}
      onDone={onDone}
      showSkipButton={true}
      renderNextButton={() => renderButton('Next', true)}
      renderDoneButton={() => renderButton('Done', true)}
      renderSkipButton={() => renderButton('Skip')}
    />
  )
}
