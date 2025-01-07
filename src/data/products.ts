import sadePogacaImage from "../images/sade_pogaca.jpg";
import susamliPogacaImage from "../images/susamli_pogaca.jpg";
import peynirliPogacaImage from "../images/peynirli_pogaca.jpg";
import patatesliPogacaImage from "../images/patatesli_pogaca.jpg";
import zeytinliPagacaImage from "../images/zeytinli_pogaca.jpeg";
import kasarliPogacaImage from  "../images/Susamli-Kasarli-Pogaca.jpg"
import zeytinliAcmaImage from "../images/zeytinli-acma.jpg";
import sadeAcmaImage from  "../images/sade_acma.jpeg";
import kiymaliBorekImage from "../images/kiymali_kol_boregi.jpg";
import patatesliBorekImage from "../images/patatesli-kol-boregi.jpg";
import peynirliBorekImage from  "../images/peynirli-kol-boregi.jpg";
import peynirliSuBorekImage from  "../images/peynirli-su-boregi.jpg";
import tulumba from "../images/tuluba.jpg";
import cevizliBaklava from "../images/cevizli_baklava.jpg";
import fistikliBaklava from "../images/fistikli_baklava.png";
import burmaBaklava from "../images/burma_baklava.jpg";
import sogukBaklava from "../images/soguk_baklava.jpg";
import bulbulyuvasi from "../images/bulbulyuvasi.jpg";
import kadayif from "../images/kadayif.jpg";

export const products = [
  {
    id: "sade-pogaca",
    category: "pogaca",
    name: "Sade Poğaça",
    description: "Yumuşacık dokusuyla klasik bir lezzet sunan sade poğaça, her lokmada nostaljik bir tat yaşatır.",
    price: "15,00 TL",
    imageUrl: sadePogacaImage
  },
  {
    id: "kasarli-pogaca",
    category: "pogaca",
    name: "Kaşarlı Poğaça",
    description: "İçi erimiş kaşarla dolu, dışı yumuşacık hamuruyla çay saatlerinizi şenlendirecek bir lezzet.",
    price: "17,00 TL",
    imageUrl: kasarliPogacaImage
  },
  {
    id: "peynirli-pogaca",
    category: "pogaca",
    name: "Peynirli Poğaça",
    description: "Lezzet dolu peynir harcıyla hazırlanan bu poğaça, kahvaltılarınızın vazgeçilmezi olacak.",
    price: "16,00 TL",
    imageUrl: peynirliPogacaImage
  },
  {
    id: "patatesli-pogaca",
    category: "pogaca",
    name: "Patatesli Poğaça",
    description: "Baharatlarla tatlandırılmış patates dolgusu ve yumuşacık hamuruyla doyurucu bir atıştırmalık.",
    price: "16,00 TL",
    imageUrl: patatesliPogacaImage
  },
  {
    id: "zeytinli-pogaca",
    category: "pogaca",
    name: "Zeytinli Poğaça",
    description: "Taze zeytinlerle hazırlanan bu özel tarif, her ısırıkta Akdeniz esintisi sunuyor.",
    price: "17,00 TL",
    imageUrl: zeytinliPagacaImage
  },
  {
    id: "susali-pogaca",
    category: "pogaca",
    name: "Susamlı Poğaça",
    description: "Bolca susamla kaplanmış dış yüzeyi ve yumuşacık içiyle fark yaratan bir lezzet.",
    price: "16,00 TL",
    imageUrl: susamliPogacaImage
  },
  {
    id: "sade-acma",
    category: "acma",
    name: "Sade Açma",
    description: "Yumuşacık, tel tel ayrılan klasik sade açma, günün her anında keyifle tüketilebilir.",
    price: "18,00 TL",
    imageUrl: sadeAcmaImage
  },
  {
    id: "zeytinli-acma",
    category: "acma",
    name: "Zeytinli Açma",
    description: "İçindeki taze zeytinlerle klasik açmaya farklı bir tat katan lezzetli bir seçenek.",
    price: "19,00 TL",
    imageUrl: zeytinliAcmaImage
  },
  {
    id: "kiymali-borek",
    category: "borek",
    name: "Kıymalı Kol Böreği",
    description: "Lezzetli kıymalı harcı ve incecik el açması hamuruyla sofralarınızı şenlendiren klasik bir tat.",
    price: "20,00 TL",
    imageUrl: kiymaliBorekImage
  },
  {
    id: "patatesli-borek",
    category: "borek",
    name: "Patatesli Kol Böreği",
    description: "Yumuşacık patates harcı ve çıtır çıtır hamuruyla çay saatlerinize özel bir lezzet.",
    price: "20,00 TL",
    imageUrl: patatesliBorekImage
  },
  {
    id: "peynirli-kol-borek",
    category: "borek",
    name: "Peynirli Kol Böreği",
    description: "İçindeki taze beyaz peynir ve maydanozun nefis uyumuyla damaklarda iz bırakan bir börek.",
    price: "20,00 TL",
    imageUrl: peynirliBorekImage
  },
  {
    id: "peynirli-su-borek",
    category: "borek",
    name: "Peynirli Su Böreği",
    description: "Kat kat açılmış yufkası ve bol peynirli iç harcıyla geleneksel bir su böreği lezzeti.",
    price: "22,00 TL",
    imageUrl: peynirliSuBorekImage
  },
  {
    id: 'fistikli-baklava',
    category: 'serbetli',
    name: "Fıstıklı Baklava",
    description: "Türk mutfağının geleneksel baklavası, taze fıstıklar ve ince yufkalarla hazırlanır.",
    price: "850,00 TL/kg",
    imageUrl: fistikliBaklava
  },
  {
    id: 'cevizli-baklava',
    category: 'serbetli',
    name: "Cevizli Baklava",
    description: "Klasik cevizli baklava, bal şerbeti ile tatlandırılmıştır.",
    price: "800,00 TL/kg",
    imageUrl: cevizliBaklava
  },
  {
    id: 'burma-baklava',
    category: 'serbetli',
    name: "Burma Baklava",
    description: "Şerbetli fıstıklı burma baklava, ince yufkalarla sarılmıştır.",
    price: "950,00 TL/kg",
    imageUrl: burmaBaklava
  },
  {
    id: 'soguk-baklava',
    category: 'sutlu',
    name: "Soğuk Baklava",
    description: "Soğuk servis edilen, fıstıklı ve şerbetli baklava.",
    price: "950,00 TL/kg",
    imageUrl: sogukBaklava
  },
  {
    id: 'kadayif',
    category: 'serbetli',
    name: "Kadayıf",
    description: "Kadayıfın incecik tel tel dokusu, bol fıstıklı iç harcıyla tatlanmış bir tatlı.",
    price: "850,00 TL/kg",
    imageUrl: kadayif
  },
  {
    id: 'bulbul-yuvasi',
    category: 'serbetli',
    name: "Bülbül Yuvası",
    description: "Şerbetli fıstıklı burma baklava, ince yufkalarla sarılmıştır.",
    price: "950,00 TL/kg",
    imageUrl: bulbulyuvasi
  },
  {
    id: 'tulumba',
    category: 'serbetli',
    name: "Tulumba",
    description: "Kızarmış hamur tatlısı, şerbetle tatlandırılmıştır.",
    price: "60,00 TL/10 adet",
    imageUrl: tulumba
  }
];
