import { notFound } from "next/navigation";
import react from "react";

export default function BlogTest({ searchParams }) {
  // if (searchParams.error === "true") {
  //   throw new Error("This is an error");
  // }

  if (searchParams.test === "true") {
    notFound();
  }

  return <div>BlogTest Page</div>;
}
