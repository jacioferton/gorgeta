import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View, StatusBar, Image, Pressable } from 'react-native';

export default function App() {
  const [vConta, setVConta] = useState('')
  const [vGarcom, setVGarcom] = useState('')
  const [txtConta, setTxtConta] = useState('')
  const [txtGarcom, setTxtGarcom] = useState('')
  const valorTotal = (Number(vGarcom) + vConta*1.1)
  const valorGarcom = (Number(vGarcom) + vConta*0.1)

  function calcularConta (){
    if (vConta !== '') {
      setTxtConta(`Valor total de: ${valorTotal.toFixed(2)}`)
      setTxtGarcom(`Valor do garçom: ${valorGarcom.toFixed(2)}`)
    } else {
      setTxtConta('Insira um valor na conta')
    }
  }
  function limparCampos () {
    setVConta('')
    setVGarcom('')
    setTxtConta('')
    setTxtGarcom('')
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.barraSuperior}>
        <Image
          style={styles.imgBarraSuperior}
          source={require('./src/img/logo.png')}
          resizeMode='contain'
          />
      </View>
        
      <View style={styles.container2}>
        <View>
          <TextInput
            placeholder='Insira o valor da conta'
            style={styles.textInput}
            keyboardType='number-pad'
            value={vConta}
            onChangeText={setVConta}
          />
          <TextInput
            placeholder='Insira uma gorgeta extra'
            style={styles.textInput}
            keyboardType='number-pad'
            value={vGarcom}
            onChangeText={setVGarcom}
          />
        </View>

        <View>
          <Text style={styles.retorno}>
            {txtConta}
          </Text>
          <Text style={styles.retorno}>
            {txtGarcom}
          </Text>
        </View>

        <View>
          <Pressable style={styles.btn} onPress={calcularConta}>
            <Text style={styles.txtBtn}>Calcular Gorjeta</Text>
          </Pressable>
          <Pressable style={styles.btn} onPress={limparCampos}>
            <Text style={styles.txtBtn}>Calcular Novamente</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  container2: {
    paddingVertical: 50,
    paddingHorizontal: 30,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between'
  },
  barraSuperior: {
    backgroundColor: '#fff000',
    height: 100,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgBarraSuperior: {
    height: 80,
  },
  retorno: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  textInput: {
    height: 50,
    width: 350,
    borderWidth: 1,
    padding: 5,
    fontSize: 22, 
    marginVertical: 15
  },
  btn: {
    backgroundColor: '#fff000',
    width: 350,
    height: 50,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
    borderRadius:10,
  },
  txtBtn: {
    fontSize: 22,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
});
