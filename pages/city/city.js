// pages/search/search.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    send: '',

    city: "",

    today: {},

    future: {},
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
    var id;
    id = wx.getStorageSync('city')
    console.log(id)
    this.setData({ send: id })
    this.setData({ city: id.cityName })
    this.loadWeather();
  },

  loadWeather: function (city) {

    var page = this;
    city = this.data.city+"市"
    // console.log(city);
    wx.request({

      url: 'http://wthrcdn.etouch.cn/weather_mini?city=' + city,

      header: {

        'content-type': 'application/json'

      },

      success: function (res) {

        // console.log(res);

        var future = res.data.data.forecast;

        var todayInfo = future.shift();

        var today = res.data.data;

        today.todayInfo = todayInfo;

        page.setData({

          today: today,

          future: future,

        });
        // console.log(city)

      }
    })
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