'use strict';


module.exports = {
    /* Check the House number and retrive the selected data  */ 
    checkdata : function (houseId, data)  {
        this.houseId = houseId;
        this.data = data;
        let list = [];
        if(data.hasOwnProperty(houseId)) {
            for ( let key in data) {
                if(key === houseId) {
                    for(let keyOne in data[key]) {
                        list.push(data[key][keyOne]);
                    }
                }
            }
            /* Data returned in the from of a table */
            let result = '<table style="color:#6B8E23;margin:auto;width:50%;font-size:1.5em;">';
            for( let el in list) {
                for (let elOne in list[el]) {
                    if(elOne=== 'name') {
                        result += "<tr style='color:#800000;text-transform: uppercase;'><td>" + elOne + "</td><td>" + list[el][elOne] + "</td></tr>";
                    } else {
                        result += "<tr><td>" + elOne + "</td><td>" + list[el][elOne] + "</td></tr>";
                    }
                }
            } 
            result += '</table>';
            return result;
        } else {
            let error = '<h3>House number not Present :' + houseId + '</h3>';
            return error ;
        }
    }   
}
