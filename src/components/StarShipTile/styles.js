import { StyleSheet } from 'react-native';
import { Constants } from 'expo';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 10,
        alignSelf: 'stretch',
        borderRadius: 10,
        backgroundColor: 'white',
        shadowOpacity: 0.5,
        shadowRadius: 2,
    },
    starshipText: {
        fontSize: 18,
        color: '#ffbf00',
        fontWeight: 'bold',
        marginLeft: 10,
    },
    starshipHeader: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    starshipIconView: {
        height: 30,
        width: 30
    },
    starshipInfoText: {
        fontSize: 14,
        color: '#607D8B',
    },
    starshipInfoView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        justifyContent: 'space-between'
    },
    starshipDataText: {
        fontSize: 14,
        color: '#607D8B',
    },
    leftView: {
        width: 20,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        height: '100%',
    },
    rightView: {
        padding: 10,
        flex: 1,
        flexDirection: 'column'
    }
});

export default styles;