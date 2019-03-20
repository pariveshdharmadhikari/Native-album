import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    const { containerStyle } = styles;
    return (
        <View style={containerStyle} >{props.children}</View>
    );
};

const styles = {
    containerStyle: {
        padding: 5,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative',
    }
};

export default CardSection;
