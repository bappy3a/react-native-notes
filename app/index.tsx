import useNoteStore from "@/store/useNotes";
import { CATEGORYS } from "@/utils/constants";
import { AntDesign } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { FlatList, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import NoteCard from "./components/NoteCard";
import SafeAreaView from "./components/SafeAreaView";

export default function Index() {
  const router = useRoute();
  const [searchText, setSearchText] = useState("");
  const [selectedCategoyr, setSelectedCategoyr] = useState("");
  const {notes} = useNoteStore();


  const handelCategoryClick = (category: string) => () => {
    setSelectedCategoyr(category);
  };

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
              backgroundColor: isSelected ? "#3838a3" : "#fff",
              borderWidth: 1,
              borderColor: isSelected ? "#3838a3" : "#fff",
              marginRight: 8,
            }} onPress={handelCategoryClick(category)} ><Text style={{ color: isSelected ? "#fff" : "#3838a3" }}>{category}</Text></Pressable>
          })}
        </ScrollView>

        <FlatList
          data={notes}
          renderItem={({ item }) => <NoteCard note={item} />}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ paddingBottom: 100 }}
          showsVerticalScrollIndicator={false}
        />

        <Pressable onPress={() => router.push("/add")}  className="bg-governor-bay absolute bottom-8 right-8 w-16 h-16 rounded-3xl flex items-center justify-center">
          <AntDesign name="plus" size={24} color="white" />
        </Pressable>

      </View>



    </SafeAreaView>
  );
}
