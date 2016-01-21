// var emotionModel = {
//  "angry" : {
//     "bias" : -2.3768163629,
//     "coefficients" : [-0.026270300474413848, -0.037963304603547195, -0.25318394482150264, 0.36801694354709802, 0.059638621925431838, -6.3145056900010567e-17, 0.094520059272651849, 0.21347244366388901, 0.42885313652690621, -1.5592214434343613e-14, 0.13850079872874066, -5.1485910666665307e-16, 0.33298910350203975, 8.0357363919330235e-16, 0.0025325096363696059, -0.44615090964065951, -1.5784656134660036e-15, 0.047596008125675944],
//   },
//  "disgusted" : {"bias" : -2.27900176842,"coefficients" : [0.042360511043701296, -0.1282033922181087, -0.12391812407152457, 0.27567823277270387, -0.1421150306247343, 3.1081856766624292e-16, 0.12612972927139088, 0.23426310789552218, 0.058894842405560956, -4.0618311657856847e-15, 0.22340906131116328, -5.81584759084207e-15, 0.25735218595500009, 1.3658078149815552e-15, -0.12506850140605949, -0.9463447584787309, -4.555025133881674e-15, 0.07141679477545719],},
//  // "fear" : {"bias" : -3.40339917096,"coefficients" : [-0.1484066846778026, 0.090079860583144475, 0.16138464891003612, -0.078750143250805593, -0.070521075864349317, -3.6426173865029096e-14, 0.54106033239630258, 0.049586639890528791, -0.10793093750863458, -5.1279691693889055e-15, -0.092243236155683667, -1.5165430767377168e-14, 0.19842076279793416, 3.8282960479670228e-15, -0.67367184030514637, -0.2166709100861198, 1.1995348541944584e-14, -0.20024153378658624],},
//  // "sad" : {
//  //    "bias" : -2.75274632938,
//  //    "coefficients" : [0.092611010001705449, 0.12883530427748521, 0.068975994604949298, 0.19623077060801897, -0.055312197843294802, 3.5874521027522394e-16, 0.46315306348086854, -0.32103622843654361, -0.46536626891885491, 1.725612051187888e-14, -0.40841535552399683, 2.1258665882389598e-14, 0.45405204011625938, 5.9194289392226669e-15, 0.094410500655151899, -0.4861387223131064, -3.030330454831321e-15, 0.73708254653765559],
//  //  },
//  "surprised" : {
//     "bias" : -2.86262062696,
//     "coefficients" : [-0.12854109490879712, 0.049194392540246726, 0.22856553950573175, -0.2992140056765602, 0.25975558754705375, -1.4688408313649554e-09, -0.13685597104348368, -0.23581884244542603, 0.026447180058097462, 1.6822695398601112e-10, 0.095712304864421921, -4.4670230074132591e-10, 0.40505706085269738, 2.7821987602166784e-11, -0.54367856543588833, -0.096320945782919151, 1.4239801195516449e-10, -0.7238167998685946],
//   },
//  "happy" : {
//     "bias" : -1.4786712822,
//     "coefficients" : [0.014837209675880276, -0.31092627456808286, 0.1214238695400552, -0.45265837869400843, -0.36700140259900887, -1.7113646510738279e-15, -0.4786251427206033, -0.15377369505521801, -0.16948121903942992, 6.0300272629176253e-15, -0.021184992727875669, -6.9318606881292957e-15, -0.81611603551588852, -3.7883560238442657e-15, 0.1486320646217055, 0.94973410351769527, 3.6260400713070416e-15, -0.31361179943007411],
//   },
// };

var emotionModel = {
  "Log" : {
    "angry" : {"bias" : -2.01909661675,"coefficients" : [0.09466665021316994, -0.1467821670575978, -0.27944575845934255, 0.4371189244850022, 0.1259835769810819, -0.15537443389499578, 0.07876627807933116, 0.08134891189893724, 0.28356719960044663, -0.16397147317835423, -0.1188040937850232, 0.04219339753899805, 0.27727583266367134, 0.1031470968291067, 0.03890532877140903, -0.3469317639450872, 0.0, 0.10530636257183157],},
    //"disgusted" : {"bias" : -3.72147037282,"coefficients" : [0.035967200481269605, -0.27213845617648036, -0.1732817369807336, 0.42498935443139746, -0.18627664531260038, 0.10341826129602864, 0.169979595135678, 0.297774289658716, -0.14762630536303992, -0.32780778244884906, 0.4992259701090505, -0.1278574844251035, 0.29394512055034555, 0.0404300625207058, -0.24589757414568064, -1.1890750495042357, -0.27197259680990843, 0.054878986096015846],},
    //"fear" : {"bias" : -10.0541411049,"coefficients" : [-0.21462543759962877, 0.03453992296219361, 0.49696579604188373, -0.09362347873009527, 0.0, 0.0, 1.2254669503342897, -0.04818267112742659, -0.1826582151097339, 0.0, 0.0, 0.450717589815586, 1.0228173260282751, 0.05959752920570645, -1.598586532045421, -0.16308537997217762, 0.08525084113416806, -0.015152004777642567],},
    "sad" : {"bias" : -4.88653769058,"coefficients" : [0.10552348732900779, 0.19966874175194876, 0.19200541263256732, 0.45787927686283764, -0.008282422580561478, -0.17822972716599786, 0.7652170312455884, -0.36262455784233116, -0.5512707983146744, 0.09962617258003825, -0.538282239922129, 0.24447341686706198, 0.6332980853765694, 0.4958171762885258, -0.057240169695824676, -0.5432424216819398, -0.5060607758483384, 1.3990227016873764],},
    "surprised" : {"bias" : -6.99544713901,"coefficients" : [-0.15696102546997956, 0.1387740887055901, 0.431688813316789, -0.6683977026551193, 0.6400544224951693, 0.3811494703950707, -0.17694834543159246, -0.40826929182212046, -0.002810527043393799, 0.21872950211414408, 0.33370822727445765, -0.16075844133513592, 0.7401852419245435, -0.9956124963348091, -1.1043302873235958, -0.2912942935370948, 0.28670665908512805, -1.5295859564313488],},
    "happy" : {"bias" : -1.57187444833,"coefficients" : [0.009888928790978049, -0.29326029737815235, 0.10879063144221524, -0.4780324331697071, -0.35587741370772064, -0.168775440583778, -0.4824118696897951, -0.17430448861445172, -0.14575569870010155, -0.1127337733089222, -0.02262660207352455, -0.0008017748256782221, -0.8011724831229523, 0.0, 0.12236550108432301, 0.8914106369200263, 0.030719431568660947, -0.250291832660678],},
  },
  "Ridge" : {
    "angry" : {"bias" : 0.09375,"coefficients" : [0.004723011878174581, -0.004398465635550866, -0.015295750615046042, 0.02035878820594304, 0.006699577852087475, -0.009638572765367621, 0.008096992502263183, -0.0029197363708793967, 0.022196455313048785, -0.008737225348537134, -0.009492345799285746, -0.000654982908917183, 0.013803024370859718, 0.01445177823875457, 0.00457715674511602, -0.0262817383717785, 0.0010943598624124206, 0.0007729535598997618],},
    //"disgusted" : {"bias" : 0.0434027777778,"coefficients" : [0.0006622195518989141, -0.0047615608011827085, -0.00316943090094415, 0.009987818187125116, -0.003246154554635422, -0.00027074755711937494, 0.0019177873045067729, 0.0038566626498898597, -0.0009000562006214879, -0.006349759349631641, 0.00596415972406493, -0.0009551967361975059, 0.0022556099253082584, -0.0007157477887569791, -0.007010780897295468, -0.03827801486304339, -0.004848896007291371, 0.0051264612392986995],},
    //"fear" : {"bias" : 0.03125,"coefficients" : [-0.0057892722100043766, 0.0020665737063974912, 0.004832933664985484, -0.0024707002030386165, 3.654939184522324e-05, 0.001229350763492434, 0.019980800598470353, -0.00678063121091578, 0.003950110933463431, 0.0016763519743972395, -0.004347957655226937, -0.0016202275356709192, 0.010026338078489468, 2.6748692345352106e-05, -0.022573366893889783, -0.014688590422729776, 0.007526445589254788, -0.010557457462258685],},
    "sad" : {"bias" : 0.0486111111111,"coefficients" : [0.0012739479592255853, 0.0034831829499943692, 0.001965720324852864, 0.0033947486073786365, -0.005727832277238047, -0.0022208618106574537, 0.017047615510488563, -0.01400920006448076, -0.015718686199222287, 0.0011160379264069371, -0.010752583037979154, 0.00625533693461904, 0.019390544675296648, 0.0013439461873210705, 0.005569852459101549, -0.02391563569792387, -0.009230820255941758, 0.029021321646613633],},
    "surprised" : {"bias" : 0.0416666666667,"coefficients" : [-0.007291278207543148, 0.0038825387433793004, 0.00575780765266725, -0.007379818087465705, 0.00859664562998174, 0.006144034618455578, 0.0017112783283257712, -0.0112100919432103, 0.0015915513375848456, 0.002835790921130652, 0.005505012152414307, 0.004179321202217132, 0.005637948792163032, -0.01237995915967772, -0.01564098937975084, -0.011553868878182896, -0.0013901106396751635, -0.024950644543689504],},
    "happy" : {"bias" : 0.248263888889,"coefficients" : [-0.0005089840676392593, -0.026436285156585845, 0.007449079586784986, -0.034243611293156485, -0.026543111946234516, -0.014816691617174832, -0.027963721778123906, -0.012265359937428706, 0.001220639863761381, -0.0019051886761271355, -0.0035304873255912403, 0.0011941564301372384, -0.057658857502376475, -0.0068795627513946675, 0.02213822788227105, 0.0546167695953762, 0.004058064258860024, -0.023965930498229374],},
  },
  "Sensibility":{ "angry" : 8,  "disgusted" :10, "fear" : 10, "sad" : 10, "surprised" : 4, "happy" : 5 }
};

// var emotionModel = {
//   //"angry" : {"bias" : -2.11449372193,"coefficients" : [0.039520688061428826, 0.003078233699947871, 0.27259067028948836, -0.227050552049771, 0.04620601320347738, 0.18231454332112668, -0.09906881158171814, 0.31800310842336954, -0.033180078906400436, -0.1588008217586743, 0.20584027979999067, 0.29231275616709196, 0.17282577374941097, -0.3599545501166173, 0.350652670279547, -0.11927717765520889, 0.09773619631110331, -0.0330125229919545],},
//   //"disgusted" : {"bias" : -2.20181037271,"coefficients" : [-0.05536766296806291, 0.14665089530221148, 0.16618711992042154, -0.16852072135492055, -0.06798042240675273, 0.15839831295224277, -0.162370816064281, 0.2418241816537713, -0.21571351035734776, -0.4201478174325508, 0.0646641264496476, -0.02439618508202083, -0.0024610573397127896, -0.31561766635152455, 0.41441721677369664, -0.6083447064418567, -0.4220193639779448, 0.0008698426969816795],},
//   //"fear" : {"bias" : -2.61893733199,"coefficients" : [0.12285014214224718, -0.0858120887664331, -0.12957191193921733, 0.10086753855623308, 0.0026707040396008338, -0.01960888612696703, -0.39480695742680555, -0.14759693232362606, -0.05189088319598783, -0.026228193282048062, 0.1695668509594689, 0.14075313164165185, -0.040742125840301714, 0.2818215375230285, 0.5322308108357793, -0.20047055386212526, -0.008390287341496033, 0.00031422821610625843],},
//   "sad" : {"bias" : -2.08066289128,"coefficients" : [-0.0817001831432702, -0.1548231120464241, -0.04738368433334594, -0.024652518023800675, -0.025128724602732168, -0.23534564143198367, -0.3356036422840643, -0.37756129306671204, -0.09306889715974602, 0.06723744663045457, 0.2718499039752495, -0.15420003128441778, 0.4108903612915419, 0.005091468894716601, 0.0771543776251484, -0.6373918815437439, 0.37593323589237887, 0.15010785763805676],},
//   "surprised" : {"bias" : -2.42454234394,"coefficients" : [0.06629057295219719, -0.09543406001676916, -0.17839746100582443, 0.3056241920214211, 0.20439725346939158, -0.04755283504643476, 0.14580840237460907, -0.17370075538074944, 0.0457484639387949, -0.033867268872046184, 0.09100336246275108, 0.46697927143838464, -0.25614368485021416, 0.285385644811091, 0.26671224669459864, -0.1362736931927106, -0.19294953321907826, 0.48832178221624745],},
//   "happy" : {"bias" : -1.36622729174,"coefficients" : [-0.018948511898196792, 0.37668091296496997, -0.22189835437404468, 0.2830899359931189, -0.4114161005085399, -0.2366777815896637, 0.33965024517698084, 0.05124089426249464, 0.23047799906442956, 0.10280631079039078, -0.21503241339980017, -0.41340913972465243, -0.4914289719290868, 0.19758074564624226, -0.512190445509056, 0.6351817010371935, 0.19628920771810052, 0.029194816677631852],},
// };

/*var emotionModel = {
  "angry" : {"bias" : -2.11449372193,"coefficients" : [0.039520688061428826, 0.003078233699947871, 0.27259067028948836, -0.227050552049771, 0.04620601320347738, 0.18231454332112668, -0.09906881158171814, 0.31800310842336954, -0.033180078906400436, -0.1588008217586743, 0.20584027979999067, 0.29231275616709196, 0.17282577374941097, -0.3599545501166173, 0.350652670279547, -0.11927717765520889, 0.09773619631110331, -0.0330125229919545],},
  "disgusted" : {"bias" : -2.20181037271,"coefficients" : [-0.05536766296806291, 0.14665089530221148, 0.16618711992042154, -0.16852072135492055, -0.06798042240675273, 0.15839831295224277, -0.162370816064281, 0.2418241816537713, -0.21571351035734776, -0.4201478174325508, 0.0646641264496476, -0.02439618508202083, -0.0024610573397127896, -0.31561766635152455, 0.41441721677369664, -0.6083447064418567, -0.4220193639779448, 0.0008698426969816795],},
  "fear" : {"bias" : -2.61893733199,"coefficients" : [0.12285014214224718, -0.0858120887664331, -0.12957191193921733, 0.10086753855623308, 0.0026707040396008338, -0.01960888612696703, -0.39480695742680555, -0.14759693232362606, -0.05189088319598783, -0.026228193282048062, 0.1695668509594689, 0.14075313164165185, -0.040742125840301714, 0.2818215375230285, 0.5322308108357793, -0.20047055386212526, -0.008390287341496033, 0.00031422821610625843],},
  "sad" : {"bias" : -2.08066289128,"coefficients" : [-0.0817001831432702, -0.1548231120464241, -0.04738368433334594, -0.024652518023800675, -0.025128724602732168, -0.23534564143198367, -0.3356036422840643, -0.37756129306671204, -0.09306889715974602, 0.06723744663045457, 0.2718499039752495, -0.15420003128441778, 0.4108903612915419, 0.005091468894716601, 0.0771543776251484, -0.6373918815437439, 0.37593323589237887, 0.15010785763805676],},
  "surprised" : {"bias" : -2.42454234394,"coefficients" : [0.06629057295219719, -0.09543406001676916, -0.17839746100582443, 0.3056241920214211, 0.20439725346939158, -0.04755283504643476, 0.14580840237460907, -0.17370075538074944, 0.0457484639387949, -0.033867268872046184, 0.09100336246275108, 0.46697927143838464, -0.25614368485021416, 0.285385644811091, 0.26671224669459864, -0.1362736931927106, -0.19294953321907826, 0.48832178221624745],},
  "happy" : {"bias" : -1.36622729174,"coefficients" : [-0.018948511898196792, 0.37668091296496997, -0.22189835437404468, 0.2830899359931189, -0.4114161005085399, -0.2366777815896637, 0.33965024517698084, 0.05124089426249464, 0.23047799906442956, 0.10280631079039078, -0.21503241339980017, -0.41340913972465243, -0.4914289719290868, 0.19758074564624226, -0.512190445509056, 0.6351817010371935, 0.19628920771810052, 0.029194816677631852],},
};*/
// var emotionModel = {
// 	"angry" : {"bias" : -1.55987811246,"coefficients" : [-0.028194915197588148, -0.07157163408137392, -0.2500106943061084, -0.24088163318544759, 0.022783471136276837, 0.2655826829214572, 0.26199481046288037, -0.08584879302267316, -0.07169361149220728, -0.04893095148848419, 0.1263207480100826, -0.057234510420358285, -0.1711544753553001, -0.08553256385096474, 0.031196024786934638, -0.19839980454906403, 0.06847750803679961, 0.1775822147022951],},
// 	//"disgusted" : {"bias" : -2.09640293372,"coefficients" : [-0.11328246766872037, 0.08982438024592831, -0.14536811158126836, -0.13219204796259423, 0.04047374439729807, 0.2878580791922244, 0.019616683022963235, -0.23334226860205037, -0.3105663489856488, 0.1343137841951202, -0.1637326290729839, -0.3225586921290413, 0.21828776162693425, 0.01934559351984368, 0.6704071926782353, -0.28928069480517354, -0.022291383966750452, -0.020639273287754032],},
// 	//"fear" : {"bias" : -2.93143581419,"coefficients" : [0.0760770917795218, 0.0436851849800325, 0.10384046952270022, 0.004038786682994044, -0.09019710983178267, -0.45989297334713625, 0.39305947681734027, 0.2448933507171935, 0.14414059118428568, -0.06223839350159105, 0.03164156103804857, -0.11890902580454395, 0.3376921626394426, 0.5378695084459552, 0.5012346199835521, 0.4543407883836229, 0.1316669146796025, 0.05801168540740804],},
// 	"sad" : {"bias" : -1.81997988645,"coefficients" : [-0.06040652329547251, -0.14684594053447392, -0.09811034541245707, 0.1586642420365992, -0.05879257585686802, -0.15077474276679687, 0.12084722787923141, 0.24035236125270928, 0.3433941318469391, 0.23088027485502974, 0.09369181732125238, -0.11480529728415038, 0.06938799788412678, -0.11986948930368503, 0.3698426832147844, -0.003760881532478126, -0.32663708247169954, 0.708344641642956],},
// 	//"surprised" : {"bias" : -2.44905857763,"coefficients" : [0.24203583560618744, -0.111299212130039, 0.09046451127176675, 0.012059991514794265, 0.1729889396192371, -0.0762748832420974, -0.2457338724803427, -0.1513850264723636, 0.03875205585491313, 0.2367454984409465, -0.1693138530997286, -0.004984599450474086, 0.08752217993018604, 0.2702129744869956, -0.15383484763993008, 0.32713995595868434, -0.1429288077803212, -0.06389485295850894],},
// 	"happy" : {"bias" : -1.58208909522,"coefficients" : [-0.041196537908041016, 0.3323913338963144, 0.15053768205917423, 0.14693209436714888, -0.17731941602823711, -0.09132389359807352, -0.3213429724515986, 0.09768175974767779, -0.22256951664823996, -0.009251246194410338, 0.22440560970142023, 0.03374715862249437, -0.24503776189477605, -0.1067500950600315, -0.7342860466135217, 0.11445659775184934, 0.1298107543836868, -0.0974453182176994],},
// };