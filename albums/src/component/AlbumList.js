import React from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';
// import console = require('console');

class AlbumList extends React.Component {
    state={ albums: [] }
    componentWillMount() {
        const response = axios.get('https://rallycoding.herokuapp.com/api/music_albums');
        response.then(res => {
            this.setState({ albums: res.data });
        });
    }

    renderAlbums = () => this.state.albums.map((album) => (
                <AlbumDetail key={album.title} album={album} />
        )
    )     


render() {
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumList;
