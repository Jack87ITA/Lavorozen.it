import { Box, BoxProps } from '@chakra-ui/react'
import React from 'react'
import { MAX_WIDTH } from '../../Constants'

interface Props extends BoxProps {
    children: React.ReactNode
}

const MaxWidthContainer = ({ children, ...args }: Props) => {
    return (
        <Box
            mx={'auto'}
            width={'100%'}
            px={'20px'}
            maxW={MAX_WIDTH}
            display={'flex'}
            flexDirection={'column'}
            {...args}
        >
            {children}
        </Box>
    )
}

export default MaxWidthContainer
