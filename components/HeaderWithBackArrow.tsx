import { View, Image, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function HeaderWithBackArrow() {
    return (
        <View style={{ position: 'absolute', width: '100%', paddingHorizontal: 12, paddingVertical: 10 }}>
            <TouchableOpacity onPress={() => router.back()}>
                <Image style={{ width: 40, height: 40 }} source={require('../assets/images/arrow_left.png')} />
            </TouchableOpacity>
        </View>
    );
}
