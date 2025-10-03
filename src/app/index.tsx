import { COLORS } from '@constants/app.constants'
import Onboarding from '@screens/onboarding'
import React, { useState } from 'react'
import { Text, View } from 'react-native'

export default function App() {
  const [showRealApp, setShowRealApp] = useState(false)

  if (!showRealApp) {
    return <Onboarding onDone={() => setShowRealApp(true)} />
  }

  return (
    <View
      className='flex-1 justify-center items-center'
      style={{ backgroundColor: COLORS.background }}
    >
      <Text className='text-5xl mb-6'>🎉</Text>
      <Text
        className='text-3xl font-bold mb-2'
        style={{ color: COLORS.text.primary }}
      >
        Welcome!
      </Text>
      <Text className='text-lg' style={{ color: COLORS.text.secondary }}>
        Main App Content
      </Text>
    </View>
  )
}
