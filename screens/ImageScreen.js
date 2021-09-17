import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import { Avatar, Button } from 'react-native-elements';
import Layout from './Layout';

import * as WebBrowser from 'expo-web-browser';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';

import ImageList from '../components/ImageList';

import { getImage } from '../api/api';

const ImageScreen = ({ route }) => {
	const { image } = route.params;
	const [photos, setPhotos] = useState([]);

	console.log(route);

	const LoadImages = async () => {
		const res = await getImage();
		setPhotos(res.data.photos);
	};

	useEffect(() => {
		LoadImages();
	}, []);

	const handlePress = async () => {
		console.log('handlePress');
		await WebBrowser.openBrowserAsync(image.photographer_url);
	};

     const downLoadfile = async () => {
               let fileUri = FileSystem.documentDirectory + image.id + '.jpeg'

        try {
               const { uri } = await FileSystem.downloadAsync(image.src.original, fileUri);
               saveFile(uri)       
        } catch (error) {
             console.log(error)
        }
     }
     //Permisos de acceso a los archivos
     const saveFile = async (fileUri) => {
        const { status } = await MediaLibrary.requestPermissionsAsync()
        if(status === 'granted') {
            const asset = await MediaLibrary.createAssetAsync(fileUri)
            await MediaLibrary.createAlbumAsync('Download', asset, false)
        }
     }
const handleDownload = async () => {
     downLoadfile()
}

	
	const avatarName = image.photographer.split(' ')
		.map((string) => string[0])
		.join('')
		.toUpperCase();
	console.log(avatarName);
	return (
		<Layout>
			<View style={styles.ImageContainer}>
				<Image source={{ uri: image.src.medium, height: 300, width: 300, resizeMode: 'cover' }} />

				<View style={styles.container}>
					<Avatar title={avatarName} containerStyle={styles.avatarContainer} />
					<TouchableOpacity onPress={handlePress}>
						<Text style={styles.texto}>{image.photographer}</Text>
					</TouchableOpacity>
					<Button title="Download" buttonStyle={styles.button} onPress={() =>handleDownload()}/>
				</View>
				<View style={styles.SecondaryContainer}>
					<ImageList photos={photos} />
				</View>
			</View>
		</Layout>
	);
};
const styles = StyleSheet.create({
	avatarContainer: {
		backgroundColor: '#233329',
		borderRadius: 15,
	},
	ImageContainer: {
		flex: 1/.2,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		paddingLeft: 10,
	},
	container: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 20,
          paddingLeft: 20,
          

	},
	texto: {
		color: 'white',
		paddingLeft: 10,
	},
	button: {
		backgroundColor: '#01baef',
		paddingBottom: 10,
          marginLeft: 50
	},
	SecondaryContainer: {
		marginTop: 20,
          paddingLeft: 0
	},
});

export default ImageScreen;
