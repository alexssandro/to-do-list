
import { useState } from 'react';
import { TextInput, TouchableOpacity, View, Text } from 'react-native'
import { colors } from '../../components/colorPalette';
import { styles } from './styles'

export function Home(){
    const [taskName, setTaskName] = useState('');
    const [tasks, setTasks] = useState([]);

    return (
        <View style={styles.container}>
            <Text style={{ color: colors.gray100 }}>{taskName}</Text>
            <View style={styles.form}>
                
                <TextInput 
                    style={styles.newTaskText}
                    placeholder="Add a new task"
                    placeholderTextColor={ colors.gray300 } 
                    value={taskName}
                    onChangeText={setTaskName}></TextInput>
                <TouchableOpacity style={styles.newTaskButton}>
                    <View style={styles.newTastkButtonCircle}>
                        <Text style={styles.newTaskButtonText}>+</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}