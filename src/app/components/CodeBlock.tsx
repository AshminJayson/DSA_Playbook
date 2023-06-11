"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

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
                backdropFilter: "blur( 0px )",
                border: "border: 1px solid rgba( 255, 255, 255, 0.18 );",
            }}
            showLineNumbers
            language={language}
            style={nightOwl}
        >
            {code}
        </SyntaxHighlighter>
    );
};

export default CodeBlock;
