// pages/more/more.js
var nows = require('../../data/nows.js');
var coming = require('../../data/coming.js');
var top250 = require('../../data/top250.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    moveList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    console.log(nows);
    console.log(coming);
    console.log(top250);
    if(options.mytype == 'reying'){
      this.setData({
        moveList:nows.now.subjects
      })
    }
    else if (options.mytype == 'jijiang') {
      this.setData({
        moveList: coming.coming.subjects
      })
    }
    else if (options.mytype == 'rebo') {
      this.setData({
        moveList: top250.top250.subjects
      })
    }
    
   

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
    console.log('下拉');
    var newData = coming.coming.subjects;
    this.setData({
      moveList: newData
    })

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    wx.showToast({
      title: '加载完毕',
    })
    this.setData({
      moveList: this.data.moveList.concat(this.data.moveList)
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})