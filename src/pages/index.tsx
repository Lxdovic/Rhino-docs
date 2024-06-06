import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import React from "react";
import Layout from "@theme/Layout";
import Logo from "@site/static/img/logo.svg";

export default function Home() {
    const {siteConfig} = useDocusaurusContext();

    return (
        <Layout
            title={siteConfig.title}
            description="Description will go into a meta tag in <head />">

            <main className="flex h-[calc(100vh-4rem)] w-full">
                <div className="w-full p-20 h-full gap-32 flex justify-center items-center">
                    <div className="w-1/3 flex flex-col gap-2">
                        <h1 className="text-7xl text-[var(--ifm-color-primary)]">Rhino</h1>
                        <h2 className="text-5xl">Simple, beginner friendly programming language</h2>

                        <div className="flex gap-2 mt-10">
                            <a href="https://github.com/Lxdovic/Rhino">
                                <button className="p-3 rounded-lg w-max cursor-pointer bg-[var(--ifm-color-primary)] border-0">View on Github</button>
                            </a>

                            <a href="https://github.com/Lxdovic/Rhino">
                                <button className="p-3 rounded-lg w-max cursor-pointer border-0 shadow ">View on Github</button>
                            </a>
                        </div>
                    </div>

                    <div className="w-max relative"><Logo className="w-96 h-96 z-10 relative"/> <span className="absolute w-full h-full top-0 left-0 rainbowGradient blur-2xl rounded-full z-0"/></div>
                </div>
            </main>
        </Layout>
    );
}
