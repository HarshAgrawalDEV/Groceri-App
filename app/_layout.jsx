import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Provider } from 'react-redux'
import { store } from "../redux/store/store";

const RootLayout = () => {
    return (
        <Provider store={store}>
            <Stack>
                <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
                {/* <Stack.Screen name='Login' options={{ headerShown: false }} /> */}

                {/* <Stack.Screen name='Cart' options={{}} /> */}

            </Stack>
        </Provider>
    )
}

export default RootLayout