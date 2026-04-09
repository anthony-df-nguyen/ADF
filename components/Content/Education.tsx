import Image from "next/image";
import Card from "@/components/UI/Card";
export default function Education() {
  return (
    <div className="container">
      <Card>
        <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
          <Image
            src="/images/uci.svg"
            alt="University of California, Irvine"
            width={72}
            height={72}
            className="shrink-0"
          />
          <div>
            <div className="text-h3">University of California, Irvine</div>
            <div className="mt-1 text-eyebrow">Economics, B.A. | Cum Laude</div>
          </div>
        </div>
      </Card>
    </div>
  );
}
