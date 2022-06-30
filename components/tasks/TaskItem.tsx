import { DeleteIcon } from "@chakra-ui/icons"
import { Checkbox, HStack, IconButton, Text } from "@chakra-ui/react"
import { deleteDoc, doc, updateDoc } from "firebase/firestore"
import { TaskWithId } from "../../types"
import { db } from "../../util/firebase"

type Props = {
  readonly task: TaskWithId
}

const TaskItem = ({ task: { id, text, checked } }: Props) => {


  const docr = doc(db, 'tasks', id);

  const toggleTask = () => {
    if (checked) {
      updateDoc(docr, { checked: false });
    }
    else {
      updateDoc(docr, { checked: true });
    }

  }

  const deleteTask = () => {

    deleteDoc(docr)
  }

  return (
    <HStack w="100%">
      <Checkbox isChecked={checked} onChange={toggleTask} />
      <Text textDecorationLine={checked ? "line-through" : "initial"}>
        {text}
      </Text>
      <IconButton
        aria-label="delete task"
        size="xs"
        variant="ghost"
        colorScheme="red"
        icon={<DeleteIcon />}
        onClick={deleteTask}
      />
    </HStack>
  )
}


export default TaskItem
