import useNoteStore from "@/store/useNotes";
import { CATEGORYS } from "@/utils/constants";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useMemo, useState } from "react";
import { FlatList, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import NoteCard from "./components/NoteCard";
import SafeAreaView from "./components/SafeAreaView";

export default function Index() {
  const [searchText, setSearchText] = useState("");
  const [selectedCategoyr, setSelectedCategoyr] = useState("");
  const {notes} = useNoteStore();


  const handelCategoryClick = (category: string) => () => {
    setSelectedCategoyr((prev)=> (prev === category ? "" : category) );
  };

  const filteredNotes = useMemo(() => {
    let result = notes;

    if (selectedCategoyr) {
      return result.filter((note) => note.category === selectedCategoyr);
    }

    if(searchText.trim()){
      result = result.filter((note) => note.title.toLowerCase().includes(searchText.toLowerCase()));
    }

    return result;
  }, []);

  return (
    <SafeAreaView className="flex-1 p-4 bg-alabaster">
      <View className="flex-1">
        <TextInput className="bg-white border border-gray-300 h-14 rounded-full p-4 w-full" placeholder="Search your thoughts..." placeholderTextColor="#9CA3AF" value={searchText} onChangeText={setSearchText} />

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{
          minHeight: 50, maxHeight: 50, marginTop: 10,
        }}
          contentContainerStyle={{
            flexDirection: "row",
            gap: 2,
            alignItems: "center",
            paddingHorizontal: 4,
          }}
        >
          {CATEGORYS.map((category) => {
            const isSelected = selectedCategoyr === category;

            return <Pressable key={category} style={{
              paddingVertical: 10,
              paddingHorizontal: 28,
              borderRadius: 999,
              backgroundColor: isSelected ? "#3838a3" : "#ededed",
              borderWidth: 1,
              borderColor: isSelected ? "#3838a3" : "#ededed",
              marginRight: 8,
            }} onPress={handelCategoryClick(category)} ><Text style={{ color: isSelected ? "#fff" : "#3838a3" }}>{category}</Text></Pressable>
          })}
        </ScrollView>

        {filteredNotes.length === 0 ? <View className="w-full items-center mt-28 justify-center">
          <Text className="text-medium text-2xl text-gray-400" >No return found</Text>
          <Text>Tap + to comture your fist thougth</Text>
        </View> : <FlatList
          data={notes}
          renderItem={({ item }) => <NoteCard note={item} />}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ paddingBottom: 100 }}
          showsVerticalScrollIndicator={false}
        /> }

        

        <Pressable onPress={() => router.push("/add")}  className="bg-governor-bay absolute bottom-8 right-8 w-16 h-16 rounded-3xl flex items-center justify-center">
          <AntDesign name="plus" size={24} color="white" />
        </Pressable>

      </View>



    </SafeAreaView>
  );
}
