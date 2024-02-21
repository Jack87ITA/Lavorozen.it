import React from "react";

import {
  Button,
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
} from "@chakra-ui/react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  isLoading?: boolean;
  title: string;
  submitButtonText?: string;
  closeButtonText?: string;
  children: React.ReactNode;
  height?: string;
}

const Modal = ({
  isOpen,
  onClose,
  isLoading = false,
  onSubmit,
  title,
  children,
  submitButtonText = "Save",
  closeButtonText = "Cancel",
  height = "80vh",
}: ModalProps) => {
  return (
    <ChakraModal motionPreset="slideInBottom" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        borderTopRadius={"30px"}
        mb={0}
        mt={"auto"}
        minH={height}
        maxWidth={"600px"}
      >
        <ModalHeader>
          <Text fontWeight={"600"} fontSize={"xl"}>
            {title}
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>

        <ModalFooter>
          <Button
            bg={"transparent"}
            color={"primary.main"}
            padding={"10px"}
            borderWidth={"1px "}
            borderRadius={"4px"}
            borderColor={"primary.main"}
            mr={3}
            minW={"100px"}
            onClick={onClose}
          >
            {closeButtonText}
          </Button>
          <Button
            bg={"secondary.main"}
            color={"white"}
            borderRadius={"4px"}
            padding={"10px"}
            minW={"100px"}
            onClick={onSubmit}
            type="submit"
            isLoading={isLoading}
          >
            {submitButtonText}
          </Button>
        </ModalFooter>
      </ModalContent>
    </ChakraModal>
  );
};

export default Modal;
