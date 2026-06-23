const PRODUCTS = {
    'bag-geometry': {
        brand: 'OKURIH',
        name: 'Geometry Bag',
        category: 'Bag',
        priceEx: 8800,
        white: 'images/product/bag/bag-geometry.webp',
        black: '',
        gallery: {
            White: [
                'images/product/bag/bag-geometry.webp',
                'images/product/bag/bag-geometry-Model1.webp',
                'images/product/bag/bag-geometry-Model2.webp',
                'images/product/bag/bag-geometry-Model3.webp'
            ]
        },
        hideColorOptions: true,
        sizes: ['One Size'],
        activeSize: 'One Size',
        material: 'High-density polyester canvas / synthetic leather trim',
        origin: 'Vietnam',
        materialNote: '日常使いしやすいキャンバス素材を選びつつ、密度とトリムのバランスにこだわることで、ラフすぎない清潔感のある印象に仕上げています。',
        link: 'product-bag-geometry.html',
        description: '軽やかなストリート感をまとったOKURIHのグラフィックバッグ。扱いやすいカジュアル素材を使いながら、スタイリングが引き締まる見え方を意識しています。',
        points: ['繰り返し使いやすい軽さと、ほどよい形の安定感があります。', 'グラフィックの配置が、主張しすぎずコーディネートのアクセントになります。', 'カジュアルな素材でも雑に見えないよう、持ち手やトリムのバランスを整えています。'],
        care: ['汚れた場合は柔らかい布でやさしく拭き取ってください。', '濡れた場合は形を整え、風通しの良い日陰で乾かしてください。', '直射日光と高温多湿を避けて保管してください。']
    },
    'hoodie-heart': {
        brand: 'OKURIH',
        name: 'Heart Hoodie',
        category: 'Hoodie',
        priceEx: 6800,
        white: 'images/product/hoodie/hoodie-Heart.webp',
        black: 'images/product/hoodie/hoodie-heart-B.webp',
        gallery: {
            White: [
                'images/product/hoodie/hoodie-Heart.webp',
                'images/product/hoodie/hoodie-Heart-Model1.webp',
                'images/product/hoodie/hoodie-Heart-Model2.webp',
                'images/product/hoodie/hoodie-Heart-Model3.webp'
            ],
            Black: [
                'images/product/hoodie/hoodie-heart-B.webp',
                'images/product/hoodie/hoodie-Heart-B-Model1.webp',
                'images/product/hoodie/hoodie-Heart-B-Model2.webp',
                'images/product/hoodie/hoodie-Heart-B-Model3.webp'
            ]
        },
        sizes: ['S', 'M', 'L', 'XL'],
        activeSize: 'M',
        material: 'Heavy cotton fleece blend',
        origin: 'China',
        materialNote: '気軽に着られるフリースブレンドを使いながら、厚み、プリントの見え方、ストリートらしいシルエットには妥協しない設計にしています。',
        link: 'product-hoodie-heart.html',
        description: 'ハートモチーフを効かせたOKURIHのフーディー。ラフに着られるシルエットながら、グラフィックと生地の厚みで日常着以上の存在感を持たせています。',
        points: ['ほどよい厚みと落ち感のある、ストリート寄りのゆったりしたシルエットです。', '袖口と裾のリブで、ラフな中にもきれいな収まりを作っています。', '一枚で着たときに主役になるよう、プリント位置を調整しています。'],
        care: ['洗濯ネットを使用し、裏返して弱水流で洗ってください。', 'プリント部分への直接アイロンは避けてください。', '乾燥機は使用せず、形を整えて陰干ししてください。']
    },
    'tshirt-geometry': {
        brand: 'EOLE',
        name: 'Geometry T-Shirt',
        category: 'T-Shirt',
        priceEx: 11500,
        white: 'images/product/shirt/tshirt-geometry.webp',
        black: 'images/product/shirt/tshirt-geometry-B.webp',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        activeSize: 'M',
        material: 'Mercerized Supima cotton jersey',
        origin: 'Japan',
        materialNote: '長繊維のスーピマコットンにシルケット加工を施し、なめらかな表面感、上品な光沢、落ち感のあるシルエットを引き出しています。',
        link: 'product-tshirt-geometry.html',
        description: 'シャープな幾何学モチーフを主役にしたEOLEのTシャツ。磨かれたようなコットンの表面感が、グラフィックに静かな高級感を与えます。'
    },
    'tshirt-geometry-marble': {
        brand: 'EOLE',
        name: 'Geometry Marble T-Shirt',
        category: 'T-Shirt',
        priceEx: 12000,
        white: 'images/product/shirt/tshirt-geometry-marble.webp',
        black: 'images/product/shirt/tshirt-geometry-marble-B.webp',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        activeSize: 'M',
        material: 'Silk-cotton smooth jersey',
        origin: 'Italy',
        materialNote: 'シルク混のコットン素材を選ぶことで、マーブルグラフィックにほのかな艶と柔らかな高級感を加えています。',
        link: 'product-tshirt-geometry-marble.html',
        description: '幾何学とマーブルの質感を組み合わせたEOLEのグラフィックT。素材の上質な艶が、アートピースのような奥行きを引き立てます。'
    },
    'tshirt-logo-collage': {
        brand: 'EOLE',
        name: 'Logo Collage T-Shirt',
        category: 'T-Shirt',
        priceEx: 11500,
        white: 'images/product/shirt/tshirt-logo-collage.webp',
        black: 'images/product/shirt/tshirt-logo-collage-B.webp',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        activeSize: 'M',
        material: 'Compact Egyptian cotton jersey',
        origin: 'Japan',
        materialNote: 'コンパクトに編み立てたエジプト綿を使用し、密度のあるなめらかな手触りに仕上げています。ロゴコラージュがくっきり見える表面感です。',
        link: 'product-tshirt-logo-collage.html',
        description: 'EOLEのロゴ表現をコラージュのように構成したTシャツ。上質なコットンボディが、グラフィックをシャープかつ控えめに見せます。'
    },
    'tshirt-logo-collage2': {
        brand: 'EOLE',
        name: 'Logo Collage Due T-Shirt',
        category: 'T-Shirt',
        priceEx: 11500,
        white: 'images/product/shirt/tshirt-logo-collage2.webp',
        black: 'images/product/shirt/tshirt-logo-collage2-B.webp',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        activeSize: 'M',
        material: 'Sea Island cotton blend jersey',
        origin: 'Portugal',
        materialNote: '柔らかさと上品な表面感を重視し、シーアイランドコットンブレンドを採用。強めのロゴ構成に、ラグジュアリーな余白を与えています。',
        link: 'product-tshirt-logo-collage2.html',
        description: 'より大胆なロゴコラージュを見せるEOLEのTシャツ。柔らかなプレミアムジャージーが、グラフィックの強さを上品に受け止めます。'
    },
    'tshirt-luna-logo': {
        brand: 'EOLE',
        name: 'Luna Logo T-Shirt',
        category: 'T-Shirt',
        priceEx: 12000,
        white: 'images/product/shirt/tshirt-luna-logo.webp',
        black: 'images/product/shirt/tshirt-luna-logo-B.webp',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        activeSize: 'M',
        material: 'Fine gauge organic cotton jersey',
        origin: 'Japan',
        materialNote: '細番手のオーガニックコットンを使い、静かでなめらかな肌触りに仕上げています。Lunaロゴの控えめな表情を邪魔しない素材感です。',
        link: 'product-tshirt-luna-logo.html',
        description: 'Lunaロゴを静かに配置したEOLEのTシャツ。繊細なコットンの表面が、ミニマルなデザインをより洗練された印象にします。'
    },
    'tshirt-luna-logo2': {
        brand: 'EOLE',
        name: 'Luna Logo Due T-Shirt',
        category: 'T-Shirt',
        priceEx: 12000,
        white: 'images/product/shirt/tshirt-luna-logo2.webp',
        black: 'images/product/shirt/tshirt-luna-logo2-B.webp',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        activeSize: 'M',
        material: 'Cashmere-touch cotton jersey',
        origin: 'Italy',
        materialNote: '通常のTシャツ素材よりも柔らかく、上品な落ち感が出るカシミヤタッチのコットンジャージーを採用しています。',
        link: 'product-tshirt-luna-logo2.html',
        description: 'Lunaロゴの構成を変えたEOLEのバリエーションモデル。柔らかなジャージー素材が、ミニマルなグラフィックをより上質に見せます。'
    },
    'tshirt-marble': {
        brand: 'EOLE',
        name: 'Marble T-Shirt',
        category: 'T-Shirt',
        priceEx: 12000,
        white: 'images/product/shirt/tshirt-marble.webp',
        black: 'images/product/shirt/tshirt-marble-B.webp',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        activeSize: 'M',
        material: 'Pima cotton interlock',
        origin: 'Portugal',
        materialNote: '厚みとなめらかさを兼ね備えたピマコットンのインターロック素材を採用。マーブルグラフィックにギャラリーピースのような存在感を与えています。',
        link: 'product-tshirt-marble.html',
        description: 'マーブルグラフィックを大胆に扱ったEOLEのTシャツ。密度のあるプレミアムボディが、デザインに奥行きと構築感を加えます。'
    },
    'tshirt-polo': {
        brand: 'EOLE',
        name: 'Polo T-Shirt',
        category: 'T-Shirt',
        priceEx: 13800,
        white: 'images/product/shirt/tshirt-polo.webp',
        black: 'images/product/shirt/tshirt-polo-B.webp',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        activeSize: 'M',
        material: 'High-twist cotton pique jersey',
        origin: 'Japan',
        materialNote: '強撚コットンを使用し、さらりとしたタッチと形の残りやすさを両立。ポロライクな端正さに合う、張りのある素材感です。',
        link: 'product-tshirt-polo.html',
        description: 'ポロの端正なムードをTシャツの軽さに落とし込んだEOLEの一枚。張りのあるコットンボディが、首元とグラフィックのバランスをきれいに保ちます。'
    },
    'shoe-eole': {
        brand: 'EOLE',
        name: 'EOLE Shoe',
        category: 'Shoe',
        priceEx: 26500,
        white: 'images/product/shoe/shoe-eole.webp',
        black: 'images/product/shoe/shoe-eole-B.webp',
        sizes: ['24', '24.5', '25', '25.5', '26', '26.5', '27', '27.5', '28'],
        activeSize: '27',
        material: 'Italian calf leather / rubber sole',
        origin: 'Italy',
        materialNote: 'きめ細かく豊かな表情を持つイタリアンカーフレザーを使用。ソールは日常での履きやすさを確保しながら、上品な輪郭を保つものを選んでいます。',
        link: 'product-shoe-eole.html',
        description: 'EOLEのミニマルな世界観を足元へ落とし込んだシューズ。上質なレザーの表面感と抑制されたフォルムが、スタイル全体を引き締めます。',
        points: ['装飾を抑えたクリーンなフォルムです。', '白黒どちらも上品なスタイリングに馴染む落ち着いた表情です。', '重く見えすぎないバランスで、足元に存在感を持たせています。'],
        care: ['柔らかい布で汚れを拭き取ってください。', '濡れた場合は風通しの良い日陰で乾かしてください。', '保管時は形を整え、直射日光を避けてください。']
    },
    'anorak-jacket-khaki': {
        brand: 'EOLE',
        name: 'Anorak Jacket Khaki',
        category: 'Outerwear',
        priceEx: 32800,
        white: 'images/product/tops/Anorak Jacket-Khaki.webp',
        black: '',
        gallery: {
            White: [
                'images/product/tops/Anorak Jacket-Khaki.webp',
                'images/product/tops/Anorak Jacket-Khaki-model1.webp',
                'images/product/tops/Anorak Jacket-Khaki-model2.webp',
                'images/product/tops/Anorak Jacket-Khaki-model3.webp'
            ]
        },
        hideColorOptions: true,
        sizes: ['S', 'M', 'L'],
        activeSize: 'M',
        material: 'Water-repellent cotton nylon shell / mesh lining',
        origin: 'Japan',
        materialNote: '軽さのあるコットンナイロンに撥水仕上げを施し、季節の変わり目に羽織りやすい質感に整えました。カーキの奥行きがアウトドア由来の機能感を上品に見せます。',
        link: 'product-anorak-jacket-khaki.html',
        description: 'EOLEのアノラックジャケットをカーキで仕立てたモデル。立体的なフードとゆとりのある身幅で、軽い雨や風を受け流しながら都会的なレイヤードにまとまります。',
        points: ['撥水性のある表地で、日常の天候変化に対応しやすい一着です。', '裾のドローコードでシルエットを調整できます。', 'カーキの落ち着いた色味が、デニムからスラックスまで自然になじみます。'],
        care: ['汚れは柔らかい布で軽く拭き取ってください。', '洗濯時はネットを使用し、弱水流で洗ってください。', '撥水性を保つため、乾燥機と高温アイロンは避けてください。']
    },
    'anorak-jacket': {
        brand: 'EOLE',
        name: 'Anorak Jacket',
        category: 'Outerwear',
        priceEx: 32800,
        white: 'images/product/tops/Anorak Jacket.webp',
        black: '',
        gallery: {
            White: [
                'images/product/tops/Anorak Jacket.webp',
                'images/product/tops/Anorak Jacket-model1.webp',
                'images/product/tops/Anorak Jacket-model2.webp',
                'images/product/tops/Anorak Jacket-model3.webp'
            ]
        },
        hideColorOptions: true,
        sizes: ['S', 'M', 'L'],
        activeSize: 'M',
        material: 'Compact nylon taffeta / cotton blend rib',
        origin: 'Japan',
        materialNote: '薄手ながら形が出やすいナイロンタフタを使用。マットな表情でスポーティに寄りすぎず、EOLEらしいミニマルな印象を保ちます。',
        link: 'product-anorak-jacket.html',
        description: '軽やかなシェル感とモードな余白を両立したEOLEのアノラックジャケット。大きめのフロントポケットと短すぎない着丈で、街着として扱いやすいバランスです。',
        points: ['薄く軽い生地で、バッグに入れて持ち運びやすい仕様です。', 'フードまわりの立ち上がりが、横顔の印象をすっきり見せます。', 'ワイドパンツにも細身のボトムにも合わせやすい分量感です。'],
        care: ['洗濯ネットを使用し、単独で洗ってください。', '濡れたまま長時間放置せず、形を整えて陰干ししてください。', 'アイロンを使う場合は低温で当て布をしてください。']
    },
    'heritage-safari-jacket': {
        brand: 'EOLE',
        name: 'Heritage Safari Jacket',
        category: 'Outerwear',
        priceEx: 39800,
        white: 'images/product/tops/Heritage Safari Jacket.webp',
        black: '',
        gallery: {
            White: [
                'images/product/tops/Heritage Safari Jacket.webp',
                'images/product/tops/Heritage Safari Jacket-model1.webp',
                'images/product/tops/Heritage Safari Jacket-model2.webp',
                'images/product/tops/Heritage Safari Jacket-model3.webp'
            ]
        },
        hideColorOptions: true,
        sizes: ['S', 'M', 'L'],
        activeSize: 'M',
        material: 'Linen cotton twill / horn-look buttons',
        origin: 'Japan',
        materialNote: 'リネン混のツイルに洗いをかけ、自然な節と柔らかな落ち感を出しました。端正なポケット配置でクラシックなサファリの要素を現代的に再構成しています。',
        link: 'product-heritage-safari-jacket.html',
        description: 'ヘリテージなサファリジャケットをEOLEの静かなムードで仕上げた一着。ウエストのベルトで輪郭を作ることも、開けてラフに羽織ることもできます。',
        points: ['4つのフラップポケットが実用性とデザインの軸になります。', 'ベルトを結ぶ位置で、すっきりした印象にもリラックスした印象にも調整できます。', '天然素材の風合いが、着るほどに表情を増していきます。'],
        care: ['天然繊維のため、濃色品との摩擦や水濡れにご注意ください。', '洗濯後は形を整えて陰干ししてください。', 'シワが気になる場合は当て布をして中温でアイロンをかけてください。']
    },
    'sahara-safari-dress': {
        brand: 'EOLE',
        name: 'Sahara Safari Dress',
        category: 'Dress',
        priceEx: 36800,
        white: 'images/product/tops/Sahara Safari Dress.webp',
        black: '',
        gallery: {
            White: [
                'images/product/tops/Sahara Safari Dress.webp',
                'images/product/tops/Sahara Safari Dress-model1.webp',
                'images/product/tops/Sahara Safari Dress-model2.webp',
                'images/product/tops/Sahara Safari Dress-model3.webp'
            ]
        },
        hideColorOptions: true,
        sizes: ['S', 'M', 'L'],
        activeSize: 'M',
        material: 'Dry touch rayon linen blend',
        origin: 'Japan',
        materialNote: '清涼感のあるレーヨンリネンを使い、肌離れのよいドライな着心地に仕上げました。サファリのディテールをドレスに落とし込み、凛とした縦のラインを作ります。',
        link: 'product-sahara-safari-dress.html',
        description: 'サファリジャケットの構築感をワンピースに変換したEOLEのSahara Safari Dress。ベルトでウエストを整えることで、一枚で完成するシャープな装いになります。',
        points: ['フロントのポケットとベルトが、シンプルな着こなしに奥行きを加えます。', '前を開ければロングジレのようにも着用できます。', 'ドライな素材感で春夏のレイヤードにも使いやすい一着です。'],
        care: ['洗濯ネットを使用し、弱水流で洗ってください。', '濡れた状態での摩擦は避けてください。', 'ハンガーで形を整え、風通しのよい日陰で乾かしてください。']
    },
    'signature-trench-coat': {
        brand: 'EOLE',
        name: 'Signature Trench Coat',
        category: 'Outerwear',
        priceEx: 39800,
        white: 'images/product/tops/Signature Trench Coat.webp',
        black: '',
        gallery: {
            White: [
                'images/product/tops/Signature Trench Coat.webp',
                'images/product/tops/Signature Trench Coat-model1.webp',
                'images/product/tops/Signature Trench Coat-model2.webp',
                'images/product/tops/Signature Trench Coat-model3.webp'
            ]
        },
        hideColorOptions: true,
        sizes: ['S', 'M', 'L'],
        activeSize: 'M',
        material: 'High-density cotton gabardine / cupro lining',
        origin: 'Japan',
        materialNote: '高密度に織り上げたコットンギャバジンを使用し、ほどよいハリと上品な光沢を持たせました。裏地には滑りのよいキュプラを合わせています。',
        link: 'product-signature-trench-coat.html',
        description: 'EOLEの基準となるシグネチャートレンチ。クラシックなディテールを削ぎ落としすぎずに残し、長く着られる端正なラインへ整えています。',
        points: ['肩まわりに余裕を持たせ、ジャケットの上からも羽織りやすい設計です。', 'ベルトの結び方でフォーマルにもカジュアルにも印象を変えられます。', '膝下まで流れる着丈が、全体を縦長に見せます。'],
        care: ['着用後はブラッシングし、湿気を飛ばしてから保管してください。', '汚れが気になる場合は専門店でのクリーニングをおすすめします。', '直射日光と高温多湿を避けて保管してください。']
    },
    'modern-oxford': {
        brand: 'EOLE',
        name: 'Modern Oxford',
        category: 'Shoe',
        priceEx: 28200,
        white: 'images/product/shoe/Modern Oxford.webp',
        black: '',
        gallery: {
            White: [
                'images/product/shoe/Modern Oxford.webp',
                'images/product/shoe/Modern Oxford-model1.webp',
                'images/product/shoe/Modern Oxford-model2.webp',
                'images/product/shoe/Modern Oxford-model3.webp'
            ]
        },
        hideColorOptions: true,
        sizes: ['24', '24.5', '25', '25.5', '26', '26.5', '27', '27.5', '28'],
        activeSize: '27',
        material: 'Polished calf leather / leather and rubber sole',
        origin: 'Italy',
        materialNote: 'きめ細かなカーフレザーを磨き込み、控えめな艶を持つ表情に仕上げました。ソールは革の端正さとラバーの歩きやすさを組み合わせています。',
        link: 'product-modern-oxford.html',
        description: 'クラシックなオックスフォードを、EOLEらしい細身のラストと軽いソールで現代的に整えた一足。スーツにもデニムにも合わせられる静かな存在感が魅力です。',
        points: ['トゥの丸みを抑えたラストで、足元をすっきり見せます。', 'レザーソールの上品さを保ちながら、接地面には滑りにくさを加えています。', '装飾を控えたデザインで、幅広いスタイリングに合わせやすい一足です。'],
        care: ['着用後は柔らかい布で汚れを落としてください。', '革用クリームで定期的に保湿してください。', '濡れた場合は風通しのよい日陰で乾かし、直射日光は避けてください。']
    },
    'heritage-monk': {
        brand: 'EOLE',
        name: 'Heritage Monk',
        category: 'Shoe',
        priceEx: 29800,
        white: 'images/product/shoe/Heritage Monk.webp',
        black: '',
        gallery: {
            White: [
                'images/product/shoe/Heritage Monk.webp',
                'images/product/shoe/Heritage Monk-model1.webp',
                'images/product/shoe/Heritage Monk-model2.webp',
                'images/product/shoe/Heritage Monk-model3.webp'
            ]
        },
        hideColorOptions: true,
        sizes: ['24', '24.5', '25', '25.5', '26', '26.5', '27', '27.5', '28'],
        activeSize: '27',
        material: 'Smooth calf leather / metal buckle / rubber sole',
        origin: 'Italy',
        materialNote: '滑らかなカーフレザーに小ぶりなメタルバックルを合わせ、主張を抑えたモンクストラップに仕上げました。ソールは日常使いしやすい返りの良さを重視しています。',
        link: 'product-heritage-monk.html',
        description: '伝統的なモンクシューズをミニマルに再解釈したEOLEのHeritage Monk。バックルのわずかな輝きが、シンプルな装いに品のある緊張感を添えます。',
        points: ['紐靴よりも抜け感があり、ローファーよりも引き締まった印象です。', '細身のストラップが甲をすっきり見せます。', 'ジャケットスタイルにも、ワイドパンツにも合わせやすいバランスです。'],
        care: ['着用後はシューキーパーで形を整えてください。', '金具部分は乾いた布で軽く拭いてください。', '革用クリームを薄く塗り、余分な油分は拭き取ってください。']
    },
    'modern-draped-shirt': {
        brand: 'EOLE',
        name: 'Modern Draped Shirt',
        category: 'Shirt',
        priceEx: 13800,
        white: 'images/product/shirt/Modern Draped Shirt.webp',
        black: '',
        gallery: {
            White: [
                'images/product/shirt/Modern Draped Shirt.webp',
                'images/product/shirt/Modern Draped Shirt-model1.webp',
                'images/product/shirt/Modern Draped Shirt-model2.webp',
                'images/product/shirt/Modern Draped Shirt-model3.webp'
            ]
        },
        hideColorOptions: true,
        sizes: ['S', 'M', 'L'],
        activeSize: 'M',
        material: 'Fluid triacetate blend broadcloth',
        origin: 'Japan',
        materialNote: '落ち感の美しいトリアセテート混素材を使用。光を受けたときの控えめな艶と、体の動きに沿う柔らかいドレープが特徴です。',
        link: 'product-modern-draped-shirt.html',
        description: 'シャツの端正さにドレープの余白を加えたEOLEのModern Draped Shirt。インでもアウトでも形が崩れにくく、軽い羽織りとしても使えます。',
        points: ['肩から袖にかけて自然な落ち感が出るパターンです。', '比翼風の前立てで、フロントをすっきり見せます。', '一枚でもジャケットのインナーでも上品にまとまります。'],
        care: ['洗濯ネットを使用し、弱水流で洗ってください。', '脱水は短時間にし、形を整えて陰干ししてください。', 'アイロンは低温で当て布を使用してください。']
    },
    'oversized-shirt': {
        brand: 'EOLE',
        name: 'Oversized Shirt',
        category: 'Shirt',
        priceEx: 11800,
        white: 'images/product/shirt/Oversized Shirt.webp',
        black: '',
        gallery: {
            White: [
                'images/product/shirt/Oversized Shirt.webp',
                'images/product/shirt/Oversized Shirt-model1.webp',
                'images/product/shirt/Oversized Shirt-model2.webp',
                'images/product/shirt/Oversized Shirt-model3.webp',
                'images/product/shirt/Oversized Shirt-model4.webp'
            ]
        },
        hideColorOptions: true,
        sizes: ['S', 'M', 'L'],
        activeSize: 'M',
        material: 'Crisp cotton poplin',
        origin: 'Japan',
        materialNote: '高密度のコットンポプリンを使い、清潔感のあるハリと軽さを両立しました。大きめのサイズ感でもだらしなく見えないよう、襟とカフスに程よい構築感を持たせています。',
        link: 'product-oversized-shirt.html',
        description: '余白のあるシルエットでスタイリングを整えるEOLEのOversized Shirt。肩を落としたリラックス感と、シャツらしい清潔な表情を両立しています。',
        points: ['一枚で着ても、羽織りとしても使いやすいボリュームです。', '長めの着丈でレイヤードに奥行きを作ります。', 'ハリのある生地が、オーバーサイズでも輪郭を保ちます。'],
        care: ['淡色品との洗濯をおすすめします。', '洗濯後はすぐに形を整えて干してください。', '襟とカフスは当て布をしてアイロンをかけるときれいに整います。']
    },
    'relaxed-fit-shirt': {
        brand: 'EOLE',
        name: 'Relaxed Fit Shirt',
        category: 'Shirt',
        priceEx: 10800,
        white: 'images/product/shirt/Relaxed Fit Shirt.webp',
        black: '',
        gallery: {
            White: [
                'images/product/shirt/Relaxed Fit Shirt.webp',
                'images/product/shirt/Relaxed Fit Shirt-model1.webp',
                'images/product/shirt/Relaxed Fit Shirt-model2.webp',
                'images/product/shirt/Relaxed Fit Shirt-model3.webp'
            ]
        },
        hideColorOptions: true,
        sizes: ['S', 'M', 'L'],
        activeSize: 'M',
        material: 'Soft cotton modal shirting',
        origin: 'Japan',
        materialNote: 'コットンにモダールをブレンドし、柔らかさと通気性を持たせました。自然な落ち感があり、リラックスした形でも上品に見える素材です。',
        link: 'product-relaxed-fit-shirt.html',
        description: '日常に取り入れやすい余裕を持たせたEOLEのRelaxed Fit Shirt。肩肘張らない着心地ながら、襟元と前立てのラインで品よくまとまります。',
        points: ['体から少し離れるフィットで、長時間でも快適に着られます。', '柔らかな素材が、動きに合わせて自然な表情を作ります。', 'タックインしてもアウトで着ても収まりのよい着丈です。'],
        care: ['洗濯ネットを使用してください。', '濡れたまま放置せず、すぐに形を整えて干してください。', '素材の風合いを保つため、乾燥機は避けてください。']
    },
    'utility-overshirt': {
        brand: 'EOLE',
        name: 'Utility Overshirt',
        category: 'Shirt',
        priceEx: 14800,
        white: 'images/product/shirt/Utility Overshirt.webp',
        black: '',
        gallery: {
            White: [
                'images/product/shirt/Utility Overshirt.webp',
                'images/product/shirt/Utility Overshirt-model1.webp',
                'images/product/shirt/Utility Overshirt-model2.webp',
                'images/product/shirt/Utility Overshirt-model3.webp',
                'images/product/shirt/Utility Overshirt-model4.webp'
            ]
        },
        hideColorOptions: true,
        sizes: ['S', 'M', 'L'],
        activeSize: 'M',
        material: 'Cotton nylon ripstop',
        origin: 'Japan',
        materialNote: 'コットンナイロンのリップストップを使用し、軽さと適度な耐久性を持たせました。シャツの軽快さとライトアウターの安心感を両立します。',
        link: 'product-utility-overshirt.html',
        description: 'シャツとしても羽織りとしても使えるEOLEのUtility Overshirt。実用的なポケットとミニマルな面構えで、日常のレイヤードを整えます。',
        points: ['大きめのポケットがデザインと実用性を兼ねています。', '軽いアウター感覚で季節の変わり目に活躍します。', 'リップストップの細かな格子が、無地の装いにさりげない表情を加えます。'],
        care: ['洗濯ネットを使用し、単独で洗ってください。', '摩擦による色移りにご注意ください。', '形を整えて陰干ししてください。']
    },
    'volume-sleeve-shirt': {
        brand: 'EOLE',
        name: 'Volume Sleeve Shirt',
        category: 'Shirt',
        priceEx: 12800,
        white: 'images/product/shirt/Volume Sleeve Shirt.webp',
        black: '',
        gallery: {
            White: [
                'images/product/shirt/Volume Sleeve Shirt.webp',
                'images/product/shirt/Volume Sleeve Shirt-model1.webp',
                'images/product/shirt/Volume Sleeve Shirt-model2.webp',
                'images/product/shirt/Volume Sleeve Shirt-model3.webp',
                'images/product/shirt/Volume Sleeve Shirt-model4.webp'
            ]
        },
        hideColorOptions: true,
        sizes: ['S', 'M', 'L'],
        activeSize: 'M',
        material: 'Fine cotton lawn',
        origin: 'Japan',
        materialNote: '細番手のコットンローンを使い、軽さと繊細な透け感を持たせました。袖に空気を含むような分量を与え、動いたときに柔らかな陰影が出ます。',
        link: 'product-volume-sleeve-shirt.html',
        description: '袖のボリュームを主役にしたEOLEのVolume Sleeve Shirt。クリーンな身頃とふくらみのある袖の対比で、シンプルなボトムにも表情を作ります。',
        points: ['袖口のカフスでボリュームを引き締め、メリハリを出しています。', '軽い素材なので分量があっても重く見えません。', '一枚で印象が決まり、ジャケットの下から袖をのぞかせても映えます。'],
        care: ['繊細な素材のため、洗濯ネットを使用してください。', '強い脱水は避け、形を整えて陰干ししてください。', 'アイロンは低温で当て布を使用してください。']
    },
    'bag-tote': {
        brand: 'EOLE',
        name: 'Tote Bag',
        category: 'Bag',
        priceEx: 24000,
        white: 'images/product/bag/Tote Bag.webp',
        black: '',
        gallery: {
            White: [
                'images/product/bag/Tote Bag.webp',
                'images/product/bag/Tote Bag-Model1.webp',
                'images/product/bag/Tote Bag-Model2.webp',
                'images/product/bag/Tote Bag-Model3.webp',
                'images/product/bag/Tote Bag-Model4.webp'
            ]
        },
        hideColorOptions: true,
        sizes: ['One Size'],
        activeSize: 'One Size',
        sizeRows: [['One Size', '36', '42', '14', '58']],
        sizeHeaders: ['Size', 'Height', 'Width', 'Depth', 'Handle'],
        material: 'Water-repellent nylon twill / recycled leather trim',
        origin: 'Japan',
        materialNote: '軽さと上品な表面感を両立したナイロンツイルを使用。荷物を入れても形が崩れにくいよう、底まわりとハンドルに適度な張りを持たせています。',
        link: 'product-bag-tote.html',
        description: 'EOLEのミニマルなムードを日常使いの容量に落とし込んだトートバッグ。ノートPCや羽織りものまで収まり、装いをすっきり見せる縦横のバランスに仕上げています。',
        points: ['A4サイズや薄型ノートPCが収まりやすい、デイリーに使える容量です。', '開口部は荷物を出し入れしやすく、内側には小物用ポケットを備えています。', '肩掛けでも手持ちでも使いやすい長さのハンドルに設定しています。'],
        care: ['汚れは柔らかい布で軽く拭き取ってください。', '水濡れした場合は形を整え、風通しの良い日陰で乾かしてください。', '保管時は中に詰め物を入れ、直射日光と高温多湿を避けてください。']
    },
    'bag-hobo': {
        brand: 'EOLE',
        name: 'Hobo Bag',
        category: 'Bag',
        priceEx: 19800,
        white: 'images/product/bag/Hobo Bag.webp',
        black: '',
        gallery: {
            White: [
                'images/product/bag/Hobo Bag.webp',
                'images/product/bag/Hobo Bag-Model1.webp',
                'images/product/bag/Hobo Bag-Model2.webp',
                'images/product/bag/Hobo Bag-Model3.webp',
                'images/product/bag/Hobo Bag-Model4.webp'
            ]
        },
        hideColorOptions: true,
        sizes: ['One Size'],
        activeSize: 'One Size',
        sizeRows: [['One Size', '28', '34', '10', '72']],
        sizeHeaders: ['Size', 'Height', 'Width', 'Depth', 'Strap'],
        material: 'Soft vegan leather / cotton blend lining',
        origin: 'Japan',
        materialNote: 'しなやかなヴィーガンレザーを使い、体に沿う柔らかな落ち感を出しています。内装は荷物を傷つけにくいコットンブレンドのライニングです。',
        link: 'product-bag-hobo.html',
        description: '肩に自然になじむカーブラインが特徴のEOLE Hobo Bag。コンパクトに見えながら財布、スマートフォン、ポーチまで収まる、外出にちょうどよいサイズです。',
        points: ['肩掛けしたときに体へ沿う、柔らかなワンショルダー形状です。', 'メイン収納は日常の必需品をまとめやすいマチ付き仕様です。', '装飾を抑えたデザインで、カジュアルにもドレス寄りにも合わせやすくしています。'],
        care: ['使用後は乾いた柔らかい布で表面を整えてください。', '強い摩擦や長時間の水濡れは色移りや風合い変化の原因になります。', '保管時はストラップに負荷がかからないよう、平らな場所で形を整えてください。']
    },
    'royal-oxford-shirt': {
        brand: 'EOLE',
        name: 'Royal Oxford Shirt',
        category: 'Shirt',
        priceEx: 19800,
        white: 'images/product/shirt/shirt_6-1-10.webp',
        black: '',
        gallery: {
            White: [
                'images/product/shirt/shirt_6-1-10.webp',
                'images/product/shirt/shirt_6-2-10.webp',
                'images/product/shirt/shirt_6-3-10.webp',
                'images/product/shirt/shirt_6-4-10.webp'
            ]
        },
        hideColorOptions: true,
        sizes: ['S', 'M', 'L'],
        activeSize: 'M',
        material: 'Fine cotton royal oxford',
        origin: 'Japan',
        materialNote: '細かな凹凸を持つロイヤルオックスを使用し、淡いブルーの清潔感と控えめな光沢を引き出しています。襟とカフスは端正に見えるよう、ほどよい構築感を持たせました。',
        link: 'product-royal-oxford-shirt.html',
        description: 'クラシックなドレスシャツをEOLEらしく静かに整えた一枚。細いストライプと小さな胸元の刺繍が、ビジネスにも休日のジャケットスタイルにも品よく馴染みます。',
        points: ['細いストライプが近くで見たときだけ表情を添えます。', '襟まわりをすっきり立たせ、ノータイでも上品に見える設計です。', 'ジャケットのインナーとしても一枚着としても使いやすい厚みに整えています。'],
        care: ['洗濯ネットを使用し、弱水流で洗ってください。', '洗濯後は形を整えて陰干ししてください。', '襟とカフスは当て布をして中温でアイロンをかけてください。']
    },
    'celeste-stripe-shirt': {
        brand: 'EOLE',
        name: 'Celeste Stripe Shirt',
        category: 'Shirt',
        priceEx: 18800,
        white: 'images/product/shirt/shirt_7-1-10.webp',
        black: '',
        gallery: {
            White: [
                'images/product/shirt/shirt_7-1-10.webp',
                'images/product/shirt/shirt_7-2-10.webp',
                'images/product/shirt/shirt_7-3-10.webp',
                'images/product/shirt/shirt_7-4-10.webp'
            ]
        },
        hideColorOptions: true,
        sizes: ['S', 'M', 'L'],
        activeSize: 'M',
        material: 'Cotton modal end-on-end shirting',
        origin: 'Japan',
        materialNote: 'コットンにモダールを合わせ、柔らかな肌触りと淡い陰影を持たせています。細かな織りの表情が、ライトブルーを単調に見せず上品な奥行きを作ります。',
        link: 'product-celeste-stripe-shirt.html',
        description: '軽やかなブルーをミニマルに仕立てたEOLEのシャツ。胸ポケットと小さなモノグラムを控えめに配し、日常の装いに清潔な緊張感を加えます。',
        points: ['柔らかな生地感で、長時間の着用でも快適です。', '胸ポケットを小さめに整え、ドレス寄りの印象を保っています。', '淡色のスラックスから濃色のセットアップまで合わせやすい色調です。'],
        care: ['洗濯ネットを使用してください。', '濡れたまま放置せず、すぐに形を整えて干してください。', '素材の風合いを保つため、乾燥機は避けてください。']
    },
    'saint-germain-trench-coat': {
        brand: 'EOLE',
        name: 'Saint-Germain Trench Coat',
        category: 'Outerwear',
        priceEx: 59800,
        white: 'images/product/tops/coat1-1-1.webp',
        black: '',
        gallery: {
            White: [
                'images/product/tops/coat1-1-1.webp',
                'images/product/tops/coat1-2-2.webp',
                'images/product/tops/coat1-3-3.webp',
                'images/product/tops/coat1-4-4.webp'
            ]
        },
        hideColorOptions: true,
        sizes: ['S', 'M', 'L'],
        activeSize: 'M',
        material: 'High-density cotton gabardine / cupro lining',
        origin: 'Japan',
        materialNote: '高密度のコットンギャバジンに微かな艶を持たせ、ベージュの奥行きが出るように仕上げています。裏地には滑りのよいキュプラを合わせ、ジャケットの上にも羽織りやすくしています。',
        link: 'product-saint-germain-trench-coat.html',
        description: '伝統的なダブルブレストの構成を、EOLEの静かな高級感に合わせて整えたトレンチコート。長めの着丈とベルトの緊張感が、装い全体を端正に引き締めます。',
        points: ['エポレットやガンフラップを残しながら、過度に重く見えないバランスです。', 'ベルトを締めても開けても輪郭が崩れにくいパターンです。', 'ドレスにもデニムにも馴染む、落ち着いたベージュトーンです。'],
        care: ['着用後はブラッシングし、湿気を飛ばしてから保管してください。', '汚れが気になる場合は専門店でのクリーニングをおすすめします。', '直射日光と高温多湿を避けて保管してください。']
    },
    'noir-cashmere-chester-coat': {
        brand: 'EOLE',
        name: 'Noir Cashmere Chester Coat',
        category: 'Outerwear',
        priceEx: 72800,
        white: 'images/product/tops/coat2-1-5.webp',
        black: '',
        gallery: {
            White: [
                'images/product/tops/coat2-1-5.webp',
                'images/product/tops/coat2-2-6.webp',
                'images/product/tops/coat2-3-7.webp',
                'images/product/tops/coat2-4-8.webp'
            ]
        },
        hideColorOptions: true,
        sizes: ['S', 'M', 'L'],
        activeSize: 'M',
        material: 'Wool cashmere melton / cupro lining',
        origin: 'Japan',
        materialNote: 'ウールにカシミヤをブレンドしたメルトンを使用し、黒の深さと柔らかなタッチを両立しました。ライニングは袖通しのよいキュプラで、フォーマルな着用感に整えています。',
        link: 'product-noir-cashmere-chester-coat.html',
        description: '黒の奥行きと端正なラペルが印象を決めるチェスターコート。装飾を抑えた構成で、冬のドレススタイルを静かに格上げするEOLEのアウターです。',
        points: ['肩線をすっきり見せるパターンで、厚手ながら重く見えません。', '比翼に寄せた前立てが、ミニマルな表情を作ります。', 'スーツにもニットにも合わせやすい、膝上から膝丈のバランスです。'],
        care: ['着用後は柔らかいブラシで表面を整えてください。', '連続着用を避け、湿気を飛ばしてから保管してください。', 'クリーニングは専門店にご相談ください。']
    },
    'lumiere-linen-blazer': {
        brand: 'EOLE',
        name: 'Lumiere Linen Blazer',
        category: 'Outerwear',
        priceEx: 49800,
        white: 'images/product/tops/outer&pants1-1-10.webp',
        black: '',
        gallery: {
            White: [
                'images/product/tops/outer&pants1-1-10.webp',
                'images/product/tops/outer&pants1-2-10.webp',
                'images/product/tops/outer&pants1-3-10.webp',
                'images/product/pants/outer&pants1-4-10.webp',
                'images/product/pants/outer&pants1-5-10.webp'
            ]
        },
        hideColorOptions: true,
        sizes: ['S', 'M', 'L'],
        activeSize: 'M',
        material: 'Linen wool hopsack / cupro lining',
        origin: 'Japan',
        materialNote: 'リネンとウールを合わせたホップサックを使用し、明るいベージュでも軽くなりすぎない上品な表情に整えています。通気性と構築感のバランスを重視しました。',
        link: 'product-lumiere-linen-blazer.html',
        description: '柔らかな光を含むベージュで仕立てたEOLEのテーラードブレザー。リラックスした素材感とシャープなラペルが、上質な余白のあるジャケットスタイルを作ります。',
        points: ['パッチポケットで軽さを出しながら、ラペルは端正に整えています。', '同系色のパンツと合わせると、静かなセットアップ感が生まれます。', '春夏の羽織りとしても使いやすい、空気を含む素材感です。'],
        care: ['着用後はブラッシングし、形を整えて保管してください。', '水濡れや強い摩擦は風合い変化の原因になります。', 'クリーニングは専門店にご相談ください。']
    },
    'lumiere-tailored-trousers': {
        brand: 'EOLE',
        name: 'Lumiere Tailored Trousers',
        category: 'Pants',
        priceEx: 29800,
        white: 'images/product/pants/outer&pants1-4-10.webp',
        black: '',
        gallery: {
            White: [
                'images/product/pants/outer&pants1-4-10.webp',
                'images/product/pants/outer&pants1-5-10.webp',
                'images/product/tops/outer&pants1-1-10.webp',
                'images/product/tops/outer&pants1-2-10.webp'
            ]
        },
        hideColorOptions: true,
        sizes: ['S', 'M', 'L'],
        activeSize: 'M',
        material: 'Cotton linen stretch twill',
        origin: 'Japan',
        materialNote: 'コットンリネンのツイルに少量のストレッチを加え、白に近い淡色でも上品に見える密度と落ち感を持たせています。センターラインがきれいに残る仕立てです。',
        link: 'product-lumiere-tailored-trousers.html',
        description: '軽やかなベージュトーンに合わせるためのEOLEのテーラードパンツ。細すぎないテーパードラインで、ジャケットにもシャツにも自然に馴染みます。',
        points: ['腰まわりに少し余裕を持たせ、裾に向かってすっきり絞っています。', '淡色でも透けやすさを抑える、ほどよい厚みの素材です。', '革靴にもローファーにも合わせやすい丈感です。'],
        care: ['洗濯ネットを使用し、弱水流で洗ってください。', '濡れた状態での摩擦や濃色品との接触にご注意ください。', 'センターラインは当て布をして低温から中温で整えてください。']
    },
    'nocturne-wool-blazer': {
        brand: 'EOLE',
        name: 'Nocturne Wool Blazer',
        category: 'Outerwear',
        priceEx: 52800,
        white: 'images/product/tops/outer&pants2-1-10.webp',
        black: '',
        gallery: {
            White: [
                'images/product/tops/outer&pants2-1-10.webp',
                'images/product/tops/outer&pants2-2-10.webp',
                'images/product/tops/outer&pants2-3-10.webp',
                'images/product/pants/outer&pants2-4-10.webp',
                'images/product/pants/outer&pants2-5-10.webp'
            ]
        },
        hideColorOptions: true,
        sizes: ['S', 'M', 'L'],
        activeSize: 'M',
        material: 'Super 120s wool twill / cupro lining',
        origin: 'Japan',
        materialNote: '細番手ウールのツイルを使用し、ネイビーの深さと滑らかな表面感を引き出しています。肩まわりは構築しすぎず、自然な緊張感で着られる設計です。',
        link: 'product-nocturne-wool-blazer.html',
        description: '夜のように深いネイビーで仕立てたEOLEのウールブレザー。端正な二つボタンの構成で、フォーマルにも日常にも静かな品格を添えます。',
        points: ['ラペル幅を抑え、シャープで現代的な印象に整えています。', '同素材のパンツと合わせると、ミニマルなセットアップとして使えます。', '白Tやニットにも馴染む、硬すぎないシルエットです。'],
        care: ['着用後はブラッシングし、肩の形を整えて保管してください。', '湿気を含んだ場合は風通しのよい日陰で乾かしてください。', 'クリーニングは専門店にご相談ください。']
    },
    'nocturne-tailored-trousers': {
        brand: 'EOLE',
        name: 'Nocturne Tailored Trousers',
        category: 'Pants',
        priceEx: 31800,
        white: 'images/product/pants/outer&pants2-4-10.webp',
        black: '',
        gallery: {
            White: [
                'images/product/pants/outer&pants2-4-10.webp',
                'images/product/pants/outer&pants2-5-10.webp',
                'images/product/tops/outer&pants2-1-10.webp',
                'images/product/tops/outer&pants2-2-10.webp'
            ]
        },
        hideColorOptions: true,
        sizes: ['S', 'M', 'L'],
        activeSize: 'M',
        material: 'Super 120s wool twill',
        origin: 'Japan',
        materialNote: '細番手ウールのツイルを使い、深いネイビーがきれいに出る密度と落ち感に整えています。センタープレスが脚のラインをすっきり見せます。',
        link: 'product-nocturne-tailored-trousers.html',
        description: 'EOLEのネイビーブレザーに合わせるためのテーラードトラウザーズ。ミニマルな腰まわりと自然なテーパードで、装いを静かに引き締めます。',
        points: ['腰まわりは端正に収まり、動きやすさも確保しています。', '裾に向かって細くなるラインで、革靴との相性が良い一本です。', '単品でもセットアップでも使える深いネイビーです。'],
        care: ['着用後はブラッシングして湿気を飛ばしてください。', 'センタープレスは当て布をして低温で整えてください。', 'クリーニングは専門店にご相談ください。']
    },
    'bleu-botanical-ruffle-skirt': {
        brand: 'EOLE',
        name: 'Bleu Botanical Ruffle Skirt',
        category: 'Skirt',
        priceEx: 27800,
        white: 'images/product/skirt/skrt1-1-10.webp',
        black: '',
        gallery: {
            White: [
                'images/product/skirt/skrt1-1-10.webp',
                'images/product/skirt/skrt1-2-10.webp',
                'images/product/skirt/skrt1-3-10.webp',
                'images/product/skirt/skrt1-4-10.webp'
            ]
        },
        hideColorOptions: true,
        sizes: ['S', 'M', 'L'],
        activeSize: 'M',
        material: 'Cotton linen botanical jacquard',
        origin: 'Japan',
        materialNote: 'コットンリネンに繊細なボタニカル柄をのせ、淡いブルーに柔らかな奥行きを持たせています。ラッフルの重なりが軽く揺れるよう、厚みを抑えて仕立てました。',
        link: 'product-bleu-botanical-ruffle-skirt.html',
        description: '淡いブルーと植物柄の余韻が印象的なラッフルスカート。華やかさを持ちながら、EOLEらしい静かなトーンで日常のスタイルにも馴染みます。',
        points: ['斜めに流れるラッフルが、歩いたときに柔らかな動きを作ります。', '柄のコントラストを抑え、上品な印象に整えています。', 'シャツやシンプルなニットと合わせやすい分量感です。'],
        care: ['洗濯ネットを使用し、弱水流で洗ってください。', '濡れた状態での摩擦は避けてください。', '形を整え、風通しのよい日陰で乾かしてください。']
    },
    'ecru-check-belted-skirt': {
        brand: 'EOLE',
        name: 'Ecru Check Belted Skirt',
        category: 'Skirt',
        priceEx: 29800,
        white: 'images/product/skirt/skrt2-1-10.webp',
        black: '',
        gallery: {
            White: [
                'images/product/skirt/skrt2-1-10.webp',
                'images/product/skirt/skrt2-2-10.webp',
                'images/product/skirt/skrt2-3-10.webp',
                'images/product/skirt/skrt2-4-10.webp'
            ]
        },
        hideColorOptions: true,
        sizes: ['S', 'M', 'L'],
        activeSize: 'M',
        material: 'Linen cotton check twill',
        origin: 'Japan',
        materialNote: 'リネン混のツイルに淡いチェックを重ね、エクリュの柔らかさとクラシックな表情を両立しました。共布ベルトがウエストの印象を端正に整えます。',
        link: 'product-ecru-check-belted-skirt.html',
        description: '穏やかなチェックとフレアラインが美しいベルト付きスカート。軽さのある素材ながら、腰まわりはすっきりと見えるように設計しています。',
        points: ['共布ベルトでウエストに自然なアクセントを作れます。', '広がりすぎないフレアで、上品なボリュームに整えています。', '淡いトーンのトップスとも濃色のジャケットとも合わせやすい一着です。'],
        care: ['洗濯ネットを使用してください。', 'ベルトは外して形を整えてから干してください。', 'シワが気になる場合は当て布をして中温でアイロンをかけてください。']
    },
    'sage-pinstripe-flare-skirt': {
        brand: 'EOLE',
        name: 'Sage Pinstripe Flare Skirt',
        category: 'Skirt',
        priceEx: 28800,
        white: 'images/product/skirt/skrt3-1-10.webp',
        black: '',
        gallery: {
            White: [
                'images/product/skirt/skrt3-1-10.webp',
                'images/product/skirt/skrt3-2-10.webp',
                'images/product/skirt/skrt3-3-10.webp'
            ]
        },
        hideColorOptions: true,
        sizes: ['S', 'M', 'L'],
        activeSize: 'M',
        material: 'Washed cotton pinstripe twill',
        origin: 'Japan',
        materialNote: '洗いをかけたコットンツイルに細いピンストライプを入れ、セージカラーの柔らかさに都会的な緊張感を加えています。タックの陰影が縦のラインを作ります。',
        link: 'product-sage-pinstripe-flare-skirt.html',
        description: 'セージグリーンの穏やかさとピンストライプの端正さを合わせたフレアスカート。ボリュームを持ちながら、すっきり縦に見えるバランスです。',
        points: ['深めのタックで立体感を出し、歩いたときの揺れをきれいに見せます。', 'カジュアルな素材感でも、ピンストライプで上品にまとまります。', '白シャツや黒のニットと合わせるだけで印象が整います。'],
        care: ['洗濯ネットを使用し、裏返して洗ってください。', '濃色品との摩擦や水濡れにご注意ください。', '形を整えて陰干ししてください。']
    },
    'noir-envelope-long-wallet': {
        brand: 'EOLE',
        name: 'Noir Envelope Long Wallet',
        category: 'Wallet',
        priceEx: 24800,
        white: 'images/product/wallet/saifu1-1-10.webp',
        black: '',
        gallery: {
            White: [
                'images/product/wallet/saifu1-1-10.webp',
                'images/product/wallet/saifu1-2-10.webp',
                'images/product/wallet/saifu1-3-10.webp'
            ]
        },
        hideColorOptions: true,
        sizes: ['One Size'],
        activeSize: 'One Size',
        material: 'Embossed calf leather / brass hardware',
        origin: 'Japan',
        materialNote: '細かなシボを持つカーフレザーに、控えめなゴールドトーンの金具を合わせました。エンベロープ状の切り替えが、黒一色の中に奥行きを作ります。',
        link: 'product-noir-envelope-long-wallet.html',
        description: '封筒のような斜めのラインが印象を残すロングウォレット。収納力を持たせながら、バッグから取り出す所作まで美しく見えるように仕立てています。',
        points: ['紙幣、カード、小銭を分けて収めやすいロングタイプです。', 'シボのある革で傷が目立ちにくく、日常でも扱いやすい表情です。', '小さなモノグラムと金具が、控えめなアクセントになります。'],
        care: ['使用後は乾いた柔らかい布で表面を整えてください。', '水濡れや強い摩擦は避けてください。', '保管時は直射日光と高温多湿を避けてください。']
    },
    'noir-bifold-wallet': {
        brand: 'EOLE',
        name: 'Noir Bifold Wallet',
        category: 'Wallet',
        priceEx: 21800,
        white: 'images/product/wallet/saifu2-1-10.webp',
        black: '',
        gallery: {
            White: [
                'images/product/wallet/saifu2-1-10.webp',
                'images/product/wallet/saifu2-2-10.webp',
                'images/product/wallet/saifu2-3-10.webp',
                'images/product/wallet/saifu2-4-10.webp'
            ]
        },
        hideColorOptions: true,
        sizes: ['One Size'],
        activeSize: 'One Size',
        material: 'Smooth calf leather / brushed brass plate',
        origin: 'Japan',
        materialNote: '滑らかなカーフレザーに、斜めの切り替えと細いメタルプレートを合わせました。コンパクトな形の中に、EOLEらしい端正な緊張感を持たせています。',
        link: 'product-noir-bifold-wallet.html',
        description: 'ミニマルな二つ折り財布を、斜めのラインで印象的に仕立てたモデル。手に収まりやすいサイズ感と、黒の落ち着いた艶が魅力です。',
        points: ['ジャケットや小さなバッグにも収まりやすいコンパクトな設計です。', 'カードと紙幣をすっきり整理しやすい内装です。', '控えめなメタルパーツが、日常の小物に上品な存在感を添えます。'],
        care: ['乾いた柔らかい布で定期的に表面を整えてください。', '水濡れした場合はすぐに拭き取り、日陰で乾かしてください。', '硬いものとの接触や強い摩擦にご注意ください。']
    },
    'ecru-silk-handkerchief': {
        brand: 'EOLE',
        name: 'Ecru Silk Handkerchief',
        category: 'Handkerchief',
        priceEx: 8800,
        white: 'images/product/handkerchief/hankati1-1-9.webp',
        black: '',
        gallery: {
            White: [
                'images/product/handkerchief/hankati1-1-9.webp',
                'images/product/handkerchief/hankati1-2-10.webp'
            ]
        },
        hideColorOptions: true,
        sizes: ['One Size'],
        activeSize: 'One Size',
        material: 'Silk cotton jacquard',
        origin: 'Japan',
        materialNote: 'シルクコットンのジャカードに繊細な織り柄を入れ、エクリュの柔らかな光沢を引き出しています。縁のステッチまで同系色でまとめ、控えめな高級感に仕上げました。',
        link: 'product-ecru-silk-handkerchief.html',
        description: '淡いエクリュと細いボーダーが上品なハンカチーフ。ポケットチーフとしても使えるサイズ感で、日常の小物に静かな華やぎを添えます。',
        points: ['繊細なジャカード柄が、近くで見たときにだけ奥行きを見せます。', 'スーツの胸元にもバッグの中にも馴染む、落ち着いた色調です。', 'ギフトにも使いやすい、主張を抑えたEOLEらしい小物です。'],
        care: ['手洗いまたはドライクリーニングをおすすめします。', '強く絞らず、タオルで水気を取り形を整えて干してください。', 'アイロンは低温で当て布を使用してください。']
    }
};

const DEFAULT_TSHIRT_POINTS = [
    'グラフィックをただ載せるのではなく、デザインに合う上質な素材を選んでいます。',
    '余白と配置のバランスがきれいに見えるよう、プリント位置を調整しています。',
    '一枚でもジャケットのインナーでも使いやすい、すっきりしたシルエットです。',
    '白と黒で印象が変わりながらも、同じ洗練されたムードを保てます。'
];

const DEFAULT_TSHIRT_CARE = [
    '洗濯ネットを使用し、裏返して弱水流で洗ってください。',
    'プリント部分への直接アイロンは避けてください。',
    '乾燥機は使用せず、形を整えて陰干ししてください。',
    '濃色品は色移りを避けるため、単独での洗濯を推奨します。'
];
 
const SIZE_TABLES = {
    'T-Shirt': [
        ['XS', '62', '46', '41', '19'],
        ['S', '65', '49', '43', '20'],
        ['M', '68', '52', '45', '21'],
        ['L', '71', '55', '47', '22'],
        ['XL', '74', '58', '49', '23']
    ],
    Shirt: [
        ['S', '72', '56', '48', '58'],
        ['M', '75', '59', '50', '60'],
        ['L', '78', '62', '52', '62']
    ],
    Outerwear: [
        ['S', '70', '58', '50', '60'],
        ['M', '73', '61', '52', '62'],
        ['L', '76', '64', '54', '64']
    ],
    Dress: [
        ['S', '116', '48', '40', '56'],
        ['M', '120', '51', '42', '58'],
        ['L', '124', '54', '44', '60']
    ],
    Pants: [
        ['S', '76', '28', '70', '18'],
        ['M', '80', '29', '72', '19'],
        ['L', '84', '30', '74', '20']
    ],
    Skirt: [
        ['S', '64', '82', '94', '118'],
        ['M', '68', '85', '98', '122'],
        ['L', '72', '88', '102', '126']
    ],
    Hoodie: [
        ['S', '66', '56', '50', '58'],
        ['M', '69', '59', '52', '60'],
        ['L', '72', '62', '54', '62'],
        ['XL', '75', '65', '56', '64']
    ],
    Shoe: [
        ['24', '24.0', '-', '-', '-'],
        ['24.5', '24.5', '-', '-', '-'],
        ['25', '25.0', '-', '-', '-'],
        ['25.5', '25.5', '-', '-', '-'],
        ['26', '26.0', '-', '-', '-'],
        ['26.5', '26.5', '-', '-', '-'],
        ['27', '27.0', '-', '-', '-'],
        ['27.5', '27.5', '-', '-', '-'],
        ['28', '28.0', '-', '-', '-']
    ],
    Bag: [
        ['One Size', '38', '34', '12', '-']
    ],
    Wallet: [
        ['One Size', '10', '19', '3', '-']
    ],
    Handkerchief: [
        ['One Size', '45', '45', '-', '-']
    ]
};

const SIZE_HEADERS = {
    'T-Shirt': ['Size', 'Length', 'Chest', 'Shoulder', 'Sleeve'],
    Shirt: ['Size', 'Length', 'Chest', 'Shoulder', 'Sleeve'],
    Outerwear: ['Size', 'Length', 'Chest', 'Shoulder', 'Sleeve'],
    Dress: ['Size', 'Length', 'Chest', 'Shoulder', 'Sleeve'],
    Pants: ['Size', 'Waist', 'Rise', 'Inseam', 'Hem'],
    Skirt: ['Size', 'Waist', 'Length', 'Hip', 'Hem'],
    Hoodie: ['Size', 'Length', 'Chest', 'Shoulder', 'Sleeve'],
    Shoe: ['Size', 'JP cm', '-', '-', '-'],
    Bag: ['Size', 'Height', 'Width', 'Depth', '-'],
    Wallet: ['Size', 'Height', 'Width', 'Depth', '-'],
    Handkerchief: ['Size', 'Length', 'Width', '-', '-']
};

function yen(value) {
    return `\u00a5${value.toLocaleString('ja-JP')}`;
}

function getProduct() {
    const key = document.body.dataset.product;
    return PRODUCTS[key] || PRODUCTS['tshirt-geometry'];
}

let activeGalleryImages = [];
let activeGalleryIndex = 0;
let activeGalleryColor = 'White';
let galleryTouchStartX = 0;

function ensureGalleryControls() {
    const wrapper = document.querySelector('.product-image-wrapper');
    if (!wrapper || wrapper.querySelector('.gallery-arrow')) return;

    const prev = document.createElement('button');
    prev.className = 'gallery-arrow gallery-prev';
    prev.type = 'button';
    prev.setAttribute('aria-label', 'Previous image');
    prev.textContent = '\u2039';
    prev.addEventListener('click', () => moveGallery(-1));

    const next = document.createElement('button');
    next.className = 'gallery-arrow gallery-next';
    next.type = 'button';
    next.setAttribute('aria-label', 'Next image');
    next.textContent = '\u203a';
    next.addEventListener('click', () => moveGallery(1));

    const dots = document.createElement('div');
    dots.className = 'gallery-dots';
    dots.setAttribute('aria-label', 'Image position');

    wrapper.append(prev, next, dots);
    wrapper.addEventListener('touchstart', (event) => {
        galleryTouchStartX = event.touches[0]?.clientX || 0;
    }, { passive: true });
    wrapper.addEventListener('touchend', (event) => {
        const endX = event.changedTouches[0]?.clientX || 0;
        const diff = endX - galleryTouchStartX;
        if (Math.abs(diff) > 42) {
            moveGallery(diff > 0 ? -1 : 1);
        }
    }, { passive: true });
}

function imagesForColor(product, color) {
    if (product.gallery?.[color]) return product.gallery[color];
    if (color === 'Black') return [product.black].filter(Boolean);
    return [product.white].filter(Boolean);
}

function updateGalleryDots() {
    const dots = document.querySelector('.gallery-dots');
    if (!dots) return;

    dots.innerHTML = activeGalleryImages.map((_, index) => `
        <button class="gallery-dot${index === activeGalleryIndex ? ' active' : ''}" type="button" aria-label="${index + 1}枚目"></button>
    `).join('');

    dots.querySelectorAll('.gallery-dot').forEach((dot, index) => {
        dot.addEventListener('click', () => showGalleryImage(index));
    });
}

function updateGalleryControls() {
    const hasMultipleImages = activeGalleryImages.length > 1;
    document.querySelectorAll('.gallery-arrow').forEach((button) => {
        button.hidden = !hasMultipleImages;
    });

    const dots = document.querySelector('.gallery-dots');
    if (dots) {
        dots.hidden = !hasMultipleImages;
    }
}

function showGalleryImage(index, animate = true) {
    const image = document.getElementById('product-image');
    if (!image || !activeGalleryImages.length) return;

    activeGalleryIndex = (index + activeGalleryImages.length) % activeGalleryImages.length;

    const applyImage = () => {
        image.src = activeGalleryImages[activeGalleryIndex];
        image.alt = `${getProduct().name} ${activeGalleryColor} ${activeGalleryIndex + 1}`;
        image.style.opacity = '1';
        updateGalleryDots();
        updateGalleryControls();
    };

    if (animate) {
        image.style.opacity = '0';
        window.setTimeout(applyImage, 160);
    } else {
        applyImage();
    }
}

function setGalleryImages(images, color, animate = true) {
    const colorLabel = document.getElementById('selected-color');
    activeGalleryImages = images;
    activeGalleryIndex = 0;
    activeGalleryColor = color;

    if (colorLabel) {
        colorLabel.textContent = color;
    }

    showGalleryImage(0, animate);
}

function moveGallery(direction) {
    if (activeGalleryImages.length <= 1) return;
    showGalleryImage(activeGalleryIndex + direction);
}

function selectColor(button) {
    document.querySelectorAll('.color-btn').forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
    setGalleryImages(imagesForColor(getProduct(), button.dataset.color), button.dataset.color);
}

function selectSize(button) {
    document.querySelectorAll('.size-btn').forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
    document.getElementById('selected-size').textContent = button.textContent;
}

function toggleAcc(button) {
    const item = button.closest('.acc-item');
    const wrapper = item.querySelector('.acc-content-wrapper');
    const isOpen = item.classList.toggle('is-open');
    wrapper.style.maxHeight = isOpen ? `${wrapper.scrollHeight}px` : '0px';
}

function listHtml(items) {
    return `<ul class="detail-list">${items.map((item) => `<li>${item}</li>`).join('')}</ul>`;
}

function sizeTableHtml(product) {
    const headers = product.sizeHeaders || SIZE_HEADERS[product.category] || SIZE_HEADERS['T-Shirt'];
    const rows = product.sizeRows || SIZE_TABLES[product.category] || SIZE_TABLES['T-Shirt'];
    return `
        <table class="size-table">
            <thead><tr>${headers.map((head) => `<th>${head}</th>`).join('')}</tr></thead>
            <tbody>
                ${rows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join('')}</tr>`).join('')}
            </tbody>
        </table>
        <p class="table-note">単位: cm。商品の特性上、多少の個体差が生じる場合があります。</p>
    `;
}

function renderAccordions(product) {
    const accordion = document.querySelector('.custom-accordion');
    const points = product.points || DEFAULT_TSHIRT_POINTS;
    const care = product.care || DEFAULT_TSHIRT_CARE;

    accordion.innerHTML = `
        <div class="acc-item">
            <button class="acc-header" type="button" onclick="toggleAcc(this)">Details</button>
            <div class="acc-content-wrapper">
                <div class="acc-content">
                    Material: ${product.material}<br>
                    Origin: ${product.origin}<br>
                    ${product.materialNote}
                </div>
            </div>
        </div>
        <div class="acc-item">
            <button class="acc-header" type="button" onclick="toggleAcc(this)">Material Point</button>
            <div class="acc-content-wrapper">
                <div class="acc-content">${listHtml(points)}</div>
            </div>
        </div>
        <div class="acc-item">
            <button class="acc-header" type="button" onclick="toggleAcc(this)">Size Guide</button>
            <div class="acc-content-wrapper">
                <div class="acc-content">${sizeTableHtml(product)}</div>
            </div>
        </div>
        <div class="acc-item">
            <button class="acc-header" type="button" onclick="toggleAcc(this)">Care</button>
            <div class="acc-content-wrapper">
                <div class="acc-content">${listHtml(care)}</div>
            </div>
        </div>
    `;
}

function pickRecommendations(currentKey, product) {
    const entries = Object.entries(PRODUCTS).filter(([key]) => key !== currentKey);
    const sameBrand = entries.filter(([, item]) => item.brand === product.brand);
    const others = entries.filter(([, item]) => item.brand !== product.brand);
    return [...sameBrand, ...others].slice(0, 3);
}

function renderRecommendations(product) {
    const currentKey = document.body.dataset.product;
    const recommendations = pickRecommendations(currentKey, product);
    const existing = document.querySelector('.recommend-section');
    if (existing) {
        existing.remove();
    }

    const section = document.createElement('section');
    section.className = 'recommend-section';
    section.innerHTML = `
        <h2 class="recommend-title">Recommended Items</h2>
        <div class="recommend-grid">
            ${recommendations.map(([, item]) => `
                <a class="recommend-card" href="${item.link}">
                    <div class="recommend-image">
                        <img src="${item.white}" alt="${item.name}">
                        <span class="recommend-badge">SOLD OUT</span>
                    </div>
                    <div class="recommend-brand">${item.brand}</div>
                    <h3 class="recommend-name">${item.name}</h3>
                    <div class="recommend-price">${yen(item.priceEx)} <span class="tax-label">(税込)</span></div>
                </a>
            `).join('')}
        </div>
    `;
    document.body.appendChild(section);
}

function renderProduct() {
    const product = getProduct();

    document.title = `${product.name} | GALLERY EC`;
    document.getElementById('brand').textContent = product.brand;
    document.getElementById('title').textContent = product.name;
    document.getElementById('price-ex').innerHTML = `${yen(product.priceEx)} <span class="tax-label">(税込)</span>`;
    document.getElementById('price-in').textContent = '';
    document.getElementById('description').textContent = product.description;

    const caption = document.querySelector('.soldout-caption');
    if (caption) {
        caption.textContent = 'この商品は現在売り切れです。再入荷までお待ちください。';
    }

    ensureGalleryControls();
    setGalleryImages(imagesForColor(product, 'White'), 'White', false);

    const colorOptions = document.getElementById('color-options');
    const colorGroup = colorOptions.closest('.options-group');
    colorOptions.innerHTML = '';
    const variants = [{ color: 'White', image: product.white, swatch: '#ffffff' }];
    if (product.black) {
        variants.push({ color: 'Black', image: product.black, swatch: '#000000' });
    }

    if (colorGroup) {
        colorGroup.hidden = Boolean(product.hideColorOptions);
    }

    variants.forEach((variant, index) => {
        const button = document.createElement('button');
        button.className = `color-btn${index === 0 ? ' active' : ''}`;
        button.type = 'button';
        button.style.backgroundColor = variant.swatch;
        button.dataset.color = variant.color;
        button.dataset.image = variant.image;
        button.setAttribute('aria-label', variant.color);
        button.addEventListener('click', () => selectColor(button));
        colorOptions.appendChild(button);
    });

    document.getElementById('selected-color').textContent = variants[0].color;

    const sizeOptions = document.getElementById('size-options');
    sizeOptions.innerHTML = '';
    product.sizes.forEach((size) => {
        const button = document.createElement('button');
        button.className = `size-btn${size === product.activeSize ? ' active' : ''}`;
        button.type = 'button';
        button.textContent = size;
        button.addEventListener('click', () => selectSize(button));
        sizeOptions.appendChild(button);
    });
    document.getElementById('selected-size').textContent = product.activeSize;
    renderAccordions(product);
    renderRecommendations(product);
}

renderProduct();

let lastScrollY = window.scrollY;
const pageHeader = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentY = window.scrollY;
    if (!pageHeader) return;

    if (currentY > lastScrollY && currentY > 80) {
        pageHeader.classList.add('header-hidden');
    } else {
        pageHeader.classList.remove('header-hidden');
    }

    lastScrollY = currentY;
}, { passive: true });
