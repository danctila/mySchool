import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Box, Button, Center, FormLabel, HStack, Heading, Input } from '@chakra-ui/react'

function Create() {
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [resources, setResources] = useState('')
    const [contact, setContact] = useState('')

    const [nameError, setNameError] = useState('');
    const [typeError, setTypeError] = useState('');
    const [resourcesError, setResourcesError] = useState('');
    const [contactError, setContactError] = useState('');
    
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault();

         // Form validation
         if (!name.trim()) {
            setNameError('Name is required');
            return;
        } else {
            setNameError('');
        }

        if (!type.trim()) {
            setTypeError('Type is required');
            return;
        } else {
            setTypeError('');
        }

        if (!resources.trim()) {
            setResourcesError('Resources is required');
            return;
        } else {
            setResourcesError('');
        }

        if (!contact.trim()) {
            setContactError('Contact is required');
            return;
        } else {
            setContactError('');
        }

        
        axios.post('http://localhost:8081/create', {name, type, resources, contact})
        .then(res => {
            navigate('/');
        }).catch(err => console.log(err))
    }


  return (
    <Center display='flex' h='100vh' bg='#3A77ED' justifyContent='center' alignItems='center'>
        <Box w='50%' bg='white' borderRadius='8px' border='2px' borderColor='#DEDDE2' p='15px'>
        <Heading fontWeight='bold'>Create User</Heading>
        <form onSubmit={handleSubmit}>
                <Box mb='5px'>
                    <FormLabel htmlFor=''>Name</FormLabel>
                    <Input type='text' placeholder='Enter Name' className='form-control' 
                    onChange={e => setName(e.target.value)}/>
                    <span className='text-danger'>{nameError}</span>
                </Box>
                <Box mb='5px'>
                    <FormLabel htmlFor=''>Type</FormLabel>
                    <Input type='text' placeholder='Enter Type' className='form-control' 
                     onChange={e => setType(e.target.value)}/>
                      <span className='text-danger'>{typeError}</span>
                </Box>
                <Box mb='5px'>
                    <FormLabel htmlFor=''>Resources</FormLabel>
                    <Input type='text' placeholder='Enter Resources' className='form-control' 
                     onChange={e => setResources(e.target.value)}/>
                     <span className='text-danger'>{resourcesError}</span>
                </Box>
                <Box mb='5px'>
                    <FormLabel htmlFor=''>Contact</FormLabel>
                    <Input type='text' placeholder='Enter Contact' className='form-control' 
                     onChange={e => setContact(e.target.value)}/>
                     <span className='text-danger'>{contactError}</span>
                </Box>
                <HStack spacing='15px'>
                <Button bg='#3AED3A' color='black' borderRadius='3px' w='90px' h='40px' _hover onClick={handleSubmit}>Create</Button>
                
                </HStack>
            </form>
        </Box>
        </Center>
  )
}

export default Create