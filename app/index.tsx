import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native';
import { useState } from 'react';
import { Shadow } from 'react-native-shadow-2';
import { router } from 'expo-router';

export default function SelectDepartment() {
    const [selectedItem, setSelectedItem] = useState('');

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#e8f2ff' }}>
            <View style={styles.container}>
                <View style={{ flex: 0, paddingHorizontal: 20, gap: 4, marginBottom: 8 }}>
                    <Text style={{ fontSize: 24, fontWeight: 'bold', fontFamily: 'PretendardBold' }}>{'당신은 어느 대학인가요?'}</Text>
                    <Text style={{ fontSize: 16, color: '#636363d8', fontFamily: 'PretendardMedium' }}>{'대학 맞춤 공지를 추천해 드릴게요 (단일 선택)'}</Text>
                </View>
                <View style={{ flex: 1, gap: 20 }}>
                    <View style={styles.gridRow}>
                        <TouchableOpacity activeOpacity={0.7} style={{ flex: 1 }} onPress={() => setSelectedItem((item) => (item === '복지융합대학' ? '' : '복지융합대학'))}>
                            <Shadow style={'복지융합대학' === selectedItem ? styles.selectedBlockItem : styles.blockItem} containerStyle={styles.shadow} distance={6} offset={[3, 3]} startColor='#00000020'>
                                <Text style={styles.title}>{'복지융합대학'}</Text>
                                <Text style={styles.image}>{'🪴'}</Text>
                            </Shadow>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.7} style={{ flex: 1 }} onPress={() => setSelectedItem((item) => (item === '경영관리대학' ? '' : '경영관리대학'))}>
                            <Shadow style={'경영관리대학' === selectedItem ? styles.selectedBlockItem : styles.blockItem} containerStyle={styles.shadow} distance={6} offset={[3, 3]} startColor='#00000020'>
                                <Text style={styles.title}>{'경영관리대학'}</Text>
                                <Text style={styles.image}>{'💰'}</Text>
                            </Shadow>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.gridRow}>
                        <TouchableOpacity activeOpacity={0.7} style={{ flex: 1 }} onPress={() => setSelectedItem((item) => (item === '글로벌인재대학' ? '' : '글로벌인재대학'))}>
                            <Shadow style={'글로벌인재대학' === selectedItem ? styles.selectedBlockItem : styles.blockItem} containerStyle={styles.shadow} distance={6} offset={[3, 3]} startColor='#00000020'>
                                <Text style={styles.title}>{'글로벌인재대학'}</Text>
                                <Text style={styles.image}>{'🌍'}</Text>
                            </Shadow>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.7} style={{ flex: 1 }} onPress={() => setSelectedItem((item) => (item === '공과대학' ? '' : '공과대학'))}>
                            <Shadow style={'공과대학' === selectedItem ? styles.selectedBlockItem : styles.blockItem} containerStyle={styles.shadow} distance={6} offset={[3, 3]} startColor='#00000020'>
                                <Text style={styles.title}>{'공과대학'}</Text>
                                <Text style={styles.image}>{'⚙'}</Text>
                            </Shadow>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.gridRow}>
                        <TouchableOpacity activeOpacity={0.7} style={{ flex: 1 }} onPress={() => setSelectedItem((item) => (item === '사범대학' ? '' : '사범대학'))}>
                            <Shadow style={'사범대학' === selectedItem ? styles.selectedBlockItem : styles.blockItem} containerStyle={styles.shadow} distance={6} offset={[3, 3]} startColor='#00000020'>
                                <Text style={styles.title}>{'사범대학'}</Text>
                                <Text style={styles.image}>{'🧑‍🏫'}</Text>
                            </Shadow>
                        </TouchableOpacity>
                        <View style={styles.shadow}></View>
                    </View>
                </View>
                <View style={{ flex: 0 }}>
                    <TouchableOpacity disabled={selectedItem === ''} onPress={() => router.push('/selectMajor')}>
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
