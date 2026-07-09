import { CATEGORYS } from "@/utils/constants";
import { useState } from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import SafeAreaView from "./components/SafeAreaView";

export default function Index() {
  const [searchText, setSearchText] = useState("");
  const [selectedCategoyr, setSelectedCategoyr] = useState("");

  const handelCategoryClick = (category: string) => () => {
    setSelectedCategoyr(category);
  };

  return (
    <SafeAreaView className="flex-1 p-4 bg-alabaster">
      <View className="flex-1">
        <TextInput className="bg-white border border-gray-300 h-14 rounded-full p-4 w-full" placeholder="Search your thoughts..." placeholderTextColor="#9CA3AF" value={searchText} onChangeText={setSearchText} />

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{
          minHeight: 50, maxHeight: 50, marginTop: 10, }} 
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
              marginRight: 8,}} onPress={handelCategoryClick(category)} ><Text style={{ color: isSelected ? "#fff" : "#3838a3" }}>{category}</Text></Pressable>
          })}
        </ScrollView>

      </View>



    </SafeAreaView>
  );
}
