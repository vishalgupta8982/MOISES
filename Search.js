 import React, {useState} from 'react';
 import {View, Text, TextInput, FlatList, StyleSheet,Image} from 'react-native';
import {artist, song} from './Screen/DummyData/SearchSong'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons'
 const SearchScreen = () => {
   const [searchQuery, setSearchQuery] = useState('');
   const [filteredData, setFilteredData] = useState([]);

   const handleSearch = text => {
     const formattedQuery = text.toLowerCase();
     const filteredResults = song.filter(item =>
       item.name.toLowerCase().includes(formattedQuery),
     );
     if (filteredResults.length === 0) {
       setFilteredData([{id: 'notfound', name: 'Not Found'}]);
     } else {
       setFilteredData(filteredResults);
     }

     setSearchQuery(text);
   };

   const renderItem = ({item}) => <Item name={item.name} singer={item.singer} image={item.image}   />
   ;
   

   return (
     <View>
       <View
         style={{
           borderWidth: 1,
           borderColor: '#fff',
           borderRadius: 10,
           padding: 5,
           flexDirection: 'row',
           backgroundColor: '#283037',
         }}>
         <FontAwesome
           style={{marginRight: 10, justifyContent: 'center', marginTop: 15}}
           name="search"
           color={'#ffc810'}
           size={20}
         />
         <TextInput
           selectionColor={'#fff'}
           placeholderTextColor={'grey'}
           placeholder="Type here to search.."
           onChangeText={handleSearch}
           value={searchQuery}
           style={{fontSize: 15, color: 'white'}}
         />
       </View>
       
       {searchQuery !== '' && (
         <FlatList
           data={filteredData}
           renderItem={renderItem}
           keyExtractor={item => item.id}
         />
       )}
     </View>
   );
 };

 const Item = ({name, singer, image}) =>
   name === 'Not Found' ? (
     <View style={{alignItems: 'center', marginTop: 20}}>
       <Text
         style={{
           fontSize: 18,
           color: '#fff',
           fontWeight: 600,
           justifyContent: 'center',
         }}>
         Couldn't find, Search again
         <Icon name="sad-outline" size={25} color="red" />
       </Text>
     </View>
   ) : (
     <View>
       <View style={{flexDirection: 'row'}}>
         <View>
           <Image
             style={{
               height: 60,
               width: 60,
               marginLeft: 5,
               marginTop: 15,
               borderRadius: 30,
             }}
             source={image}
           />
         </View>
         <View
           style={{justifyContent: 'center', marginLeft: 10, marginTop: 15}}>
           <View style={{flexDirection: 'row'}}>
             <FontAwesome name="music" size={15} color={'#fff'} />
             <Text style={{marginLeft: 8, color: '#fff'}}>{name}</Text>
           </View>
           <Text style={{marginLeft: 20, color: 'grey'}}>Lyrics: {singer}</Text>
         </View>
       </View>
     </View>
   );
 export default SearchScreen;
