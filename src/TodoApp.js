import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddToDo from './containers/AddToDo';
import VisibleTodos from './containers/VisibleTodos';

export default function TodoApp() {
    return (
        <View style={styles.container}>
            <AddToDo />
            <View>
                <VisibleTodos />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40
    },
});
