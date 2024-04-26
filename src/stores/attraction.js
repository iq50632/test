import { defineStore } from 'pinia'
import _ from 'lodash'

export const useAttractionStore = defineStore('attraction', {
    state: () => {
        return { 
			journey: [],
			demographics: [
				{ id: 11, name: '基隆市', enName: 'Keelung City', value: 3621771},
				{ id: 31, name: '新北市', enName: 'New Taipei City', value: 4013659},
				{ id: 1, name: '臺北市', enName: 'Taipei City', value: 2465610},
				{ id: 32, name: '桃園市', enName: 'Taoyuan City', value: 2293509},
				{ id: 33, name: '新竹縣', enName: 'Hsinchu County', value: 584454},
				{ id: 12, name: '新竹市', enName: 'Hsinchu City', value: 453536},
				{ id: 35, name: '苗栗縣', enName: 'Miaoli County', value: 535076},
				{ id: 3, name: '臺中市', enName: 'Taichung City', value: 2826230},
				{ id: 37, name: '彰化縣', enName: 'Changhua County', value: 1244148},
				{ id: 38, name: '南投縣', enName: 'Nantou County', value: 479244},
				{ id: 39, name: '雲林縣', enName: 'Yunlin County', value: 664092},
				{ id: 40, name: '嘉義縣', enName: 'Chiayi County', value: 488012},
				{ id: 22, name: '嘉義市', enName: 'Chiayi City', value: 263440},
				{ id: 5, name: '臺南市', enName: 'Tainan City', value: 1856642},
				{ id: 7, name: '高雄縣', enName: 'Kaohsiung County', value: 2733964},
				{ id: 43, name: '屏東縣', enName: 'Pingtung County', value: 798016},
				{ id: 34, name: '宜蘭縣', enName: 'Yilan County', value: 449510},
				{ id: 45, name: '花蓮縣', enName: 'Hualien County', value: 318736},
				{ id: 46, name: '臺東縣', enName: 'Taitung City', value: 212259},
				{ id: 44, name: '澎湖縣', enName: 'Penghu County', value: 107333},
				{ id: 4611, name: '綠島', enName: 'Green Island', value: 0},
				{ id: 4616, name: '蘭嶼', enName: 'Orchid Island', value: 0},
				{ id: 46161, name: '小蘭嶼', enName: 'Little Orchid Island', value: 0},
				{ id: 90, name: '金門縣', enName: 'Kinmen County', value: 141505},
				{ id: 91, name: '連江縣', enName: 'Lienchiang County', value: 13989}
			],
            cityAttractions: {
                0: [0, 1, 2, 3],
				1: [0, 1, 2, 3],
                31: [4, 5, 6]
            },
			attractions: [
				{
					"id": 0,
					"title": "信義商圈",
					"subtitle": "集結各式各樣的百貨、美食、活動、景點，從早玩到晚，宛如臺北不夜城",
					"address": "110台北市信義區松壽路20號",
					"link": "https://maps.app.goo.gl/1a3pUEsDUvb2dKxu9",
					"image": "https://photo.travelking.com.tw/scenery/2C13FAB0-286B-4102-8B79-27B5DF6568C8_e.jpg",
					"content": "集結各式各樣的百貨、美食、活動、景點，從早玩到晚，宛如臺北不夜城。\n每年聖誕季充滿唯美燈飾及特色裝置藝術，浪漫的氛圍吸引各地遊客前往。\n香堤大道時常集結各式街頭表演藝人，逛街的同時還能欣賞精彩的表演。",
					"fixed": false,
					"hashtag": ["逛街", "服飾", "百貨"],
					"reveal": false
				},
				{
					"id": 1,
					"title": "赤峰街商圈",
					"subtitle": "赤峰街是臺北捷運「中山站」跟「雙連站」之間的一大區域，是目前台北年輕人最愛逛的地區之一",
					"address": "10491台北市中山區南京西路16號中山",
					"link": "https://maps.app.goo.gl/SEQ6EyWP5SNM3a4K7",
					"image": "https://upload.wikimedia.org/wikipedia/commons/4/4f/Exit_4%2C_MRT_Zhongshan_Station_20191208.jpg",
					"content": "而近年來吹起一股文創藝術風，這裡也紛紛進駐了許多咖啡店、特色小店，讓赤峰街的景致充滿復古與現代的交錯感。加上這裡因為交通方便、鄰近台北車站，也吸引許多人喜歡到這裡購物、喝下午茶。",
					"fixed": false,
					"hashtag": ["逛街", "服飾", "女裝", "咖啡廳"],
					"reveal": false
				},
				{
					"id": 2,
					"title": "西門町",
					"subtitle": "逛完商圈可順遊西門紅樓、西本願寺、北門...等著名的古蹟景點。",
					"address": "108台北市萬華區武昌街二段45號",
					"link": "https://maps.app.goo.gl/TpEWdeNK71oGhV2p8",
					"image": "https://ximen-inn.hubhotel.com.tw/wp-content/uploads/2022/03/%E8%A5%BF%E9%96%80%E7%94%BA-thegem-blog-default.jpg",
					"content": "西門町之名來自日據時代，當時的居民大多居住於臺北城內，西門外的這塊地方就是他們的主要休憩場所。早期這裡就以電影院為最主要的商業活動，後來陸續有百貨業及其他娛樂場所的進駐。1961年中華商場完工後，西門町還一度是全國最大的商業娛樂中心。",
					"fixed": false,
					"hashtag": ["逛街", "服飾", "打卡聖地"],
					"reveal": false
				},
				{
					"id": 3,
					"title": "東區商圈",
					"subtitle": "以服飾、百貨、特色餐廳及連鎖餐飲店為主",
					"address": "251新北市淡水區公明街42號",
					"link": "https://maps.app.goo.gl/Gq4LdRyuPhcmRu3t8",
					"image": "https://www.eastdistrictplus.com/manager_admin/upload_file/219/16383462191.JPG",
					"content": "擁有便利交通運輸規劃與設施，並以潮流藝文元素及夜經濟之特性並結合巷弄特色店家創店首發站，發展「夜食」、「夜遊」、「夜享」、「夜讀」及「夜時尚」之「東區五夜城」，打造東區為民眾夜品臺北首選",
					"fixed": false,
					"hashtag": ["逛街", "服飾", "百貨"],
					"reveal": false
				},
				{
					"id": 4,
					"title": "淡水老街",
					"subtitle": "在地美食、古蹟巡禮，夕陽海景，怎樣都玩不膩的景點",
					"address": "251新北市淡水區公明街42號",
					"link": "https://maps.app.goo.gl/zJQa1qZ2jMzdEJop6",
					"image": "https://www.travel.taipei/content/images/attractions/363132/1024x768_attractions-image-pysib8ch8kgggbnyyocppg.jpg",
					"content": "淡水老街分成內外兩側，外側是靠淡水河岸的金色水岸步道，內側是的傳統老街，這裡街道兩旁林立熱鬧商店，有濃濃古早味的餅舖、雜貨店，也有賣潮流服飾與玩具。傍晚時，在金色水岸步道還可欣賞夕陽落入海面的美景。",
					"fixed": false,
					"hashtag": ["老街", "逛街", "看海", "夕陽"],
					"reveal": false
				},
				{
					"id": 5,
					"title": "新北歡樂耶誕城",
					"subtitle": "新板特區商圈一系列聖誕節活動的總稱",
					"address": "220新北市板橋區中山路一段161號",
					"link": "https://maps.app.goo.gl/Qa3y36RdwetPEo3f9",
					"image": "https://images.ctee.com.tw/newsphoto/2023-11-17/1024/20231117702055.jpg",
					"content": "由新北市主辦聖誕、臺北市主辦跨年，以避免互搶人潮及分散效益。",
					"fixed": false,
					"hashtag": ["聖誕節", "演唱會", "夜景"],
					"reveal": false
				},
				{
					"id": 6,
					"title": "十分瀑布公園",
					"subtitle": "走訪臺版尼加拉瀑布，欣賞萬馬奔騰的磅礡",
					"address": "220新北市板橋區中山路一段161號",
					"link": "https://maps.app.goo.gl/FgmXbEm2cAazqxTP7",
					"image": "https://photo.travelking.com.tw/scenery/94160ADE-B67F-4E45-8921-3BFF501F6314_e.jpg",
					"content": "位在基隆河的主流上，由於河流的侵蝕作用，造就斷層地形與奇岩，讓這裡擁有許多瀑布與地質奇觀，其中以聲勢浩大的十分瀑布最為出名。若是從十分遊客中心出發，沿著四廣潭橋而行，還能將四廣潭的壺穴地質景觀、眼鏡洞瀑布的美景一網打盡！",
					"fixed": false,
					"hashtag": ["踏青", "瀑布"],
					"reveal": false
				}
			]
        }
    },
    actions: {
		add_attraction(id) {
			this.journey.push(id)
		},
		del_attraction(index) {
			this.journey.splice(index, 1)
		}
    }
})