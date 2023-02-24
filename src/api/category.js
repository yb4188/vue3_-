// 定义首页需要的接口函数
import request from "../utils/request";

/**
 * 获取首页头部分类数据
 */
export const findAllCategory = () => {
  return request("/home/category/head", "get");
};

// 获取二级分类筛选条件数据
export const findSubCategoryFilter = (id) => {
  return request("/category/sub/filter", "get", { id });
};
