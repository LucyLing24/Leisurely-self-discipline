// pages/userPackage/achievements/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    achievements:[
      {
        kind: "intelligence",
        threshold: 10,
        flag:1,
        name:"学习新星",
        details:"智力总值达到10",
        pic_url:"/resource/images/user/achievements/study1.png",
        pic_url_nag:"/resource/images/user/achievements/study1-nag.png"
      },
      {
        kind: "intelligence",
        threshold: 100,
        flag:0,
        name:"图书馆之王",
        details:"智力总值达到100",
        pic_url:"/resource/images/user/achievements/study2.png",
        pic_url_nag:"/resource/images/user/achievements/study2-nag.png"
      },
      {
        kind: "intelligence",
        threshold: 200,
        flag:0,
        name:"学神0_o",
        details:"智力总值达到200",
        pic_url:"/resource/images/user/achievements/study3.png",
        pic_url_nag:"/resource/images/user/achievements/study3-nag.png"
      },
      {
        kind: "strength",
        threshold: 10,
        flag:1,
        name:"运动爱好者",
        details:"体力总值达到20",
        pic_url:"/resource/images/user/achievements/exercise1.png",
        pic_url_nag:"/resource/images/user/achievements/exercise1-nag.png"
      },
      {
        kind: "strength",
        threshold: 100,
        flag:1,
        name:"运动健将",
        details:"体力总值达到50",
        pic_url:"/resource/images/user/achievements/exercise2.png",
        pic_url_nag:"/resource/images/user/achievements/exercise2-nag.png"
      },
      {
        kind: "strength",
        threshold: 200,
        flag:0,
        name:"流水不腐",
        details:"体力总值达到100",
        pic_url:"/resource/images/user/achievements/exercise3.png",
        pic_url_nag:"/resource/images/user/achievements/exercise3-nag.png"
      },
      {
        kind: "charm",
        threshold: 10,
        flag:1,
        name:"社交新星",
        details:"魅力值达到20",
        pic_url:"/resource/images/user/achievements/charm1.png",
        pic_url_nag:"/resource/images/user/achievements/charm1-nag.png"
      },
      {
        kind: "charm",
        threshold: 100,
        flag:0,
        name:"众人皆知",
        details:"魅力值达到50",
        pic_url:"/resource/images/user/achievements/charm2.png",
        pic_url_nag:"/resource/images/user/achievements/charm2-nag.png"
      },
      {
        kind: "charm",
        threshold: 200,
        flag:0,
        name:"社交名流",
        details:"魅力值达到100",
        pic_url:"/resource/images/user/achievements/charm3.png",
        pic_url_nag:"/resource/images/user/achievements/charm3-nag.png"
      }
    ],
    userData: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.changeFlag();
  },
  changeFlag(){
    wx.cloud.callFunction({
      name: 'getUserInfo',
      config: {
        env: getApp().globalData.env
      },
      data:{
        openId: getApp().globalData.openId
      }
    }).then((resp) => {
      // console.log(resp);
      const userData = resp.result.data[0];
      this.setData({userData: userData});
      var achievements = this.data.achievements;
      achievements.forEach(this.achievementsItemFlagChange);
      this.setData({achievements: achievements});
    })
  },
  achievementsItemFlagChange(item){
    if (item.kind == "intelligence"){
      if (item.threshold <= this.data.userData.intelligence) item.flag = 1;
    }
    if (item.kind == "strength"){
      if (item.threshold <= this.data.userData.strength) item.flag = 1;
    }
    if (item.kind == "charm"){
      if (item.threshold <= this.data.userData.charm) item.flag = 1;
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})