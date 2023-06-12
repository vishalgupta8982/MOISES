import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/Entypo';
import Iconss from 'react-native-vector-icons/AntDesign';
import Slider from 'react-native-slider';
export default function Detail({navigation, route}) {
  const item = route.params;
  const [seekBarValue, setSeekBarValue] = useState(0);
  const [pause,setPause] = useState(true)
  const formatTime = time => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes < 10 ? '0' + minutes : minutes}:${
      seconds < 10 ? '0' + seconds : seconds
    }`;
  };
  const handleSeekBarChange = value => {
    setSeekBarValue(value);
  };
  return (
    <View style={{flex: 1}}>
      <LinearGradient style={{flex: 1}} colors={['#6dd5ea', '#6dd9ce']}>
        <View style={style.container}>
          <View style={style.container1}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="arrow-back" size={25} color="#fff" />
            </TouchableOpacity>
            <Icons name="dots-three-vertical" size={25} color="#ffff" />
          </View>

          <View style={style.imgBorder}>
            <Image style={style.mainImg} source={item.image} />
          </View>
          <View>
            <Text style={style.SongName}>{item.name}</Text>
            <Text style={style.SingerName}>{item.singer}</Text>
          </View>
          <View style={style.vSlider}>
            <Slider
              style={style.Slider}
              minimumValue={0}
              maximumValue={200}
              value={seekBarValue}
              onValueChange={handleSeekBarChange}
              thumbTintColor="#ffc810"
              minimumTrackTintColor="#ffc810"
              maximumTrackTintColor="gray"
            />
            <View style={style.time}>
              <Text style={style.txtTime}>{formatTime(seekBarValue)}</Text>
              <Text style={style.txtTime}>{formatTime(200)}</Text>
            </View>
          </View>
          <View style={style.icons}>
            <Icon name="heart-outline" size={25} color="#fff" />
            <Iconss name="stepbackward" size={35} color="#fff" />
            <TouchableOpacity onPress={() => setPause(!pause)}>
              <View style={style.pause}>
                {pause ? (
                  <Icon
                    name="play-sharp"
                    size={35}
                    color="black"
                  />
                ) : (
                  <Iconss name="pause" size={35} color="black" />
                )}
              </View>
            </TouchableOpacity>
            <Iconss name="stepforward" size={35} color="#fff" />
            <Iconss name="minuscircleo" size={25} color="#fff" />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}
const width = Dimensions.get('screen').width;

const style = StyleSheet.create({
  container: {
    margin: 10,
  },
  container1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mainImg: {
    height: 297,
    width: 297,
    borderRadius: 147,
    alignSelf: 'center',
  },
  imgBorder: {
    height: 305,
    width: 305,
    borderWidth: 4,
    borderColor: '#ffc810',
    borderRadius: 153,
    alignSelf: 'center',
  },
  SongName: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 28,
    fontWeight: 600,
    color: '#fff',
    alignSelf: 'center',
  },
  SingerName: {
    marginLeft: 10,
    fontSize: 17,
    fontWeight: 500,
    color: '#fff',
    alignSelf: 'center',
  },
  vSlider: {
    marginTop: 80,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Slider: {
    width: width - 80,
    alignSelf: 'center',
  },
  time: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
  },
  txtTime: {
    color: '#fff',
  },
  pause:{
    height:70,
    width:70,
    backgroundColor:"#fff",
    borderRadius:35,
    justifyContent:'center',
    alignItems:'center'
  }
});
