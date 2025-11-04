import React from 'react'
import {
Text,
View,
StyleSheet,
Pressable


}
  from 'react-native'

  import {formatearfecha} from '../helpers'

const Paciente =
  ({ item,
    setModalVisible,
    pacienteEditar,
    eliminarPaciente,
    setModalPaciente,
    setPaciente
  }) => {
    const { paciente, fecha, id } = item
    console.log(paciente)

    

    return (
      <Pressable
        onLongPress={() => {
          setModalPaciente(true)
          setPaciente(item)
        
        }}
      >

        <View style={styles.contenedor}>
          <Text style={styles.label}> Paciente:</Text>
          <Text style={styles.texto}>{paciente} </Text>
          <Text style={styles.fecha}>{formatearfecha(fecha)} </Text>



          <View style={styles.contenedorBotones}>

            <Pressable
              style={[styles.btn, styles.btnEditar]}
              onLongPress={() => {
                setModalVisible(true)
                pacienteEditar(id)
              }}
            >
              <Text style={styles.btnTexto}>Editar </Text>
            </Pressable>

            <Pressable style={[styles.btn, styles.btnEliminar]}>
              <Text
                style={styles.btnTexto}
                onLongPress={() => eliminarPaciente(id)}
              >
                Eliminar </Text>
            </Pressable>


          </View  >
        </View>
      </Pressable>
    )
  }


const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#415a74ff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20

  },
  label: {
    color: 'skyblue',
    textTransform: 'uppercase',
    fontWeight: '700',
    marginBottom: 10

  },
  texto: {
    color: '#FFFAFA',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 10

  },
  fecha: {
    color: '#FFFAFA'

  },
  contenedorBotones: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20

  },
  btn: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5

  },
  btnEditar: {
    backgroundColor: '#F4A460'

  },
  btnEliminar: {
    backgroundColor: '#8B0000'

  },
  btnTexto: {
    textTransform: 'uppercase',
    fontWeight: '700',
    fontSize: 12,
    color: '#FFFAFA'

  }





})

export default Paciente
