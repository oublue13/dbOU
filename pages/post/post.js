// var dataObj=require("../../data/data.js")
import{DBPost}from"../../db/DBPost.js";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
       var dbPost=new DBPost();
       this.setData({
       postData:dbPost.getAllPostData()

   });
  },

  onTapToDetail(event){
    var postId = event.currentTarget.dataset.postId;
    console.log(postId);
    wx.navigateTo({
      url: 'post-detail/post-detail?id=' + postId,
    });
  },

  onSwiperTap: function (event) {
    var postId = event.target.dataset.postId;
    wx.navigateTo({
      url: "post-detail/post-detail?id=" + postId
    });
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
})
// Page({
//   data: {
//   },
//   onLoad: function () {
//     var dbPost=new DBPost();
//     this.setData({
//       postData:dbPost.getAllPostData()
//       // postData: dataObj.postData
//     });
//   },
  // date: "Sep 6 2018",
  // title: "美食盛宴",
  // postImg: "/images/post/mian.gif",
  // avatar: "/images/avatar/avatar-2.png",
  // content: "许多人的记忆里一定都有方便面,5毛一袋的小当家、魔法士干脆面，2元一袋的康师傅红烧牛肉面，每袋泡面都承载着不轻不重的喜怒哀乐。",
  // readingNum: 92,
  // collectionNum: 108,
  // commentNum: 7
// })