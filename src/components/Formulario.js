import React, { useState, useEffect } from 'react'

import {
  Modal,
  Text,
  SafeAreaView,
  Button,
  Alert,
  StyleSheet,
  TextInput,
  View,
  ScrollView,
  Pressable,

}
  from 'react-native'

import DatePicker from 'react-native-date-picker'



const Formulario = ({ modalVisible, setModalVisible, pacientes, setPacientes, paciente: pacienteObj, setPaciente: setPacienteApp }) => {

  const [paciente, setPaciente] = useState('')
  const [id, setId] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [numero, setNumero] = useState('')
  const [fecha, setFecha] = useState(new Date())
  const [sintomas, setSintomas] = useState('')

  useEffect(() => {
    if (Object.keys(pacienteObj).length > 0) {
      setId(pacienteObj.id)
      setPaciente(pacienteObj.paciente)
      setPropietario(pacienteObj.propietario)
      setEmail(pacienteObj.email)
      setNumero(pacienteObj.numero)
      setFecha(pacienteObj.fecha)
      setSintomas(pacienteObj.sintomas)
    }
  }, [pacienteObj])

  const handleCita = () => {
    //Validar
    if ([paciente, propietario, email, numero, fecha, sintomas].includes('')) {
      Alert.alert(
        'Error',
        'Todos los campos son obligatorios',
        [{ text: 'Cancelar' }, { text: 'OK' }]
      )

      return
    }

    const nuevoPaciente = {
      paciente,
      propietario,
      email,
      numero,
      fecha,
      sintomas
    }


    if (id) {

      nuevoPaciente.id = id

      const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === nuevoPaciente.id ? nuevoPaciente :
        pacienteState
      )

      
      setPacientes(pacientesActualizados)
      setPacienteApp({})

    } else {

      nuevoPaciente.id = Date.now()
      setPacientes([...pacientes, nuevoPaciente])

    }


    setModalVisible(!modalVisible)
    setId('')
    setPaciente('')
    setPropietario('')
    setEmail('')
    setNumero('')
    setFecha(new Date())
    setSintomas('')

  }


  return (




    <Modal
      animationType='slide'
      visible={modalVisible}
    >
      <SafeAreaView style={styles.contenido}>
        <ScrollView>
          <Text style={styles.titulo}>
            {pacienteObj.id ? 'Editar' : 'Nueva'}{''} <Text style={styles.tituloBold}> Cita</Text></Text>



          <Pressable
            style={styles.btnCancelar}
            onPress={() => {
              setModalVisible(!modalVisible)
              setPacienteApp({})
              setId('')
              setPaciente('')
              setPropietario('')
              setEmail('')
              setNumero('')
              setFecha(new Date())
              setSintomas('')
            }}

          >

            <Text style={styles.btnCancelarTexto}>  Cancelar</Text>


          </Pressable>



          <View style={styles.campo}>
            <Text style={styles.label}>Nombre Paciente</Text>
            <TextInput
              style={styles.input}
              placeholder='Nombre del Paciente'
              placeholderTextColor={'#000000'}
              value={paciente}
              onChangeText={setPaciente}
              maxLength={30}

            />




          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Nombre Propietario</Text>
            <TextInput
              style={styles.input}
              placeholder='Nombre del Propietario'
              placeholderTextColor={'#000000'}
              value={propietario}
              onChangeText={setPropietario}
              maxLength={40}

            />




          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Email Propietario</Text>
            <TextInput
              style={styles.input}
              placeholder='Email del Propietario'
              placeholderTextColor={'#000000'}
              keyboardType='email-address'
              value={email}
              onChangeText={setEmail}

            />




          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Numero Propietario</Text>
            <TextInput
              style={styles.input}
              placeholder='Numero del Propietario'
              placeholderTextColor={'#000000'}
              keyboardType='number-pad'
              value={numero}
              onChangeText={setNumero}
              maxLength={10}


            />




          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Fecha Alta</Text>


            <View style={styles.fechaContenedor}>

              <DatePicker
                date={fecha}
                locale='es'
                onDateChange={(date) => setFecha(date)}


              />
            </View>



          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Sintomas Paciente</Text>
            <TextInput
              style={[styles.input, styles.sintomasInput]}
              placeholder='Sintomas del Paciente'
              placeholderTextColor={'#000000'}
              value={sintomas}
              onChangeText={setSintomas}
              multiline={true}
              numberOfLines={4}

            />




          </View>


          <Pressable
            style={styles.btnNuevaCita}
            onPress={handleCita}

          >

            <Text style={styles.btnNuevaCitaTexto}>{pacienteObj.id ? 'Editar' : 'Agregar'} </Text>


          </Pressable>


        </ScrollView>




      </SafeAreaView>
    </Modal>



  )
}


const styles = StyleSheet.create({
  contenido: {
    backgroundColor: '#708090',
    flex: 1,


  },

  titulo: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '600',
    color: '#F5F5F5',
    marginTop: '10',
    marginHorizontal: '20'

  },
  tituloBold: {
    fontWeight: '900',
    color: 'skyblue',


  },
  btnCancelar: {
    marginVertical: 20,
    backgroundColor: '#B0C4DE',
    marginHorizontal: 30,
    padding: 20,
    borderRadius: 10

  },
  btnCancelarTexto: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 16,
    textTransform: 'uppercase'

  },
  campo: {
    marginTop: 15,
    marginHorizontal: 30,


  },
  label: {
    color: '#F5F5F5',
    marginBottom: 10,
    marginTop: 10,
    fontSize: 20,
    fontWeight: '100',
    fontWeight: '900'

  },
  input: {
    backgroundColor: '#F5F5F5',
    padding: 15,
    borderRadius: 10,



  },
  sintomasInput: {
    height: 53
  },

  fechaContenedor: {
    backgroundColor: '#FFF',
    borderRadius: 10
  },
  btnNuevaCita: {
    backgroundColor: '#4682B4',
    paddingVertical: 15,
    marginHorizontal: 30,
    borderRadius: 10,
    marginVertical: 25
  },
  btnNuevaCitaTexto: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 16,
    textTransform: 'uppercase'


  }
})

export default Formulario
