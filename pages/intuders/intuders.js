Page({
  data: {
    src: ''
  },
  /**
   * 打开本地视频
   */
  bindButtonTap: function () {
    var that = this
    //拍摄视频或从手机相册中选视频
    wx.chooseVideo({
      //album 从相册选视频，camera 使用相机拍摄，默认为：['album', 'camera']
      sourceType: ['album', 'camera'],
      //拍摄视频最长拍摄时间，单位秒。最长支持60秒
      maxDuration: 60,
      //前置或者后置摄像头，默认为前后都有，即：['front', 'back']
      camera: ['front', 'back'],
      //接口调用成功，返回视频文件的临时文件路径，详见返回参数说明
      success: function (res) {
        console.log(res.tempFilePaths[0])
        that.setData({
          src: res.tempFilePaths[0]
        })
      }
    })
  },
  /**
   * 当发生错误时触发error事件，event.detail = {errMsg: 'something wrong'}
   */
  videoErrorCallback: function (e) {
    console.log('视频错误信息:')
    console.log(e.detail.errMsg)
  }
})