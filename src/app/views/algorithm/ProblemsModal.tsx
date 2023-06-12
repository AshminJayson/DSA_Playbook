"use client";

import { supabase } from "../../utils/supabaseClient";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Skeleton,
    Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface props {
    topicId: number | undefined;
    topicName: string | undefined;
}
export function ProblemsModal({ topicId, topicName }: props) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [problems, setProblems] = useState<any>();
    const [loaded, setLoaded] = useState<boolean>(false);

    async function openModal() {
        onOpen();
        const { data, error } = await supabase
            .from("Problems")
            .select()
            .order("difficulty")
            .eq("topic_id", topicId);

        setProblems(data);
        setLoaded(true);
    }

    const getDifficulty = (difficultyIndex: number) => {
        return difficultyIndex == 1
            ? "easy"
            : difficultyIndex == 2
            ? "medium"
            : "hard";
    };

    return (
        <>
            <Button onClick={openModal}>Practice</Button>

            <Modal isOpen={isOpen} onClose={onClose} size="3xl">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{topicName} Practice Questions</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Skeleton isLoaded={loaded}>
                            {problems && problems.length === 0 && (
                                <Text>No questions available</Text>
                            )}
                            {problems && problems.length != 0 && (
                                <TableContainer>
                                    <Table variant="simple">
                                        <TableCaption>
                                            Practice these to improve your
                                            approach for similar questions
                                        </TableCaption>
                                        <Thead>
                                            <Tr>
                                                <Th>Name</Th>
                                                <Th>Difficulty</Th>
                                            </Tr>
                                        </Thead>
                                        <Tbody>
                                            {problems &&
                                                problems.map((item: any) => {
                                                    return (
                                                        <Tr key={item.id}>
                                                            <Td
                                                                cursor="pointer"
                                                                _hover={{
                                                                    color: "lightblue",
                                                                }}
                                                                onClick={() => {
                                                                    window.open(
                                                                        item.link
                                                                    );
                                                                }}
                                                            >
                                                                {
                                                                    item.question_name
                                                                }
                                                            </Td>
                                                            <Td
                                                                color={
                                                                    item.difficulty ==
                                                                    1
                                                                        ? "lightgreen"
                                                                        : item.difficulty ==
                                                                          3
                                                                        ? "red"
                                                                        : "yellow"
                                                                }
                                                            >
                                                                {getDifficulty(
                                                                    item.difficulty
                                                                )}
                                                            </Td>
                                                        </Tr>
                                                    );
                                                })}
                                        </Tbody>
                                    </Table>
                                </TableContainer>
                            )}
                        </Skeleton>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}
