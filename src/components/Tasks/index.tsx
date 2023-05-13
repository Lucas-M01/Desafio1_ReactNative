import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { CheckCircle, Circle, Trash } from 'phosphor-react-native';
import { THEME } from '../../theme'

export interface TasksProps {
  id: number
  content: string
  isCompleted: boolean
  onCompletedTask: (id: number) => void
  onDeleteTask: (id: number) => void
}

export function Tasks({isCompleted, content, onDeleteTask, id, onCompletedTask}: TasksProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onCompletedTask(id)}>
        {isCompleted === true ? <CheckCircle size={22} weight="fill" color={THEME.COLORS.PURPLE_DARK} /> : <Circle size={22} color={THEME.COLORS.BLUE} />}
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={isCompleted === true ? styles.textCompleted : styles.text}>
          {content}
        </Text>
      </View>

      <TouchableOpacity onPress={() => onDeleteTask(id)}>
        <Trash size={22} color={THEME.COLORS.TEXT_GRAY} />
      </TouchableOpacity>
    </View>
  );
}