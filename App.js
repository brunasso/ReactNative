import React from 'react';
import { StyleSheet, View, Button, TextInput} from 'react-native';
import {useState} from 'react'
import { Header } from './Components/Header/Header.js';


export default function App() {
  const [text, setText] = useState('');
  const [itemList, setitemList] = useState([]);


  const handleChangeText = (value) => {
    setText(value);
  }

  const handleAddItem = ()=> {
    const item = {
      value: text,
      id: Math.random().toString()
    };

    setitemList([
      ...itemList,
      item,
    ]);
  }

  return (


    <View style={styles.container}>
      <View style={styles.inputContainer}>
      <Header title={"Hello"}></Header>
        <TextInput
        placeholder="Item en lista"
        style={styles.input}
        onChangeText={handleChangeText}
        value={text}
        />
        <Button title="Add" onPress={handleAddItem} />
        <View style={styles.container}>
          {itemList.map(item => (
            <View style={styles.item} key={item.id}>
              <Text>{item.value}</Text>
              <Button title="X"/>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {padding: 30},
  inputContainer: {flexDirection: 'row', justifyContent: 'space-between', alignItems:'center'},
  input: {borderBottomColor: 'black', borderBottomWidth: 1, flex: 1, marginRight: 20},
  btn: {width: 10, height: 10}
})