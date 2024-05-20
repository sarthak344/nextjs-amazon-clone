import { CategoryCreateNestedManyWithoutProductsInput } from "./CategoryCreateNestedManyWithoutProductsInput";
import { InputJsonValue } from "../../types";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { ReviewCreateNestedManyWithoutProductsInput } from "./ReviewCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  categories?: CategoryCreateNestedManyWithoutProductsInput;
  colors: InputJsonValue;
  description: InputJsonValue;
  discountedprice: number;
  images: InputJsonValue;
  order?: OrderWhereUniqueInput | null;
  reviews?: ReviewCreateNestedManyWithoutProductsInput;
  titelPrice: number;
  title: string;
  variants: InputJsonValue;
};
