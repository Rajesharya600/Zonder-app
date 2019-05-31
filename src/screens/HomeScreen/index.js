import React from 'react';
import { Text, View, ScrollView, RefreshControl } from 'react-native';
import styles from './styles';
import StarShipTile from '../../components/StarShipTile'
import { fetchApi } from '../../api'
import ApiConstants from '../../api/ApiConstants'
import AppConstants from '../../utils/constants'

class HomeScreen extends React.Component {
    constructor(props) {
        super();
        this.state = {
            starshipsData: [],
            refreshing: false
        };
    }

    componentDidMount() {

        //fetching starships data 
        fetchApi(ApiConstants.STARSHIP_ENDPOINT)
            .then((responseJson) => {
                this.setState({ starshipsData: responseJson.results })
            }).catch((error) => {
                console.log(error)
            })
    }

    _onRefresh = () => {
        this.setState({ refreshing: true });

        //getting the starships data on refresh
        fetchApi(ApiConstants.STARSHIP_ENDPOINT)
            .then((responseJson) => {
                this.setState({ starshipsData: responseJson.results, refreshing: false })
            }).catch((error) => {
                this.setState({ refreshing: false });
                console.log(error)
            })
    }

    render() {
        const { starshipsData } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>{AppConstants.STARSHIP_HEADER}</Text>
                </View>
                <ScrollView refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh}
                    />} style={styles.scroll}>
                    <View style={styles.body}>
                        {
                            starshipsData.map((starship, index) => {
                                return <StarShipTile key={index} index={index} starshipData={starship} />
                            })
                        }
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default HomeScreen;

