import { useNoteStore } from '@/store/useNotes';
import { INote } from '@/types/app.types';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

const NoteCard = ({ note }: { note: INote }) => {

    const { markCompleted, deleteNote } = useNoteStore();

    return (
        <View className="border border-gray-300 mt-8 rounded-3xl p-8">
            <View className="flex-row justify-between">
                <Text className="bg-governor-bay/15 text-governor-bay/90 font-semibold rounded-xl px-4 py-2" >{note.category.toUpperCase()}</Text>
                {note.isCompleted ? <Ionicons name="checkmark-circle" size={24} color="#3838a3" /> : (
                    <Pressable onPress={() => markCompleted(note.id)}>
                        <Ionicons name="checkmark-circle-outline" size={24} color="#3838a3" />
                    </Pressable>
                )}
            </View>
            <Text className="text-lg font-semibold mt-4">{note.title}</Text>
            <Text className="text-lg text-gray-700 mt-4">{note.descripton}</Text>
            <View className="flex-row justify-between mt-4">
                <View className="flex-row gap-2">
                    <Ionicons name="calendar" size={16} className="text-gray-400" />
                    <Text className="text-gray-400">{new Date(note.date).toLocaleDateString()}</Text>
                </View>
                <Pressable onPress={() => deleteNote(note.id)}>
                    <Ionicons name="trash-outline" size={24} className="text-red-500" />
                </Pressable>
            </View>
        </View>
    )
}

export default NoteCard