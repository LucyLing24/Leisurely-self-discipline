// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
    env: cloud.DYNAMIC_CURRENT_ENV
  });
const db = cloud.database()
const Missions = db.collection("Missions")
// 云函数入口函数
exports.main = async (event, context) => {
    console.log(event)
  await Missions.add({
      data: {
          openId:event.openId,
          title: event.title,
          award: event.award,
          complete: false,
          desc: event.desc,
          kind: event.kind,
          time: event.time,
      }
  })
}