const wrapper = document.querySelector(".wrapper")
const btn = document.querySelector(".nfs")
const langBtn = document.querySelector(".lang")

countries_data.sort((a,b)=> b.population - a.population)


let enKalabalik = countries_data.slice(0,11)


let dunyaninNufus = countries_data.reduce((toplamNufus,ulke) => toplamNufus + ulke.population,0)

//  console.log(dunyaninNufus)

btn.addEventListener("click",calistir)

function calistir(){
    wrapper.innerHTML = ""
    enKalabalik.forEach((ulke)=>{
       
        const kapsayici = document.createElement("div")
        kapsayici.classList.add("kapsayici")
        
        const p = document.createElement("p")
        p.textContent = ulke.name
        
        const grafik = document.createElement("div")
        grafik.className ="grafik"
        
        const oran = document.createElement("div")
        oran.className = "oran"
        
        grafik.append(oran)
        oran.style.width = `${Math.round((ulke.population/dunyaninNufus)*100)}%`
        
        const nufus = document.createElement("p")
        nufus.textContent = ulke.population
        
        
          kapsayici.append(p,grafik,nufus)
        
          wrapper.append(kapsayici)
        
        })
}


       let butunDiller = countries_data.reduce((acc,item)=> acc.concat(item.languages),[])
       
      let tekrarlar =  butunDiller.reduce((acc,item)=>{
          if(item in acc){
              acc[item]++
          }else{
            acc[item] = 1
          }
          return acc
       },{})

         
    let diziTekrarlar = Object.entries(tekrarlar)

   let ilkOnDil =   diziTekrarlar.sort((a,b) => b[1] - a[1]).slice(0,10)

   let toplamUlke =  countries_data.length
   console.log(ilkOnDil)

   
   langBtn.addEventListener("click", ikinciButon)

  function ikinciButon(){

    ilkOnDil.forEach(dil =>{
     
      const kapsayici = document.createElement("div")
      kapsayici.classList.add("kapsayici")
      const grafik = document.createElement("div")
      grafik.classList.add("grafik")
      const oran = document.createElement("div")
      oran.style.width = (dil[1]/toplamUlke)*100+"%"
      oran.classList.add("oran")

      const dilAdi = document.createElement("p")
      dilAdi.textContent = dil[0]
      const dilSayi = document.createElement("p")
      dilSayi.textContent = dil[1]
      grafik.append(oran)
      kapsayici.append(dilAdi,grafik,dilSayi)
      wrapper.append(kapsayici)
     
    })
   
  }

    