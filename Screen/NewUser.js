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
import React, { useState } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Icon from "react-native-vector-icons/FontAwesome";
import Profile from "./Profile";
import Login from "./Login";
import Ip from "./Ip";
export default function NewUser(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const check = () => {
    if (password == confirmPassword) {
      checkName();
    } else {
      setError("Check password");
    }
  };
  const checkName = async () => {
    setIsLoading(true);
    setError("");

    try {
      const response = await axios.post(`http://${Ip}:3000/api/users`, {
        name,
        password,
        email,
      });

      if (response.data.success) {
        props.navigation.navigate("Profile");
      } else {
        setError("check password");
      }
    } catch (error) {
      console.log(error);
      setError(error.response?.data?.error ?? "An error occurred");
    }
    setIsLoading(false);
  };

  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <StatusBar backgroundColor={'grey'} />
      <View
        style={{
          flex: 1 / 2.3,
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
            Register
          </Text>
        </View>
        <View style={{marginTop: 0}}>
          {error ? <Text style={{color: 'red'}}>{error}</Text> : null}
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 0,
          }}>
          <MaterialIcons
            name="alternate-email"
            keyboardType="email-address"
            size={20}
            color="#666"
            style={{marginRight: 5, marginTop: 5}}
          />
          <TextInput
            placeholder="Email-id"
            placeholderTextColor={'grey'}
            onChangeText={setEmail}
            value={email}
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
            marginBottom: 0,
          }}>
          <MaterialIcons
            name="person"
            keyboardType="Full Name"
            size={20}
            color="#666"
            style={{marginRight: 5, marginTop: 5}}
          />
          <TextInput
            placeholder="Full Name"
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
            marginBottom: 0,
          }}>
          <MaterialIcons
            name="lock"
            keyboardType="password"
            size={20}
            color="#666"
            style={{marginRight: 5, marginTop: 5}}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor={'grey'}
            onChangeText={setPassword}
            value={password}
            selectionColor={'black'}
            style={{flex: 1, paddingVertical: 0}}
            secureTextEntry={true}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 10,
          }}>
          <MaterialIcons
            name="lock"
            keyboardType="password"
            size={20}
            color="#666"
            style={{marginLeft: 3, marginRight: 5, marginTop: 5}}
          />
          <TextInput
            secureTextEntry={true}
            placeholder="Confirm Password"
            placeholderTextColor={'grey'}
            onChangeText={setConfirmPassword}
            value={confirmPassword}
            selectionColor={'black'}
            style={{flex: 1, paddingVertical: 0}}
          />
        </View>
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: '#F5C85E',
              padding: 10,
              borderRadius: 10,
            }}
            onPress={check}>
            <Text
              style={{textAlign: 'center',color:"black", fontSize: 25, fontWeight: '700'}}>
              Create Account
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              textAlign: 'center',
              color: '#666',
              marginTop: 20,
              fontWeight: '500',
            }}>
            or, login with..
          </Text>
          <View
            style={{
              marginTop: 5,
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
          <Text style={{color:"black"}}>Already registered?</Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
            <Text style={{color: 'green', fontWeight: '700'}}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
