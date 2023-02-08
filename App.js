import * as React from 'react';
import { Text, View, Button, Image, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Thông tin cá nhân "
        onPress={() => {
          navigation.navigate('Profile');
        }}
      />
    </View>
  );
}

function ProfileScreen({ navigation }) {

  let msv = 'Ph19466';
  let name = 'Trân Minh Quân';
  let sdt = '0966928040';
  let adress = 'Khu 2';



  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image style={{ width: 300, height: 300 }} source={{ uri: 'https://cdn.pixabay.com/photo/2023/01/24/13/23/viet-nam-7741017_960_720.jpg' }} />
      <Text>Mã Sinh Viên: {msv}</Text>
      <Text>Họ Tên: {name}</Text>
      <Text>Số điện thại: {sdt}</Text>
      <Text>Địa chỉ: {adress}</Text>

      <Button
        title="Sửa"
        onPress={() => navigation.navigate('EditProfile', {
          msv, name, sdt, adress
        }
        )}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
function EditProfile({ route, navigation }) {
  const { msv } = route.params;
  const { name } = route.params;
  const { sdt } = route.params;
  const { adress } = route.params;

  const [msvs, setMsv] = useState("");
  const [names, setName] = useState("");
  const [sdts, setSdt] = useState("");
  const [adresss, setadress] = useState("");

  const handleChangeMsv = (text) => {
    setMsv(text);
  }
  const handleChangeName = (text) => {
    setName(text);
  }
  const handleChangeSdt = (text) => {
    setSdt(text);
  }
  const handleChangeAdress = (text) => {
    setadress(text);
  }

  // const setData= [old, news] = news;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TextInput style={
        { margin: 20, borderWidth: 1, borderColor: '#777' }} onChangeText={handleChangeMsv} >{JSON.stringify(msv)}</TextInput>
      <TextInput style={
        { margin: 20, borderWidth: 1, borderColor: '#777' }} onChangeText={handleChangeName}>{JSON.stringify(name)}</TextInput>
      <TextInput style={
        { margin: 20, borderWidth: 1, borderColor: '#777' }} onChangeText={handleChangeSdt} >{JSON.stringify(sdt)}</TextInput>
      <TextInput style={
        { margin: 20, borderWidth: 1, borderColor: '#777' }} onChangeText={handleChangeAdress} >{JSON.stringify(adress)}</TextInput>
      <Button title='Huỷ' onPress={() => navigation.navigate('Home')} />
      <Button title='Lưu' onPress={() => navigation.push('Profile', {
        msv: msvs,
        name: names,
        sdt: sdts,
        adress: adresss

      })} />


    </View>
  )
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="EditProfile" component={EditProfile} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
