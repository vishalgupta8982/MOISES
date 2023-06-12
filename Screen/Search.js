import {View, Text, ScrollView, Image, StyleSheet,TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Search2 from '../Search';
 import Detail from './Detail';
import Profile from './Profile';
import {MadeForYou, artist, song1} from './DummyData/SearchSong';
import * as Animatable from 'react-native-animatable';
export default function Search({navigation}) {
  // eslint-disable-next-line react/no-unstable-nested-components
  const ListSong = () => {
    return (
      <View>
        <View>
          <Text style={style.recentSearch}>Recent Searches</Text>
          <View>
            {song1.map((song1, index) => (
              <TouchableOpacity onPress={() => navigation.navigate("Detail",song1)}>
                <View style={style.songMapContainer}>
                  <View>
                    <Image style={style.songImg} source={song1.image} />
                  </View>
                  <View style={style.listContainer}>
                    <View style={style.list2Container}>
                      <FontAwesome name="music" size={15} color={'#fff'} />
                      <Text style={style.songName}>{song1.name}</Text>
                    </View>
                    <Text style={style.singerName}>Lyrics: {song1.singer}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <Text style={style.mfy}>Made for you</Text>
        <ScrollView horizontal>
          {MadeForYou.map((MadeForYou, index) => (
            <View>
              <Image style={style.mfyImage} source={MadeForYou.image} />
              <Text style={style.mfyName}>{MadeForYou.name}</Text>
            </View>
          ))}
        </ScrollView>
        <View>
          <Text style={style.artist}>Top Artist</Text>
          <ScrollView horizontal>
            {artist.map((artist, index) => (
              <View style={style.containerA}>
                <Image style={style.artistImage} source={artist.image} />
                <Text style={style.artistName}>{artist.name}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    );
  };
  return (
    <View style={style.container}>
      <Search2 />
      <View>
        <Animatable.View animation="fadeInUp">
          <ScrollView>
            <ListSong />
          </ScrollView>
        </Animatable.View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10,
  },
  recentSearch: {
    color: '#ffc810',
    fontSize: 20,
    fontWeight: 700,
    margin: 10,
  },
  songMapContainer: {
    flexDirection: 'row',
  },
  songImg: {
    height: 60,
    width: 60,
    marginLeft: 5,
    marginTop: 15,
    borderRadius: 30,
  },
  listContainer: {
    justifyContent: 'center',
    marginLeft: 10,
  },
  list2Container: {
    flexDirection: 'row',
  },
  songName: {
    marginLeft: 8,
    color: '#fff',
  },
  singerName: {
    color: 'grey',
  },
  mfy: {
    color: '#ffc810',
    fontSize: 20,
    fontWeight: 700,
    margin: 10,
  },
  mfyImage: {
    height: 120,
    width: 120,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 60,
  },
  mfyName: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 700,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 5,
  },
  artist: {
    color: '#ffc810',
    fontSize: 20,
    fontWeight: 700,
    margin: 10,
  },
  containerA: {
    marginBottom: 90,
  },
  artistImage: {
    height: 120,
    width: 120,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 60,
  },
  artistName: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 700,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 5,
  },
});
