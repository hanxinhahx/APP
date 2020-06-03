// pages/find/find.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    findBtn: [
      {
        icon: 'https://gw.alicdn.com/tfs/TB1XhMFbwoQMeJjy0FoXXcShVXa-48-48.png_48x48q50.jpg_.webp',
        text: '笔记'
      }, {
        icon: 'https://gw.alicdn.com/tfs/TB13HEsbrsTMeJjSszhXXcGCFXa-48-48.png_48x48q50.jpg_.webp',
        text: '头条'
      }, {
        icon: 'https://gw.alicdn.com/tfs/TB1AcoBbEgQMeJjy0FgXXc5dXXa-48-48.png_48x48q50.jpg_.webp',
        text: '游记'
      },
    ],
    bannerList: [
      {
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590428821641&di=3a40fd5401a1e9e3eb2b42c45ec91910&imgtype=0&src=http%3A%2F%2Fyouimg1.c-ctrip.com%2Ftarget%2F10030c0000006pa0mC8B0.jpg'
      }, {
        img: 'http://youimg1.c-ctrip.com/target/tg/673/574/078/1353ea8d431540ddb462c80795ffc6fe.jpg'
      }, {
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590502424410&di=7b38a9773f3b8b088068c5d7727d1114&imgtype=0&src=http%3A%2F%2Fold.cppfoto.com%2Fworks%2F2015%2F171%2F14922%2F0%2F01710014922-15113011415890_o.jpg'
      }, {
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590502663268&di=5a66b1b63a0529f0eab9541964afcabd&imgtype=0&src=http%3A%2F%2Fyouimg1.c-ctrip.com%2Ftarget%2Ffd%2Ftg%2Fg5%2FM02%2FD4%2FAE%2FCggYr1bhQWiAUWiTAAPdlNzS4X0844.jpg'
      }],
    feedList: [],
    loadTimes: 0,
    perLoad: 4,
    dataList: [
      {
        userImg: 'https://m.tuniucdn.com/filebroker/cdn/snc/e0/42/e0424052abef7fbcb73359c9279fb849_w120_h120_c1_t0_w120_h120_c1_t0.jpg',
        userName: '奥特曼打怪兽',
        content: '浮浮化荆榛，孔庙存威仪。',
        imgList: ['http://5b0988e595225.cdn.sohucs.com/images/20190212/d1a814735fee4c1aa3f9fd8aeac092ec.jpeg', 'https://m.tuniucdn.com/fb2/t1/G5/M00/51/9E/Cii-s1pxQaSIFogLAAWHUQgwZU8AAC-RgG2fr4ABYdp67_w800_h0_c0_t0.jpeg'],
        company: '游在衢州'
      }, {
        userImg: 'https://m.tuniucdn.com/fb2/t1/G5/M00/4E/5B/Cii-s1pujnaIBBAuABeZh8xcHEYAAC58wD1ASAAF5mf376_w120_h120_c1_t0_w120_h120_c1_t0.jpg',
        userName: '游ting',
        content: '槐影参差覆杏坛，儒门子弟尽高官。却教酒户重修庙，觅我惭惶也不难。',
        imgList: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590663605390&di=0df5a317c1975af35de9f8290f0e60c6&imgtype=0&src=http%3A%2F%2Fwww.sdqfhx.com%2Fupfiles%2Fimage%2F20150813%2F20150813172344_86236.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590663696271&di=105caae084b883b5199409ccc133e9ec&imgtype=0&src=http%3A%2F%2Fwww.kongzi.gov.cn%2Fkeditor%2Fattached%2F20141229%2F20141229095044_4970.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590663696270&di=3f24ff4d30da251ad239ac5d5fc788ae&imgtype=0&src=http%3A%2F%2Fstc.zjol.com.cn%2Fg1%2FM0008EFCggSDVfJI2yATKEQAASCoP83g14435.jpg%3Fwidth%3D720%26height%3D423'],
        company: '衢州孔庙'
      }, {
        userImg: 'https://m.tuniucdn.com/fb2/t1/G5/M00/07/CA/Cii-slok4dCIRWQZAH0p2IGs8cIAAAYwQD2IkkAfSnw333_w120_h120_c1_t0_w120_h120_c1_t0.jpg',
        userName: '熊猫慢游',
        content: '来衢州之前，只知道只去过山东曲阜的孔庙。不曾想，在衢州竟然也有如此有名的孔庙南府~衢州孔氏家庙素称南宗（北宗山东曲阜），具有700多年的历史。全国仅存的两个孔氏家庙之一，素称南宗。衢州也就被孔氏称为“第二圣地”。庙对面广场上孔子的巨大石雕像，比例很夸张的，巨大的身材，狭小的脑袋，让人感觉像是一只竖立起来的千年老龟。',
        imgList: ['https://youimg1.c-ctrip.com/target/100f0a0000004rda33099.jpg', 'https://youimg1.c-ctrip.com/target/100k0a0000004rdi1F4BC.jpg', 'https://youimg1.c-ctrip.com/target/100u0a0000004rds61C36.jpg'],
        company: '游在衢州'
      }, {
        userImg: 'https://m.tuniucdn.com/fb2/t1/G5/M00/07/CA/Cii-slok4dCIRWQZAH0p2IGs8cIAAAYwQD2IkkAfSnw333_w120_h120_c1_t0_w120_h120_c1_t0.jpg',
        userName: '果果',
        content: '衢州孔庙素称南宗，具有700多年的历史。按山东曲阜孔庙的规模建造，亦分孔府、孔庙两部分。庙内古木参天，殿宇宏伟，思鲁阁前的“先圣遗像”碑，据传为唐吴道子所绘，极为珍贵。整个古建筑群肃穆凝重，洋溢着浓郁的儒家文化氛围。',
        imgList: ['https://youimg1.c-ctrip.com/target/100t0g0000007qnin9796.jpg', 'https://youimg1.c-ctrip.com/target/10090g0000007qxbq3A96.jpg'],
        company: '游在衢州'
      }, {
        userImg: 'https://images.tuniucdn.com/head/2/2143812s.jpg',
        userName: '悦微小鱼',
        content: '服务态度太差！！！问了几个问题就用方言骂过来 以为我听不懂 G20别的地方都有复印的地方 这里要自己出去找复印店 微信公众号推送里也没有说要复印件 孔庙总体挺好的',
        imgList: ['https://youimg1.c-ctrip.com/target/100l080000002vnk525A2.jpg'],
        company: '游在孔庙'
      }, {
        userImg: 'https://m.tuniucdn.com/fb2/t1/G3/M00/1C/A0/Cii_LllTdRqIXRl4AAWySHDrT3gAAB35wIk7v8ABbJg999_w120_h120_c1_t0_w120_h120_c1_t0.jpg',
        userName: '雪泡儿',
        content: '历史文化悠久，了解孔子文化思想，内涵丰富，有图片，有家庙，有文物，风景优美，历史丰富，交通便利，周边博物馆，孔子文化公园，非常有意义。',
        imgList: ['https://youimg1.c-ctrip.com/target/100f0f0000007g6v48E12.jpg', 'https://youimg1.c-ctrip.com/target/100e0f0000007g86lCCF2.jpg'],
        company: '游在衢州孔庙'
      }, {
        userImg: 'https://m.tuniucdn.com/fb2/t1/G2/M00/2B/CC/Cii-T1g7iJmILXDfAAl7gR5XZFcAAE6cABV-J8ACXuZ398_w120_h120_c1_t0_w120_h120_c1_t0.jpg',
        userName: '黏黏小狐狸',
        content: '孔庙所在位置闹市区，一片旅游玩乐的好地方，生活便利。门票10元，主要介绍展示孔子及其家族的历史文化、器物，环境挺不错的。衢州孔庙是家庙，全国重点文保单位。',
        imgList: ['https://youimg1.c-ctrip.com/target/100l0900000042udt02CA.jpg', 'https://youimg1.c-ctrip.com/target/100w0900000042ulfA477.jpg', 'https://youimg1.c-ctrip.com/target/100c0900000042ufvB5EA.jpg'],
        company: '孔庙'
      }, {
        userImg: 'https://m.tuniucdn.com/fb2/t1/G2/M00/9B/A5/Cii-TlkFPOiIVqjFAEYBV6mPBdQAAJhNwH7OOcARgFv182_w120_h120_c1_t0_w120_h120_c1_t0.jpg',
        userName: '夏草',
        content: '来衢州孔庙还是很值得去的，作为孔氏南宗家庙具有唯一性，门票仅十元，景区内配有免费电子导游和介绍影像，丰富知识，性价比高。',
        imgList: ['https://youimg1.c-ctrip.com/target/100d0c0000006ps6lF953.jpg', 'https://youimg1.c-ctrip.com/target/100t0c0000006pu5u9B6D.jpg'],
        company: '游在孔庙'
      }
    ]
  },

  loadMore: function () {
    const loadTimes = this.data.loadTimes;
    const perLoad = this.data.perLoad;
    let temArr = this.data.dataList.slice((loadTimes * perLoad), (loadTimes * perLoad) + perLoad);
    if (temArr.length <= 0) {
      return;
    }

    wx.showLoading({
      title: '加载中',
    });
    setTimeout(() => {
      let feedListArr = this.data.feedList.slice();
      feedListArr.push(...temArr);
      this.setData({
        feedList: feedListArr,
        loadTimes: loadTimes + 1
      }, () => {
        wx.hideLoading();
      })
    }, 1000);
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
    this.loadMore();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})