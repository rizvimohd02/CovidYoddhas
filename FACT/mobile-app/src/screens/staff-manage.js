import React from 'react';
import { CheckBox } from 'react-native-elements';
import { StyleSheet, FlatList, View, Text, TouchableOpacity, Alert } from 'react-native';
import { CheckedIcon, UncheckedIcon } from '../images/svg-icons';
import email from 'react-native-email';
//const nodemailer = require('nodemailer');
import { search, userID } from '../lib/utils'


const styles = StyleSheet.create({
  flatListView: {
    backgroundColor: '#FFF'
  },
  itemTouchable: {
    flexDirection: 'column',
    padding: 0,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    borderBottomColor: '#dddddd',
    borderBottomWidth: 0.25
  },
  itemView: {
    flexDirection: 'row',
    justifyContent: 'space-between'
    
  },
  itemstaffName: {
    fontSize: 20,
    fontFamily: 'IBMPlexSans-Medium',
  },
  itemDepartmentContact: {
    fontSize: 14,
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
  },
  myBookingButton: {
    backgroundColor: '#4682bf',
    color: '#FFFFFF',
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 16,
    overflow: 'hidden',
    borderRadius: 20,
    padding: 10,
    textAlign:'center',
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center',
    width: 250
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

const ManageStaff = function ({ navigation }) {

  const [items, setItems] = React.useState([]);

  const changeState = function(item, status){
    var newItems = [...items];
    newItems = newItems.map((each) => {
      if(each.id == item.id){
        each.isChecked = status;
      }
      return each;
    });
    setItems(newItems);
  };

  React.useEffect(() => {
    navigation.addListener('focus', () => {
      search({ userID: userID(), trnsctype: 'StaffDetails' })
        .then((items) => { var newItems = items.map((element) => {
          element['isChecked'] = false; return element;
        }); setItems(newItems) ; })
        .catch(err => {
          console.log(err);
          Alert.alert('ERROR', 'Please try again. If the problem persists contact an administrator.', [{text: 'OK'}]);
        });
    })
  }, []);

  const intimateStaff = () => {

    var i, varmailIDList='', VarFinalEmailtoList='';
    
  for (i = 0; i < items.length; i++) {
    if (items[i].isChecked == true){
      varmailIDList = varmailIDList + items[i].staffEmailid + ', '
      VarFinalEmailtoList = varmailIDList.replace(/,\s*$/, "")
           
      const to = [VarFinalEmailtoList] // string or array of email addresses
      email(to, {
          // cc: ['bazzy@moo.com', 'doooo@daaa.com'], // string or array of email addresses
          // bcc: 'mee@mee.com', 
          subject: 'Staff Intimation - Important Update',
          body: 'Please do not join Office today as We have not reached till expected bookings'
      }).catch(console.error)


      //******Node Modules check required */
      // let testAccount = await nodemailer.createTestAccount();
      // let transport = nodemailer.createTransport(options[defaults])
      // let transport = nodemailer.createTransport({
      //     // host: 'smtp.mailtrap.io',
      //     port: 2525,
      //     service:'gmail',
      //     auth: {
      //        user: 'kulkarnishruti11@Gmail.com',
      //        pass: 'Google-2020',
      //     }
      // });
    //   const message = {
    //     from: 'kulkarnishruti11@Gmail.com', // Sender address
    //     to: VarFinalEmailtoList,         // List of recipients
    //     subject: 'Design Your Model S | Tesla', // Subject line
    //     text: 'Have the most fun you can in a car. Get your Tesla today!' // Plain text body
    // };
    // transport.sendMail(message, function(err, info) {
    //     if (err) {
    //       console.log(err)
    //     } else {
    //       console.log(info);
    //     }
    // });
    //**********************Not Working*********** */
    }
    }
   
  };


  const Item = (props) => {
    return (
<View style={{paddingTop: 5, paddingLeft:5, paddingRight:5}}>      
<View style={{height: 85, borderRadius: 15, borderColor: '#4682bf', borderWidth: 2, padding: 8}}>
  <View style={styles.itemTouchable}>
    <View style={styles.itemView}>
      <View>
          <Text style={styles.itemstaffName}>{props.staffName}</Text>
          <Text style={styles.itemDepartmentContact}>{props.staffDepartment}</Text>
          <Text style={styles.itemDepartmentContact}>{props.staffEmailid}</Text>
      </View>
      <View>
            <CheckBox
             right
            // title={props.staffName}
            iconRight
            flexDirection='row-reverse'
            checkedIcon={<CheckedIcon />}
            uncheckedIcon={<UncheckedIcon />}
            checkedColor='red'
            checked={props.isChecked}
            onPress={() => changeState(props, !props.isChecked )}    
            />       
      </View>
    </View>
  </View>
</View>
</View>
    );
  };
  
  if (items.length > 0) {
    return (

      <View>
      <FlatList style={styles.flatListView}
        data={items}
        renderItem={({ item }) => <Item {...item} />}
        keyExtractor={item => item.id || item['_id']}
      />
      <View>

          <TouchableOpacity onPress={intimateStaff}>
          <Text style={styles.myBookingButton}>Intimate Staff</Text>
        </TouchableOpacity>

      </View>

      </View>


      
    )
  } else {
    return (
      <View style={styles.emptyListView}>
        <Text style={styles.emptyListText}>You haven't added any staff yet</Text>
      </View>
    )
  }

};

export default ManageStaff;
