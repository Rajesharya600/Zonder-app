import React from 'react';
import { Text, View, ScrollView, Image } from 'react-native';
import styles from './styles';
import starshipIcon from '../../../assets/starshipIcon.png';

class StarShipTile extends React.Component {

    render() {
        const { starshipData, index } = this.props
        return (
            <View style={styles.container}>
                <View style={[styles.leftView,{backgroundColor: index%2===0? '#FFEB3B' : '#00BCD4'}]}>
                </View>
                <View style={styles.rightView}>
                    <View style={styles.starshipHeader}>
                        <Image style={styles.starshipIconView} source={starshipIcon} />
                        <Text style={styles.starshipText}>{starshipData.name}</Text>
                    </View>
                    <View style={styles.starshipInfoView}>
                        <Text style={styles.starshipDataText}>Crew: {starshipData.crew}</Text>
                        <Text style={styles.starshipInfoText}>Atmosphering speed: {starshipData.max_atmosphering_speed}</Text>
                    </View>
                    <View style={styles.starshipInfoView}>
                        <Text style={styles.starshipDataText}>Passengers: {starshipData.passengers}</Text>
                        <Text style={styles.starshipInfoText}>Consumables: {starshipData.consumables}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default StarShipTile;

