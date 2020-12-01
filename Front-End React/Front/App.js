import { StatusBar } from 'expo-status-bar';
import React ,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Container ,Content ,Header, Input,Title ,CardItem} from "native-base";

export default function App() {
  return (
    <View style={styles.container}>
      <Container>
          <Content>
              <Header>
                  <Title>
                      Login In Swing App
                  </Title>
              </Header>
              <CardItem header>
                  <Text style={styles.heading}> Login User </Text>
              </CardItem>
              <CardItem>
                  <Input placeholder='Email'style={styles.input} value={email}>  </Input>
              </CardItem>

          </Content>
      </Container>
      <StatusBar style="auto" />
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
  heading:{
      textAlign:'center',
      flex:1,
      fontsize:20

    },
  input:{
      borderColor:'red',
      borderWidth:1
  }
});
