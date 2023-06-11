"use client";

import { Flex } from "@chakra-ui/react";
import AlgorithmView from "../components/AlgorithmView";

export default function Page() {
    return (
        <Flex flexDirection="column">
            <AlgorithmView algorithmName="Linear Search"></AlgorithmView>
            <AlgorithmView algorithmName="Binary Search"></AlgorithmView>
        </Flex>
    );
}
