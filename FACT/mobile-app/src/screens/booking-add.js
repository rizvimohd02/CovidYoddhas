import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import PickerSelect from 'react-native-picker-select';
import DatePicker from 'react-native-datepicker'

import {add, search, userID } from '../lib/utils'

const styles = StyleSheet.create({
  outerView: {
    flex: 1,
    padding: 15,
    backgroundColor: '#FFF'
  },
  splitView: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  placeArea: {
    width: '65%',

  },
  label: {
    fontFamily: 'IBMPlexSans-Medium',
    color: '#000',
    fontSize: 14,
    paddingBottom: 5
  },
  selector: {
    fontFamily: 'IBMPlexSans-Medium',
    borderColor: '#D0E2FF',
    borderWidth: 2,
    padding: 8,
    marginBottom: 15,
    textAlign:'center'
  },
  personArea: {
    width: '30%'
  },
  dateArea: {
    width: '40%'
  },
  timeArea: {
    width: '55%'
  },
  textInput: {
    fontFamily: 'IBMPlexSans-Medium',
    flex: 1,
    borderColor: '#4682bf',
    borderWidth: 2,
    borderRadius: 20,
    padding: 8,
    elevation: 0,
    marginBottom: 15
  },
  textCenterAlign: {
    fontFamily: 'IBMPlexSans-Medium',
    flex: 1,
    borderColor: '#4682bf',
    borderWidth: 2,
    borderRadius: 20,
    padding: 8,
    elevation: 0,
    textAlign:'center',
    marginBottom: 15
  },
  button: {
    backgroundColor: '#1e90ff',
    color: '#FFFFFF',
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 16,
    overflow: 'hidden',
    borderRadius: 20,
    padding: 14,
    textAlign:'center',
    marginTop: 10,
    marginBottom: 35
  }
});


const AddBooking = function ({navigation }) {  
  const clearItem = { userID: userID(),place: '', name: '', emailid: '', contact: '', person: '1', datetime: '', bookingtime: '', trnsctype: 'customerBooking', isBookingMand: 'Yes', isDateTimePickerVisible:false }
  const [item, setItem] = React.useState(clearItem);

  var allTimeslots=[
    {label: '7 AM - 8 AM', value: '7 AM - 8 AM' },
    {label: '8 AM - 9 AM', value: '8 AM - 9 AM' },
    {label: '9 AM - 10 AM', value: '9 AM - 10 AM' },
    {label: '10 AM - 11 AM', value: '10 AM - 11 AM' },
    {label: '11 AM - 12 PM', value: '11 AM - 12 PM' },
    {label: '12 PM - 1 PM', value: '12 PM - 1 PM' },
    {label: '1 PM - 2 PM', value: '1 PM - 2 PM' },
    {label: '2 PM - 3 PM', value: '2 PM - 3 PM' },
    {label: '3 PM - 4 PM', value: '3 PM - 4 PM' },
    {label: '4 PM - 5 PM', value: '4 PM - 5 PM' },
    {label: '5 PM - 6 PM', value: '5 PM - 6 PM' },
    {label: '6 PM - 7 PM', value: '6 PM - 7 PM' },
    {label: '7 PM - 8 PM', value: '7 PM - 8 PM' },
    {label: '8 PM - 9 PM', value: '8 PM - 9 PM' },
    {label: '9 PM - 10 PM', value: '9 PM - 10 PM' },
    {label: '10 PM - 11 PM', value: '10 PM - 11 PM' },
];
  
  const [items, setItems] = React.useState();
  
  React.useEffect(() => {
    navigation.addListener('focus', () => {
      search({trnsctype: 'BusinessRegistration', isBookingMand: 'Yes'})
        .then(setItems)
        .catch(err => {
          console.log(err);
          Alert.alert('ERROR', 'Please try again. If the problem persists contact an administrator.', [{text: 'OK'}]);
        });
    })
  }, []);

  const [walkinDetailsdata, setItemswalkinDetailsdata] = React.useState();
  
  React.useEffect(() => {
    navigation.addListener('focus', () => {
      search({trnsctype: 'walkinDetails' })
        .then(setItemswalkinDetailsdata)
        .catch(err => {
          console.log(err);
          Alert.alert('ERROR', 'Please try again.', [{text: 'OK'}]);
        });
    })
  }, []);

  const [customerBookingdata, setItemscustomerBooking] = React.useState();
  
  React.useEffect(() => {
    navigation.addListener('focus', () => {
      search({trnsctype: 'customerBooking' })
        .then(setItemscustomerBooking)
        .catch(err => {
          console.log(err);
          Alert.alert('ERROR', 'Please try again.', [{text: 'OK'}]);
        });
    })
  }, []);

//   const calcTimeslots = () => {

//   for (var i = 0; i < items.length; i++) {
  
//     if (items[i].businessname == item.place){
      
//     var openSplitter = items[i].openingtime.split(" ");
//       var closeSplitter = items[i].closingtime.split(" ");
//       var openIndex;
//       var closeIndex; 

//       for (var x = 0; x < allTimeslots.length; x++){
//        var splitter = allTimeslots[x].label.split(" ");
//         if(parseInt(splitter[0]) == openSplitter[0] && splitter[1] == openSplitter[1]){
//             openIndex  = x;
//           }
//       }
//     for (var y = (allTimeslots.length-1); y >= 0 ; y--){
//         var splitter = allTimeslots[y].label.split(" ");
//         if(parseInt(splitter[3]) == closeSplitter[0] && splitter[4] == closeSplitter[1]){
//             closeIndex = y;
//         }
//     }
//     allTimeslots = allTimeslots.slice(openIndex,(closeIndex+1));

// console.log('*********************', allTimeslots)
      
      
//     }
//   }
    
//   };

 
  
const sendItem = () => {
      
    const payload = {
      ...item,
      person: isNaN(item.person) ? 1 : parseInt(item.person)
      
    };

    var i,j, varBookingCount=0;
  for (i = 0; i < items.length; i++) {
  
    if (items[i].businessname == item.place){
        
        for (j = 0; j < customerBookingdata.length; j++){
          
          if (customerBookingdata[j].place == item.place && customerBookingdata[j].datetime == item.datetime && customerBookingdata[j].bookingtime == item.bookingtime){
            varBookingCount = varBookingCount + parseInt(customerBookingdata[j].person);
          }
          
        }

            if((varBookingCount + parseInt(item.person)) <= items[i].personallowed){
              add(payload)
              .then(() => {
                Alert.alert('Thank you!', 'Your booking has been confirmed.', [{text: 'OK'}]);
                setItem({...clearItem });
              })
              .catch(err => {
                console.log(err);
                Alert.alert('ERROR', 'Please try again. If the problem persists contact an administrator.', [{text: 'OK'}]);
              });
            } else {
       Alert.alert('Sorry, this slot is not available. Allowed: '+ items[i].personallowed +'. Already Booked: ' + varBookingCount);
            }
      
    }
  }

    
  };

  if (items && items.length > 0) {
  return (
    <ScrollView style={styles.outerView}>
      <View style={styles.splitView}>
        <View style={styles.placeArea}>
          <Text style={styles.label}>Place</Text>
          <View style={{height: 50, borderRadius: 20, borderColor: '#4682bf', borderWidth: 2}}>  
          <PickerSelect
            style={{inputIOS: styles.selector }}
            value={item.place}
            onValueChange={(t) => setItem({...item, place: t })}
            //onValueChange={(calcTimeslots)}
            items= {items.map((business, index) => (
              {label: business.businessname, value: business.businessname }
          ))}
          />
        </View>  
        </View>
        <View style={styles.personArea}>
          <Text style={styles.label}>Person</Text>
          <TextInput
            style={styles.textCenterAlign}
            value={item.person}
            onChangeText={(t) => setItem({...item, person: t})}
            onSubmitEditing={sendItem}
            returnKeyType='send'
            enablesReturnKeyAutomatically={true}
            placeholder='e.g., 10'
            keyboardType='numeric'
          />
        </View>
      </View>

      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.textInput}
        value={item.name}
        onChangeText={(t) => setItem({...item, name: t})}
        onSubmitEditing={sendItem}
        returnKeyType='send'
        enablesReturnKeyAutomatically={true}
        placeholder='e.g., Chris Brown'
        blurOnSubmit={false}
      />
      <Text style={styles.label}>Contact Number</Text>
      <TextInput
        style={styles.textInput}
        value={item.contact}
        onChangeText={(t) => setItem({...item, contact: t})}
        onSubmitEditing={sendItem}
        returnKeyType='send'
        enablesReturnKeyAutomatically={true}
        placeholder='e.g. +91 99607733XX'
      />
      <Text style={styles.label}>Email ID</Text>
      <TextInput
        style={styles.textInput}
        value={item.emailid}
        onChangeText={(t) => setItem({...item, emailid: t})}
        onSubmitEditing={sendItem}
        returnKeyType='send'
        enablesReturnKeyAutomatically={true}
        placeholder='e.g., Chris.Brown@Hotmail.com'
      />


<View style={styles.splitView}>
        <View style={styles.dateArea}>
          <Text style={styles.label}>Select Date</Text>
          <TouchableOpacity style={[styles.textCenterAlign]}
        onPress={() => { setItem({...item, isDateTimePickerVisible: true}) }}>
      <Text allowFontScaling={false} style={[styles.label]}>{item.datetime}</Text>
      
      </TouchableOpacity>

      {
       item.isDateTimePickerVisible
        &&
        <DatePicker
        style={{width: 200}}
        datetime={item.datetime}
        mode="date"
        format="DD-MMM-YYYY"
        minDate= {new Date()}
        maxDate="2020-10-31"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
        }}
        onDateChange={(datetime) => {setItem({...item, datetime: datetime, isDateTimePickerVisible: false})}}
      />
      }
        </View>
        <View style={styles.timeArea}>
          <Text style={styles.label}>Select Time Slot</Text>
          
          <View style={{height: 45, borderRadius: 20, borderColor: '#4682bf', borderWidth: 2}}>  
          <PickerSelect
            style={styles.selector}
            value={item.bookingtime}
            onValueChange={(t) => setItem({...item, bookingtime: t })}
            items= {allTimeslots.map((business, index) => (
              {label: business.label, value: business.value }
          ))}
          />
          </View>
        </View>
      </View>    
      
      {
        item.place !== '' &&
        item.name.trim() !== '' &&
        item.contact.trim() !== '' &&
        item.datetime !== '' &&
        item.bookingtime !== '' &&
        <TouchableOpacity onPress={sendItem}>
          <Text style={styles.button}>Confirm Booking</Text>
        </TouchableOpacity>
      }
    </ScrollView>
  );
    } else {    
      return (
        <View style={styles.emptyListView}>
          <Text style={styles.emptyListText}>Currently no Business listed for booking</Text>        
        </View>
      )
    }
};

export default AddBooking;
