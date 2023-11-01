const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  try {
    const mousesCategory = await prisma.category.create({
      data: {
        name: "Mouses",
        slug: "mouses",
        imageUrl: "https://fsw-store.s3.sa-east-1.amazonaws.com/mouses.png",
      },
    });

    const mouses = [
      {
        name: "Logitech MX Master 3s",
        slug: "logitech-mx-master-3s",
        description:
          "Para produtividade sem limites, o Logitech MX Master 3s é o companheiro ideal. Projetado para profissionais e criativos, este mouse oferece um controle excepcional com seu sensor Darkfield de 4.000 DPI, permitindo rastreamento preciso em qualquer superfície. Com uma variedade de botões personalizáveis e uma roda de rolagem MagSpeed de alta velocidade, ele simplifica tarefas e navegação. Além disso, sua bateria recarregável oferece uma vida útil excepcional, tornando-o o parceiro perfeito para longas horas de trabalho. Seja no escritório ou em movimento, o Logitech MX Master 3s é a escolha definitiva para a eficiência e produtividade.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_mx-master-3s.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_mx-master-3s.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_mx-master-3s.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_mx-master-3s.png",
        ],
        basePrice: 650,
        categoryId: mousesCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Logitech Pro X Superlight",
        slug: "logitech-pro-x-superlight",
        description:
          "Para os jogadores mais exigentes que buscam a vantagem competitiva, o Logitech Pro X Superlight é a escolha suprema. Com um design ultraleve, este mouse permite movimentos rápidos e precisos, graças ao sensor HERO de 25.000 DPI, oferecendo a máxima precisão em jogos. Os switches mecânicos avançados proporcionam respostas rápidas e uma vida útil mais longa, enquanto a tecnologia sem fio Lightspeed garante uma conexão super-rápida e confiável. Se você busca a perfeição em seu desempenho nos jogos, o Logitech Pro X Superlight é o mouse que vai atender às suas expectativas.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-superlight.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-superlight.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-superlight.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-superlight.png",
        ],
        basePrice: 750,
        categoryId: mousesCategory.id,
        discountPercentage: 5, // 5% discount
      },
      {
        name: "Logitech G305 Lightspeed",
        slug: "logitech-g305-lightspeed",
        description:
          "Experimente a liberdade de movimento e precisão com o Mouse Logitech G305 Lightspeed, projetado para gamers exigentes. Com sua tecnologia sem fio Lightspeed, sensor HERO de 12.000 DPI e design ergonômico, este mouse oferece desempenho excepcional e conforto, tornando-o uma escolha ideal para longas sessões de jogo. Personalize com seus seis botões programáveis e desfrute de até 9 meses de vida útil da bateria. Compatível com diversas plataformas, ele é a escolha perfeita para aprimorar sua experiência de jogo.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-lightspeed.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-lightspeed.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-lightspeed.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-lightspeed.png",
        ],
        basePrice: 300,
        categoryId: mousesCategory.id,
        discountPercentage: 15, // 15% discount
      },
      {
        name: "Hyperx Pulsefire Dart",
        slug: "hyperx-pulsefire-dart",
        description:
          "Liberdade sem fios e estilo se encontram no HyperX Pulsefire Dart. Com tecnologia sem fio HyperX, sensor Pixart 3389 de 16.000 DPI e iluminação RGB personalizável, ele oferece precisão e personalização. Sua bateria de longa duração proporciona até 50 horas de jogo, enquanto o design ergonômico garante conforto. Compatível com várias plataformas, é perfeito para jogadores que buscam desempenho e versatilidade.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_hyperx-dart.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_hyperx-dart.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_hyperx-dart.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_hyperx-dart.png",
        ],
        basePrice: 600,
        categoryId: mousesCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Razer Deathadder V2 Pro",
        slug: "razer-deathadder-v2-pro",
        description:
          "O Razer Deathadder V2 Pro é a escolha definitiva para gamers competitivos. Equipado com o sensor óptico Razer Focus+ de 20.000 DPI, tecnologia Razer HyperSpeed Wireless, design ergonômico e switches ópticos Razer, ele oferece precisão, resposta rápida e conforto. Com iluminação RGB Razer Chroma e compatibilidade universal, ele proporciona uma experiência de jogo de alto nível. Eleve sua jogabilidade a um patamar profissional com o Deathadder V2 Pro.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_razer-deathadder.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_razer-deathadder.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_razer-deathadder.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_razer-deathadder.png",
        ],
        basePrice: 350,
        categoryId: mousesCategory.id,
        discountPercentage: 0,
      },
    ];

    await prisma.product.createMany({
      data: mouses,
    });

    const keyboardsCategory = await prisma.category.create({
      data: {
        name: "Teclados",
        slug: "keyboards",
        imageUrl:
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-mx-keys-s.png",
      },
    });

    const keyboards = [
      {
        name: "Logitech MX Keys S",
        slug: "logitech-mx-keys-s",
        description:
          "O Logitech MX Keys S é uma escolha ideal para quem busca produtividade e elegância. Com teclas retroiluminadas e design sofisticado, ele oferece uma experiência de digitação confortável e silenciosa. A conectividade fácil com múltiplos dispositivos e uma bateria duradoura tornam-no essencial para profissionais em constante movimento.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-mx-keys-s.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-mx-keys-s.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-mx-keys-s.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-mx-keys-s.png",
        ],
        basePrice: 750,
        categoryId: keyboardsCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Logitech Pop Keys",
        slug: "logitech-pop-keys",
        description:
          "O Logitech Pop Keys é uma explosão de cores e estilo. Com teclas vibrantes e design divertido, ele adiciona um toque de personalidade à sua configuração. Este teclado sem fio é perfeito para quem deseja uma combinação de desempenho e estilo, permitindo uma digitação rápida e precisa com um visual alegre",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-pop-keys.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-pop-keys.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-pop-keys.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-pop-keys.png",
        ],
        basePrice: 440,
        categoryId: keyboardsCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Logitech MX Mechanical",
        slug: "logitech-mx-mechanical",
        description:
          "O Logitech MX Mechanical oferece a experiência de digitação tátil e responsiva que os entusiastas de teclados mecânicos adoram. Com switches mecânicos avançados, retroiluminação personalizável e conectividade multi-dispositivos, este teclado atende às demandas dos jogadores e profissionais que buscam uma resposta precisa.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-mx-mechanical.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-mx-mechanical.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-mx-mechanical.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-mx-mechanical.png",
        ],
        basePrice: 700,
        categoryId: keyboardsCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Epomaker TH80",
        slug: "epomaker-th80",
        description:
          "O Epomaker TH80 é um teclado mecânico de alto desempenho que combina switches Gateron e iluminação RGB deslumbrante. Projetado para entusiastas de teclados mecânicos, este teclado oferece uma experiência de digitação personalizável e responsiva que atende a diversos perfis de usuários, sejam eles gamers ou digitadores ávidos.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_epomaker-th80.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_epomaker-th80.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_epomaker-th80.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_epomaker-th80.png",
        ],
        basePrice: 500,
        categoryId: keyboardsCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Redragon Gamer Ashe",
        slug: "redragon-gamer-ashe",
        description:
          "O Redragon Gamer Ashe é um teclado mecânico feito sob medida para jogadores. Com switches Outemu, iluminação RGB vibrante e teclas programáveis, ele oferece um desempenho excepcional para gamers competitivos. Além disso, seu design durável e ergonômico garante que você tenha o controle total durante suas sessões de jogo.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_redragon-gamer-ashe.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_redragon-gamer-ashe.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_redragon-gamer-ashe.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_redragon-gamer-ashe.png",
        ],
        basePrice: 400,
        categoryId: keyboardsCategory.id,
        discountPercentage: 25, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: keyboards,
    });

    const headphonesCategory = await prisma.category.create({
      data: {
        name: "Fones",
        slug: "headphones",
        imageUrl: "https://fsw-store.s3.sa-east-1.amazonaws.com/headphones.png",
      },
    });

    const headphones = [
      {
        name: "Logitech Zone Vibe 100",
        slug: "logitech-zone-vibe-100",
        description:
          "Os headphones Logitech Zone Vibe 10 oferecem uma experiência de áudio imersiva com cancelamento ativo de ruído, ideal para profissionais que precisam de foco em ambientes movimentados. Com som de alta qualidade, conforto durante todo o dia e conectividade sem fio, eles são perfeitos para reuniões e concentração.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-vibe.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-vibe.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-vibe.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-vibe.png",
        ],
        basePrice: 750,
        categoryId: headphonesCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Logitech Pro X 2 Lightspeed",
        slug: "logitech-pro-x-2-lightspeed",
        description:
          "O Logitech Pro X 2 Lightspeed são headphones para jogos de alto desempenho, projetados para os gamers mais exigentes. Com som surround e sem fio Lightspeed, eles oferecem uma vantagem competitiva, enquanto os drivers Pro-G proporcionam qualidade de áudio excepcional. Além disso, o design confortável e as almofadas com espuma viscoelástica permitem longas sessões de jogo sem fadiga.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-lightspeed-phone.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-lightspeed-phone.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-lightspeed-phone.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-lightspeed-phone.png",
        ],
        basePrice: 1200,
        categoryId: headphonesCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Logitech Astro A30",
        slug: "logitech-astro-a30",
        description:
          "O Logitech Astro A30 oferece um equilíbrio notável entre qualidade de áudio e conforto, tornando-o ideal para gamers que procuram imersão e longas horas de jogo. Com som nítido, controle de áudio personalizável e uma construção durável, este headset atende às necessidades de jogadores casuais e entusiastas.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-astro-a30.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-astro-a30.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-astro-a30.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-astro-a30.png",
        ],
        basePrice: 1500,
        categoryId: headphonesCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Logitech Zone Wired Earbuds",
        slug: "logitech-zone-wired-earbuds",
        description:
          "Os Logitech Zone Wired Earbuds são ideais para profissionais em movimento. Com cancelamento de ruído passivo e qualidade de áudio cristalina, eles garantem a clareza em reuniões e chamadas telefônicas. O design discreto e os controles intuitivos os tornam uma escolha prática para quem trabalha em trânsito.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-earbuds.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-earbuds.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-earbuds.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-earbuds.png",
        ],
        basePrice: 550,
        categoryId: headphonesCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Hyperx Cloud Stinger 2",
        slug: "hyperx-cloud-stinger-2",
        description:
          "Os HyperX Cloud Stinger 2 são headphones acessíveis e prontos para jogos, projetados para proporcionar uma experiência de áudio envolvente e confortável. Com drivers direcionais de 50mm e controles intuitivos no fone de ouvido, eles oferecem imersão em jogos a um preço acessível.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_hyperx-stinger.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_hyperx-stinger.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_hyperx-stinger.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_hyperx-stinger.png",
        ],
        basePrice: 250,
        categoryId: headphonesCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Razer Kraken X",
        slug: "razer-kraken-x",
        description:
          "Os Razer Kraken X são headphones para jogos leves e confortáveis, que oferecem som imersivo e comunicação clara em equipe. Com design ergonômico, eles permitem longas horas de jogo, enquanto os drivers de 40mm garantem áudio poderoso. Estes headphones são uma excelente escolha para jogadores que valorizam o conforto e o desempenho.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_razer-kraken.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_razer-kraken.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_razer-kraken.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_razer-kraken.png",
        ],
        basePrice: 200,
        categoryId: headphonesCategory.id,
        discountPercentage: 0, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: headphones,
    });

    const mousepadsCategory = await prisma.category.create({
      data: {
        name: "Mousepads",
        slug: "mousepads",
        imageUrl: "https://fsw-store.s3.sa-east-1.amazonaws.com/mousepads.png",
      },
    });

    const mousepads = [
      {
        name: "Logitech Powerplay",
        slug: "logitech-powerplay",
        description:
          "O mousepad Logitech Powerplay é a escolha definitiva para os gamers que desejam uma experiência sem fio imersiva. Com a tecnologia de carregamento sem fio integrada, ele mantém o seu mouse sem fio Logitech sempre carregado enquanto você joga, eliminando a necessidade de fios e interrupções. A superfície de deslize suave e de baixa fricção oferece precisão inigualável, tornando-o essencial para os jogadores que buscam a vantagem competitiva.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-powerplay.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-powerplay.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-powerplay.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-powerplay.png",
        ],
        basePrice: 950,
        categoryId: mousepadsCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Logitech Desk Mat",
        slug: "logitech-desk-mat",
        description:
          "O Logitech Desk Mat é uma adição elegante e funcional para qualquer estação de trabalho. Este amplo mousepad oferece espaço de sobra para o seu mouse e teclado, mantendo sua área de trabalho organizada e protegida. Com sua superfície de alta qualidade, ele permite uma precisão excepcional, tornando-o uma escolha ideal para profissionais e gamers.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-desk-mat.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-desk-mat.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-desk-mat.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-desk-mat.png",
        ],
        basePrice: 150,
        categoryId: mousepadsCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Logitech G740",
        slug: "logitech-g740",
        description:
          "O mousepad Logitech G740 é projetado para entusiastas de jogos que buscam uma experiência de alta velocidade. Com uma superfície de deslize de microfibra de alta densidade, ele oferece controle excepcional e movimentos rápidos. Este mousepad é ideal para jogos de ritmo acelerado, proporcionando precisão e resposta rápida.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-g740.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-g740.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-g740.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-g740.png",
        ],
        basePrice: 200,
        categoryId: mousepadsCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Logitech Mousepad Studio Series",
        slug: "logitech-mousepad-studio-series",
        description:
          "O mousepad Logitech Studio Series é uma combinação de estilo e funcionalidade. Com uma superfície de deslize de alta qualidade e um design elegante, ele se adapta perfeitamente a qualquer estação de trabalho ou configuração de jogo. Este mousepad é a escolha perfeita para quem busca um equilíbrio entre estética e desempenho.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-studio-series.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-studio-series.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-studio-series.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-studio-series.png",
        ],
        basePrice: 250,
        categoryId: mousepadsCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Force One Skyhawk Dark",
        slug: "force-one-skyhawk-dark",
        description:
          "O Force One Skyhawk Dark é um mousepad de alto desempenho projetado para jogadores competitivos. Com sua superfície lisa e bordas reforçadas, ele oferece controle preciso e durabilidade. Ideal para jogos que exigem movimentos precisos, ele proporciona uma experiência confiável.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_force-dark.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_force-dark.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_force-dark.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_force-dark.png",
        ],
        basePrice: 300,
        categoryId: mousepadsCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Force One Skyhawk Snow",
        slug: "force-one-skyhawk-snow",
        description:
          "O Force One Skyhawk Snow é um mousepad de desempenho semelhante ao Skyhawk Dark, mas com um visual distinto em branco. Sua superfície lisa e durável oferece a mesma precisão e confiabilidade, enquanto adiciona um toque de elegância à sua configuração de jogo.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_force-snow.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_force-snow.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_force-snow.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_force-snow.png",
        ],
        basePrice: 300,
        categoryId: mousepadsCategory.id,
        discountPercentage: 5, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: mousepads,
    });

    const monitorsCategory = await prisma.category.create({
      data: {
        name: "Monitores",
        slug: "monitors",
        imageUrl:
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_dell-S2421HN.png",
      },
    });

    const monitors = [
      {
        name: "Dell S2421HN",
        slug: "dell-s2421hn",
        description:
          "O monitor Dell S2421HN é uma excelente opção para quem busca uma experiência visual de alta qualidade em uma tela de 23,8 polegadas. Com resolução Full HD, este monitor oferece imagens nítidas e cores vibrantes para trabalhar, assistir filmes ou navegar na web. A moldura ultrafina maximiza a área de visualização, proporcionando uma estética elegante e adequada para qualquer ambiente. Além disso, a tecnologia ComfortView da Dell reduz a emissão de luz azul potencialmente prejudicial, tornando-o uma escolha amigável para os olhos em longas sessões de uso. Com conectividade versátil e design elegante, o Dell S2421HN é uma opção versátil para todas as suas necessidades de visualização.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_dell-S2421HN.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_dell-S2421HN.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_dell-S2421HN.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_dell-S2421HN.png",
        ],
        basePrice: 1500,
        categoryId: monitorsCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Dell P2422H",
        slug: "dell-p2422h",
        description:
          " O Dell P2422H é um monitor projetado para produtividade, com uma tela de 24 polegadas e resolução Full HD. Com uma gama de recursos, incluindo ajuste de altura e rotação, ele oferece flexibilidade e conforto, tornando-o ideal para profissionais que precisam de várias telas para multitarefas.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_dell-P2422H.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_dell-P2422H.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_dell-P2422H.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_dell-P2422H.png",
        ],
        basePrice: 2000,
        categoryId: monitorsCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Dell P2723QE",
        slug: "dell-p2723qe",
        description:
          "O monitor Dell P2723QE é uma escolha impressionante para quem busca qualidade de imagem excepcional e alta resolução. Com uma tela de 27 polegadas e resolução 4K, oferece detalhes incríveis. Além disso, ele é equipado com recursos de conectividade avançados, tornando-o perfeito para criativos e profissionais.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_dell-P2723QE.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_dell-P2723QE.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_dell-P2723QE.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_dell-P2723QE.png",
        ],
        basePrice: 2500,
        categoryId: monitorsCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Dell S3422DWG",
        slug: "dell-s3422dwg",
        description:
          "O Dell S3422DWG é um monitor ultralargo de 34 polegadas com uma curva suave que oferece uma experiência imersiva e envolvente. Com resolução WQHD+ e cores vibrantes, é ideal para gamers e profissionais que desejam uma ampla área de trabalho.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_dell-S3422DWG.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_dell-S3422DWG.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_dell-S3422DWG.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_dell-S3422DWG.png",
        ],
        basePrice: 3200,
        categoryId: monitorsCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Dell S3222DGM",
        slug: "dell-s3222dgm",
        description:
          "O monitor Dell S3222DGM oferece uma tela de 32 polegadas com resolução Full HD e taxas de atualização rápidas para jogadores ávidos. Com um design elegante e bordas finas, ele proporciona uma experiência de jogo imersiva.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_dell-S3222DGM.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_dell-S3222DGM.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_dell-S3222DGM.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_dell-S3222DGM.png",
        ],
        basePrice: 3500,
        categoryId: monitorsCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Dell AW2524HF",
        slug: "dell-aw2524hf",
        description:
          "O Dell AW2524HF é um monitor gamer de alta velocidade de 24,5 polegadas com taxas de atualização rápidas e tecnologia AMD FreeSync Premium. Oferece uma experiência de jogo suave e responsiva para gamers competitivos.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_dell-AW2524HF.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_dell-AW2524HF.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_dell-AW2524HF.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_dell-AW2524HF.png",
        ],
        basePrice: 4200,
        categoryId: monitorsCategory.id,
        discountPercentage: 10, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: monitors,
    });

    const speakersCategory = await prisma.category.create({
      data: {
        name: "Speakers",
        slug: "speakers",
        imageUrl: "https://fsw-store.s3.sa-east-1.amazonaws.com/speakers.png",
      },
    });

    const speakers = [
      {
        name: "Logitech Surround Sound Z607",
        slug: "logitech-surround-sound-z607",
        description:
          "Os alto-falantes Logitech Surround Sound Z607 proporcionam uma experiência de áudio imersiva para entretenimento em casa. Com áudio surround e graves profundos, eles são ideais para filmes, jogos e música. Este sistema de alto-falantes oferece som envolvente e alta qualidade em um pacote compacto.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-surround-z607.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-surround-z607.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-surround-z607.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-surround-z607.png",
        ],
        basePrice: 1200,
        categoryId: speakersCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Logitech Dock",
        slug: "logitech-dock",
        description:
          "O Logitech Dock é uma solução prática e elegante para carregar e reproduzir música a partir de dispositivos móveis. Com capacidade de carregamento e conectividade Bluetooth, ele permite que você carregue seu dispositivo e desfrute de som de alta qualidade de forma conveniente.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-dock.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-dock.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-dock.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-dock.png",
        ],
        basePrice: 4500,
        categoryId: speakersCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Sony SA-Z9R Speakers",
        slug: "sony-sa-z9r-speakers",
        description:
          "Os alto-falantes Sony SA-Z9R oferecem áudio de alta resolução e qualidade de estúdio para aprimorar a experiência de entretenimento. Projetados para complementar os sistemas de som Sony, eles proporcionam som claro e imersivo para filmes e música.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_sony-SA-Z9R.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_sony-SA-Z9R.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_sony-SA-Z9R.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_sony-SA-Z9R.png",
        ],
        basePrice: 4000,
        categoryId: speakersCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Sony XB43 Extra Bass",
        slug: "sony-xb43-extra-bass",
        description:
          "O Sony XB43 Extra Bass é uma opção ideal para os amantes de música que desejam graves profundos e som poderoso em movimento. Com tecnologia Extra Bass e iluminação LED, este alto-falante Bluetooth é perfeito para festas e momentos de diversão ao ar livre.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_sony-extra-bass.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_sony-extra-bass.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_sony-extra-bass.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_sony-extra-bass.png",
        ],
        basePrice: 3200,
        categoryId: speakersCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Sony XB23 Extra Bass",
        slug: "sony-xb23-extra-bass",
        description:
          "O Sony XB23 Extra Bass é um alto-falante portátil que oferece um som impressionante com ênfase em graves profundos. Com sua portabilidade, resistência à água e longa duração da bateria, é uma escolha excelente para quem gosta de música em movimento.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_sony-XB23.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_sony-XB23.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_sony-XB23.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_sony-XB23.png",
        ],
        basePrice: 3500,
        categoryId: speakersCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Sony HT-S200F Soundbar",
        slug: "sony-ht-s200f-soundbar",
        description:
          "A Sony HT-S200F Soundbar é a solução perfeita para melhorar o áudio da sua TV. Com som nítido e diálogo claro, esta soundbar compacta proporciona uma experiência de audição aprimorada para filmes e programas de TV. Ela também inclui conectividade Bluetooth para streaming de música sem fio.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_sony-S200F.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_sony-S200F.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_sony-S200F.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_sony-S200F.png",
        ],
        basePrice: 2500,
        categoryId: speakersCategory.id,
        discountPercentage: 0, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: speakers,
    });

    console.log("Seed completed successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
