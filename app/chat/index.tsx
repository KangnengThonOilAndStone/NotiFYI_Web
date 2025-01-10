import { View, Text, SafeAreaView, StyleSheet, KeyboardAvoidingView, ScrollView, TouchableHighlight, TextInput, LayoutAnimation } from 'react-native';
import { useState, useCallback } from 'react';
import { Shadow } from 'react-native-shadow-2';

import HeaderWithBackArrow from '@/components/HeaderWithBackArrow';

interface Message {
    mine: boolean;
    text: string;
}

export default function ChatScreen() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<Message[]>([]);

    const sendMessage = useCallback(
        async (input: string) => {
            LayoutAnimation.configureNext({
                duration: 500,
                create: { type: 'linear', property: 'opacity' },
                update: { type: 'spring', springDamping: 0.4 },
                delete: { type: 'linear', property: 'opacity' },
            });
            setMessages((mes) => [...mes, { mine: true, text: input }]);
            console.log('message http:/127.0.0.1:8000', input);
            setMessages((mes) => [...mes, { mine: false, text: '. . .' }]);
            fetch('https://lucky-kids-refuse.loca.lt/chat?user_input=' + input, {
                method: 'POST',
            })
                .then(async (res) => {
                    setMessages((mes) => mes.slice(0, -1));
                    console.log(res);

                    const j = await res.json();
                    console.log('content', j.response);
                    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
                    setMessages((mes) => [...mes, { mine: false, text: j.response }]);
                })
                .catch((e) => {
                    setMessages((mes) => mes.slice(0, -1));
                    console.log(e);
                    setMessages((mes) => [...mes, { mine: false, text: '에러가 발생했네요.. 다시 시도해주세요.' }]);
                });

            // console.log('res:', res.json());
        },
        [setMessages]
    );

    const renderMyMessage = useCallback((message: string) => {
        return (
            <View style={{ flex: 1, flexDirection: 'row', width: '100%', justifyContent: 'flex-end', marginTop: 16, borderRadius: 12 }}>
                <Shadow containerStyle={{ maxWidth: '70%', marginRight: 10 }} distance={3} offset={[2, 2]} startColor='#00000010'>
                    <View style={{ padding: 14, backgroundColor: 'white', borderRadius: 16 }}>
                        <Text selectable style={styles.message}>
                            {message}
                        </Text>
                    </View>
                </Shadow>
            </View>
        );
    }, []);

    const renderOpponentMessage = useCallback((message: string) => {
        return (
            <View style={{ width: '100%', flex: 1, flexDirection: 'row', justifyContent: 'flex-start', marginTop: 16, borderRadius: 12 }}>
                <Shadow containerStyle={{ maxWidth: '70%', marginLeft: 10 }} distance={3} offset={[2, 2]} startColor='#00000010'>
                    <View style={{ flex: 1, padding: 14, backgroundColor: '#a8cfffc8', borderRadius: 16 }}>
                        <Text selectable style={styles.message}>
                            {message}
                        </Text>
                    </View>
                </Shadow>
            </View>
        );
    }, []);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#e8f2ff' }}>
            <View style={{ position: 'absolute', top: 50, zIndex: 3 }}>
                <HeaderWithBackArrow />
            </View>
            <KeyboardAvoidingView style={styles.container} behavior='padding'>
                <View style={{ flex: 1 }}>
                    <ScrollView>
                        <View style={{ paddingTop: 50, paddingBottom: 20, flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end', backgroundColor: '#e8f2ff' }}>{messages.map((message) => (message.mine ? renderMyMessage(message.text) : renderOpponentMessage(message.text)))}</View>
                    </ScrollView>
                    <View style={{ width: '100%' }}>
                        <TextInput style={styles.input} placeholder='내가 받을 수 있는 장학금제도는?' placeholderTextColor='#00000030' onChangeText={setInput} value={input} />
                        <TouchableHighlight style={{ position: 'absolute', right: 0 }} onPress={() => sendMessage(input)}>
                            <View style={styles.sendContainer}>
                                <Text style={styles.sendTitle}>전송</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    input: {
        width: '100%',
        height: 50,
        fontSize: 18,
        paddingHorizontal: 12,
        backgroundColor: 'white',
    },
    sendContainer: {
        width: 60,
        height: 50,
        backgroundColor: '#007AFF',
        zIndex: 1,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sendTitle: {
        color: 'white',
        fontFamily: 'PretendardRegular',
        fontSize: 16,
    },
    message: {
        fontFamily: 'PretendardRegular',
        fontSize: 18,
    },
});
