import request from "@/utils/request";

//获取商品信息
export const findBrand = (limit = 6) => {
  return request("/home/brand", "get", { limit });
};

//获取轮播图
export const findBanner = () => {
  return request("/home/banner", "get");
};

//获取新鲜好物
export const findNew = () => {
  return request("home/new", "get");
};

//获取人气推荐
export const findHot = () => {
  return request("home/hot", "get");
};

//获取商品区域
export const findGoods = () => {
  return request("home/goods", "get");
};

//获取最新专题
export const findSpecial = () => {
  return request("home/special", "get");
};

//获取单个顶级分类信息
export const findTopCategory = (id) => {
  return request('/category', 'get', { id })
}