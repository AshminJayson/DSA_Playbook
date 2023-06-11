"use client";

import { Flex } from "@chakra-ui/react";
import AlgorithmView from "../components/AlgorithmView";

export default function Page() {
    return (
        <Flex flexDirection="column">
            <AlgorithmView algorithmName="Stack"></AlgorithmView>
            <AlgorithmView algorithmName="Queue"></AlgorithmView>
            <AlgorithmView algorithmName="Insertion Sort"></AlgorithmView>
            <AlgorithmView algorithmName="Quick Sort"></AlgorithmView>
            <AlgorithmView algorithmName="Merge Sort"></AlgorithmView>
            <AlgorithmView algorithmName="Heap Sort"></AlgorithmView>
        </Flex>
    );
}
