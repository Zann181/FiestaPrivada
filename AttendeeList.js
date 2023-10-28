import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Table, Row } from 'react-native-table-component';
import axios from 'axios';

export default class AttendeeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Nombre', 'Apellido', 'Edad', 'Hora de Entrada', 'N° de Invitados'],
      widthArr: [100, 100, 60, 160, 140],
      tableData: []
    }
  }

  componentDidMount() {
    axios.get('http://192.168.20.88:8000/api/attendees_index')
      .then(response => {
        const tableData = response.data.map(attendee => [
          attendee.first_name,
          attendee.last_name,
          attendee.age.toString(),
          new Date(attendee.entry_time).toLocaleTimeString(),
          attendee.number_of_guests.toString()
        ]);
        this.setState({ tableData });
      })
      .catch(error => {
        console.error("Hubo un error al obtener los asistentes:", error);
      });
  }

  render() {
    const state = this.state;

    return (
      <View style={styles.container}>
        <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{borderWidth: 1, borderColor: 'black', fontWeight: 'bold'}}>
              <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text}/>
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{borderWidth: 1, borderColor: 'black', fontWeight: 'bold'}}>
                {
                  state.tableData.map((rowData, index) => (
                    <Row
                      key={index}
                      data={rowData}
                      widthArr={state.widthArr}
                      style={[styles.row, index%2 && {backgroundColor: 'hwb(360, 0%, 100%)'}]} // Marrón suave
                      textStyle={styles.text}
                    />
                  ))
                }
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '' }, // Vinotinto
  header: { height: 50, backgroundColor: '#800000' }, // Marrón claro para el encabezado
  text: { textAlign: 'center', fontWeight: '100', color: 'black', color: 'white' , fontWeight: 'bold'  },
  dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: '#696969', borderColor: '#a52a2a' } // Dorado (puedes modificarlo al color que desees)
});
