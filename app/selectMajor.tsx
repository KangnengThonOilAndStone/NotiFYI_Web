import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native';
import { useState } from 'react';
import { Shadow } from 'react-native-shadow-2';
import { router } from 'expo-router';

import HeaderWithBackArrow from '@/components/HeaderWithBackArrow';

export default function SelectedMajor() {
    const [selectedItem, setSelectedItem] = useState('');

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#e8f2ff' }}>
            <View style={styles.container}>
                <HeaderWithBackArrow />
                <View style={{ flex: 0, paddingHorizontal: 20, gap: 4, marginBottom: 8 }}>
                    <Text style={{ fontSize: 24, fontWeight: 'bold', fontFamily: 'PretendardBold' }}>{'당신은 어느 학과인가요?'}</Text>
                    <Text style={{ fontSize: 16, color: '#636363d8', fontFamily: 'PretendardMedium' }}>{'학과 맞춤 공지를 추천받을 수 있어요 (단일 선택)'}</Text>
                </View>
                <View style={{ flex: 1, gap: 20 }}>
                    <View style={styles.gridRow}>
                        <TouchableOpacity activeOpacity={0.7} style={{ flex: 1 }} onPress={() => setSelectedItem((item) => (item === 'ICT융합공학부' ? '' : 'ICT융합공학부'))}>
                            <Shadow style={'ICT융합공학부' === selectedItem ? styles.selectedBlockItem : styles.blockItem} containerStyle={styles.shadow} distance={6} offset={[3, 3]} startColor='#00000020'>
                                <Text style={styles.title}>{'ICT융합공학부'}</Text>
                                <Text style={styles.image}>{'🧑‍💻'}</Text>
                            </Shadow>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.7} style={{ flex: 1 }} onPress={() => setSelectedItem((item) => (item === '인공지능 융합공학부' ? '' : '인공지능 융합공학부'))}>
                            <Shadow style={'인공지능 융합공학부' === selectedItem ? styles.selectedBlockItem : styles.blockItem} containerStyle={styles.shadow} distance={6} offset={[3, 3]} startColor='#00000020'>
                                <Text style={styles.title}>{'인공지능\n융합공학부'}</Text>
                                <Text style={styles.image}>{'🤖'}</Text>
                            </Shadow>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.gridRow}>
                        <TouchableOpacity activeOpacity={0.7} style={{ flex: 1 }} onPress={() => setSelectedItem((item) => (item === '부동산건설학부' ? '' : '부동산건설학부'))}>
                            <Shadow style={'부동산건설학부' === selectedItem ? styles.selectedBlockItem : styles.blockItem} containerStyle={styles.shadow} distance={6} offset={[3, 3]} startColor='#00000020'>
                                <Text style={styles.title}>{'부동산건설학부'}</Text>
                                <Text style={styles.image}>{'🏠'}</Text>
                            </Shadow>
                        </TouchableOpacity>
                        <View style={styles.shadow}></View>
                    </View>
                </View>
                <View style={{ flex: 0 }}>
                    <TouchableOpacity disabled={selectedItem === ''} onPress={() => router.push('/selectGrade')}>
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
        flexWrap: 'wrap',
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
