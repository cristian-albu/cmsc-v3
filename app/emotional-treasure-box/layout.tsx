import Image from "next/image";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="w-full flex flex-wrap justify-between items-center p-3 border-b-solid border-[1px] border-gray">
        <Image
          src={"/etb/iln_logo.png"}
          width={200}
          height={100}
          alt="logo ILN"
          className="w-auto h-[60px] object-contain"
        />
        <Image
          src={"/etb/ministerul_culturii_logo.png"}
          width={200}
          height={100}
          alt="logo ministerul culturii"
          className="w-auto h-[60px] object-contain"
        />
      </div>
      {children}
    </>
  );
}
