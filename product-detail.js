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
    ]
};

const SIZE_HEADERS = {
    'T-Shirt': ['Size', 'Length', 'Chest', 'Shoulder', 'Sleeve'],
    Shirt: ['Size', 'Length', 'Chest', 'Shoulder', 'Sleeve'],
    Outerwear: ['Size', 'Length', 'Chest', 'Shoulder', 'Sleeve'],
    Dress: ['Size', 'Length', 'Chest', 'Shoulder', 'Sleeve'],
    Hoodie: ['Size', 'Length', 'Chest', 'Shoulder', 'Sleeve'],
    Shoe: ['Size', 'JP cm', '-', '-', '-'],
    Bag: ['Size', 'Height', 'Width', 'Depth', '-']
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
