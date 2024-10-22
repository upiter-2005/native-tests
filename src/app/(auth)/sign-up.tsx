import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { images } from "../../constants"
import FormField from '@/src/components/FormField'
import { CustomButton } from '@/src/components/CustomButton'
import { Link } from 'expo-router'
import { createUser } from '@/src/lib/appwrite'

const SignUp = () => {
  const [form, setForm] = useState({
      username: '',
      email: '',
      password: ''
  })

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const submit = () => {
    createUser()
  }
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='w-full flex justify-center items-center h-full px-4 my-6'>
          <Image
            source={images.logo}
            resizeMode='contain'
            className='w-[115px] h-9'
          />
          <Text className='text-2xl font-semibold text-white'>Sign Up to thr Aora</Text>
          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e: any) => setForm({...form, username: e})}
            otherStyles="mt-7"
          />
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e: any) => setForm({...form, email: e})}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e: any) => setForm({...form, password: e})}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <CustomButton
            title="Sign Up"
            handlePress={submit}
            containerStyles="mt-7 w-full"
            isLoading={isSubmitting}
          />
          <Text className=' justify-center pt-5 gap-2 flex-row text-white'>Have an account already?
              {' '}
          </Text>
          <Link href="/sign-in"  className='text-secondary'>Sign In</Link>
        </View>
      </ScrollView>

    </SafeAreaView>
  )
}

export default SignUp
