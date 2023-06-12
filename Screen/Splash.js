import {View, ActivityIndicator, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
export default function App(props) {
  setTimeout(() => {
    props.navigation.navigate('BottomTab');
  }, 800);
  return (
    <View style={style.container}>
      <LinearGradient
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
        colors={[
          '#2193b6',
          '#6dd5ea',
          '#6dd9ce',
          '#6dd9ce',
          '#6dd5ea',
          '#2193b6',
        ]}>
        <Animatable.Image
          style={style.img}
          animation="fadeInDown"
          iterationCount="infinite"
          source={require('../Image/logoo.png')}
        />
        <ActivityIndicator size={40} color={'yellow'} />
      </LinearGradient>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    height: 200,
    width: 200,
  },
});
