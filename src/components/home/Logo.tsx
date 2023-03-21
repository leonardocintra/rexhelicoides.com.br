export default function Logo() {
  return (
    <div className="flex text-white text-5xl items-center font-leagueSpartan py-4 px-3">
      <div className="flex rounded-full w-20 h-20 border-4 border-white absolute ml-6"></div>
      <div className="flex items-center pt-2 -space-x-2">
        <h3 className="">R</h3>
        <h3 className="">E</h3>
        <div className="flex -space-x-5">
          <h3 className="">X</h3>
          <h3 className="text-red-600">X</h3>
          <h3 className="">X</h3>
        </div>
        <h4 className="font-light text-2xl pl-4">Helicóides</h4>
      </div>
    </div>
  );
}
