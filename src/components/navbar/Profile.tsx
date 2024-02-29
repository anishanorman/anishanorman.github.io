import Image from "next/image";

export function Profile() {
  return (
    <div className="flex flex-col items-center aspect-square rounded-xl p-4">
      <Image alt="Profile picture"src="../assets/Profile.jpg" className="size-32 rounded-full p-3" />
      <div className="flex flex-col items-center w-full text-center p-1" >
        <p className="text-white/80 text-2xl font-medium">Anisha Norman</p>
        <p className="text-white/60 text-md">Junior Software Developer</p>
        <div className="flex space-x-1 items-center text-white/50 mt-1">
          <Image alt="Location pin" src="../assets/location.svg" className="size-4" />
          <p className="text-sm">Bristol, UK</p>
        </div>
      </div>
    </div>
  )
}
