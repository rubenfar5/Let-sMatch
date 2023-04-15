// import logo from './logo.svg';
// import './App.css';
// import React, { useState } from 'react';
// import { useToggle, upperFirst } from '@mantine/hooks';
// import { useElementSize } from '@mantine/hooks';
// import { ArrowBadgeLeft } from 'tabler-icons-react';
// import {
//   TextInput,
//   PasswordInput,
//   Text,
//   Paper,
//   Group,
//   PaperProps,
//   Button,
//   Divider,
//   Checkbox,
//   Anchor,
//   Stack,
//   Image,
//   MantineProvider,
//   SimpleGrid,
//   BackgroundImage,
//   Center,
//   Title,
//   Box,
//   ActionIcon,
// } from '@mantine/core';

// // import { TextInput, Checkbox, Button, Group, Box } from '@mantine/core';
// import { useForm } from '@mantine/form';

// function Lista(props: PaperProps) {
//     const { ref, width, height } = useElementSize();
  
  
//     return (
//       <div>
//         <div>
//         <ActionIcon variant="transparent"><ArrowBadgeLeft size="6rem" color='white' mt={15} />  </ActionIcon>
//         </div>
//       <Paper radius="md" p="xl" mt={30}withBorder {...props}>
//       <Title order={1} align="center" color="red" mb={15} >Sports Modalities
//       </Title>
//       <SimpleGrid cols={2}
//         spacing="lg">
//         <div>
//         <BackgroundImage
//           src="./Run.jpg"
//           radius="sm"
//           style={{height: 200 }}
//         >
//             <Text fw={500} color="#fff">
//               Run
//             </Text>
//         </BackgroundImage>
//         </div>
//         <div>
//         <BackgroundImage
//           src="./Futebol.jpg"
//           radius="sm"
//           style={{height: 200 }}
//         >
          
//             <Text fw={500} color="#fff">
//             Football 
//             </Text>
//         </BackgroundImage>
//         </div>
//         <div>
//         <BackgroundImage
//           src="./Basket.jpg"
//           radius="sm"
//           style={{height: 200 }}
//         >
          
//             <Text fw={500} color="#fff">
//               Basketball
//             </Text>
//         </BackgroundImage>
//         </div>
//         <div>
//         <BackgroundImage
//           src="./Padel.jpg"
//           radius="sm"
//           style={{height: 200 }}
//         >
          
//             <Text fw={500} color="#fff">
//             Padel 
//             </Text>
//         </BackgroundImage>
//         </div>
//         <div>
//         <BackgroundImage
//           src="./Volei.jpg"
//           radius="sm"
//           style={{height: 200 }}
//         >
          
//             <Text fw={500} color="#fff">
//             Volleyball
//             </Text>
//         </BackgroundImage>
//         </div>
//         <div>
//         <BackgroundImage
//           src="./Caminhada.jpg"
//           radius="sm"
//           style={{height: 200 , display: 'center', alignItems: 'flex-end'}}
//         >
          
//             <Text fw={500} color="#fff" p="md">
//             Walk 
//             </Text>
//         </BackgroundImage>
//         </div>
//       </SimpleGrid>
//       </Paper>
//       </div>
//     )
//   }

//   export default Lista;