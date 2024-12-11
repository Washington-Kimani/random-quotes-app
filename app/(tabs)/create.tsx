import React, { useState } from 'react';
import { ImageBackground, View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import axios from 'axios';

const bg = require('@/assets/images/bg.jpg');

const CreateQuote = () => {
    const [text, setText] = useState<string>('');
    const [author, setAuthor] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const handleCreateQuote = async () => {
        if (!text || !author) {
            alert('Please fill out all fields.');
            return;
        }

        setLoading(true);
        try {
            const response = await axios.post('https://node-quotes-api.onrender.com/api/quotes', {
                text,
                author,
            });
            alert('Quote created successfully!');
            setText('');
            setAuthor('');
        } catch (error) {
            alert('Failed to create quote. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <ImageBackground source={bg} style={styles.image}>
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <Text style={styles.title}>Create New Quote</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Quote"
                        value={text}
                        onChangeText={setText}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Author"
                        value={author}
                        onChangeText={setAuthor}
                        multiline
                    />
                    <Pressable
                        style={styles.button}
                        onPress={handleCreateQuote}
                        disabled={loading}
                    >
                        {loading ? <Text>CREATING...</Text> : <Text>CREATE QUOTE</Text>}
                    </Pressable>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.6)', // Adds a translucent overlay for better text visibility
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        width: '95%',
        borderRadius: 10,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFD700',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 5,
        padding: 10,
        color: '#fff',
        backgroundColor: '#3c3f44',
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#FFD700',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default CreateQuote;
