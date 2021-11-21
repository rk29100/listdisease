
import React from 'react';
import{View,StyleSheet,Text} from 'react-native'
import { Button } from 'react-native-paper';
  
function navigate({navigation}) {
    return (
        <View style={{alignItems:'center'}}>
        <View>
            <Text style={{textAlign:'center', fontSize:50, marginBottom:50}}>Welcome</Text>
        </View>
        <Button icon="camera" mode="contained" onPress={() => {navigation && navigation.push('HomeScreen')}} style={{marginBottom:50}}>
                Press me
        </Button>
        <Button icon="camera" mode="outlined" onPress={() =>{ navigation && navigation.navigate('HelloScreen')}} style={{marginBottom:50}}>
                Press me
        </Button>
        <Button icon="camera" mode="contained" onPress={() =>{ navigation && navigation.navigate('ChatScreen')}} style={{marginBottom:50}}>
                Press me
        </Button>
        <Button icon="camera" mode="outlined" onPress={() =>{ navigation && navigation.navigate('ProfileScreen')}} style={{marginBottom:50}} >
                Press me
        </Button>
        <Button icon="camera" mode="contained" onPress={() =>{ alert('Pressed')}} style={{marginBottom:50}}>
                Press me
        </Button>
     
     
     </View>
    );
}

export default navigate;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    button: {
    //   backgroundColor: 'green',
    //   width: '40%',
    //   height: 40
    }
  });