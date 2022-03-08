import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native'
import { Appbar, Button, RadioButton, Switch, TextInput } from 'react-native-paper';
import { Fontisto } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <SafeAreaView>
        <Appbar.Header>
        <Appbar.Content title="Tip Calculator" />
    </Appbar.Header>

    {/*Text input component*/}
    <View style={{ padding: 20, marginTop: 10, flexDirection: 'row', alignItems: 'center' }}>
      <Fontisto name="shopping-store" size={26} color="#1a5c20" style={{ paddingRight: 10 }} />
      <TextInput 
        style={{ height: 35 }}
        mode="outlined"
        label="Outlined input"
        placeholder='How much was the food?'
        right={<TextInput.Affix text="$" />}
      />
    </View>

    {/*Radio button component*/}
    <View style={{ padding: 20 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <MaterialIcons name="room-service" size={30} color="#1a5c20" style={{ paddingRight: 10 }} />
        <Text>How was the service?</Text>
      </View>

      <RadioButton.Group>
        <View style={{ flexDirection: 'row', paddingLeft: 40, alignItems: 'center' }}>
          <RadioButton value={20} />
          <Text>Amazing (20%)</Text>
        </View>
        <View style={{ flexDirection: 'row', paddingLeft: 40, alignItems: 'center' }}>
          <RadioButton value={18} />
          <Text>Good (18%)</Text>
        </View>
        <View style={{ flexDirection: 'row', paddingLeft: 40, alignItems: 'center' }}>
          <RadioButton value={15} />
          <Text>Okay (15%)</Text>
        </View>
      </RadioButton.Group>
    </View>

    {/*Round up tip? component*/}
    <View style={{ flexDirection:'row', padding: 20, alignItems: 'center' }}>
        <Feather name="arrow-up-right" size={30} color="#1a5c20" style={{ paddingRight: 10 }} />
        <Text>Round up tip?</Text>
        <View style={{ justifyContent: 'flex-end' }}><Switch /></View>
    </View>  

    {/*calculate button component*/}
    <Button mode='contained'>
        CALCULATE
    </Button>

    {/*tip amount component*/}
    <Text style={{ textAlign: 'right' }}>Tip Amount: $</Text>
    </SafeAreaView>
  )
}