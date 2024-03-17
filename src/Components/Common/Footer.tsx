import { Box, Grid, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { colors } from '../../Styles/Theme/colors'
import MaxWidthContainer from './MaxWidthContainer'
import { LogoWhite } from '../../Assets/icons/Logo'
import Button from './Button'

const Footer = () => {
    return (
        <Box
            mt={'60px'}
            borderTop={'1px solid'}
            borderColor={'#585858'}
            pt={'30px'}
            background={'#585858'}
        >
            <MaxWidthContainer>
                <Grid
                    justifyContent={'space-around'}
                    w={'100%'}
                    mt={'30px'}
                    templateColumns={['repeat(2, 1fr)', 'repeat(3, 1fr)']}
                    gap={'20px'}
                >
                    <VStack spacing={3} alignItems={'flex-start'}>
                        <Box>
                            <LogoWhite />
                        </Box>
                        <Text color={'white'} fontSize={'sm'}>
                            Affronta il lavoro con semplicità.
                        </Text>
                    </VStack>

                    <Box>
                        <VStack
                            w={['100%', '50%']}
                            mx={'auto'}
                            textAlign={'left'}
                            alignItems={'flex-start'}
                            spacing={3}
                            justifyContent={'center'}
                        >
                            <Text
                                as={'a'}
                                href="https://www.lavorozen.it/curriculum/"
                                color={'white'}
                                fontSize={'sm'}
                            >
                                Curriculum
                            </Text>
                            <Text
                                as={'a'}
                                href=""
                                color={'white'}
                                fontSize={'sm'}
                            >
                                Calcolo Stipendio Lordo Netto
                            </Text>
                            <Text
                                as={'a'}
                                href="https://www.lavorozen.it/mio-talento/"
                                color={'white'}
                                fontSize={'sm'}
                            >
                                Mio Talento
                            </Text>
                            <Text
                                as={'a'}
                                href="https://www.lavorozen.it/bloghr/"
                                color={'white'}
                                fontSize={'sm'}
                            >
                                Blog HR
                            </Text>
                        </VStack>
                    </Box>

                    <VStack
                        h={'100%'}
                        spacing={3}
                        justifyContent={'center'}
                        alignItems={'center'}
                    >
                        <Button rounded={'30px'} size="sm">
                            Prenota Sessione
                        </Button>
                    </VStack>
                </Grid>
            </MaxWidthContainer>

            <Box
                mt={'60px'}
                p={4}
                borderTop={'1px solid'}
                borderColor={colors.primary}
            >
                <Text color={'#fff'} fontSize={'xs'} textAlign={'center'}>
                    P.IVA n° 04009080120 - Via Felice Broggi 13, 21049 - Tradate
                    (VA)
                </Text>
            </Box>
        </Box>
    )
}

export default Footer
