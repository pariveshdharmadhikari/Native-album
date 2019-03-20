import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
    const { artist, title, thumbnail_image, image, url } = album;
    const { contentStyle,
        thubnailStyle,
        thubnailContainerStyle,
        headerTextStyle,
        albumImage } = styles;

    return (
        <Card>
            <CardSection>
                <View style={thubnailContainerStyle} >
                    <Image style={thubnailStyle} source={{ uri: thumbnail_image }} />
                </View>
                <View style={contentStyle} >
                    <Text style={headerTextStyle} >{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style={albumImage} source={{ uri: image }} />
            </CardSection>
            <CardSection>
                <Button name='Buy Now' onPress={() => Linking.openURL(url)} />
            </CardSection>
        </Card>
    );
};
const styles = {
    contentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    thubnailStyle: {
        height: 50,
        width: 50
    },
    thubnailContainerStyle: {
        justifyContent: 'center',
        alignItem: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    headerTextStyle: {
        fontSize: 18
    },
    albumImage: {
        height: 300,
        flex: 1,
        width: null
    }
};


export default AlbumDetail; 
