import 'react-native-reanimated';

import { View, Text, ScrollView, Image } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from "../constants";
import { CustomButton } from '@/src/components/CustomButton';
import { StatusBar } from 'expo-status-bar';
import { Redirect, router } from "expo-router"

const App = () => {
  return (

    <SafeAreaView className='bg-primary h-full'>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className='w-full justify-center items-center min-h-[85vh] px-4'>
          <Image
            source={images.logo}
            className='w-[130px] h-[74px]'
            resizeMode='contain'
          />

          <Image
            source={images.cards}
            className='max-w-[380px] w-full h-[300px]'
            resizeMode='contain'
          />
          <View className='relative mt-5'>
            <Text className='text-3xl text-white'>Discover me! {' '}
              <Text className='text-orange-500'>Aora</Text>
            </Text>
            <Image
              source={images.path}
              className='w-[136px] h-4 absolute -bottom-2 -right-5'
              resizeMode='contain'
            />
          </View>
          <Text className='text-white font-thin text-center mt-3 px-5'>Where creative meets innovation: welcome to aura app developers!</Text>

          <CustomButton
            title="Continue with Email"
            handlePress={() => {router.push('/sign-in')}}
            containerStyles="w-full mt-7"
            textStyles=''
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}

export default App


