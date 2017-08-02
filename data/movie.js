/**
 * Created by xmg on 2017/1/10.
 * 模拟电影数据
 */

//首页电影数据展示
var homeMovie = {
    movie: [
        {
            id: 1,
            name: '非诚勿扰',
            num: 'h001',
        },
        {
            id: 2,
            name: '雪国列车',
            num: 'h002',
        },
        {
            id: 3,
            name: '激战',
            num: 'h003',
        },
        {
            id: 4,
            name: '寒战',
            num: 'h004',
        },
        {
            id: 5,
            name: '电影5',
            num: 'h005',
        },
        {
            id: 6,
            name: '电影6',
            num: 'h006',
        },
        {
            id: 7,
            name: '电影7',
            num: 'h007',
        },
        {
            id: 8,
            name: '电影8',
            num: 'h008',
        },
        {
            id: 9,
            name: '电影9',
            num: 'h009',
        },
        {
            id: 10,
            name: '电影10',
            num: 'h010',
        },
        {
            id: 11,
            name: '电影11',
            num: 'h011',
        },
        {
            id: 12,
            name: '电影12',
            num: 'h012',
        },
        {
            id: 13,
            name: '电影13',
            num: 'h013',
        },
        {
            id: 14,
            name: '电影14',
            num: 'h014',
        },
        {
            id: 15,
            name: '电影15',
            num: 'h015',
        },
        {
            id: 16,
            name: '电影16',
            num: 'h015',
        }
    ]
};


//详情页电影数据
var detailMovie = [
    {
        title: '电影详情页',
        movie: {
            id: 1,
            name: '非诚勿扰',
            price:15,
            preprice:18,
            director: '送给你的她',
            different:'限时特价'
        }
    },
    {
        title: '电影详情页',
        movie: {
            id: 2,
            name: '雪国列车',
            price:18,
            preprice:20,
            director: '肯定在下雪',
            different:'限时特价'
        }
    },
    {
        title: '电影详情页',
        movie: {
            id: 3,
            name: '激战',
            price:20,
            preprice:30,
            director: '彭于晏激情燃炸',
            different:'掉血促销'
        }
    },
    {
        title: '电影详情页',
        movie: {
            id: 4,
            name: '寒战',
            price:25,
            preprice:30,
            director: '港片警匪大作战',
            different:'快来看啊'
        }
    },
    {
        title: '电影详情页',
        movie: {
            id: 5,
            name: '生死狙击',
            price:20,
            preprice:30,
            director: '彭于晏激情燃炸',
            different:'即可秒杀'
        }
    },
    {
        title: '电影详情页',
        movie: {
            id: 6,
            name: '源代码',
            price:20,
            preprice:30,
            director: '为什么要写代码',
            different:'掉血促销'
        }
    },
    {
        title: '电影详情页',
        movie: {
            id: 7,
            name: '嫌疑人X的献身',
            price:20,
            preprice:30,
            director: '你说献身就献身吗',
            different:'走起走起'
        }
    },
    {
        title: '电影详情页',
        movie: {
            id: 8,
            name: '电影8',
            price:20,
            preprice:30,
            director: '电影8很好看',
            different:'走起走起'
        }
    },
    {
        title: '电影详情页',
        movie: {
            id: 9,
            name: '电影9',
            price:20,
            preprice:30,
            director: '电影9很好看',
            different:'走起走起'
        }
    },
    {
        title: '电影详情页',
        movie: {
            id: 10,
            name: '电影10',
            price:20,
            preprice:30,
            director: '电影10很好看',
            different:'走起走起'
        }
    },
    {
        title: '电影详情页',
        movie: {
            id: 11,
            name: '电影11',
            price:20,
            preprice:30,
            director: '电影11很好看',
            different:'走起走起'
        }
    },
    {
        title: '电影详情页',
        movie: {
            id: 12,
            name: '电影12',
            price:20,
            preprice:30,
            director: '电影12很好看',
            different:'走起走起'
        }
    },
    {
        title: '电影详情页',
        movie: {
            id: 13,
            name: '电影13',
            price:20,
            preprice:30,
            director: '电影13很好看',
            different:'走起走起'
        }
    },
    {
        title: '电影详情页',
        movie: {
            id: 14,
            name: '嫌疑人X的献身',
            price:20,
            preprice:30,
            director: '电影14很好看',
            different:'走起走起'
        }
    },
    {
        title: '电影详情页',
        movie: {
            id: 15,
            name: '电影15',
            price:20,
            preprice:30,
            director: '电影15很好看',
            different:'走起走起'
        }
    },
    {
        title: '电影详情页',
        movie: {
            id: 16,
            name: '电影16',
            price:20,
            preprice:30,
            director: '电影16很好看',
            different:'走起走起'
        }
    },
];


module.exports = {
    homeMovie: homeMovie,
    getDetailMovie: function(id) {
        for (var i=0; i <　detailMovie.length; i++) {
            if(detailMovie[i].movie.id == id){
                return detailMovie[i];
            }
        }
        return 'no';
    }
}