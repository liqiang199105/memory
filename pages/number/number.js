
Page({
  data: { 
    second: 0 ,
    randomNum: null,
    randomList: [],
    step:1
  }, 
  onLoad: function () {

    
  },

  beginGame: function(){
    this.setData({ randomNum: Math.round(Math.random() * 9)});
    this.setData({second: 1});
    countdown(this);
  }

});
function countdown(that) {
  var second = that.data.second;
  if(second > 15){
    that.setData({ randomNum: Math.round(Math.random() * 9) }); 
    second=0;
  }
  var time = setTimeout(function () {
    that.setData({ second: second + 1 }); 
    countdown(that);
  }, 600)
};

