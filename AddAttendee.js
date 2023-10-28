import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

const AddAttendee = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [numberOfGuests, setNumberOfGuests] = useState('');

    const handleSubmit = () => {
        axios.post('http://192.168.20.88:8000/api/attendees_add', {
            first_name: firstName,
            last_name: lastName,
            age: parseInt(age),
            number_of_guests: parseInt(numberOfGuests)
        })
        .then(response => {
            Alert.alert('Éxito', 'Asistente añadido con éxito.');
            // Puedes hacer una navegación a otra pantalla si lo deseas aquí
        })
        .catch(error => {
            Alert.alert('Error', 'Hubo un error al añadir el asistente.');
            console.error("Error detallado:", error.response.data);
        });
    }

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Nombre"
                value={firstName}
                onChangeText={setFirstName}
                style={styles.input}
            />
            <TextInput
                placeholder="Apellido"
                value={lastName}
                onChangeText={setLastName}
                style={styles.input}
            />
            <TextInput
                placeholder="Edad"
                value={age}
                onChangeText={setAge}
                keyboardType="numeric"
                style={styles.input}
            />
            <TextInput
                placeholder="Número de Invitados"
                value={numberOfGuests}
                onChangeText={setNumberOfGuests}
                keyboardType="numeric"
                style={styles.input}
            />
            <Button
                title="Añadir Asistente"
                onPress={handleSubmit}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: 'white',
    },
    input: {
        borderWidth: 1,
        borderColor: '#E0E0E0',
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,
    },
});

export default AddAttendee;
