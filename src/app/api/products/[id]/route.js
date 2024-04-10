import { productData } from "@/utils/productDataApi";
import { NextResponse } from "next/server";

export function GET(req, content) {

  const productList = productData.filter(
    (item) => item.id == content.params.id
  );

  return NextResponse.json(
    productList.length == 0
      ? { result: "No data found for this product id", success: false }
      : { result: productList, success: true },
    { status: 200 }
  );
}