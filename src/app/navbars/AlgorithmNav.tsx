"use client";

import { Tabs, TabList, Tab } from "@chakra-ui/react";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

const algoItems = new Map<number, string>([
    [0, "searches"],
    [1, "sorts"],
    [2, "stackandqueue"],
    [3, "linkedlist"],
    [4, "trees"],
    [5, "graphs"],
]);

export default function AlgorithmNav() {
    const router = useRouter();
    const pathName = usePathname();
    const handleNavChange = (tabIndex: number) => {
        // console.log("handle");
        router.push(`/${algoItems.get(tabIndex)}`);
    };

    useEffect(() => {
        if (pathName == "/") router.push(`/${algoItems.get(0)}`);
    }, []);

    return (
        <Tabs
            onChange={(tabIndex) => {
                handleNavChange(tabIndex);
            }}
            // isFitted
            align="center"
        >
            <TabList>
                <Tab>Searches</Tab>
                <Tab>Sorts</Tab>
                <Tab>Stack and Queue</Tab>
                <Tab>Linked List</Tab>
                <Tab>Trees</Tab>
                <Tab>Graphs</Tab>
            </TabList>
        </Tabs>
    );
}
