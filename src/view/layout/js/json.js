// 头部菜单数据
export const HeardNavs = [
  {
    name: "overview",
    title: "数字乡村概览",
    isSubNav: false,
  },
  {
    name: "economics",
    title: "乡村数字经济",
    isSubNav: true,
    isShowSub: false,
    subNav: [
      {
        title: "资金管理",
        name: "fundsManagement",
        icon: "icon-shouye-zongtigailan",
      },
      {
        title: "资产管理",
        name: "assetsManagement",
        icon: "icon-shouye-shuzidangjian",
      },
      {
        title: "乡村产业",
        name: "ruralIndustry",
        icon: "icon-shouye-shuzidangjian",
      },
      {
        title: "土地托管",
        name: "landTrust",
        icon: "icon-shouye-shuzidangjian",
      },
    ],
  },
  {
    name: "govern",
    title: "乡村数字治理",
    isSubNav: true,
    isShowSub: false,
    subNav: [
      {
        title: "基层党建",
        name: "partyBuilding",
        icon: "icon-nongye-nongyeshengchan",
      },
      {
        title: "村民管理",
        name: "villagerManagement",
        icon: "icon-nongye-nongyeguanli",
      },
      {
        title: "视频监控",
        name: "videoMonitor",
        icon: "icon-nongye-nongyefuwu",
      },
      {
        title: "应急管理",
        name: "emergencyManagement",
        icon: "icon-nongye-nongyefuwu",
      },
      {
        title: "防溺水管理",
        name: "drowningPrevention",
        icon: "icon-nongye-nongyefuwu",
      },
      {
        title: "秸秆焚烧管理",
        name: "strawBurning",
        icon: "icon-nongye-nongyefuwu",
      },
    ],
  },
  {
    name: "conveniencePeasants",
    title: "数字便民惠农",
    isSubNav: true,
    isShowSub: false,
    subNav: [
      {
        title: "房建管理",
        name: "buildingManagement",
        icon: "icon-nongcun-tudiziyuan",
      },
      {
        title: "农村生活服务",
        name: "lifeService",
        icon: "icon-nongcun-xiangcunjingji",
      },
      {
        title: "阳光村务",
        name: "villageAffairs",
        icon: "icon-nongcun-xiangcunfuwu",
      },
    ],
  },
  {
    name: "digitglVillage",
    title: "全景数字乡村",
    isSubNav: false,
  },
];
// 底部菜单数据
export const FooterNavsMap = new Map([
  [
    "economics",
    [
      {
        title: "资金管理",
        name: "fundsManagement",
        icon: "icon-shouye-zongtigailan",
      },
      {
        title: "资产管理",
        name: "assetsManagement",
        icon: "icon-shouye-shuzidangjian",
      },
      {
        title: "乡村产业",
        name: "ruralIndustry",
        icon: "icon-shouye-shuzidangjian",
      },
      {
        title: "土地托管",
        name: "landTrust",
        icon: "icon-shouye-shuzidangjian",
      },
    ],
  ],
  [
    "govern",
    [
      {
        title: "基层党建",
        name: "partyBuilding",
        icon: "icon-nongye-nongyeshengchan",
      },
      {
        title: "村民管理",
        name: "villagerManagement",
        icon: "icon-nongye-nongyeguanli",
      },
      {
        title: "视频监控",
        name: "videoMonitor",
        icon: "icon-nongye-nongyefuwu",
      },
      {
        title: "应急管理",
        name: "emergencyManagement",
        icon: "icon-nongye-nongyefuwu",
      },
      {
        title: "防溺水管理",
        name: "drowningPrevention",
        icon: "icon-nongye-nongyefuwu",
      },
      {
        title: "秸秆焚烧管理",
        name: "strawBurning",
        icon: "icon-nongye-nongyefuwu",
      },
    ],
  ],
  [
    "conveniencePeasants",
    [
      {
        title: "房建管理",
        name: "buildingManagement",
        icon: "icon-nongcun-tudiziyuan",
      },
      {
        title: "农村生活服务",
        name: "lifeService",
        icon: "icon-nongcun-xiangcunjingji",
      },
      {
        title: "阳光村务",
        name: "villageAffairs",
        icon: "icon-nongcun-xiangcunfuwu",
      },
    ],
  ],
]);
