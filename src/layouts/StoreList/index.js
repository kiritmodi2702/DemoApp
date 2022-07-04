import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  TouchableOpacity,
  Text,
} from 'react-native';
import styles from './styles';
import url from '../../utils/url';
import axios from 'axios';

const StoreList = ({navigation}) => {
  const [listing, setListing] = useState([]);

  const storeListAPI = () => {
    axios
      .get(url.STORE_LIST, {
        headers: {APIKEY: 'bd_suvlascentralpos'},
      })
      .then(response => {
        if (response && response.data && response.data.franquicias);
        setListing(response.data.franquicias);
      })
      .catch(error => {
        console.log('error ==>> ' + error);
        // if (error.includes('Network Error')) {
        //   alert('you are offline');
        // }
      });
  };
  useEffect(() => {
    // API CALL FOR LISTING
    storeListAPI();
  }, []);

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('MenuList', {
            APIKEY: item.APIKEY,
            name: item.negocio,
          });
        }}
        style={styles.itemStyle}>
        <Text>{item.negocio}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <FlatList
          style={styles.listContainer}
          data={listing}
          renderItem={renderItem}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

export default StoreList;
