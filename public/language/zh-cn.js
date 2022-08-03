// 中文简体
/**
	 * 命名规则按位置命名，并非按意思命名
	 * T 是title的缩写，代表标题
	 * S 和T连用是subtitle的缩写，代表副标题
	 * P 代表文本段落
	 * L 是left的缩写，代表左边
	 * R 是right的缩写，代表右边
	 * Ft是foot的缩写，代表下边
	 */

window.wlLangZhCn = {
	lang: {
		name: '简体中文',
		node: "zh-cn",
		// 语言
		language: '语言',
	},
	tips: {
		// 暂无数据
		notData: '暂无数据',
		// 加载中
		loading: '加载中',
		// 加载失败
		loadingErr: '加载失败',
		// 已加载全部 
		notMore: '已加载全部',
		// 下拉刷新
		pullingText: '下拉刷新',
		// 释放刷新
		loosingText: '释放刷新',
		// 成功
		suc: '成功',
		// 失败
		err: '失败',
		// 当前有进行中的提案，不能创建
		jxz: '当前有进行中的提案，不能创建',
		// 当前网络异常
		networkErr: '当前网络异常',
		// 包含铭感词
		sensitive: '包含敏感词',
		// minVote
		minVote: '最小投票数：0.000001',
	},
	header: {
		// 提案
		pro: '提案',
		// 社区
		com: '社区',
		// 我的
		my: '我的',
		// 链接钱包
		linkWallet: '链接钱包',
		// 操作
		operation: '操作',
		// 创建提案
		addPrc: '创建提案',
		// 换取
		exchange: '换取',
		// 语言

		// 文档
		world: '文档',
		// 操作教程
		course: '操作教程',
		// 常见问题
		faq: '常见问题',
		// 合约地址
		contAddr: '合约地址',
		// 关于
		about: '关于',
		// 关于我们
		aboutWe: '关于我们',
		// 联系支持
		contact: '联系支持',
	},

	// 提案页面
	pro: {
		// 创建提案
		addPrc: '创建提案',
		// 提案
		prc: '提案',
		// 票数
		voteNumber: '票数',
		// 状态
		state: "状态",
		// add
		// 提案标题
		title: '提案标题',
		// 提案简述
		describe: '提案简述',
		// 提案类型
		type: '提案类型',
		// 类型列表
		typeList: [
			{
				id: "1",
				name: "筹款",
			},
			{
				id: "2",
				name: "治理",
			},
		],
		typeLis: {
			'1': "筹款",
			'2': "治理",
		},
		// 请选择
		please: '请选择',
		// 筹款数量
		number: '筹款数量',
		// 创建新的提案你需要持有VPolyDao,否则将无法创建。
		tips: '创建新的提案你需要持有VPolyDao,否则将无法创建。',
		// 确认创建
		okClick: '确认创建',
	},
	// 社区页面
	com: {

		// 换取
		transPolyDao: '换取',
		// 话题
		pip: '话题',
		// 票数
		voteNumber: '票数',
		// 状态
		state: "状态",

		// 余额
		balance: "余额",
		// 兑换数量 
		changeNumber: "兑换数量",
		// 全部 
		all: "全部",
		// 授权 
		sq: "授权",
		// 确认兑换 
		okChange: "确认兑换",


	},
	// 个人页面 
	personal: {
		// 选择框
		actList: [
			'',
			'我的提案',
			'我的投票',
		],
		// 票数
		voteNumber: '票数',
		// 状态
		state: "状态",
	},
	// item和详情页面
	itemOrDec: {
		// 创建于
		establish: "创建于",
		// 成功
		suc: '成功',
		// 失败
		err: '失败',
		// 倒计时
		countDown: '倒计时',
		// 票数
		voteNumber: '票数',
		// 支持
		support: '支持',
		// 反对
		opposition: '反对',
		// 赎回
		redeem: '赎回',
		// 删除
		del: '删除',
		// 已删除
		deleted: "已删除",
		// 投票
		vote: '投票',
		// 完成
		wc: '完成',
		// 倒计时
		djs: '倒计时',
		//你将投票
		youVote: '你将投票',
		//支持 
		zc: '支持',
		//反对 
		fd: '反对',
		//投票数量 
		voteNum: '投票数量',
		//确认投票 
		okVote: '确认投票',
	},
	typeList: [
		{
			id: "1",
			name: "筹款",
		},
		{
			id: "2",
			name: "治理",
		},
	],
	typeLis: {
		'1': "筹款",
		'2': "治理",
	},
}