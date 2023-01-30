import { Inter } from "@next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Link href="/hakkimizda">Hakkımızda</Link>
      <br />
      <Link href="/docs/post-1">Post-1</Link>
      <br />
      <Link
        href={{
          pathname: "/hakkimizda",
          query: {
            name: "Berkay"
          }
        }}
      >
        Hakkımızda Obje İle
      </Link>
    </div>
  );
}
