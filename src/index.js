import React, { useState, useEffect } from 'react';
import { SafeAreaView, FlatList, Text, StyleSheet, StatusBar } from 'react-native'

// Não possuem valor semântico (significado)
// Nao possuem estilização própria
// Todos componentes possuem por padrão "display : flex"

// View:div, footer, header, main, aside, section
// Text: p, span, strong, h1, h2, h3

import api from './services/api';

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      console.log(response.data);
      setProjects(response.data);
    });
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
    <SafeAreaView style={styles.container}>
    <FlatList
      
      data={projects}
      keyExtractor={project => project.id}
      renderItem={({item: project }) => (
        <Text style={styles.project}>{project.title}</Text>
      )}

    />
    </SafeAreaView>

      {/* <View style={styles.container} >
        {projects.map(project => (
          <Text style={styles.project} key={project.id}>{project.title}</Text>
        ))}
      </View> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    // justifyContent: 'center',
    // alignItems: 'center'
  },

  project: {
    color: '#fff',
    fontSize: 30,
  },
});