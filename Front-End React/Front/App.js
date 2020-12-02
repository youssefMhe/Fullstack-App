import React, { Component } from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import Button from './Button';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errorMessage: null,
            value: {},
            showLoader: false,
            login: null,
            password: null,
        };
    }

    login = async () => {
    alert(this.state.password)
        await fetch('http://127.0.0.1:8000/api/login' ,{
            method:'POST',
            headers:{
                'Accept' :'application/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify({"email": this.state.login ,"password": this.state.password })
        }).then(res=>res.json()).then(resData=>{ alert (resData.message) ;console.log (resData);})

    };

    onChangeLoginText(login) {
        this.setState({
            login: login
        });
    }

    onChangePasswordText(password) {
        this.setState({
            password: password
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{height: '100%', width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center', marginTop: -80}}>
                    <TextInput
                        style={[styles.textInput, {width: 300}]}
                        placeholder={"Login"}
                        placeholderTextColor = "#D4D4D4"
                        onChangeText={text => this.onChangeLoginText(text)}
                        value={this.state.login}
                    />

                    <View style={{flexDirection: 'row', marginTop: 20}}>
                        <TextInput
                            secureTextEntry={true}
                            style={[styles.textInput, {borderTopRightRadius: 0, borderBottomRightRadius: 0}]}
                            placeholder={"Password"}
                            placeholderTextColor = "#D4D4D4"
                            onChangeText={text => this.onChangePasswordText(text)}
                            value={this.state.password}
                        />
                        <Button containerStyle={{backgroundColor: '#00d2ff',
                            width: 75, height: 55, borderRadius: 28, borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
                                textStyle={{fontSize: 20, color: 'rgba(29,30,31,0.9)'}}
                                showLoader={this.state.showLoader}
                                indicatorColor={'white'}
                                onPress={this.login}>
                        </Button>
                    </View>

                    {this.state.errorMessage  &&
                    <Text style={{color: "red", marginTop: 15}}>{this.state.errorMessage}</Text>
                    }
                </View>

                <View style={{position: 'absolute', bottom: 30}}>
                    <Text>© Swing App</Text>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%'
    },
    textInput : {
        height: 55,
        width: 225,
        paddingLeft: 20,
        color: '#363636',
        fontSize: 15,
        borderWidth: 1,
        borderRadius: 28,
        backgroundColor: 'rgba(0,210,255, 0.035)',
        borderColor: 'rgba(0,210,255, 0.5)',
    }
});
