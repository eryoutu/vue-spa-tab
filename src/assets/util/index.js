/**
 * 工具库
 */
export default {
  // 获取唯一ID
  getOnlyId(tag) {
    return `${tag}-${new Date().getTime()}-${
      Math.random()
        .toString()
        .split(".")[1]
    }`;
  }
};
