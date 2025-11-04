import React from 'react'
import { Text, SafeAreaView, Pressable, View, StyleSheet } from 'react-native'
import { formatearfecha } from '../helpers'

const InformacionPaciente = ({ paciente, setPaciente, setModalPaciente }) => {
  return (
    <SafeAreaView style={styles.contenedor}>
      <Text style={styles.titulo}>
        Información <Text style={styles.tituloBold}>Paciente</Text>
      </Text>

      <View>
        <Pressable
         style={styles.btnCerrar}
         onPress={() => {
            setModalPaciente(false)
            setPaciente({})
         }}
        

          
        >
          <Text style={styles.btnCerrarTexto}>Cerrar</Text>
        </Pressable>
      </View>

      <View style={styles.contenido}>
        <View style={styles.campo}>
          <Text style={styles.label}>Nombre:</Text>
          <Text style={styles.valor}>{paciente.paciente}</Text>
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Propietario:</Text>
          <Text style={styles.valor}>{paciente.propietario}</Text>
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.valor}>{paciente.email}</Text>
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Número:</Text>
          <Text style={styles.valor}>{paciente.numero}</Text>
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Fecha:</Text>
          <Text style={styles.valor}>{formatearfecha(paciente.fecha)}</Text>
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Síntomas:</Text>
          <Text style={styles.valor}>{paciente.sintomas}</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#415a74ff',
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
    color: 'skyblue',
  },
  btnCerrar: {
    marginVertical: 5,
    backgroundColor: '#B0C4DE',
    marginHorizontal: 30,
    padding: 20,
    borderRadius: 10,
  },
  btnCerrarTexto: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  contenido: {
    backgroundColor: '#FFFAFA',
    marginHorizontal: 30,
    marginVertical: 40,
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  campo: {
    marginBottom: 10,
  },
  label: {
    textTransform: 'uppercase',
    color: '#374151',
    fontWeight: '600',
    
  },
  valor: {
    fontWeight: '700',
    fontSize: 20,
    color: '#334155',
  },
})

export default InformacionPaciente
