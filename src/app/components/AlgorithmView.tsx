import { Text, Flex, Heading, Button, Skeleton } from "@chakra-ui/react";

import { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";
import { SiGeeksforgeeks, SiLeetcode, SiYoutube } from "../abstractions/icons";
import CodeBlock from "./CodeBlock";

interface props {
    algorithmName: string;
}

export default function AlgorithmView({ algorithmName }: props) {
    const [loaded, setLoaded] = useState<boolean>(false);
    const [description, setDescription] = useState<string | undefined>();
    const [code, setCode] = useState<string>("");
    const [lcLink, setLclink] = useState<string | undefined>();
    const [geeksLink, setGeeksLink] = useState<string | undefined>();
    const [ytlink, setYtLink] = useState<string | undefined>();

    useEffect(() => {
        (async () => {
            const { data } = await supabase
                .from("Algorithms")
                .select()
                .eq("name", algorithmName);
            setDescription(data?.[0].description);
            setCode(data?.[0].code);
            setLclink(data?.[0].leetcode_link);
            setGeeksLink(data?.[0].geeks_for_geeks_link);
            setYtLink(data?.[0].youtube_link);
            setLoaded(true);
        })();
    }, []);

    return (
        <Flex padding="3rem" gap="1rem" flexDirection="column">
            <Flex gap="1rem" alignItems="center">
                <Heading>{algorithmName}</Heading>
                <Skeleton isLoaded={loaded}>
                    <Flex gap="1rem">
                        {lcLink && (
                            <Button
                                onClick={() => {
                                    window.open(lcLink);
                                }}
                            >
                                <SiLeetcode color="orange" />
                            </Button>
                        )}
                        {geeksLink && (
                            <Button
                                onClick={() => {
                                    window.open(geeksLink);
                                }}
                            >
                                <SiGeeksforgeeks color="green" />
                            </Button>
                        )}
                        {ytlink && (
                            <Button
                                onClick={() => {
                                    window.open(ytlink);
                                }}
                            >
                                <SiYoutube color="red" />
                            </Button>
                        )}
                    </Flex>
                </Skeleton>
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
