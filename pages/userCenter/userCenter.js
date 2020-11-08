Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    loginStatus: 1
  },
  attached() {
    // console.log("success")
  },
  methods: {
    exit: function (e){
      let that = this;
      that.data.loginStatus = 0;
      that.setData({
        loginStatus: 0
     })
    },
    login: function (e){
      let that = this;
      that.data.loginStatus = 0;
      that.setData({
        loginStatus: 1
     })
    }
  }
})