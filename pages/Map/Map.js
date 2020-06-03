// pages/Map/Map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  loadMore:function(){
    const loadTimes = this.data.loadTimes;
    const perLoad = this.data.perLoad;
    let temArr = this.data.likePlace.slice((loadTimes * perLoad), (loadTimes*perLoad)+perLoad);
    if(temArr.length<=0){
      return;
    }

    wx.showLoading({
      title: '加载中',
    });
    setTimeout(() => {
      let youlikeArr = this.data.youlike.slice();
      youlikeArr.push(...temArr);
      this.setData({
        youlike: youlikeArr,
        loadTimes: loadTimes + 1
      },()=>{
        wx.hideLoading();
      })
    },1000);
  },

  onLoad: function (options) {
    // Do some initialize when page load.
  },
  onReady: function () {
  },
  onShow: function () {
    // Do something when page show.
  },
  onHide: function () {
    // Do something when page hide.
  },
  onUnload: function () {
    // Do something when page close.
  },
  onPullDownRefresh: function () {
    // Do something when pull down.
  },
  onReachBottom: function () {
    this.loadMore();
  },
  gotohere:function(res){
    console.log(res);
    let lat = ''; // 获取点击的markers经纬度
    let lon = ''; // 获取点击的markers经纬度
    let name = ''; // 获取点击的markers名称
    let markerId = res.markerId;// 获取点击的markers  id
    let markers = res.currentTarget.dataset.markers;// 获取markers列表
 
    for (let item of markers){
      if (item.id === markerId) {
        lat = item.latitude;
        lon = item.longitude;
        name = item.callout.content;
        wx.openLocation({ // 打开微信内置地图，实现导航功能（在内置地图里面打开地图软件）
          latitude: lat,
          longitude: lon,
          name:name,
          success:function(res){
            console.log(res);
          },
          fail:function(res){
            console.log(res);
          }
        })
        break;
      }
    }
  },
})