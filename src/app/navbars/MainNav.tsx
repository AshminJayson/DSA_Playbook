"use client";

import { Button, Flex, Text, useColorMode } from "@chakra-ui/react";
import {
    FaGithub,
    GiLightningTrio,
    MdDarkMode,
    MdSunny,
} from "../abstractions/icons";

export default function MainNav() {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Flex padding="1.2rem" justify="space-between">
            <Flex flex={1}></Flex>
            <Flex
                cursor="pointer"
                // flex={1}
                alignItems="center"
                justify="center"
                gap="1rem"
            >
                <GiLightningTrio style={{ color: `#FF6000` }} size={30} />
                <Text fontSize="2xl" fontWeight="medium">
                    DSA Playbook
                </Text>
            </Flex>
            <Flex flex={1} justifyContent="flex-end" gap=".5rem">
                <Button
                    onClick={() => {
                        window.open("https://www.github.com/AshminJayson");
                    }}
                >
                    <FaGithub />
                </Button>
                <Button onClick={() => toggleColorMode()}>
                    {colorMode === "dark" ? <MdDarkMode /> : <MdSunny />}
                </Button>
            </Flex>
        </Flex>
    );
}
