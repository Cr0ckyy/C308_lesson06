import * as React from 'react';
import { StyleSheet, View,Text} from 'react-native';
const styles = StyleSheet.create({
    greenBox:{
        width:100,
        height:100,
        marginTop: 30,
        backgroundColor: 'green',
        borderWidth: 1,
        borderColor: 'black'
    } ,

    boxText:{
        justifyContent: 'center',
        color:'white'
    },
    title: {
        fontWeight:'bold'
    }
});


const Activity2 = () => {
    return (


    <View style={styles.greenBox}>
        <Text style={[styles.greenBox,styles.boxText , styles.title]}>Who We Are</Text>
        <Text style={[styles.greenBox,styles.boxText ]}>Our People</Text>
        <Text style={[styles.greenBox,styles.boxText ]}>Our Campus</Text>

    </View>




    );
};





export default Activity2;
