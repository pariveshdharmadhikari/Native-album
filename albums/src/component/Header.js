import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
        const { textStyle, viewstyle } = styles;
        return (
        <View style={viewstyle} >
            <Text style={textStyle} >{ props.headerTitle }</Text>
        </View>
        );
    };

    const styles = {
        viewstyle: {
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F8F8F8',
            height: 80,
            paddingTop: 25,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.2,
            elevation: 2,
            position: 'relative'
        },
        textStyle: {
          fontSize: 40
        }
       };

export default Header;
