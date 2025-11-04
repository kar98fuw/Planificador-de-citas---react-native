import React, { useState } from 'react';

import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Button,
  Alert,
  Pressable,
  Modal,
  FlatList,
  ScrollView,
} from 'react-native';

import Formulario from './src/components/Formulario';
import Paciente from './src/components/Paciente';
import InformacionPaciente from './src/components/informacionpaciente';

const App = () => {


  const [modalVisible, setModalVisible] = useState(false)
  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState([])
  const [modalPaciente, setModalPaciente] = useState(false)

  const pacienteEditar = id => {
    const pacienteEditar = pacientes.filter(paciente => paciente.id === id)

    setPaciente(pacienteEditar[0])
  }

  const eliminarPaciente = id => {
        Alert.alert('¿Deseas eliminar este paciente?',
          'Un paciente eliminado no se puede recuperar',
          [
            {text: 'Cancelar'},
            {text: 'Si, eliminar', onPress: () => {
              const pacientesActualizados = pacientes.filter(
                pacientesState => pacientesState.id !== id)
                setPacientes(pacientesActualizados)
            }}
          ]
        )
      }


   const cerraModal = () => {
    setModalVisible(false)
   }


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}> Administrador de citas {''} <Text style={styles.tituloBold}>Veterinaria</Text></Text>


      <Pressable
        style={styles.btnNuevaCita}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.btnTextoNuevaCita}>Nueva Cita</Text>

      </Pressable>


      {pacientes.length === 0 ? (
        <Text style={styles.noPacientes}>No hay pacientes aun</Text>
      ) : (
        <FlatList
          style={styles.listado}
          data={pacientes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Paciente
             item={item}
             setModalVisible={setModalVisible}
             setPaciente={setPaciente}
             pacienteEditar={pacienteEditar}
             eliminarPaciente={eliminarPaciente}
             setModalPaciente={setModalPaciente}
             />
          )}
        />
      )}


     {modalVisible && (
      <Formulario
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        pacientes={pacientes}
        setPacientes={setPacientes}
        paciente={paciente}
        setPaciente={setPaciente}


      />
)}

      

      <Modal
        visible={modalPaciente}
        animationType='fade'
      >

        <InformacionPaciente
         paciente={paciente}
         setModalPaciente={setModalPaciente}
         setPaciente={setPaciente}
        />

      </Modal>

    </SafeAreaView>
  );

};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#708090',
    flex: 1,



  },
  titulo: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 30,
    color: '#F5F5F5',
    fontWeight: '600',
    marginVertical: 45,
  },
  tituloBold: {
    fontWeight: '900',
    color: 'skyblue'

  },
  btnNuevaCita: {
    backgroundColor: '#3CB371',
    padding: 20,
    marginVertical: -10,
    marginHorizontal: 30,
    borderRadius: 10,

  },
  btnTextoNuevaCita: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 18,
    fontWeight: '900',
    textTransform: 'uppercase'


  },
  noPacientes: {
    marginVertical: 60,
    fontWeight: '900',
    fontSize: 20,
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#F5FFFA'
  }, 
  listado: {
    marginTop: 60,
    marginHorizontal: 30,
    
  }


})





export default App;
