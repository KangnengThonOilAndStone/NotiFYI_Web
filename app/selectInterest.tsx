import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native';
import { useState, useCallback } from 'react';
import { Shadow } from 'react-native-shadow-2';
import { router } from 'expo-router';

import HeaderWithBackArrow from '@/components/HeaderWithBackArrow';

export default function SelectInterest() {
    const [selectedItem, setSelectedItem] = useState([]);

    const toggleButtonItem = useCallback(
        (title: string) => {
            const index = selectedItem.indexOf(title);
            if (index > -1) {
                console.log(selectedItem);
                console.log(index);
                setSelectedItem((arr) => arr.filter((e) => e !== title));
            } else {
                setSelectedItem((arr) => [...arr, title]);
            }
        },
        [selectedItem, setSelectedItem]
    );

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#e8f2ff' }}>
            <View style={styles.container}>
                <HeaderWithBackArrow />
                <View style={{ flex: 0, paddingHorizontal: 20, gap: 4, marginBottom: 8 }}>
                    <Text style={{ fontSize: 24, fontWeight: 'bold', fontFamily: 'PretendardBold' }}>{'당신의 관심사는 무엇인가요?'}</Text>
                    <Text style={{ fontSize: 16, color: '#636363d8', fontFamily: 'PretendardMedium' }}>{'관심사 맞춤공지를 추천해 드릴게요 (최대 3개)'}</Text>
                </View>
                <View style={{ flex: 1, gap: 20 }}>
                    <View style={styles.gridRow}>
                        <TouchableOpacity activeOpacity={0.7} style={{ flex: 1 }} onPress={() => toggleButtonItem('행사')} disabled={selectedItem.length === 3 && !selectedItem.includes('행사')}>
                            <Shadow style={selectedItem.includes('행사') ? styles.selectedBlockItem : styles.blockItem} containerStyle={styles.shadow} distance={6} offset={[3, 3]} startColor='#00000020'>
                                <Text style={styles.title}>{'행사'}</Text>
                                <Text style={styles.image}>{'🎉'}</Text>
                            </Shadow>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.7} style={{ flex: 1 }} onPress={() => toggleButtonItem('대회')} disabled={selectedItem.length === 3 && !selectedItem.includes('대회')}>
                            <Shadow style={selectedItem.includes('대회') ? styles.selectedBlockItem : styles.blockItem} containerStyle={styles.shadow} distance={6} offset={[3, 3]} startColor='#00000020'>
                                <Text style={styles.title}>{'대회'}</Text>
                                <Text style={styles.image}>{'🏁'}</Text>
                            </Shadow>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.gridRow}>
                        <TouchableOpacity activeOpacity={0.7} style={{ flex: 1 }} onPress={() => toggleButtonItem('취업')} disabled={selectedItem.length === 3 && !selectedItem.includes('취업')}>
                            <Shadow style={selectedItem.includes('취업') ? styles.selectedBlockItem : styles.blockItem} containerStyle={styles.shadow} distance={6} offset={[3, 3]} startColor='#00000020'>
                                <Text style={styles.title}>{'취업'}</Text>
                                <Text style={styles.image}>{'🧑‍💼'}</Text>
                            </Shadow>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.7} style={{ flex: 1 }} onPress={() => toggleButtonItem('동아리')} disabled={selectedItem.length === 3 && !selectedItem.includes('동아리')}>
                            <Shadow style={selectedItem.includes('동아리') ? styles.selectedBlockItem : styles.blockItem} containerStyle={styles.shadow} distance={6} offset={[3, 3]} startColor='#00000020'>
                                <Text style={styles.title}>{'동아리'}</Text>
                                <Text style={styles.image}>{'🧑‍🤝‍🧑'}</Text>
                            </Shadow>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.gridRow}>
                        <TouchableOpacity activeOpacity={0.7} style={{ flex: 1 }} onPress={() => toggleButtonItem('장학')} disabled={selectedItem.length === 3 && !selectedItem.includes('장학')}>
                            <Shadow style={selectedItem.includes('장학') ? styles.selectedBlockItem : styles.blockItem} containerStyle={styles.shadow} distance={6} offset={[3, 3]} startColor='#00000020'>
                                <Text style={styles.title}>{'장학'}</Text>
                                <Text style={styles.image}>{'🎓'}</Text>
                            </Shadow>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.7} style={{ flex: 1 }} onPress={() => toggleButtonItem('특강')} disabled={selectedItem.length === 3 && !selectedItem.includes('특강')}>
                            <Shadow style={selectedItem.includes('특강') ? styles.selectedBlockItem : styles.blockItem} containerStyle={styles.shadow} distance={6} offset={[3, 3]} startColor='#00000020'>
                                <Text style={styles.title}>{'특강'}</Text>
                                <Text style={styles.image}>{'📋'}</Text>
                            </Shadow>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '100%', alignItems: 'center' }}>
                        <Text style={{ fontFamily: 'PretendardMedium' }}>{`${selectedItem.length} / 3`}</Text>
                    </View>
                </View>
                <View style={{ flex: 0 }}>
                    <TouchableOpacity disabled={selectedItem.length < 3} onPress={() => router.push('/chat')}>
                        <View style={selectedItem.length < 3 ? styles.disabledButton : styles.button}>
                            <Text style={{ fontSize: 20, color: 'white', fontFamily: 'PretendardMedium' }}>{'시작하기!'}</Text>
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
