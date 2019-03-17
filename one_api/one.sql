SET NAMES UTF8;
DROP DATABASE IF EXISTS one;
CREATE DATABASE one CHARSET=UTF8;
USE one;
#创建分类列表
create table one_list(
   lid int primary key AUTO_INCREMENT,
   title varchar(50),
   author varchar(10),
   img_url varchar(50),
   pid tinyint,
   pname varchar(10)
);
insert into one_list values(null,"没有赏味期限，只有来日方长","周源远","img/t1.jpg",1,"阅读");
insert into one_list values(null,"如何避免被薛甄珠式的亲妈带进沟里?","王嫣芸","img/t2.jpg",1,"阅读");
insert into one_list values(null,"或许没有人是快乐的","荞麦","img/t3.jpg",1,"阅读");
insert into one_list values(null,"凭什么我属羊，就活该命不好","大灰灰","img/t4.jpg",1,"阅读");
insert into one_list values(null,"纪念海明威丨走路、寒冷、写作总是让我感到饥饿","杜梨","img/t5.jpg",1,"阅读");
insert into one_list values(null,"我们都低估了人生的漫长","韩松落","img/t6.jpg",1,"阅读");
insert into one_list values(null,"在上海，中产精英的一次晚餐","西岛","img/t7.jpg",1,"阅读");
insert into one_list values(null,"苦夏","冯骥才","img/t8.jpg",1,"阅读");
insert into one_list values(null,"暂时","国胜","img/t9.jpg",1,"阅读");
insert into one_list values(null,"谁的前半生","夏安","img/t10.jpg",1,"阅读");
insert into one_list values(null,"人病","贾平凹","img/t11.jpg",1,"阅读");
insert into one_list values(null,"姑娘，你是有价的","王嫣芸","img/t12.jpg",1,"阅读");
insert into one_list values(null,"这个世界未必所有事都如你所愿，但总有它的意思","馆长Jeekit","img/t2_1.jpg",2,"音乐");
insert into one_list values(null,"那些千山万水欢笑眼泪，到头来总要喝这一杯","梦醒","img/t2_2.jpg",2,"音乐");
insert into one_list values(null,"等我60岁了，还要再听他的声音","正正","img/t2_3.jpg",2,"音乐");
insert into one_list values(null,"清华和北大，我该去哪一所学吉他？","耀星","img/t2_4.jpg",2,"音乐");
insert into one_list values(null,"我却原谅了你，像海洋原谅了鱼","雨林","img/t2_5.jpg",2,"音乐");
insert into one_list values(null,"也许我们将来都会像王菲一样恋爱","七天路过","img/t2_6.jpg",2,"音乐");
insert into one_list values(null,"唱起歌来是王菲，但她更是独一无二的窦靖童","张小姐","img/t2_7.jpg",2,"音乐");
insert into one_list values(null,"他是男版王菲，还是绝版的尹毓恪？","米情等二位","img/t2_8.jpg",2,"音乐");
insert into one_list values(null,"三姑娘的“火热”夏天","石小飞","img/t2_9.jpg",2,"音乐");
insert into one_list values(null,"从木马到木玛，从诗人到艺人","谭天","img/t2_10.jpg",2,"音乐");
insert into one_list values(null,"豆瓣9.9，再也找不到比它评价更牛的剧了","鱼叔","img/t3_1.jpg",3,"影视");
insert into one_list values(null,"错过这部国产剧，是你今年最大的遗憾","鱼叔","img/t3_2.jpg",3,"影视");
insert into one_list values(null,"这部科幻神作，尺度大到连HBO都不敢拍","鱼叔","img/t3_4.jpg",3,"影视");
insert into one_list values(null,"漫威宇宙新秀，万磁王的女儿“迷不倒你算我输”！","刺木","img/t3_13.jpg",3,"影视");
insert into one_list values(null,"Exo me？这部日剧居然教你如何找小三！","短泽雅美","img/t3_5.jpg",3,"影视");
insert into one_list values(null,"釜山电影节闭幕了，我来总结一下这几天的收获","鱼叔","img/t3_6.jpg",3,"影视");
insert into one_list values(null,"你为什么要结婚？这部高分韩剧比你预想的还要贴近现实","乔麦","img/t3_7.jpg",3,"影视");
insert into one_list values(null,"把儿子当老公用，不是“变态”那么简单","有部电影","img/t3_8.jpg",3,"影视");
insert into one_list values(null,"《王牌特工2》：作弊像谍战很厉害？谍战一直都是作弊啊","金刚郎","img/t3_9.jpg",3,"影视");
insert into one_list values(null,"论自黑，我们又输给了韩国人","固立果","img/t3_10.jpg",3,"影视");
insert into one_list values(null,"Eason丧偶后出轨，只有5集却可能是今年最好看的港剧","mal","img/t3_11.jpg",3,"影视");
insert into one_list values(null,"每个女孩子在看塞隆这部片前，都以为自己是直的","贩卖机","img/t3_3.jpg",3,"影视");
insert into one_list values(null,"苦等三年，大卫·芬奇的新剧你不追？","一个桃","img/t3_12.jpg",3,"影视");
insert into one_list values(null,"人间放逐","周于旸","img/7.jpg",1,"阅读");
insert into one_list values(null,"祝酒-第六章-深入暗网（下）","天爱","img/9.jpg",1,"阅读");
insert into one_list values(null,"如何解决战胜自己与做回自己之间的冲突","林庭答","img/4.jpg",1,"阅读");
insert into one_list values(null,"最初的那个人，总是用来成长的","董大胆","img/12.jpg",2,"音乐");
insert into one_list values(null,"特吕弗的孩童图鉴","一君","img/11.jpg",2,"影视");

#创建用户表
create table one_user(
    uid int primary key AUTO_INCREMENT,
    uname varchar(16),
    upwd varchar(32),
    email varchar(32)
);
insert into one_user values(null,"liuliu","123456","123456@qq.com");
#创建收藏列表
create table one_like(
    id int primary key AUTO_INCREMENT,
    lid int,
    uid int
);