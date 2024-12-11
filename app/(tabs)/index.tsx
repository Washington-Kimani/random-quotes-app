import React, { useState } from 'react';
import { ImageBackground, Pressable, View, Text, StyleSheet, ActivityIndicator } from 'react-native';

import axios from 'axios';

const bg = require('@/assets/images/bg.jpg');

export default function Index() {
    const [quote, setQuote] = useState<string | undefined>('Get Random Quotes!');
    const [author, setAuthor] = useState<string | undefined>('');
    const [loading, setLoading] = useState<boolean>(false);

    const fetchQuote = async () => {
        setLoading(true);
        try {
            const response = await axios.get('https://node-quotes-api.onrender.com/api/quote'); // Example API
            const data = await response.data;
            setQuote(data.text);
            setAuthor(`By ${data.author}`);
        } catch (error) {
            setQuote('Failed to fetch quote. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <ImageBackground source={bg} style={styles.image}>
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <Text style={styles.title}>Welcome</Text>
                    <Text style={styles.subtitle}>Check out the quotes below</Text>
                    <View style={styles.quotesContainer}>
                        {loading ? (
                            <ActivityIndicator size="large" color="#FFD700" />
                        ) : (
                            <>
                                <Text style={styles.quoteText}>{quote}</Text>
                                <Text style={styles.authorText}>{author}</Text>
                            </>
                        )}
                        <Pressable style={styles.button} onPress={fetchQuote}>
                            <Text style={styles.buttonText}>Load Quote</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: 'cover', // Ensures the image maintains its aspect ratio
        justifyContent: 'center',
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.6)', // Adds a translucent overlay for better text visibility
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        alignItems: 'center',
        padding: 20,
        width: '90%',
        borderRadius: 10,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#FFD700', // Gold color for a welcoming feel
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        color: '#FFFFFF',
        marginBottom: 20,
        textAlign: 'center',
    },
    quotesContainer: {
        width: '95%',
        marginTop: 20,
        padding: 15,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 10,
        alignItems: 'center',
    },
    quoteText: {
        fontSize: 18,
        color: '#FFFFFF',
        marginBottom: 10,
        textAlign: 'center',
    },
    authorText:{
        fontSize: 12,
        color: 'rgba(255,255,255,0.61)',
        marginBottom: 8,
        textAlign: 'center',
    },
    button: {
        marginTop: 10,
        paddingVertical: 8,
        paddingHorizontal: 20,
        width: '50%',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#FFD700', // Gold color for call-to-action
    },
    buttonText: {
        fontSize: 16,
        color: '#000000', // Black text for contrast
        fontWeight: 'bold',
    },
});
