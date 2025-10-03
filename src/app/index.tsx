import Onboarding from '@components/onboarding'
import React, { useState } from 'react'
import { Text, View } from 'react-native'

export default function App() {
  const [showRealApp, setShowRealApp] = useState(false)

  if (!showRealApp) {
    return <Onboarding onDone={() => setShowRealApp(true)} />
  }

  return (
    <View className='flex-1 justify-center items-center bg-white'>
      <Text className='text-5xl font-bold text-gray-900 mb-4'>🎉</Text>
      <Text className='text-3xl font-bold text-gray-900 mb-2'>Welcome!</Text>
      <Text className='text-lg text-gray-600'>Main App Content</Text>
    </View>
  )
}
