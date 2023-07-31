import { SafeAreaView, StyleSheet, Text, TextInput, View, StatusBar, Image } from 'react-native';

export default function App() {
  const opa = 'foi!'

  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <View style={styles.barraSuperior}>
        <Image
          style={styles.imgBarraSuperior}
          source={require('./src/img/logo.png')}
          resizeMode='contain'
        />
      </View>
        
      <View style={styles.container}>
        <Text style={styles.titulo}>{opa}</Text>
        <TextInput
          placeholder='Insira o valor da conta'
          style={styles.textInput}
          keyboardType='number-pad'
        />
        <TextInput
          placeholder='Insira uma gorgeta extra'
          style={styles.textInput}
          keyboardType='number-pad'
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: 'center',
    flex: 1
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
  titulo: {
    paddingVertical: 15,
    fontSize: 32,
    fontWeight: 'bold',
  },
  textInput: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    padding: 5,
    fontSize: 22, 
    marginVertical: 15
  },
});
