import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ActivityIndicator } from "react-native";

export default class Button extends  React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <TouchableOpacity disabled={this.props.disabled}
                                  style={[styles.containerButton, this.props.containerStyle]}
                                  onPress={this.props.onPress}
                                  onPressOut={this.props.onPressOut}
                                  onPressIn={this.props.onPressIn}>
                    {!this.props.showLoader ?

                        this.props.alignIconText ?
                            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                                {this.props.icon2 ?
                                    <React.Fragment>
                                        {this.props.icon && <View style={{ marginTop: -10}}>{this.props.icon}</View>}
                                        {this.props.icon2 && <View style={{marginTop: 10, marginLeft: 5}}>{this.props.icon2}</View>}
                                    </React.Fragment> :
                                    this.props.icon && <View style={{marginHorizontal: 5}}>{this.props.icon}</View>
                                }

                                {this.props.title &&
                                <Text
                                    style={[styles.textStyle, this.props.textStyle, {marginLeft: 5}]}>{this.props.title}</Text>
                                }
                            </View> :
                            <React.Fragment>
                                {this.props.icon && <View style={{marginHorizontal: 5}}>{this.props.icon}</View>}
                                {this.props.title &&
                                <Text style={[styles.textStyle, this.props.textStyle]}>{this.props.title}</Text>}
                            </React.Fragment>

                        : <ActivityIndicator size="small" color={this.props.indicatorColor ? this.props.indicatorColor :"#00b59d" } />
                    }
                </TouchableOpacity>
            </View>
        )
    }
}

Button.navigationOptions = {
    header: null,
};


const styles = StyleSheet.create({
    containerButton: {
        borderRadius:10,
        height:60,
        width: 300,
        justifyContent: 'center',
    },
    textStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 20,
    }
});
