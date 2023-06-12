import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import {recent, Top, Trending} from './DummyData/SearchSong';
import Detail from './Detail';
export default function Home({navigation}) {
  // eslint-disable-next-line react/no-unstable-nested-components
  const Play = () => {
    return (
      <View>
        <View>
          <Text style={style.recentTxt}>Recently Played</Text>
          {recent.map(recent => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Detail', recent)}>
              <View style={style.recentCont}>
                <View>
                  <Image style={style.recentImg} source={recent.image} />
                </View>
                <View style={style.recentNm}>
                  <Text style={style.recentNmTxt}>{recent.name}</Text>
                  <Text style={style.recentSinger}>{recent.singer}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
          <View>
            <Text style={style.rfy}>Recommended For You</Text>
            <ScrollView horizontal>
              {Top.map(Top => (
                <TouchableOpacity
                  onPress={() => navigation.navigate('Detail', Top)}>
                  <View>
                    <Image style={style.TImg} source={Top.image} />
                    <Text style={style.Tnm}>{Top.name}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <View style={style.trnCont}>
              <Text style={style.tsTxt}>Trending Songs</Text>
              {Trending.map(Trending => (
                <TouchableOpacity
                  onPress={() => navigation.navigate('Detail', Trending)}>
                  <View style={style.trndCon}>
                    <View>
                      <Image style={style.trndImg} source={Trending.image} />
                    </View>
                    <View style={style.trndNmv}>
                      <Text style={style.trndNmTxt}>{Trending.name}</Text>
                      <Text style={style.trndSing.Txt}>{Trending.singer}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
            <View />
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={style.contaner}>
      <View style={{margin: 5}}>
        <StatusBar backgroundColor={'black'} />
        <View style={style.imgCon}>
          <Image style={style.headImg} source={require('../Image/logoo.png')} />
          <Text style={style.headTxt}>
            M<Icon name="emotsmile" size={28} color={'#FFC810'} />
            ISES
          </Text>
          <View style={style.rightHead}>
            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
              <FontAwesome
                style={{marginTop: 14, letterSpacing: 20}}
                name={'search'}
                size={20}
                color={'#fff'}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={style.txtSign}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Animatable.View animation="fadeInUp">
        <ScrollView>
          <View>
            <Image
              style={style.mainImg}
              source={require('../Image/bghome.jpg')}
            />
            <Text style={style.mainImgTxt}>
              M<Icon name="emotsmile" size={36} color={'crimson'} />
              ISES
            </Text>
          </View>

          <Play />
        </ScrollView>
      </Animatable.View>
    </View>
  );
}
const width = Dimensions.get('window').width;
const style = StyleSheet.create({
  contaner: {
    flex: 1,
    backgroundColor: 'black',
  },
  imgCon: {
    flexDirection: 'row',
  },
  headImg: {
    marginTop: 13,
    height: 30,
    width: 30,
  },
  headTxt: {
    justifyContent: 'center',
    fontSize: 30,
    fontWeight: '500',
    color: '#fff',
    marginTop: 5,
    marginLeft: 3,
    fontStyle: 'italic',
  },
  rightHead: {
    flexDirection: 'row',
    marginLeft: 'auto',
  },
  txtSign: {
    color: 'green',
    fontSize: 20,
    marginTop: 10,
    marginRight: 5,
  },
  mainImg: {
    width: width,
    height: 200,
  },
  mainImgTxt: {
    transform: [{rotate: '90deg'}],
    justifyContent: 'center',
    fontSize: 40,
    fontWeight: '500',
    color: '#fff',
    marginTop: '15%',
    fontStyle: 'italic',
    position: 'absolute',
    alignSelf: 'flex-end',
  },
  recentTxt: {
    color: '#ffc810',
    fontSize: 20,
    fontWeight: 700,
    margin: 10,
  },
  recentCont: {flexDirection: 'row'},
  recentImg: {
    width: 80,
    height: 80,
    borderRadius: 40,
    margin: 10,
  },
  recentNm: {
    justifyContent: 'center',
    marginLeft: 10,
  },
  recentNmTxt: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 700,
  },
  recentSinger: {
    color: 'grey',
    fontSize: 15,
    fontWeight: 600,
  },
  rfy: {
    color: '#ffc810',
    fontSize: 20,
    fontWeight: 700,
    margin: 10,
  },
  TImg: {
    height: 120,
    width: 120,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
  },
  Tnm: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 700,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 5,
  },
  trnCont: {marginBottom: 90},
  tsTxt: {
    color: '#ffc810',
    fontSize: 20,
    fontWeight: 700,
    margin: 10,
  },
  trndCon: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
  },
  trndImg: {
    width: 80,
    height: 80,
    borderRadius: 10,
    margin: 10,
  },
  trndNmv: {
    justifyContent: 'center',
    marginLeft: 10,
  },
  trndNmTxt: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 700,
  },
  trndSing: {
    color: 'grey',
    fontSize: 15,
    fontWeight: 600,
  },
});
