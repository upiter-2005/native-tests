import { View, Text, TextInput, Touchable, Image } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import {icons} from "../constants"
interface IFormField  {
  title: string
  value: string
  placeholder?: string
  handleChangeText: any
  otherStyles: string
  keyboardType?: string
}
const FormField:React.FC<IFormField> = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  keyboardType,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  return (
    <View className={`space-y-2 w-full rounded-lg ${otherStyles}`}>
      <Text className='text-gray-100'>{title}</Text>
      <View className='rounded-lg border-2 border-black-200 w-full h-16 px-4 bg-slate-700  focus:border-secondary items-center flex-row'>
      <TextInput
        className="w-full flex-1 text-white font-semibold text-base"
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#7b7b8b"
        onChangeText={handleChangeText}
        secureTextEntry={title === "Password" && !showPassword}
      />

      {title === 'Password' && (
        <TouchableOpacity onPress={()=> {
          setShowPassword(!showPassword)
        }}>
          <Image
            source={!showPassword ? icons.eye : icons.eyeHide}
            className='w-6 h-6'
            resizeMode='contain'
          />
        </TouchableOpacity>
      )}
      </View>
    </View>
  )
}

export default FormField