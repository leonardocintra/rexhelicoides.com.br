import { GiLightningHelix } from "react-icons/gi";

export default function Logo() {
  return (
    <div className="flex -space-x-1 text-white items-center text-4xl">
      <GiLightningHelix className="pr-3" />
      <h3 className="">R</h3>
      <h3 className="">E</h3>
      <div className="flex -space-x-3 sm:-space-x-4">
        <h3 className="">X</h3>
        <h3 className="text-red-600">X</h3>
        <h3 className="">X</h3>
      </div>
      <h4 className="font-light text-xl pl-4 italic">Helicoides</h4>
    </div>
  );
}
