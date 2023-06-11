import { Flex, Button } from "@chakra-ui/react";
import {
    SiLeetcode,
    SiGeeksforgeeks,
    SiYoutube,
    SiHackerrank,
} from "react-icons/si";

interface ButtonProps {
    lcLink: string | undefined;
    geeksLink: string | undefined;
    ytLink: string | undefined;
    hackerrankLink: string | undefined;
}

export default function TopicButtons({
    lcLink,
    geeksLink,
    ytLink,
    hackerrankLink,
}: ButtonProps) {
    return (
        <Flex marginLeft="1rem" gap="1rem">
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
            {ytLink && (
                <Button
                    onClick={() => {
                        window.open(ytLink);
                    }}
                >
                    <SiYoutube color="red" />
                </Button>
            )}
            {hackerrankLink && (
                <Button
                    onClick={() => {
                        window.open(hackerrankLink);
                    }}
                >
                    <SiHackerrank color="lightgreen" />
                </Button>
            )}
        </Flex>
    );
}
