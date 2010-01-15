
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
  ["http://japan.cnet.com/clip/global/story/0,3800097347,20404149,00.htm","グーグル、「Google Reader」にファビコン機能を追加:ニュースクリップ - CNET Japan","グーグル、「Google Reader」にファビコン機能を追加:ニュースクリップ"],
  ["http://japan.cnet.com/clip/global/story/0,3800097347,20404336,00.htm","波力発電装置「Oyster」、スコットランド沖合で稼働開始:ニュースクリップ - CNET Japan","波力発電装置「Oyster」、スコットランド沖合で稼働開始:ニュースクリップ"],
  ["http://gigazine.net/index.php?/news/comments/20091120_pdp_lcd/","液晶テレビよりも消費電力の低いプラズマテレビをパナソニックが発売へ - GIGAZINE","液晶テレビよりも消費電力の低いプラズマテレビをパナソニックが発売へ"],
  ["http://gigazine.net/index.php?/news/comments/20091125_coma/","23年間植物状態と思われていた男性に実はずっと意識があったことが判明 - GIGAZINE","23年間植物状態と思われていた男性に実はずっと意識があったことが判明"],
  ["http://www.kobe-np.co.jp/knews/0002541870.shtml","神戸新聞｜全国海外ニュース｜社会｜やり直し二審、痴漢を否定","社会｜やり直し二審、痴漢を否定"],
  ["http://www.kobe-np.co.jp/news/jiken/0002492267.shtml","神戸新聞｜事件・事故｜ＪＲ塚口駅で車両に不具合　６本が運休","ＪＲ塚口駅で車両に不具合　６本が運休"],
  ["http://headlines.yahoo.co.jp/hl?a=20091104-00000152-jij-soci","年末年始に初の往復割引＝「1000円」高速対抗も−JR東（時事通信） - Yahoo!ニュース","年末年始に初の往復割引＝「1000円」高速対抗も−JR東"],
  ["http://headlines.yahoo.co.jp/hl?a=20091104-00000607-san-bus_all","ＪＲ東が大幅割引　「１０００円高速」に対抗（産経新聞） - Yahoo!ニュース","ＪＲ東が大幅割引　「１０００円高速」に対抗"],
  ["http://journal.mycom.co.jp/articles/2010/01/07/gumblar/index.html","【レポート】ウイルス「Gumblar」が企業サイトを改竄 - JR東日本、ホンダ、モロゾフなど | 経営 | マイコミジャーナル","【レポート】ウイルス「Gumblar」が企業サイトを改竄 - JR東日本、ホンダ、モロゾフなど | 経営"],
  ["http://journal.mycom.co.jp/news/2009/11/09/027/index.html","明治時代製造、現役最古のボギー電車が営業運行 - 長崎電軌軌道開通記念 | ライフ | マイコミジャーナル","明治時代製造、現役最古のボギー電車が営業運行 - 長崎電軌軌道開通記念 | ライフ"],
  ["http://kyushu.yomiuri.co.jp/keizai/detail/20091222-OYS1T00758.htm","新博多駅ビル７割完成　ＪＲ九州社長らが上棟式 : 九州経済 : 九州発 : YOMIURI ONLINE（読売新聞）","新博多駅ビル７割完成　ＪＲ九州社長らが上棟式 : 九州経済"],
  ["http://kyushu.yomiuri.co.jp/keizai/detail/20091225-OYS1T00202.htm","ＪＲ九州 上海で飲食業展開へ、来年中に現地事務所 : 九州経済 : 九州発 : YOMIURI ONLINE（読売新聞）","ＪＲ九州 上海で飲食業展開へ、来年中に現地事務所 : 九州経済"],
  ["http://mainichi.jp/select/biz/news/20091112k0000m020153000c.html","東北新幹線：「はやて」廃止へ　新型導入で列車名公募 － 毎日ｊｐ(毎日新聞)","東北新幹線：「はやて」廃止へ　新型導入で列車名公募"],
  ["http://mainichi.jp/select/biz/news/20091126k0000m010145000c.html","整備新幹線：未着工区間見送り…１０年度予算で方針 － 毎日ｊｐ(毎日新聞)","整備新幹線：未着工区間見送り…１０年度予算で方針"],
  ["http://news.kanaloco.jp/localnews/article/0911080016/","沿線火災で相模線が一時運休/海老名：ローカルニュース : ニュース : カナロコ -- 神奈川新聞社","沿線火災で相模線が一時運休/海老名"],
  ["http://news.kanaloco.jp/localnews/article/0911110018/","信号トラブルで計２万６千人に影響/相模、横浜両線：ローカルニュース : ニュース : カナロコ -- 神奈川新聞社","信号トラブルで計２万６千人に影響/相模、横浜両線"],
  ["http://news24.jp/articles/2009/11/21/07148287.html","電車が線路上の側溝フタと衝突　ケガ人なし | 日テレNEWS24","電車が線路上の側溝フタと衝突　ケガ人なし"],
  ["http://news24.jp/articles/2009/11/25/07148498.html","通勤ラッシュの車内で痴漢　男を現行犯逮捕 | 日テレNEWS24","通勤ラッシュの車内で痴漢　男を現行犯逮捕"],
  ["http://osaka.yomiuri.co.jp/eco/news/20091120-OYO8T00271.htm","２０３５関空スーパーハブ構想、大阪府が公表 : 経済 ピックアップ : 経済　科学 : 関西発 : YOMIURI ONLINE（読売新聞）","２０３５関空スーパーハブ構想、大阪府が公表 : 経済 ピックアップ : 経済　科学"],
  ["http://osaka.yomiuri.co.jp/ekiben/eb100106a.htm","いなり寿し（ＪＲ・伊東駅）: 小林しのぶさんの駅弁閑話 : 人 遊 食 : 関西発 : YOMIURI ONLINE（読売新聞）","いなり寿し（ＪＲ・伊東駅）: 小林しのぶさんの駅弁閑話 : 人 遊 食"],
  ["http://response.jp/article/2009/11/18/132670.html","JR東海博物館に太陽光発電 | レスポンス自動車ニュース（Response.jp）","JR東海博物館に太陽光発電"],
  ["http://response.jp/article/2009/11/25/132942.html","西武鉄道、開かずの踏み切り一部解消 | レスポンス自動車ニュース（Response.jp）","西武鉄道、開かずの踏み切り一部解消"],
  ["http://sankei.jp.msn.com/affairs/disaster/091207/dst0912072233007-n1.htm","ＪＲ西漏洩問題検証チーム初会合　遺族ら「報告書書き換えるつもりで」　  (1/2ページ) - MSN産経ニュース","ＪＲ西漏洩問題検証チーム初会合　遺族ら「報告書書き換えるつもりで」　"],
  ["http://svr.sanyo.oni.co.jp/news_k/news/d/2009111701000945/","ＪＲ西、国交相に１８日改善報告　脱線事故報告書漏えい - 山陽新聞地域ニュース","ＪＲ西、国交相に１８日改善報告　脱線事故報告書漏えい"],
  ["http://svr.sanyo.oni.co.jp/news_s/news/d/2009112912241092/","片上鉄道跡１５キロを散策　健康ウオークに５００人参加 - 山陽新聞地域ニュース","片上鉄道跡１５キロを散策　健康ウオークに５００人参加"],
  ["http://techon.nikkeibp.co.jp/article/COLUMN/20091207/178343/","日本の鉄道技術を世界に売り込むために - 産業動向 - Tech-On！","日本の鉄道技術を世界に売り込むために - 産業動向"],
  ["http://techon.nikkeibp.co.jp/article/FEATURE/20091113/177607/","第3回：「改札機」と「入退出」，両面作戦に挑む（上） - 電子部品 - Tech-On！","第3回：「改札機」と「入退出」，両面作戦に挑む（上） - 電子部品"],
  ["http://www.47news.jp/movie/general/post_3601/","ＪＲ西日本、報告書を提出 : 動画 - 47NEWS (よんななニュース)","ＪＲ西日本、報告書を提出 : 動画"],
  ["http://www.47news.jp/movie/general/post_3735/","「これでは犬死に」 : 動画 - 47NEWS (よんななニュース)","「これでは犬死に」 : 動画"],
  ["http://www.afpbb.com/article/disaster-accidents-crime/disaster/2678965/5113417","濃霧で列車事故3件、10人死亡 インド北部　写真5枚　国際ニュース : AFPBB News","濃霧で列車事故3件、10人死亡 インド北部　写真5枚"],
  ["http://www.afpbb.com/article/economy/2668058/4962552","韓国鉄道公社、1万6000人がスト突入　写真5枚　国際ニュース : AFPBB News","韓国鉄道公社、1万6000人がスト突入　写真5枚"],
  ["http://www.asahi.com/international/jinmin/TKY200911190280.html","asahi.com：中米　新型高速列車・内燃機関めぐり協力覚書調印 - 人民日報 - 国際","中米　新型高速列車・内燃機関めぐり協力覚書調印 - 人民日報 - 国際"],
  ["http://www.asahi.com/international/jinmin/TKY200912020321.html","asahi.com：中国の次世代高速列車、風洞試験を実施 - 人民日報 - 国際","中国の次世代高速列車、風洞試験を実施 - 人民日報 - 国際"],
  ["http://www.asahi.com/kids/kotoba/TKY200912290153.html","アサヒ・コムきっず：フリーゲージトレインとは？ - ことばなるほどね！ - 学ぼう","アサヒ・コムきっず：フリーゲージトレインとは？"],
  ["http://www.asahi.com/kids/news/TKY200911240322.html","アサヒ・コムきっず：年末年始、鉄道の旅がお得に - 最新ニュース - 読もう","アサヒ・コムきっず：年末年始、鉄道の旅がお得に"],
  ["http://www.asahi.com/travel/rail/gallery/091215ctrl/","asahi.com （朝日新聞社）：日立の高速列車、英国で発車 - 鉄道 - トラベル","日立の高速列車、英国で発車 - 鉄道 - トラベル"],
  ["http://www.asahi.com/travel/rail/gallery/100112chinasl/","asahi.com （朝日新聞社）：中国・内蒙古のＳＬ - トラベル","中国・内蒙古のＳＬ - トラベル"],
//</CleanseTitleCases>
];
