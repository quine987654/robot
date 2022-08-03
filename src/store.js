// 共享数据
import Decimal from 'decimal.js'
// import Md5 from 'md5'


const Store = {
	state: {
		// 地址
		wallet: '',
		// 所有机器人
		robotList: [],
		// 问答机器人
		faqRobotList: []

	},
	// 设置地址和链id
	setWallet (val, id) {
		this.state.walletAddress = val
		this.state.walletNetworkId = id
		window.sessionStorage.setItem('walletAddress', val)
		window.sessionStorage.setItem('walletNetworkId', id)
		Store.uti.setActNetwork()
		Store.uti.getBalnasACT()
		Store.uti.getAuthorizeBalnasACT()
	},

	uti: {
		// 跳转网页或跳转路由
		goPath (path) {
			if (path == '') {
				return
			}
			if (path.indexOf('http') == 0) {
				// window.location = path
				window.open(path, "_blank");
			} else {
				// if (screen.width < 700) {
				// 	window.myVue.$router.push(path + 'M')
				// 	window.sessionStorage.setItem('path', path + 'M')
				// 	Store.state.menuIfshow = false
				// } else {
				window.myVue.$router.push(path)
				window.sessionStorage.setItem('path', path)
				// }
			}
		},
		/**
		 *  收起字符串
		 * 第一个参数是要收起的字符串
		 * 第二个参数是收起后剩余几位（默认保留4位数）
		 * 第三个参数是收起前后还是收起中间 c:收起两边，lr：收起中间（默认收起中间）
		 */

		//  第一个参数是要收缩的字符串第二个参数是前后剩余几位（不传默认为四位）
		shrink (val, num, lcr) {
			if (!val) {
				return "";
			}
			if (!num) {
				num = 4;
			}
			if (!lcr) {
				lcr = 'lr'
			}
			// 如果是收起中间
			if (lcr == 'c') {
				let center = Math.floor(val.length / 2)
				return (
					'···' +
					val.substring(center - num, center + num)
					+ '···'

				);
			}
			// 默认中间
			return (
				val.substring(0, num) +
				"···" +
				val.substring(val.length - num, val.length)
			);

		},
		// 计算属性 为数字添加千分位 不截断后面
		addThousand3 (num) {
			let val = String(num);
			let reg = /\d{1,3}(?=(\d{3})+$)/g;
			if (val.indexOf(".") == -1) {
				return (val + "").replace(reg, "$&,");
			} else {
				let ind = val.indexOf(".");
				let left = String(val).substring(0, ind);
				left = (left + "").replace(reg, "$&,");
				let right = String(val).substring(ind + 1, val.lenght);
				// if (right.length > 5) {
				//   right = `${right.substring(0, 4)}`
				// }
				return `${left}.${right}`;
			}
		},
		// 判断谁大
		amountMax (amL, amR) {
			// 首先判断位数 哪个位数长就哪个大
			return Number(Decimal.max(amL, amR)).toLocaleString().replace(/,/g, "");
		},
		// 字符串数值减法
		reduce (a, b) {
			// 判断小数位数
			let ari = 0;
			let bri = 0;
			let ale = a.length;
			let ble = b.length;
			if (a.indexOf(".") > 0) {
				ale = a.indexOf(".");
				ari = a.length - a.indexOf(".") - 1;
			}
			if (b.indexOf(".") > 0) {
				ble = b.indexOf(".");
				bri = b.length - b.indexOf(".") - 1;
			}
			// 小数 补0 如果b的后面位数长于a则给a补零 否则给b补0
			if (bri > ari) {
				if (ari == 0) {
					a = a + ".";
				}
				for (let i = 0; i < bri - ari; i++) {
					a = a + "0";
				}
			}
			if (ari > bri) {
				if (bri == 0) {
					b = b + ".";
				}
				for (let i = 0; i < ari - bri; i++) {
					b = b + "0";
				}
			}
			// 整数补0
			if (ale > ble) {
				for (let i = 0; i < ale - ble; i++) {
					b = "0" + b;
				}
			}
			if (ble > ale) {
				for (let i = 0; i < ble - ale; i++) {
					a = "0" + a;
				}
			}
			// 相减
			let arr = [];
			for (let i = 0; i < a.length; i++) {
				if (typeof b[b.length - 1 - i] == undefined) {
					arr.push(a[a.length - 1 - i]);
				} else {
					arr.push(a[a.length - 1 - i] - b[b.length - 1 - i]);
				}
			}
			// 处理借位
			for (let i = 0; i < arr.length; i++) {
				if (isNaN(arr[i])) {
					arr[i] = ".";
				}
				if (arr[i] < 0) {
					if (isNaN(arr[i + 1])) {
						arr[i + 2]--;
					} else {
						arr[i + 1]--;
					}
					arr[i] += 10;
				}
			}
			// 最终结果
			let jg = "";
			for (let i = arr.length - 1; i >= 0; i--) {
				jg += arr[i];
			}
			// 如果第一个数为0 则去掉
			if (jg.indexOf(".") > 1 && jg[0] == "0") {
				jg = jg.substring(1);
			}
			return jg;
		},
		// 给数字保留两位小数
		toFixed (val, num) {
			// 如果传入的不是数字
			if (isNaN(Number(val))) {
				return val;
			}
			return Number(val).toFixed(num)
		},
		// 乘decimal
		amountMul (val, dec) {
			if (!dec) {
				dec = 18
			}
			val = val + ''
			let ind = val.indexOf('.')
			let b = ''
			if (ind == -1) {
				for (let i = 0; i < dec; i++) {
					b += '0'
				}
			} else {
				let c = val.length - ind - 1
				for (let i = 0; i < dec - c; i++) {
					b += 0
				}
			}
			b = val.replace('.', '') + b
			for (let i = 0; i < b.length; i++) {
				b[i] != '0'
				return b.substring(i)

			}
			return b
		},
		// 除Decimal 
		addDec (val, dec, n) {
			val = String(val)
			let a = ''
			if (!n) {
				n = 6
			}
			if (!dec) {
				dec = 18
			}
			if (val.length > dec) {
				a = val.substring(0, val.length - dec) + '.' + val.substr(val.length - dec, n)
			} else {
				let c = '0.'
				for (let i = 0; i < dec - val.length; i++) {
					c += '0'
				}
				a = (c + val).substr(0, n + 2)


			}
			if (a.indexOf('.') > 0) {
				for (let i = 0; i < a.length; i++) {
					if (a[a.length - 1] == '0') {
						a = a.substring(0, a.length - 1)
					} else {
						break
					}

				}
			}
			// a = parseFloat(a)

			if (Number(a) == 0) {
				return a = '0'
			} else {
				return a
			}
			// if (!dec) {
			// 	dec = 18
			// }
			// let a = new Decimal(val)
			// let b = new Decimal(`1e+${dec}`)
			// return Number(new Decimal(a).div(b))
		},
		addDec2 (val, dec, n) {
			val = String(val)
			let a = ''
			// if (n == 'undefined') {
			// 	n = 5
			// }
			if (!n) {
				n = 6
			}
			if (!dec) {
				dec = 18
			}
			if (val.length > dec) {
				a = val.substring(0, val.length - dec) + '.' + val.substr(val.length - dec, n)
			} else {
				let c = '0.'
				for (let i = 0; i < dec - val.length; i++) {
					c += '0'
				}
				a = (c + val).substr(0, n + 2)
			}
			if (a.indexOf('.') > 0) {
				for (let i = 0; i < a.length; i++) {
					if (a[a.length - 1] == '0') {
						a = a.substring(0, a.length - 1)
					} else {
						break
					}

				}
			}

			if (Number(a) == 0) {
				return a = '0'
			} else {
				return a
			}
		},
		// 转换数据类型
		toStringWl (val) {
			let v = val.d.join('')
			// console.log(val);
			// console.log(val.d);
			// console.log(v);
			let n = val.s + val.e
			if (n < 0) {
				let z = ''
				for (let i = 0; i > n; i--) {
					z += '0'
				}
				let l = '0'
				let r = v.substr(0, 12 + n)
				console.log(`${l}.${z}${r}`);
				return Number(`${l}.${z}${r}`)
			} else {
				let l = v.substr(0, n)
				let r = v.substr(n, 12)
				console.log(`${l}.${r}`);
				return Number(`${l}.${r}`)

			}

		},
		// 重新设置选中的网络
		setActNetwork () {
			if (Store.state.walletAddress) {
				for (let i = 0; i < Store.state.networkList.length; i++) {
					if (Store.state.networkList[i].chainId == Store.state.walletNetworkId) {
						Store.state.actionNetworkOne = Store.state.networkList[i]
						if (i == 0) {
							Store.state.actionNetworkTwo = Store.state.networkList[1]
						} else {
							Store.state.actionNetworkTwo = Store.state.networkList[0]
						}
					}
				}
				// 如果有PSC且psc不在首位则把psc放到次位去
				if (Store.state.actionNetworkOne.name != 'PSC') {
					for (const i in Store.state.networkList) {
						if (Store.state.networkList[i].name == "PSC") {
							Store.state.actionNetworkTwo = Store.state.networkList[i]
						}
					}
				}
				this.getAssets()

			}

		},
		// 获取地址列表
		async getAddress () {
			if (Store.state.walletAddress == '') {
				return
			}
			let { data: res } = await window.myVue.$http.get(
				`pub/cross/user/addresses?current=1&pageSize=10&userAddress=${Store.state.walletAddress}`
			);
			if (res.code != 200) {
				window.myVue.$message.error(this.getTips("err"));
			}
			if (res.data.list == null) {
				Store.state.historyAddress = [];

			} else {

				Store.state.historyAddress = res.data.list;
			}
		},
		// 获取资产列表
		async getAssets () {
			if (!window.myVue.$http) {
				return
			}
			const { data: res } = await window.myVue.$http.post(
				"/pub/cross/assetsByTwoChain",
				{
					fromChainId: Store.state.actionNetworkOne.id,
					toChainId: Store.state.actionNetworkTwo.id,
				}
			);
			if (res.code != 200) {
				return false;
			}
			// 设置资产列表
			Store.setAssetsList(res.data);
			// 如果有usdt则把usdt放到首位去
			for (const i in res.data) {
				if (res.data[i].name == "USDT") {
					let a = res.data[0];
					res.data[0] = res.data[i];
					res.data[i] = a;
				}
			}
			// 设置默认资产
			Store.setActionAssets(res.data[0]);
			Store.uti.getBalnasACT();
			Store.uti.getAuthorizeBalnasACT();

		},
		// 获取选中资产的余额
		async getBalnasACT () {
			Store.state.actAssetsBalnas = await Store.uti.getBalnas(
				Store.state.actionAssets.from_token_address
			);
		},
		// 获取配置文件的文字
		tipsText (val) {
			console.log(val);
			// 當前為中文還是英文
			let lang = window.myVue.$i18n.locale
			// 返回提示文字 
			let ts = window.myVue.$i18n.messages[lang].tips[val]
			// 如果有提示則返回，沒有則返回提示名 
			if (ts) {
				return ts
			} else {
				return (val)
			}
		},
		// 计算是否还有下一页
		isMore (total, num) {
			if (total > num * 10) {
				return true
			} else {
				return false
			}
		},
		// 合并两个数组
		addArr (arr1, arr2) {
			for (let i = 0; i < arr2.length; i++) {
				arr1.push(arr2[i])
			}
			return arr1
		},
		// 切换皮肤
		// 切换皮肤 type 为 day 或night
		changeSkin () {
			// let skin = window.localStorage.getItem("skin");
			let aa = document.head.querySelector('#skin')
			let bb = aa.getAttribute('href')
			let skin = 'day';
			if (bb.indexOf("day") > 0) {
				skin = "night";
			} else {
				skin = "day";
			}
			aa.setAttribute("href", `/skin/${skin}.css`);
		},
		// 处理时间
		changeTime (val) {
			if (val == 0) {
				return "0";
			}
			String(val)
			if (val.length == 10) {
				val = Number(val) * 1000;

			} else {
				val = Number(val)
			}
			let dt = new Date(val);
			let YYYY = dt.getFullYear();
			let MM = dt.getMonth();
			let DD = dt.getDate();
			let hh = dt.getHours();
			let mm = dt.getMinutes();
			let ss = dt.getSeconds();
			return `${YYYY}.${MM + 1}.${DD} ${hh}:${mm}:${ss} `;
		},
		// 十六进制转字符串
		stringToHex (val) {
			return window.myVue.web3.utils.hexToString(val)
		},
		// 计算结束时间
		calEndTime (end) {
			let dt = Math.floor(new Date().getTime() / 1000)
			let dt2 = end - dt
			if (dt2 < 0) {
				return dt2
			}

			let DD = Math.floor(dt2 / 86400)
			let hh = Math.floor((dt2 % 86400) / 3600)
			let mm = Math.ceil((dt2 % 3600) / 60)

			if (hh <= 9) {
				hh = '0' + hh
			}
			if (mm <= 9) {
				mm = '0' + mm
			}
			if (window.myVue.$i18n.locale == 'en') {

				return `${DD} D ${hh} H ${mm} M`
			}
			return `${DD} 天 ${hh} 时 ${mm} 分`
			// return end + '===' + dt

		},
		// 计算结束时间 
		calEndTime2 (end) {
			if (!end) {
				return 'a'
			}
			let dt = Math.floor(new Date().getTime() / 1000)
			let dt2 = Math.floor(new Date(end[0], end[1] - 1, end[2], end[3], end[4], end[5]).getTime() / 1000) - dt
			if (dt2 < 0) {
				return dt2
			}

			let DD = Math.floor(dt2 / 86400)
			let hh = Math.floor((dt2 % 86400) / 3600)
			let mm = Math.ceil((dt2 % 3600) / 60)

			if (hh <= 9) {
				hh = '0' + hh
			}
			if (mm <= 9) {
				mm = '0' + mm
			}

			if (window.myVue.$i18n.locale == 'en') {

				return `${DD} D ${hh} H ${mm} M`
			}
			return `${DD} 天 ${hh} 时 ${mm} 分`
		},
		// 获取最后一个字符
		getferst1 (val) {
			if (!val) {
				return 'a'
			}
			val = String(val)
			return val.substr(val.length - 1, 1)
		},
		// 处理标题 1变001
		changeNum (val) {
			if (val < 10) {
				return '00' + val
			}
			if (val < 99) {
				return '0' + val
			}
			return val
		}



	},
	http: {
	}
}
Store.state.voteAddr = window.wl.voteAddr
Store.state.polyDao = window.wl.polyDao
Store.state.vPolyDao = window.wl.vPolyDao
Store.state.sPolyDao = window.wl.sPolyDao
Store.state.TPD = window.wl.swap


if (window.sessionStorage.getItem('wallet')) {
	Store.state.wallet = window.sessionStorage.getItem('wallet')
}



// Store.http.getPro()
export default Store