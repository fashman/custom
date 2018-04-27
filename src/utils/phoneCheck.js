const phoneTypeList = [
  { key: 'mobileCN', name: '中国', code: '86'},
  { key: 'mobileUSA', name: '美国/加拿大', code: '1'},
  { key: 'mobileAUD', name: '澳大利亚', code: '61'},
  { key: 'mobileNZD', name: '新西兰', code: '64'},
  { key: 'mobileHK', name: '香港', code: '852'},
  { key: 'mobileMacau', name: '澳门', code: '853'},
  { key: 'mobileTW', name: '台湾', code: '886'},
  { key: 'mobileUK', name: '英国', code: '44'},
  { key: 'mobileFrance', name: '法国', code: '33'},
  { key: 'mobileGermany', name: '德国', code: '49'},
  { key: 'mobileBelgium', name: '比利时', code: '32'},
  { key: 'mobileItaly', name: '意大利', code: '39'},
  { key: 'mobileSpain', name: '西班牙', code: '34'},
  { key: 'mobileSwiss', name: '瑞士', code: '41'},
  { key: 'mobileHolland', name: '荷兰', code: '31'},
  { key: 'mobileGreece', name: '希腊', code: '30'},
  { key: 'mobileNorway', name: '挪威', code: '47'},
  { key: 'mobileMalaysia', name: '马来西亚', code: '0060'}
];

// 电话号码格式检测
const phoneRegExpTest = function(type, content) {
  const regExpMap = {
    'mobileCN'			  : /^1[0-9]{10}$/,												  //中国1开头的10为数字
    'mobileUSA'			  : /^[0-9]{10,11}$/, 											//加拿大美国10位数字
    'mobileAUD'			  : /^[0-9]{9,10}$/, 												//澳大利亚9位
    'mobileNZD'			  : /^[0-9]{9,10}$/, 												//新西兰9位数字
    'mobileHK'			  : /^[0-9]{8,9}$/, 												//香港
    'mobileMacau'		  : /(^0\d{8}$)|(^6\d{7}$)/, 								//澳门
    'mobileTW'			  : /^[0-9]{9,10}$/, 												//台湾
    'mobileUK'			  : /(^0\d{10}$)|(^7\d{9}$)/,								//英国手机号码位数：10位数字，7开头
    'mobileFrance'		: /^[0-9]{9,10}$/, 												//法国手机号码位数：9位数字
    'mobileGermany'	  : /^[0-9]{10,11}$/, 											//德国手机号码位数：11位数字
    'mobileBelgium'	  : /(^0\d{9}$)|(^4\d{8}$)/, 								//比利时手机号码位数：10位数字，4开头
    'mobileItaly'		  : /(^0\d{10}$)|(^3\d{9}$)/, 							//意大利手机号码位数：10位数字
    'mobileSpain'		  : /(^0\d{9}$)|(^7\d{8}$)|(^6\d{8}$)/, 		//西班牙手机号码位数：9位数字，以6开头
    'mobileSwiss'		  : /^[0-9]{9,10}$/, 												//瑞士手机号码位数：10位数字，07开头
    'mobileHolland'	  : /(^0\d{9}$)|(^6\d{8}$)/, 								//荷兰手机号码位数：10位数字，以06开头
    'mobileGreece'		: /(^0\d{10}$)|(6\d{9}$)/, 								//希腊手机号码位数：10位数字
    'mobileNorway'		: /(^0\d{8}$)|(^4\d{7}$)|(^9\d{7}$)/,
    'mobileMalaysia'	: /^\d+$/,
  },
  regExpErrMap = {
    'mobileCN'			  : '请输入正确的手机号(中国)',
    'mobileUSA'			  : '请输入正确的手机号(美国/加拿大)',
    'mobileAUD'			  : '请输入正确的手机号(澳大利亚)',
    'mobileNZD'			  : '请输入正确的手机号(新西兰)',
    'mobileHK'			  : '请输入正确的手机号(香港)',
    'mobileMacau'		  : '请输入正确的手机号(澳门)',
    'mobileTW'			  : '请输入正确的手机号(台湾)',
    'mobileUK'			  : '请输入正确的手机号(英国)',
    'mobileFrance'		: '请输入正确的手机号(法国)',
    'mobileGermany'	  : '请输入正确的手机号(德国)',
    'mobileBelgium'	  : '请输入正确的手机号(比利时)',
    'mobileItaly'		  : '请输入正确的手机号(意大利)',
    'mobileSpain'		  : '请输入正确的手机号(西班牙)',
    'mobileSwiss'		  : '请输入正确的手机号(瑞士)',
    'mobileHolland'	  : '请输入正确的手机号(荷兰)',
    'mobileGreece'		: '请输入正确的手机号(希腊)',
    'mobileNorway'		: '请输入正确的手机号(挪威)',
    'mobileMalaysia'	: '请输入正确的手机号(马来西亚)',
   };
  return {code: regExpMap[type].test(content), msg: regExpErrMap[type]};
};

export { phoneTypeList, phoneRegExpTest };