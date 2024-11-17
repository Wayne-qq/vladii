



import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getFirestore, doc, setDoc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

function _0x43d2(_0x402700,_0x1c8dc5){const _0x5dde45=_0x1646();return _0x43d2=function(_0x517ff4,_0x3d2c23){_0x517ff4=_0x517ff4-(0x6b*0x7+-0x2670+0x251a);let _0xe493fb=_0x5dde45[_0x517ff4];if(_0x43d2['KIPbVE']===undefined){var _0x11b7ae=function(_0x327cb8){const _0x52b39c='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0xd35fe8='',_0x58281b='',_0x333e0f=_0xd35fe8+_0x11b7ae;for(let _0x2e71e2=-0x1d43+0x2a7+-0x1*-0x1a9c,_0x192576,_0x2153c5,_0x5b97ea=0x575+0x22e8+-0x1*0x285d;_0x2153c5=_0x327cb8['charAt'](_0x5b97ea++);~_0x2153c5&&(_0x192576=_0x2e71e2%(0x1*-0x19cd+-0x4ae+0x1e7f)?_0x192576*(0xa57*0x1+-0xcab+0x294)+_0x2153c5:_0x2153c5,_0x2e71e2++%(0x28*0xa3+0x18e5+0x3259*-0x1))?_0xd35fe8+=_0x333e0f['charCodeAt'](_0x5b97ea+(0x1*-0x7d6+-0xc76+0x1456))-(0x795+-0x22ef+0x6d9*0x4)!==0xc05+-0x97*0x7+-0x7e4?String['fromCharCode'](-0x33d+0x3bc*0x7+0x2*-0xaf4&_0x192576>>(-(0x1898+-0x2a0*0x1+-0x15f6)*_0x2e71e2&0x1d3b+-0x1882+-0x191*0x3)):_0x2e71e2:0x1*0x118+-0x55*0x3+-0x19){_0x2153c5=_0x52b39c['indexOf'](_0x2153c5);}for(let _0x3bff09=0x7*-0xbf+-0x16d+0x6a6,_0x586b26=_0xd35fe8['length'];_0x3bff09<_0x586b26;_0x3bff09++){_0x58281b+='%'+('00'+_0xd35fe8['charCodeAt'](_0x3bff09)['toString'](0x27b*0xd+-0x149*-0x7+-0x3*0xdba))['slice'](-(-0x4*-0x4f1+0x97b+-0x1d3d));}return decodeURIComponent(_0x58281b);};_0x43d2['UWgGKk']=_0x11b7ae,_0x402700=arguments,_0x43d2['KIPbVE']=!![];}const _0x368f53=_0x5dde45[0xd29+-0x196a*0x1+-0x1*-0xc41],_0x4c2e05=_0x517ff4+_0x368f53,_0x2f2e46=_0x402700[_0x4c2e05];if(!_0x2f2e46){const _0x21cae8=function(_0x147c6f){this['ODCCEc']=_0x147c6f,this['KsfiHm']=[-0x1*0x80b+-0x5*-0x516+0x1162*-0x1,-0x12e8+-0x1*0x1a61+-0x2d49*-0x1,0x18aa+0x296*-0x4+-0xe52],this['lHwoll']=function(){return'newState';},this['pbhXAQ']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['GBbwpW']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x21cae8['prototype']['tCWMSi']=function(){const _0x1579a8=new RegExp(this['pbhXAQ']+this['GBbwpW']),_0x1bdbac=_0x1579a8['test'](this['lHwoll']['toString']())?--this['KsfiHm'][-0x828+0x139*-0xa+0x1463]:--this['KsfiHm'][-0xb4d+0x1807*-0x1+0x10a*0x22];return this['xpsqNz'](_0x1bdbac);},_0x21cae8['prototype']['xpsqNz']=function(_0x55e2b0){if(!Boolean(~_0x55e2b0))return _0x55e2b0;return this['PaeGeg'](this['ODCCEc']);},_0x21cae8['prototype']['PaeGeg']=function(_0x2e9c72){for(let _0x51880d=0x3*0xa3d+-0xa*-0x32d+-0x3e79,_0x250c0f=this['KsfiHm']['length'];_0x51880d<_0x250c0f;_0x51880d++){this['KsfiHm']['push'](Math['round'](Math['random']())),_0x250c0f=this['KsfiHm']['length'];}return _0x2e9c72(this['KsfiHm'][0x266c+0x1f2d+-0x4599]);},new _0x21cae8(_0x43d2)['tCWMSi'](),_0xe493fb=_0x43d2['UWgGKk'](_0xe493fb),_0x402700[_0x4c2e05]=_0xe493fb;}else _0xe493fb=_0x2f2e46;return _0xe493fb;},_0x43d2(_0x402700,_0x1c8dc5);}(function(_0x54018b,_0x102cd9){function _0x379119(_0x5eb4c8,_0x5f50eb,_0x1d1557,_0x788f7c){return _0x43d2(_0x788f7c-0x33a,_0x5eb4c8);}function _0x2a9233(_0x14e8ee,_0x165080,_0x1dabdc,_0x1e27fd){return _0x43d2(_0x165080- -0x23d,_0x1e27fd);}const _0x55610e=_0x54018b();while(!![]){try{const _0x53f596=-parseInt(_0x2a9233(-0x75,-0x82,-0x65,-0x92))/(-0x261e+-0x1d8b+0x43aa)*(-parseInt(_0x2a9233(-0x62,-0x7e,-0x77,-0x79))/(-0x1d9a+-0x1ae9+0x3885))+parseInt(_0x2a9233(-0x82,-0x99,-0x87,-0x9e))/(-0xf3+-0x1a13+0x903*0x3)*(parseInt(_0x379119(0x4c3,0x4d2,0x4d5,0x4d3))/(0x193*0x5+0x2*-0x9e2+0xbe9))+-parseInt(_0x379119(0x4f7,0x4e4,0x4ed,0x4dc))/(0x161f+-0x1d*-0x119+-0x35ef)*(-parseInt(_0x379119(0x4e1,0x505,0x4e3,0x4e8))/(-0x9d1*0x1+-0x1c9b+0x26*0x103))+-parseInt(_0x2a9233(-0x89,-0x9e,-0xb3,-0xbb))/(-0x3f7+-0x133*-0x14+-0x13fe)+-parseInt(_0x2a9233(-0x76,-0x92,-0xa5,-0xab))/(0xc61*-0x1+-0x27*0x1+0x6*0x218)+parseInt(_0x2a9233(-0x7b,-0x84,-0x7c,-0x72))/(-0x1650+-0x15fd+-0x1*-0x2c56)+-parseInt(_0x2a9233(-0x86,-0x90,-0x73,-0x8e))/(0x136e+-0xc+-0x1358)*(parseInt(_0x379119(0x4fe,0x4f5,0x4d3,0x4e3))/(0xa9*-0x3b+-0x2355+-0x35*-0x167));if(_0x53f596===_0x102cd9)break;else _0x55610e['push'](_0x55610e['shift']());}catch(_0x310e2f){_0x55610e['push'](_0x55610e['shift']());}}}(_0x1646,-0x2fb3+0xf*-0x5bc3+0xb1d3b));const _0x2e3106=(function(){let _0xfa2b74=!![];return function(_0x314ab0,_0x411d12){const _0x4beede=_0xfa2b74?function(){if(_0x411d12){const _0x4230b0=_0x411d12['apply'](_0x314ab0,arguments);return _0x411d12=null,_0x4230b0;}}:function(){};return _0xfa2b74=![],_0x4beede;};}()),_0x32ed4f=_0x2e3106(this,function(){function _0x6f8160(_0x59ec17,_0x21c898,_0x2deda3,_0xfbbe21){return _0x43d2(_0xfbbe21- -0x26b,_0x21c898);}const _0x3ea5ec={};_0x3ea5ec[_0x6f8160(-0xbd,-0xb4,-0xda,-0xcb)]=_0x6f8160(-0x9a,-0x8d,-0x92,-0xaa)+'+$';function _0x576193(_0x40b49f,_0x273ab1,_0x5e8e9e,_0x372533){return _0x43d2(_0x273ab1- -0x2ea,_0x5e8e9e);}const _0x46b0fc=_0x3ea5ec;return _0x32ed4f['toString']()[_0x576193(-0x143,-0x13e,-0x14b,-0x13c)](_0x46b0fc[_0x6f8160(-0xd1,-0xcf,-0xb9,-0xcb)])['toString']()[_0x576193(-0x13e,-0x144,-0x14a,-0x157)+'r'](_0x32ed4f)[_0x6f8160(-0xd1,-0xaf,-0xce,-0xbf)](_0x46b0fc[_0x576193(-0x147,-0x14a,-0x165,-0x159)]);});_0x32ed4f();const _0x21c959=(function(){const _0x4d12e6={};_0x4d12e6['UznqM']=function(_0x4eed25,_0x419db3){return _0x4eed25===_0x419db3;};function _0x34aadc(_0x150888,_0x215788,_0x18fce2,_0x40422b){return _0x43d2(_0x150888- -0xf4,_0x18fce2);}_0x4d12e6['PspHd']=_0x34aadc(0xdb,0xc4,0xc8,0xed);const _0xf581e6=_0x4d12e6;let _0x28de6c=!![];return function(_0x406113,_0x47f26f){function _0x1241ee(_0x4599a5,_0x21fed8,_0x1bfe11,_0x4fd50c){return _0x34aadc(_0x4fd50c- -0x190,_0x21fed8-0x1a1,_0x21fed8,_0x4fd50c-0x166);}function _0x48c719(_0x15cbaa,_0x4f5dcf,_0x27ba4c,_0x38195c){return _0x34aadc(_0x38195c- -0x295,_0x4f5dcf-0xf,_0x27ba4c,_0x38195c-0xc0);}if(_0xf581e6[_0x1241ee(-0xec,-0xc2,-0xba,-0xd5)](_0x1241ee(-0xc2,-0xca,-0xb2,-0xb5),_0xf581e6['PspHd'])){const _0x5eb5de=_0x28de6c?function(){if(_0x47f26f){const _0x1a30b9=_0x47f26f['apply'](_0x406113,arguments);return _0x47f26f=null,_0x1a30b9;}}:function(){};return _0x28de6c=![],_0x5eb5de;}else{const _0x230f15=_0x19383b?function(){function _0x51a0cf(_0x5dab4c,_0x3f7393,_0x182b3c,_0x36b686){return _0x1241ee(_0x5dab4c-0x107,_0x36b686,_0x182b3c-0x19d,_0x5dab4c-0x295);}if(_0x78cf32){const _0x1a2429=_0x464390[_0x51a0cf(0x1d4,0x1ea,0x1ce,0x1cf)](_0xf77ebe,arguments);return _0x462df2=null,_0x1a2429;}}:function(){};return _0xad96a4=![],_0x230f15;}};}());function _0x1857f2(_0x2fd6cd,_0x2e5ead,_0x5a7519,_0xe1214c){return _0x43d2(_0x2e5ead- -0x33b,_0x2fd6cd);}const _0x4cf284=_0x21c959(this,function(){function _0x337c36(_0xf35015,_0x52e1f4,_0x17f639,_0x3640ab){return _0x43d2(_0xf35015- -0x370,_0x52e1f4);}const _0x550c70={'UfOpX':function(_0x4e5af5,_0x3fd8e4){return _0x4e5af5(_0x3fd8e4);},'lbPev':function(_0xb541c9,_0x48aca8){return _0xb541c9+_0x48aca8;},'TZgBw':function(_0x4d0052,_0x2e5c19){return _0x4d0052+_0x2e5c19;},'jZkUn':'return\x20(fu'+'nction()\x20','TTtgM':function(_0x1b0277){return _0x1b0277();},'SfDGX':_0x545fac(0x4fa,0x4e6,0x510,0x4f7),'VbMwP':_0x545fac(0x508,0x516,0x509,0x516),'cTUTw':_0x337c36(-0x1cb,-0x1c6,-0x1d0,-0x1de),'pqTbZ':_0x545fac(0x504,0x514,0x4fe,0x509),'GAcnN':_0x545fac(0x4f2,0x4e1,0x4d4,0x4dc),'eKHDO':'trace','esoRo':function(_0x2c685d,_0x70416){return _0x2c685d<_0x70416;},'eimLy':function(_0x2b867e,_0x28d732){return _0x2b867e!==_0x28d732;},'pjalA':'YToPm','hLJEY':_0x545fac(0x4fa,0x4d6,0x4c0,0x4dd)};let _0xa95717;function _0x545fac(_0x7baf8b,_0x5bb8c2,_0x513ba3,_0x10cd9a){return _0x43d2(_0x10cd9a-0x345,_0x7baf8b);}try{const _0x70ad32=_0x550c70[_0x337c36(-0x1bb,-0x1bd,-0x1cc,-0x1a5)](Function,_0x550c70[_0x337c36(-0x1ba,-0x1aa,-0x1cc,-0x1bb)](_0x550c70['TZgBw'](_0x550c70[_0x545fac(0x500,0x515,0x4e9,0x4fd)],'{}.constru'+_0x337c36(-0x1b4,-0x1c2,-0x1a6,-0x1d1)+_0x337c36(-0x1a5,-0x19b,-0x191,-0x1b2)+'\x20)'),');'));_0xa95717=_0x550c70['TTtgM'](_0x70ad32);}catch(_0xb5c469){_0xa95717=window;}const _0x4c49d6=_0xa95717[_0x545fac(0x4f2,0x500,0x4e8,0x505)]=_0xa95717[_0x337c36(-0x1b0,-0x1be,-0x1b5,-0x1c2)]||{},_0x4feda9=[_0x550c70[_0x545fac(0x508,0x517,0x4f5,0x512)],_0x550c70['VbMwP'],_0x550c70[_0x545fac(0x4dc,0x514,0x4e8,0x4f6)],_0x550c70[_0x337c36(-0x1bc,-0x1d2,-0x1ba,-0x1bd)],_0x550c70[_0x337c36(-0x1cd,-0x1cb,-0x1bc,-0x1bf)],'table',_0x550c70['eKHDO']];for(let _0x518c3d=0x91*-0x7+-0x15e1+0x19d8;_0x550c70[_0x545fac(0x525,0x50a,0x50a,0x511)](_0x518c3d,_0x4feda9['length']);_0x518c3d++){if(_0x550c70['eimLy'](_0x550c70['pjalA'],_0x550c70[_0x545fac(0x4f2,0x50c,0x51d,0x503)])){const _0x4e2c3a=_0x21c959[_0x337c36(-0x1ca,-0x1e3,-0x1d9,-0x1bf)+'r'][_0x337c36(-0x1ae,-0x1ba,-0x194,-0x196)][_0x337c36(-0x1a8,-0x1c4,-0x1aa,-0x199)](_0x21c959),_0x5ee2ad=_0x4feda9[_0x518c3d],_0x38010a=_0x4c49d6[_0x5ee2ad]||_0x4e2c3a;_0x4e2c3a[_0x545fac(0x52f,0x533,0x502,0x515)]=_0x21c959[_0x545fac(0x4fa,0x4fb,0x4fe,0x50d)](_0x21c959),_0x4e2c3a['toString']=_0x38010a['toString'][_0x545fac(0x502,0x52a,0x4fa,0x50d)](_0x38010a),_0x4c49d6[_0x5ee2ad]=_0x4e2c3a;}else{const _0x245922=_0xe8eac9['apply'](_0x10ab0b,arguments);return _0x2bbce5=null,_0x245922;}}});_0x4cf284();const _0x246fff={};_0x246fff[_0x1857f2(-0x1ae,-0x1a0,-0x1b7,-0x1b9)]=_0x346e92(0x562,0x553,0x559,0x55c)+_0x346e92(0x538,0x551,0x534,0x536)+_0x346e92(0x56c,0x56e,0x563,0x556)+_0x1857f2(-0x196,-0x191,-0x193,-0x17a),_0x246fff['authDomain']=_0x346e92(0x581,0x57e,0x57a,0x592)+_0x346e92(0x55a,0x571,0x557,0x572)+_0x346e92(0x56c,0x554,0x54d,0x537);function _0x346e92(_0x5f572a,_0x51e401,_0x3c4df7,_0x3cee7a){return _0x43d2(_0x51e401-0x3b7,_0x3cee7a);}function _0x1646(){const _0x459bbc=['ALPRvw4','mZC4nJG5ngvirhbAwG','mI5MAxjLyMfZzq','mMT3v1bxDa','y3rVCIGICMv0Dq','yxbWswq','AeXkrvK','mJe3nti2ugzWrgnk','y29UC29Szq','kcGOlISPkYKRkq','ChjVDg90ExbL','yxbWBhK','zxjYB3i','A2v0','mZy4ntP3zwi6mG','C2XHzgKTm2rKoa','yMLUza','C3rVCMfNzs5HCa','mtO3ndq1ote3mq','CM4GDgHPCYiPka','zxnVuM8','u2zer1G','rY1ewtDwvJCYoq','v3nSBha','x19WCM90B19F','D2fYBG','zxHJzxb0Aw9U','wNzlwKW','mtiXotm4nfflywrIEa','C2mWDLnSy200Ca','yxbPs2v5','quL6yvn5q25dvG','yxbWlMnVBq','BwvHC3vYzw1LBG','mta0mZiZohPRvfnnva','r1fLr1O','nZq0ntKXnZeZnG','otK1s2r1sLLw','r0fJBK4','nMv6uMv4rW','Aw5MBW','y29UC3rYDwn0BW','zw5Kzxjjza','yZnMmdu1yZbKyW','mZm4odu1EhvjD1Dy','t1fODJzyB0Hv','mtK1nda4mhbnCxDRCW','C2vHCMnO','mZeWvuDOBeXI','mtm5otjzD1jJvve','vxPUCu0','ChjVAMvJDeLK','y1rvvhC','Bg9N','nMuZzJm1mgmYoq','ChfuyLO','vwzpCfG','Bgjqzxy','yJr5qxfqCxbnvG'];_0x1646=function(){return _0x459bbc;};return _0x1646();}_0x246fff[_0x1857f2(-0x18f,-0x18b,-0x18f,-0x187)]='sladi-3dd8'+'2',_0x246fff['storageBuc'+_0x1857f2(-0x170,-0x176,-0x176,-0x15f)]=_0x1857f2(-0x18f,-0x174,-0x15d,-0x185)+_0x346e92(0x557,0x571,0x586,0x56c)+_0x1857f2(-0x15e,-0x172,-0x182,-0x16c)+'p',_0x246fff['messagingS'+_0x1857f2(-0x179,-0x194,-0x176,-0x1a9)]=_0x1857f2(-0x189,-0x19a,-0x18c,-0x198)+'85',_0x246fff[_0x346e92(0x576,0x574,0x57a,0x55e)]=_0x1857f2(-0x18d,-0x171,-0x183,-0x182)+_0x1857f2(-0x181,-0x175,-0x17c,-0x173)+_0x346e92(0x55d,0x55f,0x56d,0x54c)+_0x346e92(0x567,0x56a,0x584,0x554)+'c',_0x246fff[_0x346e92(0x559,0x555,0x55b,0x549)+'tId']=_0x1857f2(-0x15a,-0x16d,-0x15a,-0x189)+'XB';const firebaseConfig=_0x246fff;

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// КОД ДЛЯ ЗАБИ ДАНИХ КОД ДЛЯ ЗАБИ ДАНИХ КОД ДЛЯ ЗАБИ ДАНИХ КОД ДЛЯ ЗАБИ ДАНИХ КОД ДЛЯ ЗАБИ ДАНИХ
const tg = window.Telegram ? window.Telegram.WebApp : null;
const telegramUserId = tg?.initDataUnsafe?.user?.id || "no id";
const userRef = doc(db, "users", telegramUserId);
const balanceElement = document.querySelector(".balance");

function updateUserDataDisplay() {
  getDoc(userRef).then(docSnapshot => {
    if (docSnapshot.exists()) {
      const { tickets, points, tasksCompleted } = docSnapshot.data();
      document.querySelector(".ticket").textContent = `${tickets} ticket`;
      balanceElement.innerHTML = `${points} <span>Sladi</span>`;
      document.querySelectorAll(".task__btn").forEach(taskElement => {
        const taskName = taskElement.dataset.name;
        if (tasksCompleted.includes(taskName)) {
          taskElement.querySelector('.check__icon').style.display = 'block';
          taskElement.querySelector('.cross__icon').style.display = 'none';
          taskElement.setAttribute('disabled', 'true');
        }
      });
    } else {
      setDoc(userRef, {
        telegramId: telegramUserId,
        points: 0,
        tasksCompleted: [],
        friends: 0,
        tickets: 10,
        lastLogin: new Date().toISOString()
      }).then(updateUserDataDisplay);
    }
  }).catch(error => console.error("Error getting user data:", error));
}

updateUserDataDisplay();
// ТАСК ТАСК ТАСК ТАСК ТАСК ТАСК ТАСК ТАСК ТАСК 
// ТАСК ТАСК ТАСК ТАСК ТАСК ТАСК ТАСК ТАСК ТАСК 
function handleTaskClick(el) {
  const { name: taskName, task: taskType, reward, friends: reqFriends = 0, url } = el.dataset;
  const rewardInt = parseInt(reward), reqFriendsInt = parseInt(reqFriends);
  const updatePoints = (points, completed) => updateDoc(userRef, { points, tasksCompleted: [...completed, taskName] });
  const toggleIcons = (showCheck) => {
      el.querySelector('.cross__icon').style.display = showCheck ? 'none' : 'block';
      el.querySelector('.check__icon').style.display = showCheck ? 'block' : 'none';
  };

  taskType !== "friend" && setTimeout(() => toggleIcons(true), 2000);
  if (taskType === "friend") toggleIcons(true);

  getDoc(userRef).then(doc => {
      if (!doc.exists()) return console.error("User document not found.");
      const { points, tasksCompleted, friends, wallet } = doc.data();

      if (tasksCompleted.includes(taskName)) return el.classList.add('shake') && setTimeout(() => el.classList.remove('shake'), 1000);

      if (taskType === "wallet") {
          const walletPage = document.querySelector('.main__connect-wallet');
          walletPage.style.display = 'block'; document.querySelector('.main__task').style.display = 'none';
          const submitWallet = () => {
              const walletAddress = document.querySelector('.input__wallet').value.trim();
              if (!walletAddress) return alert("Enter wallet address.");
              updateDoc(userRef, { wallet: walletAddress }).then(() => {
                  updatePoints(points + rewardInt, tasksCompleted).then(() => {
                      walletPage.style.display = 'none';
                      document.querySelector('.main__task').style.display = 'block';
                      updateUI(el, points + rewardInt);  // Оновлення балів в UI
                  });
              });
          };
          document.querySelector('.send__wallet').addEventListener('click', submitWallet);
          document.querySelector('.input__wallet').addEventListener('keydown', (e) => e.key === 'Enter' && submitWallet());
          return;
      }

      if (taskType === "friend") {
          if (friends >= reqFriendsInt) {
              updatePoints(points + rewardInt, tasksCompleted).then(() => updateUI(el, points + rewardInt));  // Оновлення балів в UI
          } else {
              toggleIcons(false);
              el.querySelector('.cross__icon').classList.add('shake');
              setTimeout(() => el.querySelector('.cross__icon').classList.remove('shake'), 1000);
          }
          return;
      }

      if (taskType === "link") {
          window.open(url || el.dataset.link, "_blank");
          updatePoints(points + rewardInt, tasksCompleted).then(() => updateUI(el, points + rewardInt));  // Оновлення балів в UI
      }
  }).catch(err => console.error("Error:", err));
}

function updateUI(el, points) {
  document.querySelector('.balance').innerHTML = `${points} <span>Sladi</span>`;  // Оновлення балів на сторінці
  el.disabled = true;
}

document.querySelectorAll('.task__btn').forEach(btn => btn.addEventListener('click', () => handleTaskClick(btn)));
// КОД ДЛЯ ГРИ КОД ДЛЯ ГРИ КОД ДЛЯ ГРИ КОД ДЛЯ ГРИ
// КОД ДЛЯ ГРИ КОД ДЛЯ ГРИ КОД ДЛЯ ГРИ КОД ДЛЯ ГРИ
// КОД ДЛЯ ГРИ КОД ДЛЯ ГРИ КОД ДЛЯ ГРИ КОД ДЛЯ ГРИ
document.querySelector(".start").addEventListener("click", () => {
  const ticketScreen = document.querySelector(".main__ticket");
  const gameScreen = document.querySelector(".main__game");
  const scoreStartElement = document.querySelector(".score__start");
  const scoreEndElement = document.querySelector(".score__end");
  const scoreElement = document.querySelector(".score");
  const secondsElement = document.querySelector(".seconds");
  const gameBlock = document.querySelector(".game__block");
  const friendNumElement = document.querySelector(".friend__num");

  let points = 0;

  getDoc(userRef).then(docSnapshot => {
    if (docSnapshot.exists()) {
      const userData = docSnapshot.data();
      if (userData.tickets > 0) {
        setDoc(userRef, { tickets: userData.tickets - 1 }, { merge: true }).then(() => updateUserDataDisplay());
        ticketScreen.style.display = "none";
        gameScreen.style.display = "block";
        let timer = 30;
        const countdown = setInterval(() => {
          secondsElement.textContent = `${--timer}s`;
          if (timer <= 0) {
            clearInterval(countdown);
            endGame();
          }
        }, 1000);

        function endGame() {
          gameBlock.innerHTML = "";
          gameScreen.style.display = "none";
          ticketScreen.style.display = "block";
          scoreStartElement.style.display = "none";
          scoreEndElement.style.display = "block";
          scoreEndElement.innerHTML = `+ ${points} <span>Sladi</span>`;
          updatePoints(points);
        }

        function updatePoints(points) {
          getDoc(userRef).then(docSnapshot => {
            if (docSnapshot.exists()) {
              const userData = docSnapshot.data();
              setDoc(userRef, { points: userData.points + points }, { merge: true }).then(() => updateUserDataDisplay());
            }
          }).catch(err => console.error("Error updating balance:", err));
        }

        const spawnInterval = setInterval(() => {
          if (timer <= 0) {
            clearInterval(spawnInterval);
            return;
          }
          const img = document.createElement("img");
          img.src = "./img/slad-lvl-1.png";
          const size = Math.floor(Math.random() * 51) + 50;
          img.style.cssText = `width:${size}px;height:${size}px;position:absolute;top:${Math.random() * (gameBlock.clientHeight - size)}px;left:${Math.random() * (gameBlock.clientWidth - size)}px;transition:transform 0.3s, opacity 0.3s;transform:rotate(${Math.random() * 360}deg)`;
          img.addEventListener("click", () => {
            const pointsEarned = size === 100 ? 25 : Math.round(75 - size / 2);
            points += pointsEarned;
            scoreElement.innerHTML = `${points}<span> Sladi</span>`;
            img.style.opacity = "0";
            img.style.transform = "scale(0.5)";
            setTimeout(() => img.remove(), 300);
          });
          gameBlock.appendChild(img);
          setTimeout(() => { if (gameBlock.contains(img)) img.remove(); }, 3000);
        }, 300);

        if (userData.friend) friendNumElement.textContent = `friens: ${userData.friend}`;
      } else {
        alert("У вас немає квитків для гри!");
      }
    }
  }).catch(err => console.error("Error getting tickets:", err));
});
// КОД ДЛЯ ГОРТАННЯ СКіНІВ
// КОД ДЛЯ ГОРТАННЯ СКіНІВ
// КОД ДЛЯ ГОРТАННЯ СКіНІВ
const levels = [
  { image: document.querySelector('.puffers__lvl'), button: document.querySelector('.home__play') },
  { image: document.querySelector('.fuuz__lvl'), button: document.querySelector('.home__buy-fuuz') },
  { image: document.querySelector('.zing__lvl'), button: document.querySelector('.home__buy-zing') }
];
let currentLevel = 0;

function updateLevels() {
  levels.forEach((level, index) => {
    level.image.style.display = index === currentLevel ? 'block' : 'none';
    level.button.style.display = index === currentLevel ? 'block' : 'none';
  });
}

function shakeBalance() {
  const balance = document.querySelector('.balance');
  balance.classList.add('shake');
  setTimeout(() => balance.classList.remove('shake'), 300);
}

document.querySelector('.home__buy-fuuz').addEventListener('click', shakeBalance);
document.querySelector('.home__buy-zing').addEventListener('click', shakeBalance);
document.querySelector('.right__btn').addEventListener('click', () => { currentLevel = (currentLevel + 1) % levels.length; updateLevels(); });
document.querySelector('.left__btn').addEventListener('click', () => { currentLevel = (currentLevel - 1 + levels.length) % levels.length; updateLevels(); });

updateLevels();
// ПРЕЛОАДЕР
  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      const preloader = document.querySelector(".main__preloader");
      const home = document.querySelector(".main__home");
      const nav = document.querySelector(".nav");
      const menu = document.querySelector(".menu");
      if (preloader && home) {
        preloader.style.display = "none";
        home.style.display = "block";
      }
      if (nav) {
        nav.style.display = "block";
      }
  
      if (menu) {
        menu.style.position = "fixed";
      }
    }, 2000);
  });


// ПЛАВНІ ПЕРЕХОДИ
  function smoothTransition(hide, show, cb) {
    const overlay = document.querySelector('.fade-overlay');
    overlay.classList.add('active');
    setTimeout(() => {
      document.querySelector(hide).style.display = 'none';
      document.querySelector(show).style.display = 'block';
      overlay.classList.remove('active');
      cb?.();
    }, 200);
  }
  
// ПЕРЕХОДИМО В ФРЕНД
document.querySelector('.nav__friend-btn').addEventListener('click', function() {
  smoothTransition('.main__home', '.main__friend', () => {
      document.querySelector('.nav').style.display = 'none';
  });
});

// ПЕРЕХОДИМО В ТАСК
document.querySelector('.nav__task-btn').addEventListener('click', function() {
  smoothTransition('.main__home', '.main__task', () => {
      document.querySelector('.nav').style.display = 'none';
  });
});

// ВИХІД НАЗАД З ФРЕНД
document.querySelector('.back__friend-btn').addEventListener('click', function() {
  smoothTransition('.main__friend', '.main__home', () => {
      document.querySelector('.nav').style.display = 'block';
  });
});

// ВИХІД НАЗАД З ТАСК
document.querySelector('.back__task-btn').addEventListener('click', function() {
  smoothTransition('.main__task', '.main__home', () => {
      document.querySelector('.nav').style.display = 'block';
  });
});

// ПЕРЕХОДИМО В ТІКЕТ
document.querySelector('.home__play').addEventListener('click', function() {
  smoothTransition('.main__home', '.main__ticket', () => {
      document.querySelector('.nav').style.display = 'none';
  });
});

// ВИХОДИМО З ТІКЕТ
document.querySelector('.back').addEventListener('click', function() {
  smoothTransition('.main__ticket', '.main__home', () => {
      document.querySelector('.nav').style.display = 'block';
  });
});

// ВИХІД З ГАМАНЦЯ
document.querySelector('.back__wallet-btn').addEventListener('click', function() {
  smoothTransition('.main__connect-wallet', '.main__task');
});

// ВІДОБРАЖЕННЯ ДРУЗІВ
// ВІДОБРАЖЕННЯ ДРУЗІВ
// ВІДОБРАЖЕННЯ ДРУЗІВ
// ВІДОБРАЖЕННЯ ДРУЗІВ
getDoc(userRef).then(d => {
  if (d.exists()) document.querySelector(".friend__num").textContent = `friends: ${d.data().friends || 0}`;
}).catch(console.error);
