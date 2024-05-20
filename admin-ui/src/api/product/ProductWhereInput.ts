import { CategoryListRelationFilter } from "../category/CategoryListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";

export type ProductWhereInput = {
  categories?: CategoryListRelationFilter;
  colors?: JsonFilter;
  description?: JsonFilter;
  discountedprice?: FloatFilter;
  id?: StringFilter;
  images?: JsonFilter;
  order?: OrderWhereUniqueInput;
  reviews?: ReviewListRelationFilter;
  titelPrice?: FloatFilter;
  title?: StringFilter;
  variants?: JsonFilter;
};
