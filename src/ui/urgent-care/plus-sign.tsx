import Image from "next/image";

export default function PlusSign() {
  return (
    <>
      {/* Mobile plus sign */}
      <div className="block md:hidden">
        <Image
          src="/plus-sign.png"
          alt="plus-sign icon"
          height={35}
          width={35}
        />
      </div>

      {/* Desktop plus sign */}
      <div className="hidden md:block">
        <Image
          src="/plus-sign.png"
          alt="plus-sign icon"
          height={70}
          width={70}
        />
      </div>
    </>
  );
}
