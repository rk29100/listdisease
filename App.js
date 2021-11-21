import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, SafeAreaView,StyleSheet,Text } from 'react-native';
import { Button } from 'react-native-paper';
// import HomeScreen from './screen/homescreen';
// import ProfileScreen from './screen/portscreen';
// import HelloScreen from './screen/chatscreen';
// import ChatScreen from './screen/settingscreen';
// import MenuScreen from './navigation/navigate';

const Stack = createNativeStackNavigator();



const navigate=({navigation})=> {
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



const chatscreen=({navigation}) => {
   
  return (
      <View style={styles.container}>
          <Text>chat Screen</Text>
          <Button
              onPress={()=>alert("Button Clicked.")}
              > Click me</Button>
      </View>
  )

}

const homescreen=({navigation}) => {
   
  return (
      <View style={styles.container}>
          <Text>Home Screen</Text>
          <Button
              onPress={()=>alert("Button Clicked.")}
              > Click me</Button>
      </View>
  )

}


const portscreen=({navigation}) => {
   
  return (
      <View style={styles.container}>
          <Text>Port Screen</Text>
          <Button
              onPress={()=>alert("Button Clicked.")}
              > Click me</Button>
      </View>
  )

}


const settingscreen=({navigation}) => {
   
  return (
      <View style={styles.container}>
          <Text>Settings Screen</Text>
          <Button
              onPress={()=>alert("Button Clicked.")}
              > Click me</Button>
      </View>
  )

}





class App extends React.Component {
  render(){
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View style={{ flex: 1 }}>
     
        <NavigationContainer>
          <Stack.Navigator >
            <Stack.Screen name="MenuScreen" component={navigate} options={{headerShown: false}} />
            <Stack.Screen name="HomeScreen" component={homescreen}  options={{headerShown: false}}/>
            <Stack.Screen name="ProfileScreen" component={chatscreen} options={{headerShown: false}} />
            <Stack.Screen name="HelloScreen" component={portscreen} options={{headerShown: false}}/>
            <Stack.Screen name="ChatScreen" component={settingscreen}options={{headerShown: false}} />
          </Stack.Navigator>
        </NavigationContainer>

    </View>
  </SafeAreaView>
   
  );
}
};

export default App;

const styles = StyleSheet.create({
  container:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#8fcbbc',
  }
})
