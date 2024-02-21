import { useToast } from "@chakra-ui/react";

export const useToastWrapper = () => {
  const toast = useToast();
  return {
    success: (title: string, description?: string) => {
      toast({
        title: title,
        description: description,
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    },
    error: (title: string, description?: string) => {
      toast({
        title: title,
        description: description || "",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    },
  };
};
