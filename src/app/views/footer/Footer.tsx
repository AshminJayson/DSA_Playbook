"use client";

import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Footer() {
    return (
        <Flex justify="center" justifySelf="end" padding="2rem">
            <Text align="center">
                Made with a ⚡by{" "}
                <Link href="https://www.linkedin.com/in/ashmin-jayson/">
                    Ashmin Jayson
                </Link>
            </Text>
        </Flex>
    );
}
