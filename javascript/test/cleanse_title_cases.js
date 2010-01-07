
var CleanseTitleCases = [
//<CleanseTitleCases>
  ["http://mainichi.jp/area/iwate/news/20100107ddlk03020059000c.html","賞味期限切れ：南足柄・最乗寺売店、「きなこ飴」販売－－伊豆箱根鉄道直営　／神奈川 - 毎日ｊｐ(毎日新聞)","賞味期限切れ：南足柄・最乗寺売店、「きなこ飴」販売－－伊豆箱根鉄道直営　／神奈川"],
  ["http://mainichi.jp/area/osaka/news/20100107ddlk27040396000c.html","献血：よろしくね　大阪のホテルスタッフが協力呼びかけ－－ＪＲ大阪駅前　／大阪 - 毎日ｊｐ(毎日新聞)","献血：よろしくね　大阪のホテルスタッフが協力呼びかけ－－ＪＲ大阪駅前　／大阪"],
  ["http://mytown.asahi.com/aichi/news.php?k_id=24000000912030001","asahi.com:尾張旭の機関車　岐阜・下呂へ-マイタウン愛知","尾張旭の機関車　岐阜・下呂へ - 愛知"],
  ["http://mytown.asahi.com/akita/news.php?k_id=05000000911190001","asahi.com:内陸線応援　うたごえ高く-マイタウン秋田","内陸線応援　うたごえ高く - 秋田"],
  ["http://sankei.jp.msn.com/economy/business/100105/biz1001051908027-n1.htm","ＪＲ西が中高生用「白浜パンダきっぷ」発売 - MSN産経ニュース","ＪＲ西が中高生用「白浜パンダきっぷ」発売"],
  ["http://sankei.jp.msn.com/world/america/100105/amr1001051123007-n1.htm","米鉄道公社も保安強化へ　爆破テロ未遂で内部通達 - MSN産経ニュース","米鉄道公社も保安強化へ　爆破テロ未遂で内部通達"],
  ["http://www.47news.jp/CN/201001/CN2010010501000603.html","政府、中南米と経済関係強化へ　新幹線事業を後押し - 47NEWS（よんななニュース）","政府、中南米と経済関係強化へ　新幹線事業を後押し"],
  ["http://www.47news.jp/news/2010/01/post_20100105090701.html","鉄道廃止この１０年で６百キロ超　「東京―新大阪」上回る - 47NEWS（よんななニュース）","鉄道廃止この１０年で６百キロ超　「東京―新大阪」上回る"],
  ["http://www.asahi.com/international/update/0105/TKY201001050334.html","asahi.com（朝日新聞社）：ロシアでまた線路爆破事件、貨物列車が脱線　負傷者なし - 国際","ロシアでまた線路爆破事件、貨物列車が脱線　負傷者なし - 国際"],
  ["http://www.asahi.com/national/update/0105/TKY201001050398.html","asahi.com（朝日新聞社）：ＪＲ東など５社ＨＰに新型ウイルス　閲覧者も感染の恐れ - 社会","ＪＲ東など５社ＨＰに新型ウイルス　閲覧者も感染の恐れ - 社会"],
  ["http://www.chunichi.co.jp/article/aichi/20091112/CK2009111202000185.html","中日新聞:針穴に映る感動を写真に　列車などモチーフに制作:愛知(CHUNICHI Web)","針穴に映る感動を写真に　列車などモチーフに制作:愛知"],
  ["http://www.chunichi.co.jp/article/aichi/20091124/CK2009112402000026.html","中日新聞:勝川駅の高架化完了　記念乗車会に２５０人:愛知(CHUNICHI Web)","勝川駅の高架化完了　記念乗車会に２５０人:愛知"],
  ["http://www.yomiuri.co.jp/national/news/20100105-OYT1T00745.htm","ＪＲ東サイト改ざんウイルス、ホンダなども被害 : 社会 : YOMIURI ONLINE（読売新聞）","ＪＲ東サイト改ざんウイルス、ホンダなども被害 : 社会"],
  ["http://www.yomiuri.co.jp/national/news/20100105-OYT1T01399.htm","東武東上線の踏切、女性はねられ重傷 : 社会 : YOMIURI ONLINE（読売新聞）","東武東上線の踏切、女性はねられ重傷 : 社会"],
  ["http://www.jiji.com/jc/c?g=eco_30&k=2009111800949","時事ドットコム：現職委員２人の辞任求める＝ＪＲ西の報告受け前原国交相","現職委員２人の辞任求める＝ＪＲ西の報告受け前原国交相"],
  ["http://www.jiji.com/jc/c?g=eco_30&k=2009112400798","時事ドットコム：未着工３区間「年内に基本方針」＝整備新幹線−前原国交相","未着工３区間「年内に基本方針」＝整備新幹線−前原国交相"],
  ["http://slashdot.jp/article.pl?sid=09/06/16/0529244","リニア中央新幹線、ルートを巡って論争に - スラッシュドット・ジャパン","リニア中央新幹線、ルートを巡って論争に"],
  ["http://slashdot.jp/article.pl?sid=09/03/31/0414257","JTB時刻表、通巻999号を迎える - スラッシュドット・ジャパン","JTB時刻表、通巻999号を迎える"],
  ["http://www.tokyo-np.co.jp/article/chiba/20091107/CK2009110702000096.html","東京新聞:モノレールが衝突　千葉　作業中のクレーン車に　乗客１６０人けがなし:千葉(TOKYO Web)","モノレールが衝突　千葉　作業中のクレーン車に　乗客１６０人けがなし:千葉"],
  ["http://www.tokyo-np.co.jp/article/chiba/20091115/CK2009111502000082.html","東京新聞:ボジョレ列車　１９日に特別運行　千葉モノレール:千葉(TOKYO Web)","ボジョレ列車　１９日に特別運行　千葉モノレール:千葉"],
  ["http://www.hokkaido-np.co.jp/news/aomori/202811.html","津軽鉄道のストーブ列車あすから運行−北海道新聞[青森からこんにちは]","津軽鉄道のストーブ列車あすから運行"],
  ["http://www.hokkaido-np.co.jp/news/aomori/202993.html","東北新幹線 全線開通まであと1年−北海道新聞[青森からこんにちは]","東北新幹線 全線開通まであと1年"],
//</CleanseTitleCases>
];
