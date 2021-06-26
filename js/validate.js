function validate(){
    this.KiemTraRong = function(value,selectorError,name){
        if(value.trim() === ''){
            document.querySelector(selectorError).innerHTML = name + ' không được trống !!';
            return false;
        }
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
    this.kiemTraTatCaKyTu = function (value,selectorError,name) {
        var regexLetter = /^[A-Z a-z]+$/;
        if(regexLetter.test(value)){//Chuỗi phù hợp định dạng
            document.querySelector(selectorError).innerHTML = '';
            return true;
        }
        document.querySelector(selectorError).innerHTML = name + ' phải nhập chữ cái !';
        return false;
    }

    this.kiemTraTatCaSo = function  (value,selectorError,name)  {
        var regexNumber = /^[0-9]+$/;
        if(regexNumber.test(value)) {
            document.querySelector(selectorError).innerHTML = '';
            return true;
        }
        document.querySelector(selectorError).innerHTML = name + ' phải nhập số!';
        return false;
    }
    this.kiemTraGiaTri = function (value,selectorError,minValue,maxValue,name,donvi) {
        if(value < minValue || value > maxValue) {

            document.querySelector(selectorError).innerHTML = `${name} từ ${minValue} - ${maxValue} ${donvi}`;
            return false;
        }

        document.querySelector(selectorError).innerHTML = '';
        return true;
    }

    this.kiemTraDoDai = function (value,selectorError,minLength,maxLength,name) {
        if(value.trim().length < minLength || value.trim().length > maxLength) {
            document.querySelector(selectorError).innerHTML = `${name} từ ${minLength} - ${maxLength} ký số`;
            return false;
        }
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }

    this.kiemTraTrungID = function(value,selectorError,listID,name){
        for(var index =0; index < listID.length; index++){
            if(Number(value) === listID[index]){
                document.querySelector(selectorError).innerHTML = `${name} đã tồn tại`
                return false;
            }
        }
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
}