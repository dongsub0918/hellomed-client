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
      <div className="w-28">
        <Image src="/logo.png" alt="Hellomed logo" width={174} height={44} />
      </div>
      <div className="text-lg font-semibold">
        {Object.keys(landingItems).map((item, i) => (
          <button key={i} className="ml-4" onClick={() => setActive(item)}>
            {landingItems[item as keyof typeof landingItems].name}
          </button>
        ))}
      </div>
    </div>
  );
}
