import React, {Component} from 'react';
import { Router, Stack, Scene,Tabs, Drawer,NavBar} from 'react-native-router-flux';
import {StyleSheet,Image,Text,TouchableOpacity,Icon, View} from 'react-native';
import maps from './pages/maps';

class RouterComp extends Component {
    render(){
        return(
            <Router>
                <Stack initial key="root">
                    <Scene initial key="maps" component={maps} />
                    <Scene key="login" component={Login} title="Login" />
                    <Scene key="mainPage" component={MainPage} title="Register" />
                </Stack>
            </Router>



    )
  }
}


export default RouterComp