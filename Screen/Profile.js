import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  StyleSheet,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/AntDesign';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
export default function Profile({navigation}) {
  const [filePath, setFilePath] = useState({});
  const [condition, setCondition] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage write perission',
            message: 'App needs write PermissionsAndroid',
          },
        );
        return granted === PermissionsAndroid.RESULTS.granted;
      } catch (err) {
        console.warn(err);
        alert('write perission err', err);
      }
      return false;
    } else {
      return true;
    }
  };
  const chooseImage = type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, response => {
      console.log('Response =', response);

      if (response.didCancel) {
        alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }
      setFilePath(response);
    });
  };
  return (
    <View style={style.container}>
      <View style={style.container2}>
        <View style={style.head}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" color={'#fff'} size={30} />
          </TouchableOpacity>
          <Text style={style.headText}>My Profile</Text>
        </View>

        <View style={style.vImage}>
          <TouchableOpacity onPress={() => chooseImage('photo')}>
            {!filePath.assets ? (
              <Image
                source={require('../Image/dummyProfile.jpeg')}
                style={style.PrImage}
              />
            ) : (
              <View>
                <Image
                  source={{uri: filePath.assets[0].uri}}
                  style={style.PrImage}
                />
              </View>
            )}
            <Icon
              name="square-edit-outline"
              size={20}
              color={'black'}
              style={{position: 'absolute', top: 20, left: '40%'}}
            />
          </TouchableOpacity>
        </View>

        <View style={{flex: 3 / 2}}>
          <View style={style.listCont}>
            {!filePath.assets ? (
              <Image
                source={require('../Image/dummyProfile.jpeg')}
                style={style.listImg}
              />
            ) : (
              <Image
                source={{uri: filePath.assets[0].uri}}
                style={style.listImg}
              />
            )}
            <Text style={style.ptext}>My Profile</Text>
          </View>
          <View style={style.historyContainer}>
            <Icon
              name="clock-time-five-outline"
              size={30}
              color={'#fff'}
              style={{marginLeft: 20}}
            />
            <Text style={style.ptext}>History</Text>
          </View>
          <View style={style.rewardCon}>
            <Icons
              name="gift"
              size={30}
              color={'#fff'}
              style={{marginLeft: 20}}
            />
            <Text style={style.ptext}>Rewards</Text>
          </View>
          <View style={style.settingCont}>
            <Icons
              name="setting"
              size={30}
              color={'#fff'}
              style={{marginLeft: 20}}
            />
            <Text style={style.ptext}>Setting</Text>
          </View>
          <View style={style.logOut}>
            <TouchableOpacity>
              <Text style={style.logtext}>
                Log Out <Icon name="logout" size={26} color={'#283035'} />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#354249',
  },
  container2: {
    flex: 1,
    marginTop: 10,
  },
  head: {
    flexDirection: 'row',
  },
  headText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#fff',
  },
  vImage: {
    flex: 1,
    marginTop: 10,
    alignItems: 'center',
  },
  PrImage: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: '#ffc810',
  },
  listCont: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 3,
    borderTopWidth: 3,
    borderColor: '#283035',
  },
  listImg: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginLeft: 20,
  },
  ptext: {
    fontSize: 20,
    color: '#fff',
    marginLeft: 20,
  },
  historyContainer: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 3,
    borderColor: '#283035',
  },
  rewardCon: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 3,
    borderColor: '#283035',
  },
  settingCont: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 3,
    borderColor: '#283035',
  },
  logOut: {
    marginTop: 10,
    backgroundColor: '#ffc810',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logtext: {
    fontSize: 20,
    fontWeight: '500',
    color: '#283035',
  },
});
