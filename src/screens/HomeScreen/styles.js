import { StyleSheet } from 'react-native';
import { Constants } from 'expo';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        alignItems: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        width: '100%',
        backgroundColor: 'white',
        padding: 10,
        justifyContent: 'center'
    },
    headerText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#00BCD4'
    },
    body: {
        marginTop: 10,
        flex: 1,
        alignItems: 'center',
        width: '100%',
        marginBottom: 10
    },
    scroll: {
        width: '100%'
    }
});

export default styles;