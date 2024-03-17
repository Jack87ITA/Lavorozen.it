import {
    Box,
    Button,
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
import { useNavigate, useSearchParams } from 'react-router-dom'
import Loader from '../../Components/Loader/Loader'
import { useDispatch } from 'react-redux'
import { useToastWrapper } from '../../Wrapper/toastWrapper'


type Props = {
    setScreenState: React.Dispatch<
        React.SetStateAction<'login' | 'register' | 'forgot'>
    >
}

const Register = (props: Props) => {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { success, error } = useToastWrapper()

    const dispatch = useDispatch()

    const [loading, setLoading] = useState(false)

    const [showPassword, setShowPassword] = useState(false)

    const handleSubmit = async () => {
        if (!email || !password || !username)
            return error('Please fill all the fields', '')
        // try {
        //   setLoading(true);
        //   const response = await AuthAPI.postCreateUser({
        //     username,
        //     email,
        //     password,
        //   });
        //   if (response) {
        //     console.log(response);
        //     success("User Created successfully", "");

        //     localStorage.setItem("token", response.token);

        //     const data = {
        //       token: response.token,
        //       user: response.data,
        //     };
        //     dispatch(actions.user.set(data));
        //     navigate("/home");
        //   }
        // } catch (err: any) {
        //   console.log("error logging user :: ", err);
        //   const errMsg = errorHandler(err);
        //   error(errMsg, "");
        // } finally {
        //   setLoading(false);
        // }
    }

    const submitRef = useRef<any>(null)

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

    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        if (searchParams.get('email')) {
            setEmail(searchParams.get('email') || '')
            setUsername(searchParams.get('email')?.split('@')[0] || '')
        }
    }, [])

    return (
        <Box height={'100%'} flexGrow={'grow'} p={6}>
            {loading ? <Loader /> : null}
            <Header>Register</Header>
            {searchParams.get('complete_profile') && (
                <Text textAlign={'center'} fontSize={'sm'} color={'red'}>
                    Please complete your profile
                </Text>
            )}
            <Box mt={'32px'}>
                <FormControl>
                    <FormLabel>Full Name</FormLabel>
                    <InputGroup>
                        <InputLeftElement h={'50px'} pointerEvents="none">
                            <Image src={Icons.ProfileFullName} alt="" />
                        </InputLeftElement>
                        <Input
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            h={'50px'}
                            type="email"
                            placeholder="Enter your name"
                        />
                    </InputGroup>
                </FormControl>

                {username?.length > 2 && (
                    <>
                        <FormControl mt={'20px'}>
                            <FormLabel>Email</FormLabel>
                            <InputGroup>
                                <InputLeftElement
                                    h={'50px'}
                                    pointerEvents="none"
                                >
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
                                <InputLeftElement
                                    h={'50px'}
                                    pointerEvents="none"
                                >
                                    <Image src={Icons.LoginPassword} alt="" />
                                </InputLeftElement>
                                <Input
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
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
                    </>
                )}
            </Box>

            <Button
                ref={submitRef}
                onClick={handleSubmit}
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
                Sign Up
            </Button>
            <HStack mt={'34px'} justifyContent={'center'}>
                <Text>Already have an account?</Text>
                <Text
                    color={'secondary.main'}
                    onClick={() => {
                        props.setScreenState('login')
                    }}
                >
                    Login
                </Text>
            </HStack>
        </Box>
    )
}

export default Register
