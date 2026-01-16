import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const SeletorIbge = () => {
  const [ufs, setUfs] = useState([]); // Lista de estados
  const [cidades, setCidades] = useState([]); // Lista de cidades
  const [ufSelecionada, setUfSelecionada] = useState(null); // ID do estado (numérico)
  const [cidadeSelecionada, setCidadeSelecionada] = useState(null); // Nome da cidade
  const [loading, setLoading] = useState(true); // Loading inicial dos estados

  // 1. Busca os estados (UF) ao carregar o componente
  useEffect(() => {
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome')
      .then(response => response.json())
      .then(data => {
        setUfs(data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        Alert.alert('Erro', 'Não foi possível carregar os estados.');
        setLoading(false);
      });
  }, []); // Array vazio = roda apenas uma vez

  // 2. Busca as cidades SEMPRE que "ufSelecionada" mudar
  useEffect(() => {
    if (ufSelecionada) {
      // Limpa a cidade anterior para não misturar dados
      setCidades([]); 
      setCidadeSelecionada(null);
      
      fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufSelecionada}/municipios`)
        .then(response => response.json())
        .then(data => setCidades(data))
        .catch(error => {
          console.error(error);
          Alert.alert('Erro', 'Não foi possível carregar as cidades.');
        });
    }
  }, [ufSelecionada]); // Dependência: Roda toda vez que ufSelecionada mudar

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Carregando estados...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Seletor de Localidade</Text>

      {/* --- Picker de ESTADOS --- */}
      <Text style={styles.label}>Estado:</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={ufSelecionada}
          onValueChange={(itemValue) => setUfSelecionada(itemValue)}
        >
          <Picker.Item label="Selecione um estado..." value={null} />
          {ufs.map((uf) => (
            <Picker.Item 
              key={uf.id} 
              label={`${uf.nome} (${uf.sigla})`} 
              value={uf.id} // Aqui estamos usando o ID numérico do IBGE (ex: 35 para SP)
            />
          ))}
        </Picker>
      </View>

      {/* --- Picker de CIDADES --- */}
      <Text style={styles.label}>Cidade:</Text>
      <View style={styles.pickerContainer}>
        {/* Mostra um texto se nenhum estado foi selecionado ainda */}
        {!ufSelecionada ? (
          <Text style={styles.aviso}>Primeiro selecione um estado acima</Text>
        ) : (
          <Picker
            selectedValue={cidadeSelecionada}
            enabled={cidades.length > 0} // Só habilita se tiver cidades carregadas
            onValueChange={(itemValue) => setCidadeSelecionada(itemValue)}
          >
            <Picker.Item label="Selecione uma cidade..." value={null} />
            {cidades.map((cidade) => (
              <Picker.Item 
                key={cidade.id} 
                label={cidade.nome} 
                value={cidade.nome} 
              />
            ))}
          </Picker>
        )}
      </View>

      {/* Exibição do Resultado */}
      {cidadeSelecionada && (
        <View style={styles.resultado}>
          <Text style={styles.textoResultado}>
            Você vai viajar para: {'\n'}
            <Text style={{fontWeight: 'bold'}}>{cidadeSelecionada}</Text>
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#333',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#555',
  },
  pickerContainer: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 20,
    justifyContent: 'center',
    // Altura fixa ajuda a evitar pulos no layout enquanto carrega
    minHeight: 55, 
  },
  aviso: {
    padding: 15,
    color: '#999',
    fontStyle: 'italic',
  },
  resultado: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#d4edda',
    borderRadius: 8,
    alignItems: 'center',
  },
  textoResultado: {
    fontSize: 18,
    color: '#155724',
    textAlign: 'center',
  },
});

export default SeletorIbge;