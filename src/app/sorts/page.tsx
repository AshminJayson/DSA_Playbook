"use client";

import { Flex } from "@chakra-ui/react";
import AlgorithmView from "../views/algorithm/AlgorithmView";

export default function Page() {
    return (
        <Flex flexDirection="column">
            <AlgorithmView topicName="Selection Sort"></AlgorithmView>
            <AlgorithmView topicName="Bubble Sort"></AlgorithmView>
            <AlgorithmView topicName="Insertion Sort"></AlgorithmView>
            <AlgorithmView topicName="Quick Sort"></AlgorithmView>
            <AlgorithmView topicName="Merge Sort"></AlgorithmView>
            <AlgorithmView topicName="Heap Sort"></AlgorithmView>
        </Flex>
    );
}
