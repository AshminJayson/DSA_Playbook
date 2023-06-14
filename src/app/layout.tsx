"use client";

import { Flex, Tab, TabList, Tabs } from "@chakra-ui/react";
import MainNav from "./navbars/MainNav";
import { Providers } from "./providers";
import { Orbitron } from "next/font/google";
import AlgorithmNav from "./navbars/AlgorithmNav";
import Footer from "./views/footer/Footer";

const orbitron = Orbitron({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={orbitron.className}>
                <Providers>
                    <Flex
                        flexDirection="column"
                        height="100vh"
                        overflow="scroll"
                        sx={{
                            "::-webkit-scrollbar": {
                                display: "none",
                            },
                        }}
                    >
                        <MainNav />
                        <AlgorithmNav />
                        {children}
                        <Footer />
                    </Flex>
                </Providers>
            </body>
        </html>
    );
}
