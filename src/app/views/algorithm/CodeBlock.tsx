"use client";

import { atomOneDark } from "react-code-blocks";
import { CopyBlock } from "react-code-blocks";
import { toast } from "sonner";

interface props {
    language: string;
    code: string;
}

const CodeBlock = ({ language, code }: props) => {
    return (
        <CopyBlock
            wrapLongLines
            onCopy={() => {
                toast.success("Code Block Copied 🧾");
            }}
            showLineNumbers
            language={language}
            text={code}
            wrapLines
            theme={atomOneDark}
            codeBlock
            copied
        />
    );
};

export default CodeBlock;
