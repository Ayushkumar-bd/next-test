"use client";

import dynamic from "next/dynamic";

const BangDBWebSDK = dynamic(() => import("@bangdb/web-sdk/react"), {
  ssr: false,
});

export default function Page() {
  return (
    <BangDBWebSDK
      config={{
        userService: "https://testuser.bangdb.com:18080",
      }}
    />
  );
}
