const config = require('../../config.js')

Page({
    data: {
        version: config.version,
        copyleft: config.copyleft,
        infos: [
            ['github', 'github.com/getweapp/weapp-skillmap']
        ]
    },
    onLoad() {
        wx.setNavigationBarTitle({
            title: "关于我们"
        })
    }
})
