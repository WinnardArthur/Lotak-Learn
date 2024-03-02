import React from "react";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image src="/logo.png" height={52} width={52} alt="logo" />
      <h3 className="font-extrabold text-xl">Lotak Learn</h3>
    </Link>
  );
};

export default Logo;
