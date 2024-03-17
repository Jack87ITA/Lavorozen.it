import { Flex } from '@chakra-ui/react'
import React from 'react'

type Props = {
    children: React.ReactNode
}

const MobileLayout = ({ children }: Props) => {
    return (
        <Flex
            maxW={'600px'}
            w="100%"
            position={'relative'}
            flexDirection="column"
            alignSelf={'center'}
            mx={'auto'}
            display={'flex'}
            minH={'100vh'}
            maxH={'100vh'}
        >
            {children}
        </Flex>
    )
}

export default MobileLayout
