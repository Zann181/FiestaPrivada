import React from 'react';
import { StyleSheet, View, TouchableHighlight, Text } from 'react-native';
import { Card } from '@rneui/themed';
import Menu from './Menu';
import Icon from 'react-native-vector-icons/FontAwesome';


const Home = ({ navigation }) => {

    const navigateToScreen = (screenName) => {
        navigation.navigate(screenName);
    };

    return (
        <View style={styles.container}>
            <Menu navigation={navigation} />
            <View style={styles.cardContainer}>
                <Card style={styles.card}>
                    <Card.Title style={{ fontSize: 20 }}>Fiesta Privada</Card.Title>
                    <Text style={{ fontSize: 20, textAlign: 'center' }}>
                        Podrás realizar las siguientes operaciones:
                        {"\n"}
                        <TouchableHighlight onPress={() => navigateToScreen('AddAttendee')}>
                            <Text><Icon name="user-plus" size={20} color="#FFD700" /> Añadir Asistentes</Text>
                        </TouchableHighlight>
                        {"\n"}
                        <TouchableHighlight onPress={() => navigateToScreen('AttendeeList')}>
                            <Text><Icon name="list-alt" size={20} color="#BA0F0F" /> Mostrar Lista de Asistentes</Text>
                        </TouchableHighlight>
                        {"\n"}
                        <TouchableHighlight onPress={() => navigateToScreen('QRScanner')}>
                            <Text><Icon name="qrcode" size={20} color="#BA6F0F" /> Leer Códigos QR</Text>
                        </TouchableHighlight>
                        {"\n"}
                    </Text>
                    <View style={styles.buttonContainer}>
                    </View>
                </Card>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#A0522D',
    },
    cardContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
    },
    card: {
        width: 300,
        height: 300,
        backgroundColor: 'blue',
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        marginTop: 20,
    },
    button: {
        backgroundColor: '#007AFF',
        padding: 10,
        margin: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
});

export default Home;
