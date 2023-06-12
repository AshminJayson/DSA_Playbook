"use client";

import { Flex, Spinner, Text } from "@chakra-ui/react";

export default function Loading() {
    return (
        <Flex justify="center" align="center" padding="5rem">
            <Text>
                Loading... <Spinner />
            </Text>
        </Flex>
    );
}
