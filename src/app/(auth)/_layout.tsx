import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const LayoutAuth = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="sign-in" options={{headerShown: false}} />
        <Stack.Screen name="sign-up" options={{headerShown: false}} />
      </Stack>
      <StatusBar backgroundColor="#161622" style="auto" />
    </>

  )
}

export default LayoutAuth

const styles = StyleSheet.create({})