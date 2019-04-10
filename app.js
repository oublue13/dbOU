// var dataObj=require("data/data.js")

App({
  onLaunch:function(){
    var storageData= wx.getStorageSync('postData');
    if(!storageData){
      var dataObj=require("data/data.js")
      wx.clearStorageSync();
      wx.setStorageSync('postData', dataObj.postData);
    }
    
    
    //  ({
      // key: 'postData',
    //   data: 'dataObj.postData',
    //   success:function(res){

    //   },
    //   fail:function(){

    //   },
    //   complete:function(){

    //   }
    // })
  },
})




