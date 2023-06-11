"use client";

import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/cjs/styles/hljs";

interface props {
    language: string;
    code: string;
}

const CodeBlock = ({ language, code }: props) => {
    return (
        <SyntaxHighlighter
            customStyle={{
                borderRadius: "5px",
                // background: "rgba(255, 255, 255, 0.25)",
                // backdropFilter: "blur( 0px )",
                border: "border: 1px solid rgba( 255, 255, 255, 0.18 )",
            }}
            showLineNumbers
            language={language}
            style={atomOneDarkReasonable}
        >
            {code}
        </SyntaxHighlighter>
    );
};

export default CodeBlock;
