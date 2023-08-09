import { useEffect, useState } from "react";
import { Button, FlatList, StyleSheet, TextInput, View } from "react-native";
import Header from "../../components/header";
import useToDoList from "../../hooks/useToDoList";
import ListItem from "../../components/listItem";

export default function Home() {
  const {
    todos,
    initialize,
    addItem,
    updateItem,
    removeItem,
    toggleCompleted,
  } = useToDoList();
  const [addInputValue, setAddInputValue] = useState("");

  const onPressAddActivity = () => {
    addItem(addInputValue);
  };

  const onPressEditActivity = (id: string, completed: boolean) => {
    updateItem(id, { text: addInputValue, completed: completed });
  };

  const onPressToggleCompleted = (id: string) => {
    toggleCompleted(id);
  };

  const onPressRemoveActivity = (id: string) => {
    removeItem(id);
  };

  useEffect(() => {
    initialize([
      { text: "Atividade 1", completed: false },
      { text: "Atividade 2", completed: false },
      { text: "Atividade 3", completed: false },
      { text: "Atividade 4", completed: false },
      { text: "Atividade 5", completed: false },
    ]);
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.listArea}>
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <ListItem
              {...item}
              handlePress={() => onPressToggleCompleted(item.id)}
              handleLongPress={() => onPressRemoveActivity(item.id)}
              handlePressEditButton={() =>
                onPressEditActivity(item.id, item.completed)
              }
            />
          )}
        />
      </View>
      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma atividade"
          onChangeText={(val) => setAddInputValue(val)}
        />
        <Button title="add" onPress={onPressAddActivity} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  listArea: {
    flex: 1,
    overflow: "scroll",
  },
  inputArea: {
    flex: 1,
    flexDirection: "row",
    maxHeight: 80,
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#EEE",
  },
  listItem: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 8,
    margin: 10,
    flex: 1,
    backgroundColor: "#FFF",
  },
  button: {},
});
