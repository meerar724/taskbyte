import { Heading, Spinner, VStack } from "@chakra-ui/react"
import { collection, onSnapshot, query } from "firebase/firestore"
import { useEffect, useState } from "react"
import { TaskWithId } from "../../types"
import { db } from "../../util/firebase"
import TaskAddControl from "./TaskAddControl"
import TaskList from "./TaskList"

const TaskByteHeading = () => (
  <Heading
    as="h1"
    w="fit-content"
    bgGradient="linear(to-r, cyan.700, teal.500)"
    bgClip="text"
    lineHeight={1.33}
  >
    My Tasks
  </Heading>
)

// TODO: Create a Firebase query for the `tasks` collection
const taskQuery = query(collection(db, 'tasks'));

const TaskByte = () => {
  const [tasks, setTasks] = useState<TaskWithId[] | null>(null)

  // Subscribes to `taskQuery`
  // We define a function to run whenever the query result changes
  useEffect(() => {
    // TODO: Update `tasks` state using snapshot (uncomment the following)
    const unsubscribe = onSnapshot(taskQuery, (querySnapshot) => {
      const tasksList = querySnapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id } as TaskWithId;
      });
      setTasks(tasksList);
    })
    return unsubscribe
  }, [])

  return (
    <VStack spacing={4}>
      <TaskByteHeading />
      <TaskAddControl />
      {tasks ? <TaskList tasks={tasks} /> : <Spinner />}
    </VStack>
  )
}

export default TaskByte
function uquery(arg0: any) {
  throw new Error("Function not implemented.")
}

