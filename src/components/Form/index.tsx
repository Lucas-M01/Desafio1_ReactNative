import React from 'react';
import { TextInput, View, TouchableOpacity } from 'react-native'
import { PlusCircle } from 'phosphor-react-native'
import { THEME } from '../../theme'

import { styles } from './styles'

interface FormProps {
  value: string;
  onPress:  () => void;
  onChangeText: (text: string) => void;
}

export function Form({value, onPress, onChangeText}: FormProps) {
  return (
    <View style={styles.form}>
      <TextInput 
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={THEME.COLORS.TEXT_GRAY} 
          onChangeText={onChangeText}
          value={value}
      />
      <TouchableOpacity style={styles.button} onPress={onPress} >
        <PlusCircle color={THEME.COLORS.WHITE} size={20} />
      </TouchableOpacity>
    </View>
  );
}