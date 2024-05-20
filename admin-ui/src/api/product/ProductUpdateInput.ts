import { CategoryUpdateManyWithoutProductsInput } from "./CategoryUpdateManyWithoutProductsInput";
import { InputJsonValue } from "../../types";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { ReviewUpdateManyWithoutProductsInput } from "./ReviewUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  categories?: CategoryUpdateManyWithoutProductsInput;
  colors?: InputJsonValue;
  description?: InputJsonValue;
  discountedprice?: number;
  images?: InputJsonValue;
  order?: OrderWhereUniqueInput | null;
  reviews?: ReviewUpdateManyWithoutProductsInput;
  titelPrice?: number;
  title?: string;
  variants?: InputJsonValue;
};
