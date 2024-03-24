import Sports from "@/components/Sports";
import Spotlight from "@/components/Spotlight";

export default function Home() {
  return (
    <>
      <div className=" m-20 mt-4">
        <div>
          <div className="mb-10">
            <Sports />
          </div>

          <div>
            <Spotlight />
          </div>
        </div>
      </div>
    </>
  );
}
