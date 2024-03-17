import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    HStack,
    Image,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    Text,
} from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { Icons } from '../../Assets/icons'
import Header from '../../Components/Common/Header'
import { useNavigate } from 'react-router-dom'
import Loader from '../../Components/Loader/Loader'
import { useToastWrapper } from '../../Wrapper/toastWrapper'

import { useAppDispatch } from '../../Hook'

type Props = {
    setScreenState: React.Dispatch<
        React.SetStateAction<'login' | 'register' | 'forgot'>
    >
}

const Login = (props: Props) => {
    const dispatch = useAppDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [loading, setLoading] = useState(false)

    const [showPassword, setShowPassword] = useState(false)

    const { error } = useToastWrapper()

    const submitRef = useRef<any>(null)

    const navigate = useNavigate()

    const handleSubmit = async (e: any) => {
        e.preventDefault()

        if (!email || !password) {
            error('Please fill all the fields')
            return
        }

        setLoading(true)
        // try {
        //   const login = await dispatch(loginUser({ email, password }));

        //   if (login.payload) {
        //     setLoading(false);

        //     if (login.payload.success) {
        //       localStorage.setItem("token", login.payload.token);
        //       dispatch(
        //         actions.user.set({
        //           data: login.payload.data,
        //           token: login.payload.token,
        //         })
        //       );
        //       navigate("/home");
        //     }

        //     return;
        //   }
        // } catch (err) {
        //   setLoading(false);
        //   const msg = errorHandler(err);
        //   error(msg);
        // } finally {
        //   setLoading(false);
        // }
    }

    useEffect(() => {
        const listener = (event: any) => {
            if (event.code === 'Enter' || event.code === 'NumpadEnter') {
                event.preventDefault()
                submitRef.current.click()
            }
        }
        document.addEventListener('keydown', listener)
        return () => {
            document.removeEventListener('keydown', listener)
        }
    }, [])

    return (
        <Box height={'100%'} flexGrow={'grow'} p={6}>
            {loading ? <Loader /> : null}
            <Header>Login</Header>
            <Box mt={'32px'}>
                <FormControl>
                    <FormLabel>Email</FormLabel>
                    <InputGroup>
                        <InputLeftElement h={'50px'} pointerEvents="none">
                            <Image src={Icons.LoginMail} alt="" />
                        </InputLeftElement>
                        <Input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            h={'50px'}
                            type="email"
                            placeholder="Enter Email"
                        />
                    </InputGroup>
                </FormControl>
                <FormControl mt={'20px'}>
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                        <InputLeftElement h={'50px'} pointerEvents="none">
                            <Image src={Icons.LoginPassword} alt="" />
                        </InputLeftElement>
                        <Input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            h={'50px'}
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Enter Password"
                        />
                        <InputRightElement h={'50px'}>
                            {showPassword ? (
                                <AiFillEyeInvisible
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => {
                                        setShowPassword(false)
                                    }}
                                />
                            ) : (
                                <AiFillEye
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => {
                                        setShowPassword(true)
                                    }}
                                />
                            )}
                        </InputRightElement>
                    </InputGroup>
                </FormControl>
                <Flex justifyContent={'end'}>
                    <Text
                        onClick={() => {
                            props.setScreenState('forgot')
                        }}
                        color={'blue.500'}
                        mt={2}
                        cursor={'pointer'}
                    >
                        Forgot Password?
                    </Text>
                </Flex>
            </Box>

            <Button
                ref={submitRef}
                onClick={(e) => handleSubmit(e)}
                mt={'60px'}
                width={'full'}
                h={'60px'}
                alignItems={'center'}
                justifyContent={'center'}
                borderRadius={'16px'}
                display={'flex'}
                background={'primary.main'}
                color={'white'}
            >
                Sign In
            </Button>
            <HStack mt={'34px'} justifyContent={'center'}>
                <Text>Don't have an account?</Text>
                <Text
                    color={'secondary.main'}
                    _hover={{
                        textDecoration: 'underline',
                        cursor: 'pointer',
                    }}
                    onClick={() => {
                        props.setScreenState('register')
                    }}
                >
                    Sign Up
                </Text>
            </HStack>
        </Box>
    )
}

export default Login
