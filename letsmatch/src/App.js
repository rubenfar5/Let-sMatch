import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { useToggle, upperFirst } from '@mantine/hooks';
import { useElementSize } from '@mantine/hooks';
import { ArrowBadgeLeft } from 'tabler-icons-react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
  Image,
  MantineProvider,
  SimpleGrid,
  BackgroundImage,
  Center,
  Title,
  Box,
  ActionIcon,
} from '@mantine/core';

// import { TextInput, Checkbox, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';


function Lista(props: PaperProps) {
  const { ref, width, height } = useElementSize();


  return (
    <div>
      <Paper radius="md"  mt={30} withBorder {...props}>
      <ActionIcon variant="transparent"><ArrowBadgeLeft size="6rem" color='red' mt={15} />  </ActionIcon>
      <Image  maw={30} mx="auto" radius="md" src="./Logo2.png" />
      </Paper>

    <Paper radius="md" p="xl" mt={15} mb={15} withBorder {...props}>
    <Title order={1} align="center" color="red" mb={15} >Sports Modalities
    </Title>
    <SimpleGrid cols={2}
      spacing="lg">
      <div>
      <BackgroundImage
        src="./Run.jpg"
        radius="sm"
        style={{height: 200 }}
      >
          <Text fw={500} color="#fff">
            Run
          </Text>
      </BackgroundImage>
      </div>
      <div>
      <BackgroundImage
        src="./Futebol.jpg"
        radius="sm"
        style={{height: 200 }}
      >
        
          <Text fw={500} color="#fff">
          Football 
          </Text>
      </BackgroundImage>
      </div>
      <div>
      <BackgroundImage
        src="./Basket.jpg"
        radius="sm"
        style={{height: 200 }}
      >
        
          <Text fw={500} color="#fff">
            Basketball
          </Text>
      </BackgroundImage>
      </div>
      <div>
      <BackgroundImage
        src="./Padel.jpg"
        radius="sm"
        style={{height: 200 }}
      >
        
          <Text fw={500} color="#fff">
          Padel 
          </Text>
      </BackgroundImage>
      </div>
      <div>
      <BackgroundImage
        src="./Volei.jpg"
        radius="sm"
        style={{height: 200 }}
      >
        
          <Text fw={500} color="#fff">
          Volleyball
          </Text>
      </BackgroundImage>
      </div>
      <div>
      <BackgroundImage
        src="./Caminhada.jpg"
        radius="sm"
        style={{height: 200 , display: 'center', alignItems: 'flex-end'}}
      >
        
          <Text fw={500} color="#fff" p="md">
          Walk 
          </Text>
      </BackgroundImage>
      </div>
    </SimpleGrid>
    </Paper>
    </div>
  )
}
  

function AuthenticationForm(props: PaperProps) {
  const [type, toggle] = useToggle(['login', 'register']);
  const [authenticated, setAuthenticated] = useState(false); // novo estado
  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      password: '',
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
    },
  });

  const handleLogin = () => {
    // Faça a autenticação do usuário aqui
    // ...
    // Depois que a autenticação for bem-sucedida, defina authenticated como true
    setAuthenticated(true);
  };

  if (authenticated) {
    return <Lista />;
  }

  return (
    <Paper radius="md" p="xl" withBorder {...props}>
      {/* <Text size="lg" weight={500}>
        Welcome to LET'SMATCH!, {type} with
      </Text> */}
      <Image  maw={240} mx="auto" radius="md" src="./Logo1.png" />

      <Divider labelPosition="center" my="lg" />

      <form onSubmit={form.onSubmit(handleLogin)}>
        <Stack>
          {type === 'register' && (
            <TextInput
              label="Name"
              placeholder="Your name"
              value={form.values.name}
              onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
              radius="md"
            />
          )}

          <TextInput
            required
            label="Email"
            placeholder="Your email"
            value={form.values.email}
            onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
            error={form.errors.email && 'Invalid email'}
            radius="md"
          />

          <PasswordInput
            required
            label="Password"
            placeholder="Your password"
            value={form.values.password}
            onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
            error={form.errors.password && 'Password should include at least 6 characters'}
            radius="md"
          />

          {type === 'register' && (
            <Checkbox
              label="I accept terms and conditions"
              checked={form.values.terms}
              onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
            />
          )}
        </Stack>

        <Group position="apart" mt="xl">
          <Anchor
            component="button"
            type="button"
            color="dimmed"
            onClick={() => toggle()}
            size="xs"
          >
            {type === 'register'
              ? 'Already have an account? Login'
              : "Don't have an account? Register"}
          </Anchor>
          <Button color="red" type="submit" radius="xl">
            {upperFirst(type)}
          </Button>
        </Group>
      </form>
    </Paper>
  )
          }
function App() {
  return (
    
    <div className="App">
      
      <header className="App-header">
        <AuthenticationForm />
      </header>
    </div>
  );
}

export default App;



