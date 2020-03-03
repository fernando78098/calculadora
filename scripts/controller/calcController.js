class CalcController {
   constructor(){
      this._locale = 'pt-BR';     
      this._displayCalcEl = document.querySelector("#display"); 
      this._dateEl = document.querySelector("#data");
      this._timeEl = document.querySelector("#hora");
      
      this._currentDate;
      this.initialize();

    }

    initialize(){
      
      setInterval(()=>{

        this.displaydate = this.currentDate.toLocaleDateString(this._locale);
        this.displaytime = this.currentDate.toLocaleTimeString(this._locale);
      }, 1000);

      
    }
    get displaytime(){
      return this._timeEl.innerHTML;
    }

   set displaytime(valor){
      this._timeEl.innerHTML = valor;
    }
    get displaydate(){
      return this._dateEl.innerHTML;
    }

   set displaydate(valor){
      this._dateEl.innerHTML = valor;
    }

   
   get displayCalc(){
      return this._displayCalcEl.innerHTML;
    }

   set displayCalc(valor){
      this._displayCalcEl.innerHTML = valor;
    }

    get currentDate(){
      return new Date();
    }

   set currentDate(valor){
      this._currentDate = valor;
    }
}