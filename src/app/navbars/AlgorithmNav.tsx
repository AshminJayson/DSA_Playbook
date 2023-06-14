"use client";

import { Tabs, TabList, Tab } from "@chakra-ui/react";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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
    const [tabIndex, setTabIndex] = useState<number>(0);
    const handleNavChange = (tabIndex: number) => {
        setTabIndex(tabIndex);
        router.push(`/${algoItems.get(tabIndex)}`);
    };

    useEffect(() => {
        if (pathName == "/") router.push(`/${algoItems.get(0)}`);
        algoItems.forEach((value, key) => {
            if (value == pathName.slice(1)) {
                setTabIndex(key);
                return;
            }
        });
    }, []);

    return (
        <Tabs
            index={tabIndex}
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
