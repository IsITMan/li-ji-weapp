const cloud = require('wx-server-sdk');

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
});

const db = cloud.database();

exports.main = async (event, context) => {
  return await db.collection('user').add({
    // data 字段表示需新增的 JSON 数据
    data: {
      familyId: "",
      createTime: db.serverDate(),
      vip: false,
      isAdmin: false
    }
  })
};