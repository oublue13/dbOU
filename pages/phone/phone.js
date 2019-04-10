Page({

  /**
   * 页面的初始数据
   */
  data: {
    stuNO:'',
    phoneInfor:''
  },

  stuNoInput: function (e) {
    this.setData({
      stuNo: e.detail.value
    })
  },
//'https://way.jd.com/QT/phone_number_ascription?number=1393731&appkey=ea6d2de6ad644632495437728a233197'
  getPhone:function(){
    var that=this;
   wx.request({
     url: 'https://way.jd.com/shujujia/mobile',
     data: {
       appkey: 'ea6d2de6ad644632495437728a233197',
       mobile:this.data.stuNo 
     },
    // method: 'POST',
     header: {
       'content-type': 'application/json' // 默认值
     },
    success: function (res) {
      console.log(res.data.result)
      that.setData({
        phoneInfor: res.data.result,

      })
  }
   })
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
    
  }
})