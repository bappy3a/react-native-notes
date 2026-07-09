import { CATEGORYS } from "@/utils/constants";
import { useState } from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import SafeAreaView from "./components/SafeAreaView";

export default function Index() {
  const [searchText, setSearchText] = useState("");


  return (
    <SafeAreaView className="flex-1 p-4 bg-alabaster">
      <View className="flex-1">
        <TextInput className="bg-white border border-gray-300 h-14 rounded-full p-4 w-full" placeholder="Search your thoughts..." placeholderTextColor="#9CA3AF" value={searchText} onChangeText={setSearchText} />
      </View>

      <ScrollView horizontal style={{
        minHeight: 50,maxHeight: 50, marginTop:16

      }} >
        {CATEGORYS.map((category) => {
          const isSelected = true;

          return <Pressable className="pr-4 border border-gray-500 " key={category}><Text>{category}</Text></Pressable>
        })}
      </ScrollView>

    </SafeAreaView>
  );
}
