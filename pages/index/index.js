// pages/index/index.js
var nows = require('../../data/nows.js');
var coming = require('../../data/coming.js');
var top250 = require('../../data/top250.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nows: {},
    coming: {},
    top250: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var obj = {};
    obj.title = '正在热映';
    obj.more = 'reying';
    obj.list = nows.now.subjects.slice(0, 3);

    var obj2 = {};
    obj2.title = '即将上映';
    obj2.more = 'jijiang';
    obj2.list = coming.coming.subjects.slice(0, 3);

    var obj3 = {};
    obj3.title = '热播榜';
    obj3.more = 'rebo';
    obj3.list = top250.top250.subjects.slice(0, 3);
    console.log(obj, obj2, obj3)
    
    //数据赋值给data
    this.setData({
      nows: obj,
      coming: obj2,
      top250: obj3
    })
    // console.log(nows);

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})