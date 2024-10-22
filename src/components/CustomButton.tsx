import {  Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

interface ICustomButton {
  title: string
  handlePress: ()=>void
  containerStyles: string
  textStyles?: string
  isLoading?: boolean
}
export const CustomButton:React.FC<ICustomButton> = ({title, handlePress, containerStyles, textStyles, isLoading}) => {
  return (
      <TouchableOpacity
        onPress={handlePress}
        activeOpacity={0.7}
        className={`bg-orange-500 rounded-xl min-h-[52px] px-4 mt-5 flex flex-row justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
        disabled={isLoading}
      >
        <Text className={textStyles} >{title}</Text>
      </TouchableOpacity>

  )
}
