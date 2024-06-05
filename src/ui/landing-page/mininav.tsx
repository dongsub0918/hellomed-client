import Image from "next/image";

export default function MiniNav({
  landingItems,
  setActive,
}: {
  landingItems: Object;
  setActive: any;
}) {
  return (
    <div className="flex justify-between items-center">
      <Image src="/logo.png" alt="Hellomed logo" width={80} height={80} />
      <div className="text-lg font-semibold">
        {Object.keys(landingItems).map((item) => (
          <button className="ml-4" onClick={() => setActive(item)}>
            {landingItems[item as keyof typeof landingItems].name}
          </button>
        ))}
      </div>
    </div>
  );
}
