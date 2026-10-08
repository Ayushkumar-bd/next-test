"use client";

import dynamic from "next/dynamic";

const BangDBWebSDK = dynamic(() => import("@bangdb/web-sdk/react"), {
  ssr: false,
});

export default function BangWidget() {
  return <BangDBWebSDK config={{
    userService: "https://testuser.bangdb.com:18080",
    backendURL: "https://vector.bangdb.com:18080",
    org: "R0QVJEGE2HH8",
    agent_name: "ayush_test",
  }} />;
}
