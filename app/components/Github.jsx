import Image from "next/image";
import github from "../../public/github-mark.png";

export default function Github(params) {
  return (
    <>
      <Image
        src={github}
        width={5000}
        height={5000}
        alt="Github"
        className="w-9 h-9 object-contain object-center"
      />
    </>
  );
}
