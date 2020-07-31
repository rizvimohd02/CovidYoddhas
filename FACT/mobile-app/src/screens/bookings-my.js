import React from 'react';
import { StyleSheet, FlatList, View, Text, TouchableOpacity, Alert } from 'react-native';

import { search, userID } from '../lib/utils'

const styles = StyleSheet.create({
  flatListView: {
    backgroundColor: '#FFF'
  },
  itemTouchable: {
    flexDirection: 'column',
    padding: 5,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    borderBottomColor: '#dddddd',
    borderBottomWidth: 0.25
  },
  itemView: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  itemPlace: {
    fontSize: 16,
    fontFamily: 'IBMPlexSans-Medium',
  },
  itemDatetime: {
    fontSize: 14,
    fontFamily: 'IBMPlexSans-Medium',
    color: 'gray'
  },
  itemPerson: {
    fontSize: 16,
    fontFamily: 'IBMPlexSans-Medium',
    color: 'gray'
  },
  emptyListView: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  emptyListText: {
    fontFamily: 'IBMPlexSans-Bold',
    color: '#999999',
    fontSize: 16
  }
});

const MyBookings = function ({ navigation }) {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    navigation.addListener('focus', () => {
      search({ userID: userID(), trnsctype: 'customerBooking' })
        .then(setItems)
        .catch(err => {
          console.log(err);
          Alert.alert('ERROR', 'Please try again. If the problem persists contact an administrator.', [{text: 'OK'}]);
        });
    })
  }, []);

  const Item = (props) => {

    var i=' Person';
    if (props.person>1){
      i = ' Persons'
    }
    return (
      <TouchableOpacity style={styles.itemTouchable}
          onPress={() => { navigation.navigate('Edit Booking', { item: props }); }}>
        <View style={{height: 85, borderRadius: 15, borderColor: '#4682bf', borderWidth: 2, padding: 8}}>
        <View style={styles.itemView}>
          <Text style={styles.itemPlace}>{props.place}</Text>
          <Text style={styles.itemPerson}>{props.person + i} </Text>
        </View>
        <Text style={styles.itemDatetime}>{props.datetime}</Text>
        <Text style={styles.itemDatetime}>{props.bookingtime}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  
  if (items.length > 0) {
    return (
      <FlatList style={styles.flatListView}
        data={items}
        renderItem={({ item }) => <Item {...item} />}
        keyExtractor={item => item.id || item['_id']}
      />
    )
  } else {
    return (
      <View style={styles.emptyListView}>
        <Text style={styles.emptyListText}>You currently have no bookings listed</Text>
      </View>
    )
  }
};

export default MyBookings;
