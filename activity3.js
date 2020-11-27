import React from 'react';
import {View, Text, StyleSheet, ImageBackground, Button} from 'react-native';

const styles = StyleSheet.create({
    boxStyle: {
        width: 150,
        height: 150,
        padding: 20,
        backgroundColor: '#00629e',
    },
});

const Activity3 = () => {
    return (
        <ImageBackground
            source={require('./images/flames_bg.jpg')}
            style={{width: '100%', height: '100%'}}>
            <View style={[styles.boxStyle]}>
                <Button
                    color="#f9769a"
                    onPress={() => {
                        alert('You tapped the button!');
                    }}
                    title="Press Me"
                />
            </View>
        </ImageBackground>
    );
};

export default Activity3;
