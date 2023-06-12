"use client";

import { Text, Flex, Heading, Button, Skeleton } from "@chakra-ui/react";

import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabaseClient";
import CodeBlock from "./CodeBlock";
import TopicButton from "./TopicButton";
import { ProblemsModal } from "./ProblemsModal";

interface props {
    topicName: string;
}

export default function AlgorithmView({ topicName }: props) {
    const [loaded, setLoaded] = useState<boolean>(false);
    const [description, setDescription] = useState<string | undefined>();
    const [code, setCode] = useState<string>("");
    const [lcLink, setLclink] = useState<string | undefined>();
    const [geeksLink, setGeeksLink] = useState<string | undefined>();
    const [hackerrankLink, setHackerrankLink] = useState<string | undefined>();
    const [ytLink, setYtLink] = useState<string | undefined>();
    const [topicId, setTopicId] = useState<number | undefined>();

    useEffect(() => {
        (async () => {
            const { data } = await supabase
                .from("Topics")
                .select()
                .eq("name", topicName);
            setDescription(data?.[0].description);
            setCode(data?.[0].code);
            setLclink(data?.[0].leetcode_link);
            setGeeksLink(data?.[0].geeks_for_geeks_link);
            setYtLink(data?.[0].youtube_link);
            setHackerrankLink(data?.[0].hackerrank_link);
            setTopicId(data?.[0].id);
            setLoaded(true);
        })();
    }, []);

    return (
        <Flex padding="3rem" gap="1rem" flexDirection="column">
            <Flex gap="1rem" align="center" justify="space-between">
                <Flex align="center">
                    <Heading>{topicName}</Heading>
                    <Skeleton isLoaded={loaded}>
                        <TopicButton
                            lcLink={lcLink}
                            hackerrankLink={hackerrankLink}
                            ytLink={ytLink}
                            geeksLink={geeksLink}
                        />
                    </Skeleton>
                </Flex>
                <ProblemsModal topicId={topicId} topicName={topicName} />
            </Flex>
            <Skeleton isLoaded={loaded}>
                <Flex flexDirection="column" gap="1rem">
                    <Text>{description}</Text>
                    <CodeBlock code={code} language="python"></CodeBlock>
                </Flex>
            </Skeleton>
        </Flex>
    );
}
