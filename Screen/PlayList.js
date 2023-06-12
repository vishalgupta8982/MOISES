import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {playList, favorite} from './DummyData/SearchSong';
import * as Animatable from 'react-native-animatable';
export default function Playlist({navigation}) {
  // eslint-disable-next-line react/no-unstable-nested-components
  const Play = () => {
    return (
      <View>
        <View>
          <Text style={style.playText}>PlayLists</Text>
          {playList.map((playList, index) => (
            <View style={{flexDirection: 'row'}}>
              <View>
                <Image style={style.playListImage} source={playList.image} />
              </View>
              <View style={style.listTextC}>
                <Text style={style.listText}>{playList.name}</Text>
                <Text style={style.listText2}>PlayList . Vishal Gupta</Text>
              </View>
            </View>
          ))}
          <View>
            <Text style={style.favText}>Favourite Artists</Text>
            {favorite.map((favorite, index) => (
              <View>
                <View style={{flexDirection: 'row'}}>
                  <Image style={style.favImage} source={favorite.image} />
                  <Text style={style.favNam}>{favorite.name}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={style.container}>
      <View style={style.container2}>
        <Text style={style.TPlay}>
          Your <Text style={{color: '#ffc810'}}>Playlists</Text>
        </Text>
        <Icon
          style={style.headIcon}
          name="plus-circle"
          size={25}
          color={'#ffc810'}
        />
      </View>
      <View>
        <Animatable.View animation="fadeInUp">
          <ScrollView>
            <Image
              style={style.mainImg}
              source={{
                uri: 'https://thumbnails.production.thenounproject.com/6LCMvKk7Foi1ihGWQ9AeVv2r8ys=/fit-in/1000x1000/photos.production.thenounproject.com/photos/157E731B-BF50-4501-8A47-79B7ABD73707.jpg',
              }}
            />
            <Play />
            <View style={{marginTop: 100}}></View>
          </ScrollView>
        </Animatable.View>
      </View>
    </View>
  );
}
const width = Dimensions.get('window').width;
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  container2: {flexDirection: 'row', margin: 10},
  TPlay: {color: '#fff', fontSize: 30, fontWeight: 700},
  headIcon: {
    marginLeft: 'auto',
    verticalAlign: 'middle',
    marginRight: 5,
  },
  mainImg: {width: width, height: 180},
  playText: {
    color: '#ffc810',
    fontSize: 20,
    fontWeight: 700,
    margin: 10,
  },
  playListImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    margin: 10,
  },
  listTextC: {
    justifyContent: 'center',
    marginLeft: 10,
  },
  listText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 700,
  },
  listText2: {
    color: 'grey',
    fontSize: 15,
    fontWeight: 600,
  },
  favText: {
    color: '#ffc810',
    fontSize: 20,
    fontWeight: 700,
    margin: 10,
  },
  favImage: {
    height: 80,
    width: 80,
    marginLeft: 10,
    borderRadius: 40,
    marginTop: 15,
  },
  favNam: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 700,
    marginTop: 5,
    verticalAlign: 'middle',
    marginLeft: 10,
  },
});
