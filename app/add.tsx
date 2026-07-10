import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from 'react';
import { TextInput } from 'react-native';
import SafeAreaView from "./components/SafeAreaView";

const AddNote = () => {
    const [title, setTitle] = useState("");
    const [descripton, setDescripton] = useState("");       
    const [date, setDate] = useState("");       

  return (
    <SafeAreaView className="flex-1 p-4 bg-alabaster">
        <TextInput 
            placeholder="Note Title"
            placeholderTextColor="#3830a35e"
            value={title}
            onChangeText={setTitle}
            className="text-4xl font-extrabold mt-4"
        />
        <TextInput 
            multiline
            placeholder="Start typing your thoughts"
            placeholderTextColor="#3830a359"
            value={descripton}
            onChangeText={setDescripton}
            className="text-2xl font-extrabold mt-6"
        />

        <DateTimePicker
            value={date}
            mode="datetime"
            display="default"
            onChange={setDate}
        />
    </SafeAreaView>         
  )
}

export default AddNote