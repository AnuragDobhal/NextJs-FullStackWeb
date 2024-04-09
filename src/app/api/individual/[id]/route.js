import { individuals } from "@/utils/db";
import { NextResponse } from "next/server";

export function GET(req, content) {
  // const data = individuals;

  const individualData = individuals.filter(
    (item) => item.id == content.params.id
  );

  return NextResponse.json(
    individualData.length == 0
      ? { result: "No data found", success: false }
      : { result: individualData, success: true },
    { status: 200 }
  );
}