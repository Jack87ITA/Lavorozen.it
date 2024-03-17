import React from 'react'
import {
    Button as ChakraButton,
    ButtonProps as ChakraButtonProps,
} from '@chakra-ui/react'
import { colors } from '../../Styles/Theme/colors'

interface ButtonProps extends ChakraButtonProps {
    onClick?: () => void
    children: React.ReactNode
    variant?: 'solid' | 'outline'
}

const Button = ({ onClick, children, variant, ...agrs }: ButtonProps) => {
    switch (variant) {
        case 'outline':
            return (
                <ChakraButton
                    bg={'transparent'}
                    color={'primary.main'}
                    padding={'10px 20px'}
                    fontSize={'sm'}
                    borderWidth={'1px '}
                    borderRadius={'4px'}
                    borderColor={'primary.main'}
                    mr={3}
                    minW={'100px'}
                    onClick={onClick}
                    type="submit"
                    {...agrs}
                >
                    {children}
                </ChakraButton>
            )
        default:
            return (
                <ChakraButton
                    bg={colors.primary.main}
                    backgroundColor={colors.primary.main}
                    color={'white'}
                    borderRadius={'4px'}
                    fontSize={'sm'}
                    padding={'10px 20px'}
                    minW={'100px'}
                    onClick={onClick}
                    type="submit"
                    sx={{
                        background: '#0ec8e9 !important',
                        backgroundColor: '#0ec8e9 !important',
                    }}
                    {...agrs}
                >
                    {children}
                </ChakraButton>
            )
    }
}

export default Button
