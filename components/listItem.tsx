import { Button, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";

type item = { text: string; completed: boolean; id: string };

type ListItemProps = {
  text: string;
  completed: boolean;
  id: string;

  handlePress: (params: any) => any;
  handleLongPress: (params: any) => any;
  handlePressEditButton: (params: any) => any;
};

const ListItemText = styled.Text<{ completed: boolean }>`
  align-items: center;
  justify-content: center;
  padding: 20px;
  ${(props: any) =>
    props.completed && "text-decoration: line-through; font-style: italic;"};
`;

export default function ListItem(props: ListItemProps) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
      }}
    >
      <TouchableOpacity
        onPress={props.handlePress}
        onLongPress={props.handleLongPress}
      >
        <ListItemText completed={props.completed}>
          ({props.id}) - {props.text}
        </ListItemText>
      </TouchableOpacity>
      <Button title="edit" onPress={props.handlePressEditButton} />
    </View>
  );
}
