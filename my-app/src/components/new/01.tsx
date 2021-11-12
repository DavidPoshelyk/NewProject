type TypeNom = {
    nnom: number
}
 export type  NewProjectType = {
    dom: DomType,
     cars: CarsType,
     shop: ShopType
 }
type DomType = {
    dom:Array<TypeStrit>
}

type  TypeStrit = {
    strit: string,
    nom: number
}

 type  TypeMarka = {
    marka: string,
     model: number
 }
  type CarsType = {
    cars: Array<TypeMarka>
  }
  type  ShopType = {
    shop8h: Array<string>,
      shop24h: Array<string>
  }
   type  TypeShop = {
    shop: ShopType
}
 export  let NewProject = {
    dom: [{strit: 'rovenskay', nom: 8},
         {strit: 'kovelskaya', nom: 10},
          {strit: 'pestraka', nom: 15}],
    cars: [ {marka: "Audi", model: 100}, {marka: "zil", model: 131}, {marka: "Yral", model: 4310}],
    shop: { shop8h: ["almi", "santa", "evroopt"], shop24h: ["sosedi", 'blabla']}
}

 export  function Push() {

    let a = NewProject.shop.shop24h.push('iyiy', 'hu', 'uygu')
     return a
     }