"use client";

import { Flex } from "@chakra-ui/react";
import AlgorithmView from "../views/algorithm/AlgorithmView";

export default function Page() {
    return (
        <Flex flexDirection="column">
            <AlgorithmView topicName="Graph"></AlgorithmView>
            <AlgorithmView topicName="BFS"></AlgorithmView>
            <AlgorithmView topicName="DFS"></AlgorithmView>
        </Flex>
    );
}
