import firebaseConfig from './firebase_config'

//FireBase - //Since version 6.0.0 , config is fetched from firebase_config.js - for easier setup
exports.firebaseConfig = firebaseConfig.config;

//App setup
exports.adminConfig={
  "appName": "React app builder",
  "slogan":"make mobile apps.",
  "design":{
    "sidebarBg":"sidebar-2.jpg", //sidebar-1, sidebar-2, sidebar-3
    "dataActiveColor":"rose", //"purple | blue | green | orange | red | rose"
    "dataBackgroundColor":"black", // "white | black"
  },
  "showItemIDs":false,
  "allowedUsers":null, //If null, allow all users, else it should be array of allowd users
  "allowGoogleAuth":true, //Allowed users must contain list of allowed users in order to use google auth
  "fieldBoxName": "Fields",
  "maxNumberOfTableHeaders":5,
  "prefixForJoin":["-event"],
  "listOfItemKeys":["username","primaryData",'city'],
  "showSearchInTables":true,
  "methodOfInsertingNewObjects":"push", //timestamp (key+time) | push - use firebase keys
  "goDirectlyInTheInsertedNode":true,
  "urlSeparator":"+",
  "urlSeparatorFirestoreSubArray":"~",
  "googleMapsAPIKey":"YOUR_KEY",

  "fieldsTypes":{
    "photo":["photo","image","category_image"],
    "dateTime":["datetime","start","eventDateStart","eventDateEnd","date"],
    "date":["datefield","created"],
    "time":["time"],
    "map":["map","latlng","location","eventLocation"],
    "textarea":["description"],
    "html":["content","html"],
    "radio":["radio","radiotf","featured","isShopping","showPhotos","layout","coloring","outbound","rounded","showNavButton","cartCODAvailable","category_first","isRoot","isDirectShopping","cartPayPalAvailable","showCategoryFilter","haveThumbnails","hide_all_category_filter","hideHeader","display_header_image","isHavingStream","photosVertical","PayPalAvailable","CODAvailable","isRTL","backgroundImage","detailsBackgroundImage","hideTabIconName","hasFeatures"],
    "checkbox":["checkbox","streamType"],
    "dropdowns":["status","dropdowns","navButtonAction","type","listStyle","category_style","listing_style","order","sectionType","webSource","barStyle","imageRowFontWeight"],
    "file":["videoField"],
    "rgbaColor":['rgba'],
    "hexColor":['*Color',"buttonText","backgroundColor","buttonText"],
    "relation":['creator','collection','collection_recipe','radios_collection'],
    "iconmd":['iconmd'],
    "iconfa":['iconfa'],
    "iconti":['iconti'],
    "iconfe":['icon'],
  },
  "optionsForSelect":[
      {"key":"dropdowns","options":["new","processing","rejected","completed"]},
      {"key":"checkbox","options":["Skopje","Belgrade","New York"]},
      {"key":"streamType","options":["icecast","shoutcast","shoutcast2"]},
      {"key":"type","options":["Bug fix","Feature","Improuvment","deleted","added","updated"]},
      {"key":"status","options":["just_created","confirmed","canceled"]},
      {"key":"radio","options":["no","maybe","yes"]},
      {"key":"radiotf","options":["true","false"]},
      {"key":"featured","options":["true","false"]},
      {"key":"isShopping","options":["true","false"]},
      {"key":"rounded","options":["true","false"]},
      {"key":"outbound","options":["true","false"]},
      {"key":"layout","options":["side","tabs","grid"]},
      {"key":"coloring","options":["simple","advanced"]},
      {"key":"showPhotos","options":["true","false"]},
      {"key":"showNavButton","options":["true","false"]},
      {"key":"navButtonAction","options":["add-to-favorites"]},
      {"key":"sectionType","options":["master-detail","cart","orders","wish-list","profile","listOfUsers","web","map","notifications","scanner"]},
      {"key":"category_first","options":["true","false"]},
      {"key":"isRoot","options":["true","false"]},
      {"key":"listStyle","options":["grid", "grid2", "list"],"labels":["Grid", "Special Grid","List"]},
      {"key":"barStyle","options":["light-content", "dark-content"]},
      {"key":"imageRowFontWeight","options":["normal", "bold"]},
      {"key":"listing_style","options":["grid", "grid2", "list"]},
      {"key":"category_style","options":["grid", "grid2", "list"]},
      {"key":"webSource","options":["url","html"]},
      {"key":"order","options":["ASC", "DSC"]},
      {"key":"cartCODAvailable","options":["true","false"]},
      {"key":"hasFeatures","options":["true","false"]},
      {"key":"CODAvailable","options":["true","false"]},
      {"key":"isDirectShopping","options":["true","false"]},
      {"key":"cartPayPalAvailable","options":["true","false"]},
      {"key":"PayPalAvailable","options":["true","false"]},
      {"key":"showCategoryFilter","options":["true","false"]},
      {"key":"haveThumbnails","options":["true","false"]},
      {"key":"hide_all_category_filter","options":["true","false"]},
      {"key":"hideHeader","options":["true","false"]},
      {"key":"display_header_image","options":["true","false"]},
      {"key":"isHavingStream","options":["true","false"]},
      {"key":"photosVertical","options":["true","false"]},
      {"key":"isRTL","options":["true","false"]},
      {"key":"backgroundImage","options":["true","false"]},
      {"key":"detailsBackgroundImage","options":["true","false"]},
      {"key":"hideTabIconName","options":["true","false"]},
  ],
  "optionsForRelation":[
    {
        //Firestore - Native
        "display": "title",
        "isValuePath": true,
        "key": "collection_radios",
        "path": "/radios_collection",
        "produceRelationKey": true,
        "relationJoiner": "-",
        "relationKey": "radios_collection",
        "value": "name"
      }
  ],
  "paging":{
    "pageSize": 20,
    "finite": true,
    "retainLastPage": false
  },
  "hiddenKeys":["keyToHide","anotherKeyToHide","email"],
  "previewOnlyKeys":["previewOnlyKey","anotherPreviewOnlyKye"]
}

//Navigation
exports.navigation=[
  {
    "link": "/",
    "name": "Dashboard",
    "schema":null,
    "icon":"home",
    "path": "",
     isIndex:true,
  },
  {
    "link": "sections",
    "path": "null",
    "name": "App setup",
    "icon":"phonelink_setup",
    "tableFields":["name","description"],
  },
  {
    "link": "fireadmin",
    "path": "design",
    "name": "Design",
    "icon":"color_lens",
    "tableFields":["name","description"],
    "subMenus":[
      {
        "link": "fireadmin",
        "path": "design/general",
        "name": "General",
        "icon":"border_color",
        "tableFields":["name","description"],
      },{
        "link": "fireadmin",
        "path": "design/navBar",
        "name": "Navigation bar",
        "icon":"border_top",
        "tableFields":["name","description"],
      },{
        "link": "fireadmin",
        "path": "design/rows",
        "name": "List design",
        "icon":"short_text",
        "tableFields":["name","description"],
      },{
        "link": "fireadmin",
        "path": "design/sideMenu",
        "name": "Side menu colors",
        "icon":"format_color_fill",
        "tableFields":["name","description"],
      }
    ]
  },
  {
    "link": "firestoreadmin",
    "path": "orders",
    "name": "Orders",
    "icon":"shopping_cart",
    "tableFields":["status","total"],
  },
  {
    "link": "push",
    "path": "",
    "name": "Push notification",
    "icon":"speaker_notes",
    "tableFields":[],
  },
  {
    "link": "preview",
    "path": "null",
    "name": "Preview",
    "icon":"remove_red_eye",
    "tableFields":["name","description"],
  },
  {
    "link": "produce",
    "path": "null",
    "name": "Produce app",
    "icon":"check_circle_outline",
    "tableFields":["name","description"],
  },
];


  //From v 5.1.0 we suggest remoteSetup due to security
  //
exports.pushSettings={
  "remoteSetup":false,
  "remotePath":"pushSettings",
  "pushType":"expo", //firebase -  onesignal - expo
  "Firebase_AuthorizationPushKey":"AIzaSyCFUf7fspu61J9YsWE-2A-vI9of1ihtSiE", //Firebase push authorization ket
  "pushTopic":"news", //Only for firebase push
  "oneSignal_REST_API_KEY":"",
  "oneSignal_APP_KEY":"",
  "included_segments":"Active Users", //Only for onesignal push
  "firebasePathToTokens":"/expoPushTokens", //we save expo push tokens in firebase db
  "saveNotificationInFireStore":true, //Should we store the notification in firestore
}

exports.userDetails={

}

exports.remoteSetup=false;
exports.remotePath="admins/mobidonia";
exports.allowSubDomainControl=false;
exports.subDomainControlHolder="admins/";
exports.isAppCreator=true;
exports.appEditPath=undefined;