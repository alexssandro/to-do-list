import { StyleSheet } from 'react-native'
import { colors } from '../../components/colorPalette';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: colors.gray600
    },
    form: {
        marginTop: 142,
        flexDirection: 'row'
    },
    newTaskText: {
        backgroundColor: colors.gray500,
        flex: 1,
        borderRadius: 6,
        padding: 16,
        marginRight: 5,
        color: colors.gray300,
        fontSize: 16
    },
    newTaskButton: {
        backgroundColor: colors.blueDark,
        width: 60,
        height: 60,
        padding: 18,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
    },
    newTastkButtonCircle: {
        borderRadius: 20,
        width: 16,
        height: 16,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: colors.gray100,
        borderStyle: 'solid',
        borderWidth: 1,
    },
    newTaskButtonText: {
        color: colors.gray100,
        fontSize: 10
    }
});