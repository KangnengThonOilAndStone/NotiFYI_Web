import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const colorScheme = useColorScheme();
    const [loaded] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
        PretendardRegular: require('../assets/fonts/Pretendard-Regular.otf'),
        PretendardBold: require('../assets/fonts/Pretendard-Bold.otf'),
        PretendardMedium: require('../assets/fonts/Pretendard-Medium.otf'),
        PretendardLight: require('../assets/fonts/Pretendard-Light.otf'),
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return (
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <Stack>
                <Stack.Screen name='index' options={{ headerShown: false }} />
                <Stack.Screen name='selectMajor' options={{ headerShown: false }} />
                <Stack.Screen name='selectGrade' options={{ headerShown: false }} />
                <Stack.Screen name='selectInterest' options={{ headerShown: false }} />
                <Stack.Screen name='chat' options={{ headerShown: false }} />
                <Stack.Screen name='+not-found' />
            </Stack>
        </ThemeProvider>
    );
}
