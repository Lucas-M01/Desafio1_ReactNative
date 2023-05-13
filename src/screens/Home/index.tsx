import React, { useState } from 'react'
import { View, Text, Alert, FlatList } from 'react-native'

import { styles } from './styles'
import { Header } from '../../components/Header'
import { Form } from '../../components/Form'
import { Tasks, TasksProps } from '../../components/Tasks';
import { ClipboardText } from 'phosphor-react-native'
import { THEME } from '../../theme'

export function Home() {
  const [newTask, setNewTask] = useState('')
  const [list, setList] = useState<TasksProps[]>([])

  function handleToDoAdd() {
    if(newTask === '') {
        return Alert.alert('Erro', 'Digite uma tarefa')
    }

    setList(prevState => [...prevState, {
      id: Math.random(),
      content: newTask,
      isCompleted: false,
      onCompletedTask: handleToCompletedTask,
      onDeleteTask: handleDeleteTask
    }])
    setNewTask('')
  }

  function handleToCompletedTask(id: number) {
    const task = list.map(item => item.id === id ? {
      ...item, 
      isCompleted: !item.isCompleted
    }: item)

    setList(task)
  }

  function handleDeleteTask(id: number) {
    const newTasks = list.filter(task => task.id != id);

    setList(newTasks);
  }

  return (
    <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <Form  value={newTask} onPress={handleToDoAdd} onChangeText={setNewTask} />

          <View style={styles.tasks}>
            <View style={styles.headerListTasks}>
              <View style={styles.headerList}>
                <Text style={styles.headerTextL}>
                  Criadas
                </Text>
                <Text style={styles.counter}>{list.length}</Text>
              </View>

              <View style={styles.headerList}>
                <Text style={styles.headerTextR}>
                  Concluídas
                </Text>
                <Text style={styles.counter}>{list.filter(item => item.isCompleted).length}</Text>
              </View>
            </View>
            
          </View>
            <FlatList 
              data={list}
              keyExtractor={item => String(item.id)}
              renderItem={({ item }) => (
                <Tasks
                  key={item.id}
                  id={item.id} 
                  content={item.content}
                  isCompleted={item.isCompleted}
                  onCompletedTask={handleToCompletedTask}  
                  onDeleteTask={handleDeleteTask}
                />
              )}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={() => (
                <View style={styles.emptyList}>
                  <View style={styles.listEmpty}>
                    <ClipboardText size={100} color={THEME.COLORS.GRAY_400} />
                    <Text style={styles.emptyListText}>
                      Você ainda não tem tarefas cadastradas
                    </Text>
                    <Text style={styles.emptyListTextS}>
                      Crie tarefas e organize seus itens a fazer
                    </Text>
                  </View>
                </View>
              )}
            />
        </View>
    </View>
  )
}