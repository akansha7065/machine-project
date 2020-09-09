import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, TouchableOpacity, Image, Alert, FlatListItem } from 'react-native';
import Swipeout from 'react-native-swipeout';

export default class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  apicaller = () => {
    const url = "https://jsonplaceholder.typicode.com/photos?_limit=9"
    fetch(url).then((res) => res.json())
      .then((resJson) => {
        this.setState({ data: resJson })
      })

  }

  render() {
    const { data } = this.state
    const swipeSettings = {
      autoClose: true,
      onClose: (secId, rowId, direction) => {

        if (this.state.activeRowKey != null) {
          this.setState({ activeRowKey: null });
        }

      },
      onOpen: (secId, rowId, direction) => {

        this.setState({ activeRowKey: this.props.item.index });

      },
      right: [
        {
          onPress: () => {
            Alert.alert(
              'Alert',
              'Are you sure you want to delete',
              [
                { text: 'No', onPress: () => console.log('Cancel'), style: 'cancel' },
                {
                  text: 'Yes', onPress: () => {
                    flatListData.splice; { this.props.index, 1 }
                  },
                }
              ]
            )

          },
          text: 'Delete', type: 'Delete'
        }
      ],
      rowId: this.props.index,
      sectionId: 1
    }

    return (
      <Swipeout {...swipeSettings}>
        <View style={styles.container}>

          {
            data.map((item, index) => {

              return (
                <View style={{ width: 300, justifyContent: "center", alignItems: "center" }}>
                  <Image source={{ url: item.thumbnailUrl }} style={{ height: 10, width: 200 }} />
                  <Text>{item.id}</Text>
                  <Text>{item.title}</Text>
                </View>
              )
            }


            )

          }
          <TouchableOpacity style={styles.button}
            onPress={this.apicaller}
          >
            <Text style={{ color: 'white' }}>Click Me</Text>
          </TouchableOpacity>
        </View>
      </Swipeout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 40,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'black',
    alignSelf: "center",
    borderRadius: 40

  }
});
export default class BasicFlatList extends React.Component {
  refreshFlatList = (deleteKey) => {

  }

  render() {
    return (
      <View>

        <FlatList data={flatListData}
          renderItem={({ item, index }) => {
            return (
              <FlatListItem item={item} index={index}>

              </FlatListItem>
            )

          }}
        >



        </FlatList>
      </View>
    )
  }
}

