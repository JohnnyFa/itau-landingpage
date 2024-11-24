import Image from "next/image";

type Props = {
  name: string;
  icon: string;
  paragraph: string;
  hasBorder: boolean
};

export function ItemServices({name, icon, paragraph, hasBorder}: Props) {
  return (
<li className={`flex items-center gap-9 pb-9 ${hasBorder ? 'border-b-[1px] border-opacity-gray' : ''}`}>
      <div className="w-7 h-7 flex items-center justify-center">
        <Image src={icon} alt={name} />
      </div>
      <p className="flex-1 text-txt-gray pr-2">
       {paragraph}
      </p>
    </li>
  );
}
