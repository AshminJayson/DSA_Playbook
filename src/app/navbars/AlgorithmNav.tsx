"use client";

import { Tabs, TabList, Tab } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const algoItems = new Map<number, string>([
    [0, "searches"],
    [1, "sorts"],
]);

export default function AlgorithmNav() {
    const router = useRouter();
    const handleNavChange = (tabIndex: number) => {
        console.log("handle");
        router.push(`/${algoItems.get(tabIndex)}`);
    };

    useEffect(() => {
        router.push(`/${algoItems.get(0)}`);
    }, []);

    return (
        <Tabs
            onChange={(tabIndex) => {
                handleNavChange(tabIndex);
            }}
            // orientation="vertical"
            isFitted
            align="center"
        >
            <TabList>
                <Tab>Searches</Tab>
                <Tab>Sorts</Tab>
                <Tab>Stack and Queue</Tab>
                <Tab>Trees</Tab>
                <Tab>Linked List</Tab>
                <Tab>Graphs</Tab>
            </TabList>
        </Tabs>
    );
}
