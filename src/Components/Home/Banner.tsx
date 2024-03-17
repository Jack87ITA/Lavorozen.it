import { Box, Flex, Heading, Text } from '@chakra-ui/react'

const Banner = () => {
    return (
        <Flex
            gap="20px"
            mt={'60px'}
            flexDirection={['column', 'row']}
            justifyContent={'space-around'}
            alignItems={'center'}
        >
            <Box flex={0.3}>
                <Heading
                    as={'h1'}
                    fontWeight={'semibold'}
                    mb={6}
                    fontSize={'4xl'}
                >
                    Calcolo stipendio
                    <br />
                    netto
                </Heading>

          
            </Box>

            <Box
                gap={'20px'}
                display={'flex'}
                flexDirection={'column'}
                flex={0.4}
            >
                <Text
                    as={'h5'}
                    textAlign={'justify'}
                    fontWeight={500}
                    fontSize={'md'}
                >
                    Vuoi calcolare il tuo stipendio netto mensile o annuale, ma
                    non sai come fare? La tassazione italiana ti confonde? Ti
                    aiutiamo noi! ‍
                </Text>

                <Text
                    as={'h5'}
                    textAlign={'justify'}
                    fontWeight={500}
                    fontSize={'md'}
                >
                    Con il simulatore di stipendio netto di Lavorozen, ora puoi
                    capire quanto riceverai mensilmente in busta paga. Ti basta
                    indicare i dati più rilevanti sulla tua retribuzione e
                    lasciare che il calcolatore faccia il resto.
                    <br />
                    <br />
                    E' stato sviluppato e testato insieme ai migliori consulenti
                    del lavoro italiani!
                </Text>
            </Box>
        </Flex>
    )
}

export default Banner
