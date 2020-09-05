import React, {useState, useEffect} from 'react';
import {View, FlatList, Text} from 'react-native';

import {Container, SafeAreaView, Content, Input, Button} from './styles';
import Header from '../../components/header';
import PostService from '../../services/postService';

export default function Main() {
  const initialPostState = {
    userId: 1,
    title: '',
    body: '',
  };

  const posts = [{id: 0, title: '', body: ''}];

  const [post, setPost] = useState(initialPostState);
  const [data, setData] = useState(posts);

  const handleInputChange = (name, value) => {
    setPost({...post, [name]: value});
  };

  useEffect(() => {
    PostService.getAll().then((response) => {
      setData(response.data);
    });
  }, []);

  const savePost = () => {
    var data = {
      title: post.title,
      body: post.body,
    };

    PostService.create(data)
      .then((response) => {
        console.log(response.data);
        alert('Dados enviados!');
        
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <SafeAreaView>
      <Container>
        <Header />
        <Content>
          <View>
            <Input
              placeholder="Título"
              name="title"
              onChangeText={(text) => handleInputChange('title', text)}
            />
            <Input
              placeholder="Conteúdo"
              name="body"
              onChangeText={(text) => handleInputChange('body', text)}
            />
            <Button title="Teste" onPress={() => savePost()} />
          </View>
          {/* <FlatList
            data={data}
            renderItem={({item}) => <Text>{item.title}</Text>}
            keyExtractor={(item) => item.id}
          /> */}
        </Content>
      </Container>
    </SafeAreaView>
  );
}
