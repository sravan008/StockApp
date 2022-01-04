import React, { Component } from 'react'
import { BackHandler, Dimensions, StyleSheet } from 'react-native'
import { Icon, View, Text } from 'native-base'
import { connect } from 'react-redux'
import { TabBar, TabView, SceneMap } from 'react-native-tab-view'

import { Colors } from '../../constants'
import { setTab } from '../../store/actions'

import Stock from '../Stock'
import Favorites from '../Favorites'
import Sectors from '../Sectors'
//import Gainers from '../Gainers'
import Losers from '../Losers'
import MostActive from '../MostActive'
import Crypto from '../Crypto'

class Tabs extends Component {
  // favoritesTab = () => (
  //   <View style={styles.container}>
  //     <Favorites />
  //   </View>
  // )

  stockTab = () => (
    <View style={styles.container}>
      <Stock />
    </View>
  )

  
  sceneMap = SceneMap({
    search: this.stockTab
  })

  

  onBackPress = () => {
    const { setTab, tabs } = this.props
    setTab(tabs.previousIndex)
    return true
  }

  // componentDidMount() {
  //   BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
  // }

  // componentWillUnmount() {
  //   BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
  // }

  render = () => (
    <View style={styles.container}>
      <TabView
        initialLayout={styles.initialLayout}
        navigationState={this.props.tabs}
        onIndexChange={index => this.props.setTab(index)}
        renderScene={this.sceneMap}
       // renderTabBar={props => this.tabBar(props)}
       // tabBarPosition="bottom"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  initialLayout: {
    height: 0,
    width: Dimensions.get('window').width
  },
  indicatorStyle: {
    backgroundColor: Colors.TEXT_DARK,
    top: 0
  },
  labelStyle: {
    color: Colors.TEXT_NORMAL,
    fontSize: 10,
    height: 65,
    marginHorizontal: 0,
    marginBottom: 4,
    paddingVertical: 0
  }
})

const mapStateToProps = state => ({
  tabs: state.tabs
})

const mapDispatchToProps = {
  setTab
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tabs)
