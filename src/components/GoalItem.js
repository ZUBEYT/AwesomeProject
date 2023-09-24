import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
            <Pressable android_ripple={{ color: 'yellow' }}          //eklenen hedeflerde dalgalanma etkisi
                onPress={props.onDeleteItem.bind(this, props.id)}
                style={({ pressed }) => pressed && styles.pressedItem}  //ios android_ripple özelliği
            >
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    );
};

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: 'blue',
        color: 'white',
    },
    pressedItem: {
        padding: 0.5,
    },
    goalText: {
        color: 'white',
        padding: 8,
    },
});