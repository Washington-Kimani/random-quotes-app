import {ImageBackground, View, Text, StyleSheet} from 'react-native';

const bg = require('@/assets/images/bg.jpg');

const About = () => {
    return (
        <ImageBackground source={bg} style={styles.image}>
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <Text style={styles.title}>About</Text>
                    <Text style={styles.text}>This is a simple app to demonstrate the use of Axios library in React Native.</Text>
                    <Text style={styles.text}>Enjoy!</Text>
                </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: 'cover',
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
    text: {
        fontSize: 18,
        fontWeight: 'normal',
        color: '#fff',
        textAlign: 'center',
    }
});

export default About;