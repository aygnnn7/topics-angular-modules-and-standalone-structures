# Angular - My Notes 3
## Angular Module Structure
- Angular Module, bir uygulamayi moduler olarak parcalara ayirarak daha yonetebilir bir duruma getirmemizi saglayan bir yapilanmadir. 
- Uygulamadaki her bir module belirli isleme odaklanmis componentler, directive'ler, service'ler vs. barindirir ve bunlarin moduler olarak yonetilmesini ve konfigure edilmesini saglar.
- Angular mimarisi, temelde bu moduler yapilanma uzerine insa edilmistir.
- Angular module, ozunde `@NgModule` decorator'i ile isaretlenmis TypeScript sinifidir.

### NgModule Decorator'inin Anatomisi
```javascript
@NgModule({
  declrations:[
    ...
  ],
  imports:[
    ...
  ],
  providers:[
    ...
  ],
  exports:[
    ...
  ],
  entryComponents:[
    ...
  ],
  schemas:[
    ...
  ],
  bootstrap:[
    ...
  ],
  id:""
})
```

Declarations: Bu alanda, modul icersinde tanimlanacak olan `component`, `directive` ve `pipe` bildirimler gerceklestirilmektedir. 
**Not: Bir component birden fazla modul'e declare edilmis olamaz.**
Imports: Bu alanda, baska modullerin ice aktarimi saglanmaktedir. Baska bir modulu ice aktarmak, o modulun icinde tanimlanan component'lerin, service'lerin ve directive'lerin kullanilabilmesini saglayacaktir.
Providers: Bu alanda, modul duzeyinde dependency injection ile kullanilacak servislerin bildirimleri gerceklestirilmektedir.
Exports: Bu alanda, modul icerisindeki component'lerin directive'lerin ve pipe'larin disariya aktarilmasi gerceklestirilmektedir. Disariya aktarilan yapilar, baska bir module tarafindan bu modulun import edilmesi neticesinde kullaniabilirlik kazanacaktir.
 **Not: Bir component selector ozelligi uzerinden kullanilacaksa export edilmesi gerekmektedir.**
EntryComponents: Eskiden dinamik/programatik olarak yartilan component'lerin kullanilmasi icin var olan alandi. Artik bu amac icin kullanilmasina gerek kalmamistir.
Schemas: HTML sablonlarinda yapisal dogrulama saglamak icin kullanilan bir ozelliktir. Bu dogrulama ile HTML sablonlarinda kullanilan ogeleri veya ozel etiketlerin, belirli bir sablon yapisina veya standardina uygun olup olmadigi denetlenebilir. **Not: Pek sik kullanilan bir ozellik degildir.**
Id: Bu alan ile module benzersiz bir tanimlayici verilebilmektedir. Manuel bir sekilde verilmedigi taktirde Angular kendisi bir id atar. Geneldede bu is angulara birakilir.
Bootstrap: Bu alanda uygulamanin baslangic component'i belirtilmektedir. Uyuglama baslatilip ayaga kaldirildiginda bu component otomatik ekranda goruntulenir. **Not: Eger ki modul uygulamanin ana moduluyse bootstrap tanimlanmasi zorunludur.**

### Angular'da modul olusturmak
`ng g m [name]` seklinde CLI uzerinden modul olusturulabilir.

Angular'da olusturulmus bir modulun kullanilabilmesi icin ya ana module import edilmesi ya da ana module import edilmis olan bir baska modul tarafindan import edilmesi gerekmektedir.
![Module schema](md-images/modules-schema.png)

