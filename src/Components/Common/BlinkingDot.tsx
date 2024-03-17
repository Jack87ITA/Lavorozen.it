import { Box } from '@chakra-ui/react'

export function BlinkingDot() {
    return (
        <Box
            w="10px"
            h="10px"
            borderRadius="50%"
            bg="green.500" // Change the dot color as needed
            animation="blinking-dot 1s infinite, scale-up 1s infinite" // Define the animations
            _hover={{ animation: 'none' }} // Optional: Stop animation on hover
            _focus={{ animation: 'none' }} // Optional: Stop animation on focus
            _active={{ animation: 'none' }} // Optional: Stop animation on active state
            _selection={{ animation: 'none' }} // Optional: Stop animation when selected
            sx={{
                '@keyframes blinking-dot': {
                    '0%': { opacity: 0 },
                    '50%': { opacity: 1 },
                    '100%': { opacity: 0 },
                },
                '@keyframes scale-up': {
                    '0%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(1.5)' }, // Change the scale factor as needed
                    '100%': { transform: 'scale(1)' },
                },
            }}
        />
    )
}
