import * as React from 'react';
import {  View,Button  } from 'react-native';

const Activity4 = () => {
    return (
            <View>
                <Button
                    color="blue"
                    onPress={() => {
                        alert('Hi there!');
                    }}
                    title="CONFIRM"
                />
            </View>
    );
};

export default Activity4;
