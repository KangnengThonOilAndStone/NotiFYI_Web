import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native';
import { useState } from 'react';
import { Shadow } from 'react-native-shadow-2';
import { router } from 'expo-router';

import HeaderWithBackArrow from '@/components/HeaderWithBackArrow';

export default function SelectGrade() {
    const [selectedItem, setSelectedItem] = useState('');

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#e8f2ff' }}>
            <View style={styles.container}>
                <HeaderWithBackArrow />
                <View style={{ flex: 0, paddingHorizontal: 20, gap: 4, marginBottom: 8 }}>
                    <Text style={{ fontSize: 24, fontWeight: 'bold', fontFamily: 'PretendardBold' }}>{'당신은 어느 학년인가요?'}</Text>
                    <Text style={{ fontSize: 16, color: '#636363d8', fontFamily: 'PretendardMedium' }}>{'각 학년 맞춤 공지를 추천해 드릴게요 (단일 선택)'}</Text>
                </View>
                <View style={{ flex: 1, gap: 20 }}>
                    <View style={styles.gridRow}>
                        <TouchableOpacity activeOpacity={0.7} style={{ flex: 1 }} onPress={() => setSelectedItem((item) => (item === '1학년' ? '' : '1학년'))}>
                            <Shadow style={'1학년' === selectedItem ? styles.selectedBlockItem : styles.blockItem} containerStyle={styles.shadow} distance={6} offset={[3, 3]} startColor='#00000020'>
                                <Text style={styles.title}>{'1학년'}</Text>
                                <Text style={styles.image}>{'1️⃣'}</Text>
                            </Shadow>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.7} style={{ flex: 1 }} onPress={() => setSelectedItem((item) => (item === '2학년' ? '' : '2학년'))}>
                            <Shadow style={'2학년' === selectedItem ? styles.selectedBlockItem : styles.blockItem} containerStyle={styles.shadow} distance={6} offset={[3, 3]} startColor='#00000020'>
                                <Text style={styles.title}>{'2학년'}</Text>
                                <Text style={styles.image}>{'2️⃣'}</Text>
                            </Shadow>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.gridRow}>
                        <TouchableOpacity activeOpacity={0.7} style={{ flex: 1 }} onPress={() => setSelectedItem((item) => (item === '3학년' ? '' : '3학년'))}>
                            <Shadow style={'3학년' === selectedItem ? styles.selectedBlockItem : styles.blockItem} containerStyle={styles.shadow} distance={6} offset={[3, 3]} startColor='#00000020'>
                                <Text style={styles.title}>{'3학년'}</Text>
                                <Text style={styles.image}>{'3️⃣'}</Text>
                            </Shadow>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.7} style={{ flex: 1 }} onPress={() => setSelectedItem((item) => (item === '4학년' ? '' : '4학년'))}>
                            <Shadow style={'4학년' === selectedItem ? styles.selectedBlockItem : styles.blockItem} containerStyle={styles.shadow} distance={6} offset={[3, 3]} startColor='#00000020'>
                                <Text style={styles.title}>{'4학년'}</Text>
                                <Text style={styles.image}>{'4️⃣'}</Text>
                            </Shadow>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.gridRow}>
                        <TouchableOpacity activeOpacity={0.7} style={{ flex: 1 }} onPress={() => setSelectedItem((item) => (item === '휴학생' ? '' : '휴학생'))}>
                            <Shadow style={'휴학생' === selectedItem ? styles.selectedBlockItem : styles.blockItem} containerStyle={styles.shadow} distance={6} offset={[3, 3]} startColor='#00000020'>
                                <Text style={styles.title}>{'휴학생'}</Text>
                                <Text style={styles.image}>{'⏸️'}</Text>
                            </Shadow>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.7} style={{ flex: 1 }} onPress={() => setSelectedItem((item) => (item === '졸업생' ? '' : '졸업생'))}>
                            <Shadow style={'졸업생' === selectedItem ? styles.selectedBlockItem : styles.blockItem} containerStyle={styles.shadow} distance={6} offset={[3, 3]} startColor='#00000020'>
                                <Text style={styles.title}>{'졸업생'}</Text>
                                <Text style={styles.image}>{'🎓'}</Text>
                            </Shadow>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flex: 0 }}>
                    <TouchableOpacity disabled={selectedItem === ''} onPress={() => router.push('/selectInterest')}>
                        <View style={selectedItem === '' ? styles.disabledButton : styles.button}>
                            <Text style={{ fontSize: 20, color: 'white', fontFamily: 'PretendardMedium' }}>{'다음으로'}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 80,
        gap: 20,
    },
    gridRow: {
        flex: 0,
        flexDirection: 'row',
        height: '28%',
        gap: 20,
        paddingHorizontal: 20,
        overflow: 'visible',
    },
    shadow: {
        flex: 1,
        overflow: 'visible',
    },
    blockItem: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 16,
        paddingVertical: 18,
        backgroundColor: 'white',
        borderRadius: 20,
        justifyContent: 'space-between',
    },
    selectedBlockItem: {
        backgroundColor: '#D6E8FF',
        borderWidth: 2,
        borderColor: '#81B9FF',
        flex: 1,
        width: '100%',
        paddingHorizontal: 14,
        paddingVertical: 16,
        borderRadius: 20,
        justifyContent: 'space-between',
    },
    ghostBlock: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 20,
        marginTop: 4,
        fontWeight: 'bold',
        fontFamily: 'PretendardBold',
    },
    image: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'right',
    },
    button: {
        backgroundColor: '#007AFF',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        borderRadius: 20,
    },
    disabledButton: {
        backgroundColor: '#00000030',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        borderRadius: 20,
    },
});
