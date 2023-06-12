"use client";

import { Flex } from "@chakra-ui/react";
import AlgorithmView from "../views/algorithm/AlgorithmView";

export default function Page() {
    return (
        <Flex flexDirection="column">
            <AlgorithmView topicName="Binary Tree"></AlgorithmView>
            <AlgorithmView topicName="Binary Search Tree"></AlgorithmView>
        </Flex>
    );
}
