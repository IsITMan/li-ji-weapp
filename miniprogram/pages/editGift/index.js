const dayjs = require('dayjs');

Page({
    /**
     * 页面的初始数据
     */
    data: {
      date: dayjs().format('YYYY-MM-DD'),
      show: false,
    },
  
    onDisplay() {
      this.setData({
        show: true
      });
    },
    onClose() {
      this.setData({
        show: false
      });
    },
    formatDate(date) {
      date = new Date(date);
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(event) {
      this.setData({
        show: false,
        date: this.formatDate(event.detail),
      });
    },
    onClose() {
      this.setData({ show: false });
    },
    onGiftTypeChange(event) {
      console.log(event.detail.name)
    },
    onSelectFriends(){
      console.log('选择亲友')
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