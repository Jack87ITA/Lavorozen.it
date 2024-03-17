import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Image,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    Text,
} from '@chakra-ui/react'
import React from 'react'
import { AiFillEye } from 'react-icons/ai'
import { Icons } from '../../Assets/icons'
import Header from '../../Components/Common/Header'
import { useToastWrapper } from '../../Wrapper/toastWrapper'
import { errorHandler } from '../../Utils/handler'
type Props = {}

const ResetPassword = (props: Props) => {
    const [inputFields, setInputFields] = React.useState({
        oldPassword: '',
        newPassword: '',
    })
    const [loading, setLoading] = React.useState(false)

    const { success, error } = useToastWrapper()

    const handleInputChange = (e: any) => {
        const { name, value } = e.target
        setInputFields({
            ...inputFields,
            [name]: value,
        })
    }

    const handleSubmit = async () => {
        if (!inputFields.oldPassword || !inputFields.newPassword)
            return error('Please fill all the fields', '')
        setLoading(true)
        try {
            const res = {}
            if (res) {
                success('Password Reset Successfully', '')
            }
        } catch (err) {
            error(errorHandler(err), '')
        } finally {
            setLoading(false)
        }
    }

    return (
        <Box height={'100%'} flexGrow={'grow'} p={6}>
            <Header backButton>Reset Password</Header>
            <Text fontSize={'14px'} mt={12}>
                Please enter your new password
            </Text>
            <Box mt={'32px'}>
                <FormControl>
                    <FormLabel>Old Password</FormLabel>
                    <InputGroup>
                        <InputLeftElement h={'50px'} pointerEvents="none">
                            <Image src={Icons.LoginPassword} alt="" />
                        </InputLeftElement>
                        <Input
                            value={inputFields.oldPassword}
                            name="oldPassword"
                            onChange={handleInputChange}
                            h={'50px'}
                            type="password"
                            placeholder="Enter password"
                        />
                        <InputRightElement h={'50px'}>
                            <AiFillEye />
                        </InputRightElement>
                    </InputGroup>
                </FormControl>
                <FormControl mt={'20px'}>
                    <FormLabel>New Password</FormLabel>
                    <InputGroup>
                        <InputLeftElement h={'50px'} pointerEvents="none">
                            <Image src={Icons.LoginPassword} alt="" />
                        </InputLeftElement>
                        <Input
                            value={inputFields.newPassword}
                            name="newPassword"
                            onChange={handleInputChange}
                            h={'50px'}
                            type="password"
                            placeholder="Confirm Password"
                        />
                        <InputRightElement h={'50px'}>
                            <AiFillEye />
                        </InputRightElement>
                    </InputGroup>
                </FormControl>
            </Box>
            <Button
                mt={'80px'}
                width={'full'}
                h={'60px'}
                alignItems={'center'}
                justifyContent={'center'}
                borderRadius={'16px'}
                display={'flex'}
                background={'primary.main'}
                color={'white'}
                onClick={handleSubmit}
            >
                Reset Now
            </Button>
        </Box>
    )
}

export default ResetPassword
