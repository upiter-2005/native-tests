import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { images } from "../../constants"
import FormField from '@/src/components/FormField'
import { CustomButton } from '@/src/components/CustomButton'
import { Link } from 'expo-router'

const SignIn = () => {
  const [form, setForm] = useState({
      email: '',
      password: ''
  })

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const submit = () => {

  }
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='w-full flex justify-center items-center min-h-[78vh] px-4 my-6'>
          <Image
            source={images.logo}
            resizeMode='contain'
            className='w-[115px] h-9'
          />
          <Text className='text-2xl font-semibold text-white'>Log in to thr Aora</Text>
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
            title="Log In"
            handlePress={submit}
            containerStyles="mt-7 w-full"
            isLoading={isSubmitting}
          />
          <Text className=' justify-center pt-5 gap-2 flex-row text-white'>Don't have an account?
              {' '}
          </Text>
          <Link href="/sign-up"  className='text-secondary'>Sign Up</Link>
        </View>
      </ScrollView>

    </SafeAreaView>
  )
}

export default SignIn

const styles = StyleSheet.create({})