import React from 'react';
import { Text, View, ScrollView, Dimensions, Button, Alert, FlatList } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';


class HomeScreen extends React.Component {
  render() {
    let screenWidth = Dimensions.get('window').width;
    return (
      <View style={{ flex: 1, backgroundColor:'while' }}>
        <View >
             <Text style={{ fontSize: 40, marginTop: 20}}>  Xin Chào !!</Text>
             <Text style={{ fontSize: 25, marginTop: 10}}>  Liệu trình hôm nay</Text>
        </View>
        <ScrollView horizontal ={true}>
        <View style={{ backgroundColor:'#C0C0C0', width:screenWidth }}>
          <Text style={{ fontSize:40, marginLeft:160, marginTop: 10  }}>Sáng</Text>
             <View style={{ padding: 10 }}>
                  <Button onPress={() => {
                        Alert.alert("Cảm ơn bạn")
                  }}
                  title="Đã Uống">
                  </Button>
              </View>
          </View>
          <View style={{ backgroundColor:'#C0C0C0', width:screenWidth }}>
          <Text style={{ fontSize:40, marginLeft:160, marginTop: 10  }}>Chiều</Text>
             <View style={{ padding: 10 }}>
                  <Button onPress={() => {
                        Alert.alert("Cảm ơn bạn")
                  }}
                  title="Đã Uống">
                  </Button>
              </View>
          </View>
          <View style={{ backgroundColor:'#C0C0C0', width:screenWidth }}>
          <Text style={{ fontSize:40, marginLeft:160, marginTop: 10  }}>Tối</Text>
             <View style={{ padding: 10 }}>
                  <Button onPress={() => {
                        Alert.alert("Cảm ơn bạn")
                  }}
                  title="Đã Uống">
                  </Button>
              </View>
          </View>

        </ScrollView>
        <View style={{flex:2}}>
             <Text style={{ fontSize:40, color :'#000000'}}>
                    Chi Tiết Liệu Trình
             </Text>
             <FlatList
                data={[{key: 'lieutrinh1'}, {key: 'lieutrinh8'},{key: 'lieutrinh9'},{key: 'lieutrinh14'}, {key: 'lieutrinh2'}]}
                renderItem={({item}) => 
                <View style={{ borderBottomWidth: 1, padding: 10}}>
                    <Text style={{ fontSize: 30}}>{item.key}</Text>
                </View>}
              />
        </View>
      </View>
    );
  }
}
class ChatScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Chat!</Text>
      </View>
    );
  }
}

class ThuocScreen extends React.Component {
  render() {
    return (
      <View>
       <Text style={{ backgroundColor: '#6666FF', fontSize: 30, }}>                   THUỐC </Text>
              <FlatList
                data={[{key: 'Thuoc1'}, {key: 'Thuoc2'},
                {key: 'Thuoc2'}, {key: 'Thuoc2'},{key: 'Thuoc2'},{key: 'Thuoc2'}, {key: 'Thuoc2'},{key: 'Thuoc2'},{key: 'Thuoc2'}, {key: 'lieutrinh9'},{key: 'lieutrinh14'}, {key: 'lieutrinh2'}]}
                renderItem={({item}) => 
                <View style={{ borderBottomWidth: 1, padding: 10}}>
                    <Text style={{ fontSize: 30}}>{item.key}</Text>
                </View>}
              />
        
      </View>
    );
  }
}

class LichScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
      <Text style={{ backgroundColor: '#6666FF', fontSize: 30, }}>                       LỊCH </Text>
          <Calendar
              style={{
                borderWidth: 1,
                borderColor: 'gray',
                height: 350
              }}
              theme={{
                backgroundColor: '#ffffff',
                calendarBackground: '#ffffff',
                textSectionTitleColor: '#b6c1cd',
                selectedDayBackgroundColor: '#00adf5',
                selectedDayTextColor: '#ffffff',
                todayTextColor: '#00adf5',
                dayTextColor: '#2d4150',
                textDisabledColor: '#d9e1e8',
                dotColor: '#00adf5',
                selectedDotColor: '#ffffff',
                arrowColor: 'orange',
                monthTextColor: 'blue',
                textDayFontFamily: 'monospace',
                textMonthFontFamily: 'monospace',
                textDayHeaderFontFamily: 'monospace',
                textMonthFontWeight: 'bold',
                textDayFontSize: 16,
                textMonthFontSize: 16,
                textDayHeaderFontSize: 16
              }}/> 
     
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex:1 }}>
        <Text style={{ flex:1, backgroundColor: '#6666FF', fontSize: 30 }}>      Hồ Sơ </Text>
        <View style={{flex: 3, backgroundColor: '#FFFFCC'}}></View>
      </View>
    );
  }
}




export default createBottomTabNavigator(
  {
  TrangChủ: { screen: HomeScreen,
  navigationOptions:{
    tabBarLabel: 'Trang Chủ',
    tabBarIcon:({ tintColor }) => (
      <Icon name='ios-add' size={30} />
    )
  }},
  Thuốc: { screen: ThuocScreen,
    navigationOptions:{
      tabBarLabel: 'Thuốc',
      tabBarIcon:({ tintColor }) => (
        <Icon name='ios-bus' size={30} />
      )
    } },
  Chat: { screen: ChatScreen,
    navigationOptions:{
      tabBarLabel: 'Chat',
      tabBarIcon:({ tintColor }) => (
        <Icon name='ios-add' size={30} />
      )
    }},
  Lịch: { screen: LichScreen,
    navigationOptions:{
      tabBarLabel: 'Lịch',
      tabBarIcon:({ tintColor }) => (
        <Icon name='ios-add' size={30} />
      )
    } },
  Hồsơ: { screen: SettingsScreen,
    navigationOptions:{
      tabBarLabel: 'Hồ Sơ',
      tabBarIcon:({ tintColor }) => (
        <Icon name='ios-add' size={30} />
      )
    } },
}
);



 
