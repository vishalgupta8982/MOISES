import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
export default function Header({navigation}) {
  return (
    <View>
      <View style={style.container}>
        <StatusBar backgroundColor={'black'} />
        <View style={{flexDirection: 'row'}}>
          <Text style={style.appName}>
            M<Icon name="emotsmile" size={36} color={'pink'} />
            ISES
          </Text>
          <View style={style.search}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={style.sign}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    margin: 5,
  },
  appName: {
    justifyContent: 'center',
    fontSize: 40,
    fontWeight: '500',
    color: '#fff',
    marginTop: 5,
    marginLeft: 15,
    fontStyle: 'italic',
  },
  search: {
    flexDirection: 'row',
    marginLeft: 'auto',
  },
  sign: {
    color: 'green',
    fontSize: 20,
    marginTop: 15,
    marginRight: 5,
  },
});
