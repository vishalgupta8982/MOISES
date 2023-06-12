import {
  View,
  Text,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import axios from "axios";
 import React,{useState} from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Icon from "react-native-vector-icons/FontAwesome";
import Profile from "./Profile";
import Ip from "./Ip";
//import Icon from "react-native-ico-social-media";
export default function Login(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const checkName = async () => {
    setIsLoading(true);
    setError("");
    try {
      const response = await axios.put(`http://${Ip}:3000/api/names`, {
        name,
        password,
      });
      if (response.data.success) {
        props.navigation.navigate("Profile");
      } else {
        setError("User not found");
      }
    } catch (error) {
      console.log(error);
      setError(error.response?.data?.error ?? "User not found");
    }
    setIsLoading(false);
  };

  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <StatusBar backgroundColor={'black'} />
      <View
        style={{
          flex: 1 / 1.8,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          style={{width: '100%', height: '100%'}}
          source={require('../Image/loginimg.jpg')}
        />
        {isLoading && (
          <ActivityIndicator
            style={{position: 'absolute'}}
            size={'large'}
            color={'crimson'}
          />
        )}
      </View>
      <View style={{flex: 1, backgroundColor: '#fff', padding: 20}}>
        <View>
          <Text style={{fontSize: 30, fontWeight: '600', color: 'black'}}>
            Login
          </Text>
        </View>
        <View style={{marginTop: 20}}>
          {error ? <Text style={{color: 'red'}}>{error}</Text> : null}
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 5,
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 20,
          }}>
          <MaterialIcons
            name="alternate-email"
            keyboardType="email-address"
            size={20}
            color="#666"
            style={{marginRight: 5, marginTop: 5}}
          />
          <TextInput
            placeholder="Enter Username"
            placeholderTextColor={'grey'}
            onChangeText={setName}
            value={name}
            selectionColor={'black'}
            style={{flex: 1, paddingVertical: 0}}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 20,
          }}>
          <Icon
            name="lock"
            size={20}
            color="#666"
            style={{marginRight: 5, marginTop: 5}}
          />
          <TextInput
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor={'grey'}
            onChangeText={setPassword}
            value={password}
            selectionColor={'black'}
            style={{flex: 1, paddingVertical: 0}}
          />
          <TouchableOpacity onPress={() => {}}>
            <Text style={{color: 'red', fontWeight: '700'}}>Forgot?</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: '#3dd9d6',
              padding: 15,
              borderRadius: 10,
            }}
            onPress={checkName}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 25,
                fontWeight: '700',
                color: 'black',
              }}>
              Login
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              textAlign: 'center',
              color: '#666',
              marginTop: 30,
              fontWeight: '500',
            }}>
            or, login with..
          </Text>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              onPress={() => {}}
              style={{
                borderColor: '#ddd',
                borderWidth: 2,
                borderRadius: 10,
                paddingHorizontal: 30,
                paddingVertical: 10,
              }}>
              <Image
                style={{width: 20, height: 20}}
                source={require('../Image/google.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {}}
              style={{
                borderColor: '#ddd',
                borderWidth: 2,
                borderRadius: 10,
                paddingHorizontal: 30,
                paddingVertical: 10,
              }}>
              <Image
                style={{width: 25, height: 25}}
                source={require('../Image/whatsapp.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {}}
              style={{
                borderColor: '#ddd',
                borderWidth: 2,
                borderRadius: 10,
                paddingHorizontal: 30,
                paddingVertical: 10,
              }}>
              <Image
                style={{width: 25, height: 25}}
                source={require('../Image/twitter.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 10,
          }}>
          <Text style={{color:"black"}}>New to the app?</Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('NewUser')}>
            <Text style={{color: 'green', fontWeight: '700'}}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
