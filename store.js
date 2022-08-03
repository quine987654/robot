// 共享数据
import Decimal from 'decimal.js'


const Store = {
	state: {
		// name
		name: '',
		// 首页tps
		homeTPS: '2000+',
		// psc价格
		homePrice: '',
		// 是否在顶部
		ifTop: true,
		// 是否展开菜单栏
		menuIfshow: false,
		// 文档链接 $t('home.box1ST')
		wardLink: 'https://pscdoc.gitbook.io/doc/',
		// 链接 @click="uti.goPath(store.link.home.box1But)"
		link: {
			header: {
				usePSC: [
					// 支持钱包     获取PSC    去中心化应用Dapp         节点
					'/supWallet', '/getPSC', 'https://www.baidu.com', 'https://www.baidu.com',
				],
				study: [
					// 什么是PSC     什么是PSC币   		 智能合约         PSC桥			词汇表
					'/studyPsc', '/studyToken', '/studyContract', '/studyBridge', '',
				],
				dev: [
					//开发者主页					教程		 设置本地环节
					'/dev', 'https://www.baidu.com', 'https://www.baidu.com',
				],
				doc: 'https://pscdoc.gitbook.io/doc/',
			},
			footer: {
				urlList: [
					[
						// 支持钱包
						'/supWallet',
						// 获取 PSC
						'/getPSC',
						// 去中心化应用 (dapps)
						'',
						// 节点
						''
					],
					// 学习
					[
						// 什么是PSC？
						'/studyPsc',
						// 什么是PSC币
						'/studyToken',
						// 智能合约
						'/studyContract',
						// PSC桥
						'/studyBridge',
						// 词汇表
						''

					],
					// 开发者
					[

						// 开发者主页
						'/dev',
						// 教程
						'',
						// 设置本地环境
						''

					],
					// 生态系统
					[

						// 社区中心
						'/com',
						// 在线社区
						'',
						// 参与其中
						'',
						// 资助
						''

					],
					// Dapp
					[
						// Bridge
						'https://bridge.polysmartchain.com/',
						// Swap
						'https://swanswap.polysmartchain.com/#/swap',
						// Pool
						'https://pool.polysmartchain.com/#/farms',
						// Social
						'https://social.polysmartchain.com/'

					],
					// 关于PolySmartChain.com
					[
						// 关于我们
						'',
						// 工作机会
						'',
						// 参与贡献
						'',
						// 语言支持
						'',
						// 使用条款
						'',
						// 联系我们
						''
					]

				],
				psc: '',
				// 版权
				copyright: '',
				// Cookie 政策
				cookie: '',
				// 服务条款
				serve: '',
				// 隐私政策
				privacy: '',
			},
			home: {
				// 开始使用  
				box1But: 'https://pscdoc.gitbook.io/doc/',
				// 立即探索
				box2But: 'https://pscdoc.gitbook.io/doc/',
				box3List: [
					'https://pscdoc.gitbook.io/doc/',
					'https://pscdoc.gitbook.io/doc/',
					'https://pscdoc.gitbook.io/doc/',
					'https://pscdoc.gitbook.io/doc/',
				],
				// 立即质押
				box4But: 'https://pool.polysmartchain.com/#/farms',
				// 阅读文档 
				box5But: 'https://pscdoc.gitbook.io/doc/',
				box6List: [
					'https://bridge.polysmartchain.com/',
					'https://swanswap.polysmartchain.com/#/swap',
					'https://pool.polysmartchain.com/#/farms',
					'https://social.polysmartchain.com/',
					'https://polyjetclub.polysmartchain.com/',
					'',
				],
				// 关注最新消息
				box8I1: 'https://twitter.com/Polysmartchain',
				// 参与其中
				box8I2: 'https://discord.com/invite/eMmKpDGM9y',
				// 检查进度
				box8I3: 'https://medium.com/@polysmartchain',
				// 加入社区
				box8I4: 'https://pscdoc.gitbook.io/doc/',
			},
			// 社区
			com: {
				// 加入社区
				box1But: 'https://pscdoc.gitbook.io/doc/',
				box2List: [
					'https://t.me/PSCoffivcial',
					'discord.gg/eMmKpDGM9y',
					'https://pscdoc.gitbook.io/doc/',
				]
			},
			// dapp
			dapp: {
				// 如何创建一个DAPP
				box1Bt2: 'https://pscdoc.gitbook.io/doc/'
			},
			dev: {
				// 开始
				box1But: 'https://pscdoc.gitbook.io/doc/',
				box3UrlList: [
					// 介绍
					[
						// PSC简介
						'',
						// 去中心化应用程序简介
						'',
						// Web2 与 Web3 对比
						'',
						// 编程语言
						'',
					],
					// 基础
					[
						// 帐户
						'',
						// 交易
						'',
						// 区块
						'',
						// 虚拟机
						'',
						// 网络
						'',

					],
					// 堆栈
					[
						// 智能合约
						'',
						// 开发框架
						'',
						// javascript库
						'',
						// 后端api
						'',
						// 区块链浏览器
						'',
						// 智能合约安全
						'',
						// 存储
						'',
						// 开发环境
						'https://www.baidu.com',

					],
				]
			},
			study: {
				// 部署智能合约
				contBut: 'https://pscdoc.gitbook.io/doc/',
				// 探索PSC桥
				bridgeBut: 'https://bridge.polysmartchain.com/',

				// 探索psc
				pscBut1: 'https://pscdoc.gitbook.io/doc/',
				// 开始构建
				pscBut2: 'https://pscdoc.gitbook.io/doc/',
				// 我们的社区
				pscBut3: 'https://discord.com/invite/eMmKpDGM9y',

				// token 获取PSC-Swap
				tokenBox1But: 'https://swanswap.polysmartchain.com/#/swap',
			},
			use: {
				// 钱包
				walletBox2: [
					'https://metamask.io',
					'https://token.im',
					'https://www.tokenpocket.pro/',
					'https://coin98.com/',
				],
				// 获取psc
				// 交易所
				swap: 'https://swanswap.polysmartchain.com/#/swap',
				// 查看去中心化应用
				box2But: '/dapp',
			},
		}

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
				if (screen.width < 700) {
					window.myVue.$router.push(path + 'M')
					window.sessionStorage.setItem('path', path + 'M')
					Store.state.menuIfshow = false
				} else {
					window.myVue.$router.push(path)
					window.sessionStorage.setItem('path', path)
				}
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
		// 添加decimals
		amountMul (val, dec) {
			if (!dec) {
				dec = 18
			}
			let a = new Decimal(val)
			let b = new Decimal(`1e+${dec}`)
			return Number(new Decimal(a).mul(b)).toLocaleString().replace(/,/g, "");
		},
		// 除Decimal 
		addDec (val, dec) {
			if (!dec) {
				dec = 18
			}
			let a = new Decimal(val)
			let b = new Decimal(`1e+${dec}`)
			return Number(new Decimal(a).div(b))
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




	},

}
export default Store