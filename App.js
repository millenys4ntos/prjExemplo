import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Componente from './components/Componente';
import Tabuada from './components/Tabuada';

export default function App() {
  const [num, setNum] = useState(0);
  return (
    <View style={styles.container}>
      <Componente nome="Milleny n" idade="16"/>

      <View style={styles.row}>
          <Text style={styles.texto}>Número</Text>
          <TextInput
            style={styles.input}
            value={num}
            onChangeText={(value)=>setNum(value)}
          />
      </View>

      <Tabuada num={num}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  row:{
    width: '100%',
  },

  input:{
    width: '80%',
    borderWidth: 1,
    margin: '10%',
    fontSize: 20,
    borderRadius: 6
  },

  texto:{
    fontSize: 30,
    marginLeft: '10%',

  }
});
