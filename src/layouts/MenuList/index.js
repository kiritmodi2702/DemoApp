import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  SectionList,
  Text,
  TextInput,
  Modal,
} from 'react-native';
import styles from './styles';
import url from '../../utils/url';
import axios from 'axios';
import _ from 'lodash';
import colors from '../../utils/colors';
import Plus from '../../components/Plus';
import Minus from '../../components/Minus';
import Button from '../../components/Button';

const MenuList = ({navigation, route}) => {
  const [listing, setListing] = useState([]);
  const [visible, setVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');
  const [quantity, setQuantity] = useState(0);

  const APIKEY = route.params.APIKEY;

  const finalResults = (data, callback) => {
    var categoryDictionary = _.groupBy(data, function (n) {
      return n.categoria.nombremenu;
    });
    let finalCategoryArray = [];
    for (const iterator of Object.keys(categoryDictionary)) {
      let object = {
        title: iterator,
        data: categoryDictionary[iterator],
      };
      finalCategoryArray.push(object);
    }

    callback(finalCategoryArray);
  };
  const MenuListAPI = () => {
    axios
      .get(url.MENU_LIST, {
        headers: {APIKEY: APIKEY},
      })
      .then(response => {
        if (response && response.data && response.data.data) {
          finalResults(response.data.data, finalCategoryArray => {
            setListing(finalCategoryArray);
          });
        }
      })
      .catch(error => {
        // if (error.includes('Network Error')) {
        //   alert('you are offline');
        // }
      });
  };
  useEffect(() => {
    MenuListAPI();
  }, []);

  useEffect(() => {
    navigation.setOptions({
      title: route.params.name,
    });
  }, [navigation]);

  const detailModal = () => {
    return (
      <Modal animationType="fade" transparent={true} visible={visible}>
        <View style={styles.containerModal}>
          <View style={styles.baseViewModal}>
            <View style={styles.txtDetailArticle}>
              <Text>Details Of The Articles</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}>
              <Minus
                onPress={() => {
                  if (quantity > 0) {
                    setQuantity(prevValue => prevValue - 1);
                  }
                }}
              />
              <TextInput
                value={quantity.toString()}
                keyboardType="number-pad"
                style={styles.inputStyle}
                onChangeText={setQuantity}
              />
              <Plus
                onPress={() => {
                  if (quantity >= 0) {
                    setQuantity(prevValue => prevValue + 1);
                  }
                }}
              />
            </View>

            <View style={styles.viewItem}>
              <Text>{selectedItem.nombre}</Text>
              <Text>{selectedItem.precioSugerido}</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Button
                onPress={() => {
                  setVisible(false);
                }}
                buttonStyle={{width: '46%'}}
                title={'Cancel'}
              />
              <Button
                disabled={parseInt(quantity) < 1}
                onPress={() => {
                  setVisible(false);
                }}
                buttonStyle={{width: '46%'}}
                title={'Confirm'}
              />
            </View>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <SectionList
          style={styles.listContainer}
          sections={listing}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => {
            return (
              <View style={styles.sectionItem}>
                <Text>{item.nombre}</Text>
                <Plus
                  onPress={() => {
                    setQuantity(0);
                    setSelectedItem(item);
                    setVisible(true);
                  }}
                />
              </View>
            );
          }}
          renderSectionHeader={({section: {title}}) => (
            <View style={styles.sectionStyle}>
              <Text style={{color: colors.WHITE}}>{title}</Text>
            </View>
          )}
        />
      </View>
      {detailModal()}
    </SafeAreaView>
  );
};

export default MenuList;
