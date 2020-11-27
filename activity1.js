import * as React from 'react';
import {Text, View} from 'react-native';
const Activity1 = () => {
    return (
<View>

    {/*"RP Values" has font size of 24px*/}
        <Text style ={{fontSize:24 }}>RP Values</Text>

    {/*"Excellence" has font colour of green*/}
    <Text style ={{color:'green'}}>Excellence</Text>

    {/*"Customer-Centric" has background colour of yellow*/}
    <Text style ={{backgroundColor:'yellow'}}>Customer-Centric</Text>

    {/*"Integrity" is in italics*/}
        <Text style={{fontStyle: 'italic'}}>Integrity</Text>

    {/*"Teamwork" is aligned in the centre*/}
    <Text style={{textAlign: "center"}}>Teamwork</Text>

    {/*"Enterprising" has background colour black and white font colour*/}
    <Text style ={{backgroundColor:'black' , color:'white'}}>Enterprising</Text>

        </View>
    );
};

export default Activity1;
